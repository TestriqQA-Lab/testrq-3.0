import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN || '';

if (!projectId || !token) {
    console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local');
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    useCdn: false,
    apiVersion: '2024-02-23',
    token,
});

async function cleanJobPostings() {
    try {
        console.log('Fetching job postings...');
        const jobs = await client.fetch(`*[_type == "jobPosting"]`);
        console.log(`Found ${jobs.length} job postings to check.`);

        let patchedCount = 0;

        for (const job of jobs) {
            const patch = client.patch(job._id);
            let needsPatch = false;

            // 1. Unset deprecated 'order' field
            if (job.order !== undefined) {
                console.log(`  - Unsetting deprecated 'order' field`);
                patch.unset(['order']);
                needsPatch = true;
            }

            // 2. Fix missing _key in PortableText blocks (description)
            if (Array.isArray(job.description)) {
                // Check if any block is missing a _key
                const hasMissingKeys = job.description.some((block: any) => !block._key);

                if (hasMissingKeys) {
                    console.log(`  - Adding missing _key properties to description blocks`);
                    const newDescription = job.description.map((block: any) => {
                        if (!block._key) {
                            // Portable text keys must be string, usually random hash
                            return { ...block, _key: crypto.randomBytes(8).toString('hex') };
                        }
                        return block;
                    });

                    patch.set({ description: newDescription });
                    needsPatch = true;
                }
            }

            // 3. Optional: Skills array missing keys inside blockContent if that somehow happened 
            // array of strings in sanity also needs keys under the hood, but the client usually adds them.
            // If the user gets `skills` missing keys errors, we can patch that too, but the user only mentioned description.

            if (needsPatch) {
                console.log(`Patching job: ${job.title}...`);
                await patch.commit();
                patchedCount++;
                console.log(`✅ Successfully patched ${job.title}\n`);
            } else {
                // console.log(`⏭️ Skipped ${job.title} (already clean)`);
            }
        }

        console.log(`🎉 Successfully cleaned up ${patchedCount} job postings! Refresh your Sanity Studio.`);
    } catch (error) {
        console.error('Cleanup failed:', error);
    }
}

cleanJobPostings();
