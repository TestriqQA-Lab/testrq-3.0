
import { createClient } from 'next-sanity';
import * as fs from 'fs';

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});


// Helper to extract plain text (simplified version of project utils)
function extractText(body: any): string {
    if (!body) return '';
    if (typeof body === 'string') return body;
    if (Array.isArray(body)) {
        return body.map(block => {
            if (block._type !== 'block' || !block.children) return '';
            return block.children.map((child: any) => child.text).join(' ');
        }).join(' ');
    }
    return '';
}

async function main() {
    console.log("Fetching ALL posts...");
    try {
        // Fetch specific fields needed for description generation
        const query = `*[_type == "post"] {
          title,
          slug,
          excerpt,
          body,
          "bodyString": bodyHtml, 
          "seo": seo
        }`;

        const posts = await client.fetch(query);
        console.log(`Fetched ${posts.length} posts.`);
        fs.writeFileSync('debug-seo-output.json', JSON.stringify(posts, null, 2));

        // Analyze duplicates using the Adapter Logic
        const descriptionMap = new Map();

        interface Duplicate {
            desc: string;
            originalTitle: string;
            duplicateTitle: string;
            isSeo: boolean;
        }

        const duplicates: Duplicate[] = [];
        const missingSeoCount = 0;

        posts.forEach((post: any) => {
            let finalDesc = "";

            // Logic from src/lib/sanity-data-adapter.ts
            if (post.seo?.metaDescription) {
                finalDesc = post.seo.metaDescription;
            } else if (post.excerpt) {
                finalDesc = post.excerpt;
            } else {
                const rawText = extractText(post.body || post.bodyString);
                if (rawText) {
                    finalDesc = rawText.length > 157
                        ? rawText.substring(0, 157).trim() + '...'
                        : rawText;
                }
            }

            if (finalDesc) {
                const normDesc = finalDesc.trim();

                if (descriptionMap.has(normDesc)) {
                    duplicates.push({
                        desc: normDesc.substring(0, 50) + "...",
                        originalTitle: descriptionMap.get(normDesc),
                        duplicateTitle: post.title,
                        isSeo: !!post.seo?.metaDescription
                    });
                } else {
                    descriptionMap.set(normDesc, post.title);
                }
            }
        });


        console.log(`Found ${duplicates.length} duplicate descriptions using full adapter logic.`);
        fs.writeFileSync('debug-seo-duplicates.json', JSON.stringify(duplicates, null, 2));

        if (duplicates.length > 0) {
            console.log("Top 10 duplicates:", JSON.stringify(duplicates.slice(0, 10), null, 2));

            // Check if duplicates are mostly SEO-based or Fallback-based
            const seoDups = duplicates.filter(d => d.isSeo).length;
            console.log(`SEO Field Duplicates: ${seoDups}`);
            console.log(`Fallback Generated Duplicates: ${duplicates.length - seoDups}`);
        }

        // Targeted Search
        const targetTitle = "Web App Performance";
        const targetDesc = "Robotic NDT";

        const foundPost = posts.find((p: any) => p.title.includes(targetTitle));
        if (foundPost) {
            console.log("\n--- Targeted Search Result ---");
            console.log(`Found post with title containing "${targetTitle}":`);
            console.log(JSON.stringify(foundPost, null, 2));
        } else {
            console.log(`\nPost with title containing "${targetTitle}" NOT FOUND.`);
        }

        const roboticPosts = posts.filter((p: any) => p.seo?.metaDescription?.includes(targetDesc));
        console.log(`\nFound ${roboticPosts.length} posts with description related to "${targetDesc}".`);

        const roboticTitle = "Advancements in Robotic";
        const roboticPost = posts.find((p: any) => p.title.includes(roboticTitle) || p.seo?.metaTitle?.includes(roboticTitle));

        if (roboticPost) {
            console.log("Found Robotic NDT Post:");
            console.log(JSON.stringify(roboticPost, null, 2));
        } else {
            console.log("Robotic NDT Post NOT FOUND.");
        }

        fs.writeFileSync('debug-seo-target.json', JSON.stringify({
            foundPost,
            roboticPosts,
            roboticPost // Add result to file
        }, null, 2));
        console.log("Written results to debug-seo-target.json");

    } catch (err) {
        console.error("Error:", err);
    }
}


main();
