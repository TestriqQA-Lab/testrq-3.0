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

function markdownToPortableText(markdown: string) {
    const blocks: any[] = [];
    const lines = markdown.split('\n');
    let currentBlock: any = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (!line) {
            currentBlock = null;
            continue;
        }

        if (line.startsWith('### ')) {
            blocks.push({
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: line.replace('### ', ''), marks: [] }],
                markDefs: [],
            });
            currentBlock = null;
        } else if (line.startsWith('## ')) {
            blocks.push({
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: line.replace('## ', ''), marks: [] }],
                markDefs: [],
            });
            currentBlock = null;
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
            blocks.push({
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                level: 1,
                children: [{ _type: 'span', text: line.substring(2), marks: [] }],
                markDefs: [],
            });
            currentBlock = null;
        } else {
            if (!currentBlock) {
                currentBlock = {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: line, marks: [] }],
                    markDefs: [],
                };
                blocks.push(currentBlock);
            } else {
                currentBlock.children[0].text += '\n' + line;
            }
        }
    }

    return blocks.length > 0 ? blocks : [{
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: markdown, marks: [] }],
        markDefs: [],
    }];
}

async function patchDescriptions() {
    try {
        console.log('Fetching job postings...');
        const jobs = await client.fetch(`*[_type == "jobPosting"]`);
        console.log(`Found ${jobs.length} job postings.`);

        let patchedCount = 0;

        for (const job of jobs) {
            if (typeof job.description === 'string') {
                console.log(`Patching job: ${job.title}...`);

                const portableText = markdownToPortableText(job.description);

                await client
                    .patch(job._id)
                    .set({ description: portableText })
                    .commit();

                patchedCount++;
                console.log(`✅ Patched ${job.title}`);
            } else {
                console.log(`⏭️ Skipped ${job.title} (already converted)`);
            }
        }

        console.log(`\n🎉 Successfully converted ${patchedCount} job descriptions to Portable Text!`);
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

patchDescriptions();
