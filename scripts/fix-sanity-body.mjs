
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

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

// Helper: Upload Image
async function uploadImage(url) {
    if (!url) return null;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
        const buffer = await res.buffer();
        const asset = await client.assets.upload('image', buffer, { filename: url.split('/').pop() });
        return {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
        };
    } catch (error) {
        console.warn(`Failed to upload image ${url}:`, error.message);
        return null;
    }
}

// Helper: Convert HTML to Portable Text Blocks
async function htmlToBlocks(html) {
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    const blocks = [];

    // Helper to process mark nodes (strong, em, a)
    function processMarks(node) {
        let text = node.textContent || '';
        let marks = [];

        if (node.nodeName === 'STRONG' || node.nodeName === 'B') marks.push('strong');
        if (node.nodeName === 'EM' || node.nodeName === 'I') marks.push('em');
        if (node.nodeName === 'A') {
            // ...
        }
        return { text, marks };
    }

    // Recursive function to strip invalid tags (STYLE, SCRIPT) before processing
    function cleanDom(node) {
        const toRemove = [];
        node.childNodes.forEach(child => {
            if (['STYLE', 'SCRIPT', 'LINK', 'META', 'HEAD', 'TITLE'].includes(child.nodeName)) {
                toRemove.push(child);
            } else if (child.nodeType === 1) {
                cleanDom(child);
            }
        });
        toRemove.forEach(child => node.removeChild(child));
    }

    // Clean the document body first
    cleanDom(doc.body);

    // A simplified recursive function to build spans
    function buildSpans(node, activeMarks = []) {
        let spans = [];

        for (const child of node.childNodes) {
            if (child.nodeType === 3) { // Text node
                if (child.textContent.trim()) {
                    spans.push({
                        _type: 'span',
                        marks: [...activeMarks],
                        text: child.textContent
                    });
                }
            } else if (child.nodeType === 1) { // Element node
                const newMarks = [...activeMarks];
                let markKey = null;
                let markDef = null;

                if (['STRONG', 'B'].includes(child.nodeName)) newMarks.push('strong');
                if (['EM', 'I'].includes(child.nodeName)) newMarks.push('em');
                if (['U'].includes(child.nodeName)) newMarks.push('underline');
                if (['CODE'].includes(child.nodeName)) newMarks.push('code');
                if (child.nodeName === 'A') {
                    const href = child.getAttribute('href');
                    if (href) {
                        markKey = `link-${Math.random().toString(36).substr(2, 9)}`;
                        newMarks.push(markKey);
                        markDef = {
                            _key: markKey,
                            _type: 'link',
                            href: href
                        };
                    }
                }

                const childResult = buildSpans(child, newMarks);
                spans = spans.concat(childResult.spans);
                if (markDef) {
                    // We need to bubble up markDefs? 
                    // This simple logic is tricky for recursion.
                    // Instead, let's just push markDefs to a global list (for this block) if we can.
                    // JS parameters are by value, so arrays are ref. 
                }
            }
        }
        return { spans };
    }

    // Helper to extract image from a node
    async function extractImage(node) {
        const img = node.nodeName === 'IMG' ? node : node.querySelector('img');
        if (img) {
            const src = img.getAttribute('src');
            if (src) {
                return await uploadImage(src);
            }
        }
        return null;
    }

    // Better Approach: Iterate top-level elements and process them
    const body = doc.body;

    for (const child of body.childNodes) {
        const nodeName = child.nodeName;

        // SKIP STYLES AND SCRIPTS
        if (nodeName === 'STYLE' || nodeName === 'SCRIPT' || nodeName === 'LINK') continue;

        // Skip text nodes at root level (usually whitespace)
        if (child.nodeType === 3) {
            if (!child.textContent.trim()) continue;
            // If there is significant text at root, wrap in a block
            // Fall through to default processing
        }

        if (child.nodeType !== 1) continue;

        // Handle Images (Top level or inside Figure/P)
        if (nodeName === 'IMG' || nodeName === 'FIGURE') {
            const imageAsset = await extractImage(child);
            if (imageAsset) {
                blocks.push({
                    _key: Math.random().toString(36).substr(2, 9),
                    ...imageAsset
                });
                continue;
            }
        }

        let style = 'normal';

        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(nodeName)) {
            style = nodeName.toLowerCase();
        } else if (nodeName === 'BLOCKQUOTE') {
            style = 'blockquote';
        } else if (nodeName === 'UL' || nodeName === 'OL') {
            // Handle lists
            const listType = nodeName === 'UL' ? 'bullet' : 'number';
            for (const li of child.children) {
                if (li.nodeName === 'LI') {
                    const { spans, markDefs } = processChildNodes(li);
                    if (spans.length > 0) {
                        blocks.push({
                            _type: 'block',
                            _key: Math.random().toString(36).substr(2, 9),
                            style: 'normal',
                            listItem: listType,
                            markDefs: markDefs,
                            children: spans
                        });
                    }
                }
            }
            continue;
        } else if (nodeName === 'TABLE') {
            // Handle Tables
            const rows = [];
            const trs = child.querySelectorAll('tr');

            trs.forEach(tr => {
                const cells = [];
                tr.querySelectorAll('td, th').forEach(cell => {
                    cells.push(cell.textContent.trim());
                });
                if (cells.length > 0) {
                    rows.push({
                        _key: Math.random().toString(36).substr(2, 9),
                        _type: 'tableRow',
                        cells: cells
                    });
                }
            });

            if (rows.length > 0) {
                blocks.push({
                    _type: 'customTable',
                    _key: Math.random().toString(36).substr(2, 9),
                    rows: rows
                });
            }
            continue;
        } else if (nodeName === 'DIV' || nodeName === 'HR') {
            // Skip spacers and separators
            continue;
        }

        // Special check: Paragraph containing ONLY an image?
        if (nodeName === 'P') {
            const hasText = child.textContent.trim().length > 0;
            const hasImg = child.querySelector('img');

            if (!hasText && hasImg) {
                const imageAsset = await extractImage(child);
                if (imageAsset) {
                    blocks.push({
                        _key: Math.random().toString(36).substr(2, 9),
                        ...imageAsset
                    });
                    continue;
                }
            }
        }

        // Process children for text blocks
        const { spans, markDefs } = processChildNodes(child);

        if (spans.length > 0) {
            blocks.push({
                _type: 'block',
                _key: Math.random().toString(36).substr(2, 9),
                style: style,
                markDefs: markDefs,
                children: spans
            });
        }
    }

    return blocks;
}

