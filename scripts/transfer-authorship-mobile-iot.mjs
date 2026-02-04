
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

const TARGET_AUTHOR_NAME = "Prathamesh Maske";

async function transferAuthorship() {
    console.log(`Starting authorship transfer to "${TARGET_AUTHOR_NAME}"...`);

    // 1. Find the target author
    const authorQuery = `*[_type == "author" && name == $name][0]`;
    const author = await client.fetch(authorQuery, { name: TARGET_AUTHOR_NAME });

    if (!author) {
        console.error(`Error: Author "${TARGET_AUTHOR_NAME}" not found in Sanity. Please create this author first.`);
        process.exit(1);
    }

    console.log(`Found author: ${author.name} (ID: ${author._id})`);

    // 2. Find relevant posts
    // Matches if title contains "Mobile Application" or "IoT" (case insensitive match)
    // OR if any tag matches those terms.
    const postsQuery = `*[_type == "post" && (
        title match "Mobile Application" || 
        title match "IoT" ||
        "Mobile Application" in tags[]->title || 
        "IoT" in tags[]->title
    )] {
        _id,
        title,
        slug,
        "currentAuthor": author->name
    }`;

    const posts = await client.fetch(postsQuery);
    console.log(`Found ${posts.length} posts matching criteria.`);

    // 3. Update posts
    let updatedCount = 0;

    for (const post of posts) {
        if (post.currentAuthor === TARGET_AUTHOR_NAME) {
            console.log(`Skipping "${post.title}" (already assigned to target author).`);
            continue;
        }

        console.log(`Updating "${post.title}" (Current Author: ${post.currentAuthor || 'None'})...`);

        try {
            await client.patch(post._id)
                .set({
                    author: {
                        _type: 'reference',
                        _ref: author._id
                    }
                })
                .commit();
            updatedCount++;
        } catch (err) {
            console.error(`Failed to update post "${post.title}": ${err.message}`);
        }
    }

    console.log(`\nMigration complete. Updated ${updatedCount} of ${posts.length} matching posts.`);
}

transferAuthorship();
