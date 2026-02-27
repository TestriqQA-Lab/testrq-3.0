
import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
});

// Post Title: Advanced Web App Performance Testing
// Post ID from previous analysis: post-advanced-web-app-performance-testing-techniques-for-load-stress-scalability
// (Double check ID if possible, but slug-based ID is standard for some setups, otherwise query by title)

async function main() {
    // Hardcoded token for this session if env var is missing/not working in this context
    // CAUTION: In a real env, use process.env.SANITY_EDITOR_TOKEN
    // For this environment, I'll rely on the client config or assume I need to guide user to provide it if write fails.
    // Actually, I should check if I have a token.

    // Check for tokens in the project to see how they are loaded.
    // Usually they are in .env.local

    const targetTitle = "Advanced Web App Performance Testing: Techniques for Load, Stress & Scalability";

    console.log(`Searching for post: "${targetTitle}"...`);

    const query = `*[_type == "post" && title == "${targetTitle}"][0] { _id, title, seo }`;
    const post = await client.fetch(query);

    if (!post) {
        console.error("Post not found!");
        return;
    }

    console.log("Found post:", post._id);
    console.log("Current SEO:", post.seo);

    console.log("Patching post to unset SEO fields...");

    // We need a write token.
    if (!process.env.SANITY_API_TOKEN) {
        console.error("SANITY_API_TOKEN not found in environment. Please run with SANITY_API_TOKEN=... npx tsx ...");
        // For the sake of this agent, I will assume the user has the token or I can try to find it.
        // I will write the script to expect the token in env.
    }

    try {
        const result = await client.patch(post._id)
            .unset(['seo']) // Completely remove the SEO object so it regenerates or falls back
            .commit();

        console.log("Update successful!");
        console.log("New revision:", result._rev);
    } catch (err) {
        console.error("Update failed:", err);
    }
}

main();
