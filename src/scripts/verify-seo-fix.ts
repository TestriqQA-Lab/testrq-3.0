
import { createClient } from 'next-sanity';

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});

async function main() {
    console.log("Verifying SEO Fix for 'Advanced Web App Performance Testing'...");

    // targeted query
    const targetTitle = "Advanced Web App Performance Testing: Techniques for Load, Stress & Scalability";
    const query = `*[_type == "post" && title == "${targetTitle}"][0] { _id, title, seo }`;

    try {
        const post = await client.fetch(query);

        if (!post) {
            console.error("Post NOT FOUND! Something is wrong.");
            return;
        }

        console.log("Found Post:", post.title);

        if (!post.seo) {
            console.log("SUCCESS: 'seo' field is missing/undefined as expected.");
        } else {
            console.log("FAILURE: 'seo' field still exists:", JSON.stringify(post.seo, null, 2));
            if (!post.seo.metaDescription) {
                console.log("But metaDescription is empty/null, which is good.");
            }
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

main();
