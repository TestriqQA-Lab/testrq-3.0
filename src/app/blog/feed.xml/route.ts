import { sanityGetPosts, Post } from '@/lib/sanity-data-adapter';
import { urlFor } from '@/lib/sanity';

// Revalidate the RSS feed every 60 seconds (matches blog page revalidation)
export const revalidate = 60;

// ─── Helpers ────────────────────────────────────────────────────────────────

/** XML-escape special characters so the feed stays valid. */
function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Convert Sanity Portable Text blocks into simple HTML for <content:encoded>.
 * Falls back to bodyHtml (legacy) or plain excerpt.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function portableTextToHtml(content: any): string {
    // If content is already an HTML string (legacy bodyHtml), use it directly
    if (typeof content === 'string') {
        return content;
    }

    // If content is not an array (Portable Text), return empty
    if (!Array.isArray(content) || content.length === 0) {
        return '';
    }

    // Convert Portable Text blocks to simplified HTML
    return content
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((block: any) => {
            // Handle block type
            if (block._type === 'block') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const text = block.children
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ?.map((child: any) => {
                        let t = child.text || '';

                        // Apply marks (bold, italic, code, links)
                        if (child.marks && child.marks.length > 0) {
                            child.marks.forEach((mark: string) => {
                                if (mark === 'strong') t = `<strong>${t}</strong>`;
                                else if (mark === 'em') t = `<em>${t}</em>`;
                                else if (mark === 'code') t = `<code>${t}</code>`;
                                // Handle link annotations
                                else {
                                    const annotation = block.markDefs?.find(
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        (d: any) => d._key === mark
                                    );
                                    if (annotation?.href) {
                                        t = `<a href="${annotation.href}">${t}</a>`;
                                    }
                                }
                            });
                        }
                        return t;
                    })
                    .join('') || '';

                // Map Sanity block styles to HTML tags
                switch (block.style) {
                    case 'h1': return `<h1>${text}</h1>`;
                    case 'h2': return `<h2>${text}</h2>`;
                    case 'h3': return `<h3>${text}</h3>`;
                    case 'h4': return `<h4>${text}</h4>`;
                    case 'blockquote': return `<blockquote>${text}</blockquote>`;
                    default: return `<p>${text}</p>`;
                }
            }

            // Handle inline images
            if (block._type === 'image' && block.asset) {
                const imgUrl = urlFor(block).width(800).quality(80).url();
                const alt = block.alt || '';
                return `<figure><img src="${imgUrl}" alt="${escapeXml(alt)}" />${block.caption ? `<figcaption>${escapeXml(block.caption)}</figcaption>` : ''}</figure>`;
            }

            return '';
        })
        .filter(Boolean)
        .join('\n');
}

/** Format a date as RFC-822 (required by RSS 2.0). */
function toRfc822(dateStr: string): string {
    try {
        return new Date(dateStr).toUTCString();
    } catch {
        return new Date().toUTCString();
    }
}

// ─── RSS Feed Builder ───────────────────────────────────────────────────────

function buildRssItem(post: Post, baseUrl: string): string {
    const postUrl = `${baseUrl}/blog/post/${encodeURIComponent(post.slug)}`;
    const htmlContent = portableTextToHtml(post.content);
    const description = post.excerpt || post.seo.description || '';

    // Category tags (from categories + tags)
    const categoryTags = [
        ...post.categories.map(c => `<category>${escapeXml(c.name)}</category>`),
        ...post.tags.map(t => `<category>${escapeXml(t)}</category>`),
    ].join('\n      ');

    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${toRfc822(post.dateISO)}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      <description><![CDATA[${description}]]></description>
      ${htmlContent ? `<content:encoded><![CDATA[${htmlContent}]]></content:encoded>` : ''}
      ${post.image ? `<media:content url="${escapeXml(post.image)}" medium="image" />` : ''}
      ${post.image ? `<enclosure url="${escapeXml(post.image)}" type="image/jpeg" length="0" />` : ''}
      ${categoryTags}
    </item>`;
}

function buildRssFeed(posts: Post[]): string {
    const baseUrl = 'https://www.testriq.com';
    const now = toRfc822(new Date().toISOString());

    const items = posts.map(post => buildRssItem(post, baseUrl)).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>Testriq QA Lab Blog – Software Testing Insights &amp; Best Practices</title>
    <link>${baseUrl}/blog</link>
    <description>Stay updated with the latest trends, insights, and best practices in software testing and QA. Expert articles from Testriq's ISTQB certified experts.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <managingEditor>tech@testriq.com (Testriq QA Lab)</managingEditor>
    <webMaster>tech@testriq.com (Testriq QA Lab)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Testriq QA Lab LLP. All rights reserved.</copyright>
    <generator>Next.js + Sanity CMS</generator>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/OG/og_image_final.png</url>
      <title>Testriq QA Lab Blog – Software Testing Insights &amp; Best Practices</title>
      <link>${baseUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

// ─── Route Handler ──────────────────────────────────────────────────────────

export async function GET() {
    try {
        // Fetch the latest 50 posts for the feed
        const posts = await sanityGetPosts(50);

        const feedXml = buildRssFeed(posts);

        return new Response(feedXml, {
            status: 200,
            headers: {
                'Content-Type': 'application/rss+xml; charset=utf-8',
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
                'X-Content-Type-Options': 'nosniff',
            },
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);

        // Return a minimal valid RSS feed on error
        const errorFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Testriq QA Lab Blog</title>
    <link>https://www.testriq.com/blog</link>
    <description>Software Testing Blog</description>
  </channel>
</rss>`;

        return new Response(errorFeed, {
            status: 500,
            headers: {
                'Content-Type': 'application/rss+xml; charset=utf-8',
            },
        });
    }
}
