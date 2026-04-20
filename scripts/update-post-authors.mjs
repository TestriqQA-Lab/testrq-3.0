
import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
};

const client = createClient(config);

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'https://cms.testriq.com/graphql';

async function wpGql(query, variables = {}) {
    const res = await fetch(WORDPRESS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`WordPress API Error (${res.status}): ${text}`);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        throw new Error(`WordPress API returned non-JSON (${contentType}): ${text.substring(0, 500)}`);
    }

    const json = await res.json();
    if (json.errors) {
        throw new Error(JSON.stringify(json.errors));
    }
    return json.data;
}

function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

async function updatePostAuthors() {
    console.log("Fetching posts from WordPress to update authors...");
    let hasNextPage = true;
    let after = null;
    let count = 0;

    while (hasNextPage) {
        const query = `
            query GetPosts($first: Int, $after: String) {
                posts(first: $first, after: $after) {
                    pageInfo { hasNextPage, endCursor }
                    nodes {
                        slug
                        author {
                            node {
                                name
                            }
                        }
                    }
                }
            }
        `;

        const data = await wpGql(query, { first: 50, after });
        const posts = data.posts.nodes;
        const pageInfo = data.posts.pageInfo;

        for (const post of posts) {
            const authorName = post.author?.node?.name;
            if (!authorName) {
                console.warn(`No author name for post ${post.slug}`);
                continue;
            }

            const authorSlug = slugify(authorName);
            const authorId = `author-${authorSlug}`;
            const postId = post.slug; // Assuming slug is ID in sanity (from migration)

            // We need to find the sanity post with this slug (ID might be slug or generated)
            // In migration script: _id: post.slug

            // Check if post exists
            const sanityPost = await client.getDocument(postId);
            if (!sanityPost) {
                // Try query by slug if ID assumes different
                const q = `*[_type == "post" && slug.current == $slug][0]`;
                const p = await client.fetch(q, { slug: post.slug });
                if (!p) {
                    console.warn(`Sanity post not found for slug: ${post.slug}`);
                    continue;
                }
                // Update using p._id
                await patchPost(p._id, authorId, authorName);
            } else {
                await patchPost(postId, authorId, authorName);
            }
            count++;
        }

        hasNextPage = pageInfo.hasNextPage;
        after = pageInfo.endCursor;
        console.log(`Processed batch. Total: ${count}`);
    }
    console.log("Author update complete.");
}

async function patchPost(sanityPostId, authorId, authorName) {
    try {
        await client.patch(sanityPostId)
            .set({
                author: {
                    _type: 'reference',
                    _ref: authorId
                }
            })
            .commit();
        // console.log(`Updated post ${sanityPostId} with author ${authorName} (${authorId})`);
    } catch (err) {
        console.error(`Failed to update post ${sanityPostId}: ${err.message}`);
    }
}

updatePostAuthors();
