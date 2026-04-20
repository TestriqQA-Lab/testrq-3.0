import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const SANITY_TOKEN = process.env.SANITY_API_TOKEN;

if (!SANITY_PROJECT_ID || !SANITY_TOKEN) {
    console.error('Error: Missing SANITY_PROJECT_ID or SANITY_API_TOKEN');
    process.exit(1);
}

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: '2024-01-01',
    token: SANITY_TOKEN,
    useCdn: false,
});

async function debugPost() {
    const slug = 'manual-vs-automation-testing-guide'; // Default or allow arg
    console.log(`Fetching ${slug}...`);
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    const post = await client.fetch(query, { slug });

    if (!post) {
        console.log('Post not found (sanity).');
        return;
    }

    console.log('--- Post Found ---');
    console.log('ID:', post._id);
    console.log('Title:', post.title);

    if (typeof post.body === 'string') {
        console.log('Body is STRING (Legacy/Placeholder):');
        console.log(post.body.substring(0, 100) + '...');
    } else if (Array.isArray(post.body)) {
        console.log(`Body is ARRAY (Portable Text) with ${post.body.length} blocks.`);
        console.log('First 5 blocks:');
        post.body.slice(0, 5).forEach((b, i) => {
            console.log(`[${i}] Type: ${b._type}, Style: ${b.style || 'N/A'}`);
            if (b.children) {
                console.log('   Text:', b.children.map(c => c.text).join(' ').substring(0, 50));
            }
            if (b._type === 'customTable') {
                console.log('   Table Rows:', b.rows?.length);
            }
        });

        // Search for CSS-like content
        const cssBlock = post.body.find(b => b.children && b.children.some(c => c.text && c.text.includes('table {')));
        if (cssBlock) {
            console.log('!!! FOUND DATA LEAK (CSS) !!!');
            console.log(JSON.stringify(cssBlock, null, 2));
        }

    } else {
        console.log('Body is:', typeof post.body, post.body);
    }

    console.log('--- BodyHtml ---');
    if (post.bodyHtml) {
        console.log('bodyHtml exists. Length:', post.bodyHtml.length);
    } else {
        console.log('bodyHtml is missing.');
    }
}

debugPost();
