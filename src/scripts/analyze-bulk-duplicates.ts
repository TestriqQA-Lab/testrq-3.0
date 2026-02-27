
import { createClient } from 'next-sanity';
import * as fs from 'fs';

const client = createClient({
    projectId: '7hxinmig',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});

async function main() {
    console.log("Fetching ALL posts for Bulk Duplicate Analysis...");
    try {
        const query = `*[_type == "post"] {
          _id,
          title,
          "seoDescription": seo.metaDescription,
          "excerpt": excerpt
        }`;

        const posts = await client.fetch(query);
        console.log(`Fetched ${posts.length} posts.`);

        const descriptionGroups = new Map<string, string[]>();
        const emptySeoCount = 0;

        posts.forEach((post: any) => {
            const desc = post.seoDescription ? post.seoDescription.trim() : "(No SEO Description)";

            if (!descriptionGroups.has(desc)) {
                descriptionGroups.set(desc, []);
            }
            descriptionGroups.get(desc)?.push(post.title);
        });

        const duplicates: any[] = [];

        descriptionGroups.forEach((titles, desc) => {
            if (titles.length > 1) {
                duplicates.push({
                    description: desc.substring(0, 100) + "...",
                    count: titles.length,
                    examples: titles.slice(0, 3) // Show first 3 titles
                });
            }
        });

        // Sort by count descending
        duplicates.sort((a, b) => b.count - a.count);

        console.log(`\nFound ${duplicates.length} groups of duplicate descriptions.`);

        // Write ALL groups to file for inspection
        const allGroups: any[] = [];
        descriptionGroups.forEach((titles, desc) => {
            allGroups.push({
                description: desc,
                count: titles.length,
                examples: titles.slice(0, 3)
            });
        });

        allGroups.sort((a, b) => b.count - a.count);
        fs.writeFileSync('debug-bulk-groups.json', JSON.stringify(allGroups, null, 2));
        console.log(`\nWritten ${allGroups.length} description groups to debug-bulk-groups.json`);

        if (duplicates.length > 0) {
            console.log("\nTop Duplicate Groups:");
            duplicates.forEach(d => {
                console.log(`\n[Count: ${d.count}] Description: "${d.description}"`);
                console.log(`   Examples: ${d.examples.join(", ")}`);
            });
        } else {
            console.log("\nNo duplicates found in the explicit 'seo.metaDescription' field.");
            console.log("Check debug-bulk-groups.json to see what IS there.");
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

main();
