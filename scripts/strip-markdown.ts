import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

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

function cleanText(text: string): string {
    // Remove ### or ## at the beginning of lines
    let cleaned = text.replace(/^#{1,6}\s*/gm, '');

    // Remove --- or *** horizontal rules
    cleaned = cleaned.replace(/^(-{3,}|\*{3,})$/gm, '');

    // Remove **bold** wrapping
    cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '$1');

    // Remove *italic* wrapping
    cleaned = cleaned.replace(/\*(.*?)\*/g, '$1');

    // Remove - or * bullet points (portable text handles list styles)
    cleaned = cleaned.replace(/^[\-\*]\s+/gm, '');

    return cleaned.trim();
}

async function stripMarkdownFromBlocks() {
    try {
        console.log('Fetching job postings...');
        const jobs = await client.fetch(`*[_type == "jobPosting"]`);
        console.log(`Found ${jobs.length} job postings to clean.`);

        let patchedCount = 0;

        for (const job of jobs) {
            let needsPatch = false;

            if (Array.isArray(job.description)) {
                const newDescription = job.description.map((block: any) => {
                    // Only process normal text blocks
                    if (block._type === 'block' && Array.isArray(block.children)) {
                        let blockModified = false;

                        const newChildren = block.children.map((child: any) => {
                            if (child._type === 'span' && typeof child.text === 'string') {
                                const originalText = child.text;
                                const newText = cleanText(originalText);

                                // If block just became empty because it was only '---', mark for removal or keep empty
                                if (originalText !== newText) {
                                    blockModified = true;
                                    return { ...child, text: newText };
                                }
                            }
                            return child;
                        });

                        if (blockModified) {
                            needsPatch = true;
                            return { ...block, children: newChildren };
                        }
                    }
                    return block;
                }).filter((block: any) => {
                    // Filter out blocks that became completely empty
                    if (block._type === 'block' && block.children.length === 1 && block.children[0].text === '') {
                        needsPatch = true;
                        return false;
                    }
                    return true;
                });

                if (needsPatch) {
                    console.log(`Patching job: ${job.title}...`);
                    await client.patch(job._id).set({ description: newDescription }).commit();
                    patchedCount++;
                }
            }
        }

        console.log(`\n🎉 Successfully stripped markdown from ${patchedCount} job descriptions!`);
    } catch (error) {
        console.error('Cleanup failed:', error);
    }
}

stripMarkdownFromBlocks();
