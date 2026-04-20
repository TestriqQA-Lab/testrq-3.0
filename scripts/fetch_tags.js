const { createClient } = require('next-sanity');

// Mock or read env? 
// We'll try to require the client definition if it's simple, or just create one using env vars if available in process.
// Assuming we can run this with `dotenv` or similar if needed.
// For now, let's try to just verify if we can access the sanity client code.

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pyh6g066'; // taken from typical sanity config if visible, or fallback
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-05-03';

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});

async function main() {
    try {
        const tags = await client.fetch(`*[_type == "tag"]{slug}`);
        console.log("Valid Tags:", tags.map(t => t.slug.current).join(', '));
    } catch (err) {
        console.error("Error fetching tags:", err.message);
    }
}

main();
