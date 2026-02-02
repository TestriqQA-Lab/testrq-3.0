import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';
import fetch from 'node-fetch';

// CONFIGURATION
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const SANITY_TOKEN = process.env.SANITY_API_TOKEN;
const WORDPRESS_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'https://cms.testriq.com/graphql';

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

async function wpGql(query, variables = {}) {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });
    const json = await response.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return json.data;
}

async function updatePostContent() {
    console.log('Fetching Posts from WordPress...');
    // Fetch all posts to ensure we get the right one, or filter by slug if passed as arg
    // For now, let's just fetch recent posts or specific ones that are missing content.
    // The user showed "manual-vs-automation-testing-guide".

    const postsQuery = `
      query GetPosts {
        posts(first: 100) {
          nodes {
            slug
            content
            title
          }
        }
      }
    `;

    const data = await wpGql(postsQuery);
    const wpPosts = data.posts.nodes;

    console.log(`Found ${wpPosts.length} posts in WordPress.`);

    for (const post of wpPosts) {
        // Check if this post exists in Sanity
        const sanitySlug = post.slug;
        const query = `*[_type == "post" && slug.current == $slug][0]._id`;
        const sanityId = await client.fetch(query, { slug: sanitySlug });

        if (sanityId) {
            console.log(`Updating content for: ${post.title} (${sanitySlug})`);

            // Update the body with the raw HTML string
            // We store it simply as a string in the body field.
            // Our adapter will handle it.
            if (post.content) {
                try {
                    // Clean content: remove JSON-LD scripts
                    const cleanedContent = post.content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

                    await client.patch(sanityId)
                        .set({ bodyHtml: cleanedContent }) // Use bodyHtml for raw string
                        .unset(['body']) // Clear the invalid body field
                        .commit();
                    console.log(`✅ Updated ${sanitySlug}`);
                } catch (err) {
                    console.error(`❌ Failed to update ${sanitySlug}:`, err.message);
                }
            } else {
                console.log(`⚠️ No content found for ${sanitySlug} in WP.`);
            }
        } else {
            // console.log(`Skipping ${sanitySlug} (not found in Sanity)`);
        }
    }
    console.log('Update Complete.');
}

updatePostContent().catch(err => console.error(err));
