/**
 * Step 2: Migrate case studies from JSON export to Sanity
 * 
 * Prerequisites:
 *   1. Run: npx tsx scripts/export-casestudies-json.ts
 *   2. Then: node scripts/migrate-casestudies-to-sanity.mjs
 */
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const SANITY_TOKEN = process.env.SANITY_API_TOKEN;

if (!SANITY_PROJECT_ID || !SANITY_TOKEN) {
    console.error('❌ Error: Missing SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local');
    process.exit(1);
}

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: '2024-01-01',
    token: SANITY_TOKEN,
    useCdn: false,
});

function generateKey() {
    return Math.random().toString(36).substring(2, 10);
}

function transformCaseStudy(cs) {
    return {
        _type: 'caseStudy',
        _id: `caseStudy-${cs.slug}`,
        slug: { _type: 'slug', current: cs.slug },
        title: cs.title,
        client: cs.client,
        industry: cs.industry,
        duration: cs.duration || '',
        description: cs.description,
        image: cs.image || '',

        seoMetadata: {
            title: cs.metadata?.title || '',
            description: cs.metadata?.description || '',
            keywords: cs.metadata?.keywords || [],
            canonicalUrl: cs.metadata?.alternates?.canonical || `https://www.testriq.com/${cs.slug}`,
            openGraph: {
                title: cs.metadata?.openGraph?.title || '',
                description: cs.metadata?.openGraph?.description || '',
                imageUrl: cs.metadata?.openGraph?.images?.[0]?.url || '',
                imageAlt: cs.metadata?.openGraph?.images?.[0]?.alt || '',
            },
            twitter: {
                title: cs.metadata?.twitter?.title || '',
                description: cs.metadata?.twitter?.description || '',
                imageUrl: cs.metadata?.twitter?.images?.[0] || '',
            },
        },

        overview: {
            clientBackground: cs.overview?.clientBackground || '',
            projectScope: cs.overview?.projectScope || '',
            teamSize: cs.overview?.teamSize || '',
            timeline: cs.overview?.timeline || '',
        },

        challenge: {
            title: cs.challenge?.title || '',
            description: cs.challenge?.description || '',
            keyIssues: cs.challenge?.keyIssues || [],
            businessImpact: cs.challenge?.businessImpact || '',
        },

        solution: {
            title: cs.solution?.title || '',
            description: cs.solution?.description || '',
            approach: cs.solution?.approach || [],
            methodology: cs.solution?.methodology || '',
            keyStrategies: cs.solution?.keyStrategies || [],
        },

        results: {
            bugReduction: cs.results?.bugReduction || '',
            performanceImprovement: cs.results?.performanceImprovement || '',
            roi: cs.results?.roi || '',
            additionalMetrics: (cs.results?.additionalMetrics || []).map(m => ({
                _key: generateKey(),
                label: m.label || '',
                value: m.value || '',
            })),
        },

        technologies: (cs.technologies || []).map(t => ({
            _key: generateKey(),
            name: t.name || '',
            link: t.link || '#',
        })),

        testimonial: {
            quote: cs.testimonial?.quote || '',
            author: cs.testimonial?.author || '',
            role: cs.testimonial?.role || '',
            company: cs.testimonial?.company || '',
            rating: cs.testimonial?.rating || 5,
        },

        timeline: (cs.timeline || []).map(t => ({
            _key: generateKey(),
            phase: t.phase || '',
            duration: t.duration || '',
            activities: t.activities || [],
        })),

        keyTakeaways: cs.keyTakeaways || [],
        nextSteps: cs.nextSteps || [],
    };
}

async function migrate() {
    // Read exported JSON
    const jsonPath = join(process.cwd(), 'tmp', 'casestudies-export.json');
    let caseStudies;

    try {
        const raw = readFileSync(jsonPath, 'utf-8');
        caseStudies = JSON.parse(raw);
    } catch (err) {
        console.error(`❌ Could not read ${jsonPath}.`);
        console.error('   Run first: npx tsx scripts/export-casestudies-json.ts');
        process.exit(1);
    }

    console.log(`📋 Found ${caseStudies.length} case studies to migrate.\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const cs of caseStudies) {
        try {
            const doc = transformCaseStudy(cs);
            await client.createOrReplace(doc);
            successCount++;
            console.log(`  ✅ ${successCount}/${caseStudies.length} — ${cs.title} (${cs.slug})`);
        } catch (err) {
            errorCount++;
            console.error(`  ❌ Failed: ${cs.title} — ${err.message}`);
        }
    }

    console.log(`\n🎉 Migration complete! ${successCount} succeeded, ${errorCount} failed.`);
}

migrate().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
