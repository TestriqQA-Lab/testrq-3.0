/**
 * F-60.1 — Post SEO field migration script
 *
 * Converts existing blog post documents from the legacy SEO field shape
 *   { seo: { metaTitle, metaDescription, metaKeywords: string-csv } }
 * to the shared `seoFields` shape
 *   { seo: { title, description, keywords: string[], canonicalUrl, noindex } }
 *
 * The adapter (sanity-data-adapter.ts) reads BOTH shapes during the transition
 * window, so running this script does NOT cause downtime — pages keep rendering
 * the moment-they-were-published SEO regardless of which shape is in the dataset.
 *
 * Usage:
 *   # dry-run (default — lists what would change without writing):
 *   SANITY_API_TOKEN=<write-token> npx tsx src/scripts/migrate-post-seo-to-seoFields.ts
 *
 *   # execute (actually patches documents):
 *   SANITY_API_TOKEN=<write-token> npx tsx src/scripts/migrate-post-seo-to-seoFields.ts --execute
 *
 * The token must have Editor or higher scope. The script processes posts in
 * batches of 50 to stay well under Sanity's mutation rate limits.
 *
 * After running this successfully across the dataset, the legacy fallbacks in
 * sanity-data-adapter.ts (`|| sanityPost.seo?.metaTitle` etc.) can be removed
 * in a cleanup PR.
 */

import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DRY_RUN = !process.argv.includes('--execute');
const BATCH_SIZE = 50;

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

interface LegacyPostSeo {
    _id: string;
    _rev: string;
    title?: string;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string;
        // New-shape fields present? Means already migrated.
        title?: string;
        description?: string;
        keywords?: string[];
    };
}

function splitKeywords(input: string | undefined): string[] {
    if (!input || typeof input !== 'string') return [];
    return input
        .split(',')
        .map((k) => k.trim())
        .filter((k) => k.length > 0);
}

async function main() {
    console.log(`F-60.1 Post SEO Migration — mode: ${DRY_RUN ? 'DRY-RUN' : 'EXECUTE'}`);
    if (!process.env.SANITY_API_TOKEN) {
        console.error('ERROR: SANITY_API_TOKEN env var not set. Aborting.');
        process.exit(1);
    }

    // Fetch only posts whose seo object contains the LEGACY field names. We
    // skip docs that already only have the new shape, plus docs with no
    // seo object at all.
    const query = `*[_type == "post" && (defined(seo.metaTitle) || defined(seo.metaDescription) || defined(seo.metaKeywords))] {
      _id, _rev, title, seo
    }`;

    const posts: LegacyPostSeo[] = await client.fetch(query);
    console.log(`Found ${posts.length} posts with legacy SEO fields to migrate.\n`);

    if (posts.length === 0) {
        console.log('Nothing to do. Dataset is already on the new shape.');
        return;
    }

    let migrated = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < posts.length; i += BATCH_SIZE) {
        const batch = posts.slice(i, i + BATCH_SIZE);
        console.log(`\n--- Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(posts.length / BATCH_SIZE)} (${batch.length} posts) ---`);

        for (const post of batch) {
            const oldSeo = post.seo || {};
            const newTitle = oldSeo.title ?? oldSeo.metaTitle ?? '';
            const newDescription = oldSeo.description ?? oldSeo.metaDescription ?? '';
            const newKeywords = Array.isArray(oldSeo.keywords) && oldSeo.keywords.length > 0
                ? oldSeo.keywords
                : splitKeywords(oldSeo.metaKeywords);

            // If new-shape fields are already populated and the legacy fields
            // are absent (defensive), skip without touching.
            const hasNewShape =
                (oldSeo.title || oldSeo.description || (Array.isArray(oldSeo.keywords) && oldSeo.keywords.length > 0));
            const hasLegacy = oldSeo.metaTitle || oldSeo.metaDescription || oldSeo.metaKeywords;
            if (hasNewShape && !hasLegacy) {
                console.log(`  SKIP ${post._id} (already migrated)`);
                skipped++;
                continue;
            }

            const patchSet: Record<string, unknown> = {};
            if (newTitle) patchSet['seo.title'] = newTitle;
            if (newDescription) patchSet['seo.description'] = newDescription;
            if (newKeywords.length > 0) patchSet['seo.keywords'] = newKeywords;

            const unsetFields = [
                'seo.metaTitle',
                'seo.metaDescription',
                'seo.metaKeywords',
            ];

            if (DRY_RUN) {
                console.log(`  WOULD MIGRATE ${post._id} (${post.title?.substring(0, 50) || '<no title>'}...)`);
                console.log(`    set:`, patchSet);
                console.log(`    unset:`, unsetFields);
                migrated++;
                continue;
            }

            try {
                await client
                    .patch(post._id)
                    .set(patchSet)
                    .unset(unsetFields)
                    .commit({ visibility: 'async' });
                console.log(`  ✓ ${post._id}`);
                migrated++;
            } catch (err) {
                console.error(`  ✗ ${post._id}:`, err instanceof Error ? err.message : err);
                failed++;
            }
        }
    }

    console.log(`\n--- Summary ---`);
    console.log(`Total candidates: ${posts.length}`);
    console.log(`Migrated:         ${migrated}${DRY_RUN ? ' (would migrate)' : ''}`);
    console.log(`Skipped:          ${skipped}`);
    console.log(`Failed:           ${failed}`);
    if (DRY_RUN) {
        console.log(`\nRe-run with --execute to apply the changes.`);
    }
}

main().catch((err) => {
    console.error('Fatal:', err);
    process.exit(1);
});