function processChildNodes(parentNode) {
    let spans = [];
    let markDefs = [];

    function traverse(node, currentMarks = []) {
        // Extra safety: Skip styles if they survived (unlikely with cleanDom)
        if (['STYLE', 'SCRIPT'].includes(node.nodeName)) return;

        for (const child of node.childNodes) {
            if (child.nodeType === 3) { // Text
                const text = child.textContent;
                if (text) { // Keep whitespace? Sanity might trim. 
                    spans.push({
                        _type: 'span',
                        _key: Math.random().toString(36).substr(2, 9),
                        text: text,
                        marks: [...currentMarks]
                    });
                }
            } else if (child.nodeType === 1) { // Element
                const newMarks = [...currentMarks];

                if (['STRONG', 'B'].includes(child.nodeName)) newMarks.push('strong');
                if (['EM', 'I'].includes(child.nodeName)) newMarks.push('em');
                if (['U'].includes(child.nodeName)) newMarks.push('underline');
                if (['CODE'].includes(child.nodeName)) newMarks.push('code');

                if (child.nodeName === 'A') {
                    const href = child.getAttribute('href');
                    if (href) {
                        const key = `link-${Math.random().toString(36).substr(2, 9)}`;
                        newMarks.push(key);
                        markDefs.push({
                            _key: key,
                            _type: 'link',
                            href: href
                        });
                    }
                }

                traverse(child, newMarks);
            }
        }
    }

    traverse(parentNode);
    return { spans, markDefs };
}


// --- Main Migration Function ---

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

async function fixPostContent() {
    console.log('Fetching ALL Posts from WordPress...');

    let allPosts = [];
    let hasNextPage = true;
    let endCursor = null;

    while (hasNextPage) {
        const postsQuery = `
          query GetPosts($after: String) {
            posts(first: 100, after: $after) {
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                slug
                content
                title
              }
            }
          }
        `;

        const variables = endCursor ? { after: endCursor } : {};
        const data = await wpGql(postsQuery, variables);

        const newPosts = data.posts.nodes;
        allPosts = [...allPosts, ...newPosts];

        hasNextPage = data.posts.pageInfo.hasNextPage;
        endCursor = data.posts.pageInfo.endCursor;

        console.log(`Fetched ${newPosts.length} posts. Total so far: ${allPosts.length}`);
    }

    const wpPosts = allPosts;
    console.log(`Found ${wpPosts.length} total posts to check.`);

    for (const post of wpPosts) {
        if (!post.content) continue;

        const sanitySlug = post.slug;
        const query = `*[_type == "post" && slug.current == $slug][0]._id`;
        const sanityId = await client.fetch(query, { slug: sanitySlug });

        if (sanityId) {
            console.log(`Processing ${sanitySlug}...`);

            // Clean content for JSDOM
            const cleanedContent = post.content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

            try {
                const blocks = await htmlToBlocks(cleanedContent);

                if (blocks && blocks.length > 0) {
                    await client.patch(sanityId)
                        .set({ body: blocks })
                        // .unset(['bodyHtml']) // Optional: keep bodyHtml as backup or remove it
                        .commit();
                    console.log(`✅ Converted and updated body for ${sanitySlug}`);
                } else {
                    console.log(`⚠️ Conversion resulted in empty blocks for ${sanitySlug}`);
                }
            } catch (err) {
                console.error(`❌ Failed format conversion for ${sanitySlug}:`, err.message);
            }
        }
    }
    console.log('Fix Complete.');
}

fixPostContent().catch(err => console.error(err));
