
import { createClient } from 'next-sanity';
import * as fs from 'fs';

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});

function getJaccardSimilarity(str1: string, str2: string) {
    const set1 = new Set(str1.toLowerCase().split(/\s+/));
    const set2 = new Set(str2.toLowerCase().split(/\s+/));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

async function main() {
    console.log("Fetching titles and SEO titles...");
    try {
        const query = `*[_type == "post"] {
          _id,
          title,
          "seoTitle": seo.metaTitle
        }`;

        interface Mismatch {
            title: string;
            seoTitle: string;
            similarity: string;
            id: string;
        }

        const posts = await client.fetch(query);
        const mismatches: Mismatch[] = [];

        posts.forEach((post: any) => {
            if (post.title && post.seoTitle) {
                const similarity = getJaccardSimilarity(post.title, post.seoTitle);
                // Threshold: If similarity is < 0.3, it's likely a mismatch
                if (similarity < 0.2) {
                    mismatches.push({
                        title: post.title,
                        seoTitle: post.seoTitle,
                        similarity: similarity.toFixed(2),
                        id: post._id
                    });
                }
            } else if (!post.seoTitle) {
                // Missing SEO title is not a mismatch, just missing. 
                // But good to know if we are relying on fallback.
            }
        });

        console.log(`Analyzed ${posts.length} posts.`);
        console.log(`Found ${mismatches.length} mismatches (Similarity < 0.2).`);

        fs.writeFileSync('seo-mismatches.json', JSON.stringify(mismatches, null, 2));

        if (mismatches.length > 0) {
            console.log("Example mismatches:");
            console.log(JSON.stringify(mismatches.slice(0, 5), null, 2));
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

main();
