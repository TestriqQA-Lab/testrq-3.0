
import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables
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

const authors = [
    "Aakash Yadav",
    "Atul Ahire",
    "Jayesh Mistry",
    "Jayesh2",
    "Nandini Yadav",
    "Sandeep Maske",
    "Shravan More",
    "Sushma",
    "tEstriQ017"
];

function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

async function createAuthors() {
    console.log("Creating authors...");

    for (const name of authors) {
        const slug = slugify(name);
        const docId = `author-${slug}`;

        const doc = {
            _id: docId,
            _type: 'author',
            name: name,
            slug: { _type: 'slug', current: slug },
            image: undefined // Placeholder, user will upload later
        };

        try {
            await client.createOrReplace(doc);
            console.log(`Created/Updated author: ${name}`);
        } catch (err) {
            console.error(`Failed to create author ${name}:`, err.message);
        }
    }
    console.log("Author creation complete.");
}

createAuthors();
