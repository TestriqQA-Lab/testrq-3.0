/**
 * F-60.1 — Case Study SEO field migration script
 *
 * Converts existing case study documents from the legacy SEO shape
 *   {
 *     seoMetadata: {
 *       title, description, keywords: string[], canonicalUrl,
 *       openGraph: { title, description, imageUrl, imageAlt },
 *       twitter: { title, description, imageUrl }
 *     }
 *   }
 * to the new shape with shared `seoFields` for the base + sibling
 * `openGraph` / `twitter` fields on caseStudy:
 *   {
 *     seo: { title, description, keywords: string[], canonicalUrl, noindex },
 *     openGraph: { title, description, imageUrl, imageAlt },
 *     twitter: { title, description, imageUrl }
 *   }
 *
 * The adapter (sanity-data-adapter.ts) reads BOTH shapes during the transition
 * window, so running this script does NOT cause downtime — case study pages
 * keep rendering correctly regardless of which shape is in the dataset.
 *
 * Usage:
 *   # dry-run (default — lists what would change without writing):
 *   SANITY_API_TOKEN=<write-token> npx tsx src/scripts/migrate-casestudy-seo-to-seoFields.ts
 *
 *   # execute (actually patches documents):
 *   SANITY_API_TOKEN=<write-token> npx tsx src/scripts/migrate-casestudy-seo-to-seoFields.ts --execute
 *
 * Token must have Editor or higher scope. There are typically few case study
 * documents so the script processes them serially.
 *
 * After running this successfully, the `seoMetadata.*` fallbacks in
 * sanity-data-adapter.ts can be removed in a cleanup PR.
 */

import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DRY_RUN = !process.argv.includes('--execute');

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

interface LegacyCaseStudy {
    _id: string;
    _rev: string;
    title?: string;
    seoMetadata?: {
        title?: string;
        description?: string;
        keywords?: string[];
        canonicalUrl?: string;
        openGraph?: {
            title?: string;
            description?: string;
            imageUrl?: string;
            imageAlt?: string;
        };
        twitter?: {
            title?: string;
            description?: string;
            imageUrl?: string;
        };
    };
    // Already-migrated case studies
    seo?: { title?: string; description?: string };
    openGraph?: { title?: string };
    twitter?: { title?: string };
}

async function main() {
    console.log(`F-60.1 Case Study SEO Migration — mode: ${DRY_RUN ? 'DRY-RUN' : 'EXECUTE'}`);
    if (!process.env.SANITY_API_TOKEN) {
        console.error('ERROR: SANITY_API_TOKEN env var not set. Aborting.');
        process.exit(1);
    }

    // Pull every case study that still has a `seoMetadata` field.
    const query = `*[_type == "caseStudy" && defined(seoMetadata)] {
      _id, _rev, title, seoMetadata, seo, openGraph, twitter
    }`;

    const studies: LegacyCaseStudy[] = await client.fetch(query);
    console.log(`Found ${studies.length} case studies with legacy seoMetadata field to migrate.\n`);

    if (studies.length === 0) {
        console.log('Nothing to do. Dataset is already on the new shape.');
        return;
    }

    let migrated = 0;
    let skipped = 0;
    let failed = 0;

    for (const cs of studies) {
        const sm = cs.seoMetadata || {};

        // If new-shape fields are already populated, skip — the document was
        // already migrated and the next adapter-fallback cleanup PR will drop
        // the seoMetadata read path.
        const alreadyMigrated =
            (cs.seo && (cs.seo.title || cs.seo.description)) ||
            (cs.openGraph && cs.openGraph.title) ||
            (cs.twitter && cs.twitter.title);
        if (alreadyMigrated) {
            console.log(`  SKIP ${cs._id} (already on new shape)`);
            skipped++;
            continue;
        }

        const seoPatch: Record<string, unknown> = {};
        if (sm.title) seoPatch.title = sm.title;
        if (sm.description) seoPatch.description = sm.description;
        if (Array.isArray(sm.keywords) && sm.keywords.length > 0) seoPatch.keywords = sm.keywords;
        if (sm.canonicalUrl) seoPatch.canonicalUrl = sm.canonicalUrl;

        const ogPatch = sm.openGraph
            ? Object.fromEntries(
                  Object.entries(sm.openGraph).filter(([, v]) => v != null && v !== ''),
              )
            : null;

        const twPatch = sm.twitter
            ? Object.fromEntries(
                  Object.entries(sm.twitter).filter(([, v]) => v != null && v !== ''),
              )
            : null;

        const setBlock: Record<string, unknown> = {};
        if (Object.keys(seoPatch).length > 0) setBlock.seo = seoPatch;
        if (ogPatch && Object.keys(ogPatch).length > 0) setBlock.openGraph = ogPatch;
        if (twPatch && Object.keys(twPatch).length > 0) setBlock.twitter = twPatch;

        if (Object.keys(setBlock).length === 0) {
            console.log(`  SKIP ${cs._id} (empty seoMetadata — nothing to migrate)`);
            skipped++;
            continue;
        }

        if (DRY_RUN) {
            console.log(`  WOULD MIGRATE ${cs._id} (${cs.title?.substring(0, 50) || '<no title>'}...)`);
            console.log(`    set:`, JSON.stringify(setBlock, null, 2));
            console.log(`    unset: ['seoMetadata']`);
            migrated++;
            continue;
        }

        try {
            await client
                .patch(cs._id)
                .set(setBlock)
                .unset(['seoMetadata'])
                .commit({ visibility: 'async' });
            console.log(`  ✓ ${cs._id}`);
            migrated++;
        } catch (err) {
            console.error(`  ✗ ${cs._id}:`, err instanceof Error ? err.message : err);
            failed++;
        }
    }

    console.log(`\n--- Summary ---`);
    console.log(`Total candidates: ${studies.length}`);
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
