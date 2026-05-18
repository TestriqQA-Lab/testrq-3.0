
import { client } from './sanity';
import { previewClient } from './sanity-preview';
import { sanityImage } from './sanity-image';
import { groq } from "next-sanity";
import { unstable_cache } from 'next/cache';
import * as queries from './sanity-queries';

// F-48: shared revalidate window for blog-route data fetches. Matches the
// 60s `export const revalidate = 60` on each blog page.tsx — except those
// pages access searchParams.page for pagination, which forces Next into
// Dynamic Rendering and silently ignores the page-level revalidate. The
// fetches below are still wrapped with unstable_cache so the expensive
// GROQ round-trip is only paid once per 60s across all requests, even
// though page-level rendering remains per-request.
const BLOG_DATA_REVALIDATE_SECONDS = 60;
// Define the interfaces that your components expect
export interface Category {
    id: string;
    name: string;
    description: string;
    color: string;
    icon: string;
    postCount: number;
    subscribers: number;
    tags: string[];
    featuredTools: string[];
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
    category: string;
    categories: { name: string; slug: string; colorTheme?: string }[];
    categorySlug: string;
    categoryColor: string;
    author: string;
    authorSlug?: string;
    authorImage: string;
    authorBio: string;
    authorLinkedin?: string;
    authorCredentials?: string[];
    authorSameAs?: string[];
    date: string;
    dateISO: string;
    modifiedISO: string;
    readTime: string;
    image: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any;
    mainImageAlt: string;
    mainImageTitle?: string;
    mainImageCaption?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorImageRaw: any;
    featured: boolean;
    trending: boolean;
    views: string;
    likes: number;
    shares: number;
    tags: string[];
    tagsData: { name: string; slug: string }[];
    seo: {
        title: string;
        description: string;
        keywords: string;
        canonicalUrl?: string;
    };
}

export interface Page {
    id: string;
    slug: string;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
    date: string;
    image: string | null;
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
}

export interface Tag {
    id: string;
    name: string;
    slug: string;
    description?: string;
    count: number;
}

// Helper to extract plain text from Portable Text or String
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTextFromContent(body: any): string {
    if (!body) return '';
    if (typeof body === 'string') return body;
    if (Array.isArray(body)) {
        return body
            .map(block => {
                if (block._type !== 'block' || !block.children) return '';
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return block.children.map((child: any) => child.text).join(' ');
            })
            .join(' ');
    }
    return '';
}

// Helper to estimate read time for Portable Text or String
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function estimateReadTime(body: any): string {
    const text = extractTextFromContent(body);
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute) || 1;
    return `${minutes} min read`;
}

// Function to generate random but consistent values based on post ID (mirrors WP adapter)
function generateConsistentValue(seedStr: string, max: number): number {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = ((hash << 5) - hash) + seedStr.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % max;
}

// Adapter: Sanity Category -> Frontend Category
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adaptSanityCategory(sanityCat: any): Category {
    // Generate consistent subscriber count
    const baseSubscribers = Math.max((sanityCat.count || 0) * 50, 100);
    const subscribers = baseSubscribers + generateConsistentValue(sanityCat._id || sanityCat.slug?.current || 'seed', 500);

    return {
        id: sanityCat.slug?.current || '',
        name: sanityCat.title || '',
        description: sanityCat.description || `Comprehensive guides and tutorials on ${sanityCat.title || ''}`,
        // Use CMS color if available, else fallback logic could be added here
        color: sanityCat.colorTheme ? `from-${sanityCat.colorTheme}-500 to-${sanityCat.colorTheme}-600` : 'from-blue-500 to-blue-600',
        icon: sanityCat.icon || '📝',
        postCount: sanityCat.count || 0,
        subscribers,
        tags: [sanityCat.title || '', 'Testing', 'QA'],
        featuredTools: ['Tool 1', 'Tool 2'], // Placeholder or add to schema
        seo: {
            title: `${sanityCat.title} Articles | Testriq Blog`,
            description: sanityCat.description || `Learn ${sanityCat.title}`,
            keywords: `${sanityCat.title}, testing, qa`
        }
    };
}

// Adapter: Sanity Post -> Frontend Post
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adaptSanityPost(sanityPost: any): Post {
    if (!sanityPost) {
        console.warn("adaptSanityPost received null/undefined post");
        return {
            id: 'missing-id',
            slug: 'missing-slug',
            title: 'Missing Post',
            excerpt: '',
            content: [],
            category: 'Uncategorized',
            categories: [],
            categorySlug: '',
            categoryColor: 'from-gray-500 to-gray-600',
            author: 'Unknown',
            authorImage: '',
            authorImageRaw: null,
            authorBio: '',
            date: new Date().toLocaleDateString(),
            dateISO: new Date().toISOString(),
            modifiedISO: new Date().toISOString(),
            readTime: '0 min read',
            image: '',
            mainImage: null,
            mainImageAlt: '',
            mainImageTitle: '',
            mainImageCaption: '',
            featured: false,
            trending: false,
            views: '0',
            likes: 0,
            shares: 0,
            tags: [],
            tagsData: [],
            seo: { title: '', description: '', keywords: '', canonicalUrl: '' }
        };
    }

    const primaryCategory = sanityPost.categories?.[0];
    const categoryName = primaryCategory?.title || 'Testing';
    const categoryColor = primaryCategory?.colorTheme
        ? `from-${primaryCategory.colorTheme}-500 to-${primaryCategory.colorTheme}-600`
        : 'from-blue-500 to-blue-600';

    // Consistent metrics
    const baseViews = generateConsistentValue(sanityPost._id, 50) * 100 + 1000;
    const views = baseViews > 10000 ? `${(baseViews / 1000).toFixed(1)}K` : baseViews.toString();
    const likes = generateConsistentValue(sanityPost._id + 'likes', 500) + 50;
    const shares = generateConsistentValue(sanityPost._id + 'shares', 100) + 10;

    // Handle body content: 
    // Prioritize Portable Text (Array) if available and populated.
    // Fallback to bodyHtml (Legacy String) if Array is empty.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let adaptedContent: any = [];

    if (Array.isArray(sanityPost.body) && sanityPost.body.length > 0) {
        adaptedContent = sanityPost.body;
    } else if (sanityPost.bodyHtml) {
        adaptedContent = sanityPost.bodyHtml;
    } else if (typeof sanityPost.body === 'string') {
        // Fallback for any residual string bodies in the 'body' field
        adaptedContent = sanityPost.body;
    }

    return {
        id: sanityPost.slug?.current || '',
        slug: sanityPost.slug?.current || '',
        title: sanityPost.title || 'Untitled',
        excerpt: sanityPost.excerpt || '',
        content: adaptedContent,
        category: categoryName,
        categories: sanityPost.categories?.filter((c: any) => c).map((c: any) => ({
            name: c.title,
            slug: c.slug?.current,
            colorTheme: c.colorTheme
        })) || [],
        categorySlug: primaryCategory?.slug?.current || 'technology-stack',
        categoryColor,
        author: sanityPost.author?.name || 'Testriq Team',
        authorSlug: sanityPost.author?.slug?.current || undefined,
        authorImage: sanityPost.author?.image ? sanityImage(sanityPost.author.image, { width: 60, height: 60 }) : 'https://placehold.co/60x60/png',
        authorImageRaw: sanityPost.author?.image || null,
        authorBio: sanityPost.author?.bio || 'QA Expert',
        authorLinkedin: sanityPost.author?.linkedin || null,
        authorCredentials: Array.isArray(sanityPost.author?.credentials) ? sanityPost.author.credentials : [],
        authorSameAs: Array.isArray(sanityPost.author?.sameAs) ? sanityPost.author.sameAs : [],
        date: new Date(sanityPost.publishedAt || new Date().toISOString()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }),
        dateISO: sanityPost.publishedAt || new Date().toISOString(),
        modifiedISO: sanityPost._updatedAt || new Date().toISOString(),
        readTime: estimateReadTime(sanityPost.body || sanityPost.excerpt),
        image: sanityPost.mainImage ? sanityImage(sanityPost.mainImage, { width: 1200, quality: 90 }) : 'https://placehold.co/1200x675/png',
        mainImage: sanityPost.mainImage || null,
        mainImageAlt: sanityPost.mainImage?.alt || sanityPost.title || '',
        mainImageTitle: sanityPost.mainImage?.title || '',
        mainImageCaption: sanityPost.mainImage?.caption || '',
        featured: generateConsistentValue(sanityPost._id + 'feat', 10) < 2,
        trending: generateConsistentValue(sanityPost._id + 'trend', 10) < 3,
        views,
        likes,
        shares,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tags: sanityPost.tags?.filter((t: any) => t).map((t: any) => t.title) || [],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tagsData: sanityPost.tags?.filter((t: any) => t).map((t: any) => ({ name: t.title, slug: t.slug?.current })) || [],
        // F-60.1 cleanup — legacy `{metaTitle, metaDescription, metaKeywords}` shape
        // fallbacks dropped now that all 359 posts have been migrated to the
        // shared `seoFields` shape (`{title, description, keywords[]}`).
        // Migration verified via /api/debug-seo: all sample posts show
        // hasSeoTitle: true + hasMetaTitle: false.
        seo: {
            title: sanityPost.seo?.title || sanityPost.title,
            description: (() => {
                if (sanityPost.seo?.description) return sanityPost.seo.description;
                if (sanityPost.excerpt) return sanityPost.excerpt;

                const rawText = extractTextFromContent(sanityPost.body || sanityPost.bodyHtml);
                // Create a 157 char summary (leaving room for '...')
                if (!rawText) return '';
                return rawText.length > 157
                    ? rawText.substring(0, 157).trim() + '...'
                    : rawText;
            })(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            keywords: (() => {
                // seoFields.keywords is an array of strings → join to csv
                if (Array.isArray(sanityPost.seo?.keywords) && sanityPost.seo.keywords.length > 0) {
                    return sanityPost.seo.keywords.join(', ');
                }
                if (sanityPost.tags && sanityPost.tags.length > 0) {
                    return sanityPost.tags.map((t: any) => t.title).join(', ');
                }
                // Global fallback for Testing blog
                return "software testing, test automation, quality assurance, QA testing, selenium testing, performance testing, security testing, mobile testing, API testing, testing best practices, testing tutorials, testing frameworks, testing tools, automation testing, manual testing";
            })(),
            canonicalUrl: sanityPost.seo?.canonicalUrl || null
        }
    };
}

// --- Data Fetching Functions ---

// F-48: data-cache layer over the GROQ fetch. Cache key includes the limit
// so /blog (no limit, full list) and HomeInsightSection (limit 3) are
// independent cache entries. Tag `posts` so a future webhook (F-32) can
// invalidate.
const fetchPostsRaw = unstable_cache(
    async (limit?: number) => {
        const query = limit ? groq`${queries.postsQuery}[0...${limit}]` : queries.postsQuery;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (await client.fetch(query)) as any[];
    },
    ['sanity:posts'],
    { revalidate: BLOG_DATA_REVALIDATE_SECONDS, tags: ['posts'] },
);

export async function sanityGetPosts(limit?: number): Promise<Post[]> {
    const posts = await fetchPostsRaw(limit);
    return posts.map(adaptSanityPost);
}

export async function sanityGetPostBySlug(slug: string, draft = false) {
    // F-64: when `draft` is true, route the fetch through the preview
    // client (useCdn:false, perspective:'drafts') so editors browsing in
    // Next's draftMode see unpublished changes. When false (the default),
    // behavior is unchanged from before — production-CDN client serving
    // published documents only. Backwards-compatible signature.
    const c = draft ? previewClient : client;
    try {
        const post = await c.fetch(queries.postBySlugQuery, { slug });
        return post ? adaptSanityPost(post) : null;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}

// F-48: cached — used by sidebar of every blog page + /blog/categories.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchCategoriesRaw = unstable_cache(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (): Promise<any[]> => await client.fetch(queries.categoriesQuery),
    ['sanity:categories'],
    { revalidate: BLOG_DATA_REVALIDATE_SECONDS, tags: ['categories'] },
);

export async function sanityGetCategories(): Promise<Category[]> {
    const categories = await fetchCategoriesRaw();
    return categories.map(adaptSanityCategory);
}

export async function sanityGetPostsBySlugs(slugs: string[]): Promise<Post[]> {
    // Sanity doesn't need a specific "by slugs" query usually, we can filter
    // const query = groq`*[_type == "post" && slug.current in $slugs]{ ... }`; // simplified
    // Ideally reuse the full projection from postsQuery
    const fullQuery = groq`*[_type == "post" && slug.current in $slugs] | order(publishedAt desc) {
        _id, title, slug, mainImage, excerpt, publishedAt, _updatedAt,
        "author": author->{name, slug, image, bio},
        "categories": categories[]->{title, slug, colorTheme, icon, description},
        "tags": tags[]->{title, slug}
    }`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = await client.fetch(fullQuery, { slugs });
    return posts.map(adaptSanityPost);
}

export async function sanityGetAllPostSlugs() {
    return await client.fetch(queries.postSlugsQuery);
}

// =============================================
// Author helpers (F-52)
// =============================================

export interface Author {
    id: string;
    name: string;
    slug: string;
    image: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageRaw: any;
    bio: string;
    linkedin?: string | null;
    credentials: string[];
    sameAs: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function adaptSanityAuthor(raw: any): Author {
    return {
        id: raw?._id || raw?.slug?.current || 'unknown',
        name: raw?.name || 'Testriq Team',
        slug: raw?.slug?.current || '',
        image: raw?.image ? sanityImage(raw.image, { width: 256, height: 256, quality: 90 }) : '',
        imageRaw: raw?.image || null,
        bio: raw?.bio || '',
        linkedin: raw?.linkedin || null,
        credentials: Array.isArray(raw?.credentials) ? raw.credentials.filter(Boolean) : [],
        sameAs: Array.isArray(raw?.sameAs) ? raw.sameAs.filter(Boolean) : [],
    };
}

export async function sanityGetAuthorBySlug(slug: string): Promise<Author | null> {
    try {
        const raw = await client.fetch(queries.authorBySlugQuery, { slug });
        return raw ? adaptSanityAuthor(raw) : null;
    } catch (error) {
        console.error("Error fetching author by slug:", error);
        return null;
    }
}

export async function sanityGetAllAuthorSlugs(): Promise<string[]> {
    try {
        return (await client.fetch(queries.authorSlugsQuery)) || [];
    } catch (error) {
        console.error("Error fetching author slugs:", error);
        return [];
    }
}

export async function sanityGetPostsByAuthor(authorSlug: string): Promise<Post[]> {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const posts: any[] = await client.fetch(queries.postsByAuthorQuery, { authorSlug });
        return posts.map(adaptSanityPost);
    } catch (error) {
        console.error("Error fetching posts by author:", error);
        return [];
    }
}

export async function sanityGetTotalPostCount() {
    const count = await client.fetch(groq`count(*[_type == "post"])`);
    return count;
}

export async function sanityGetTotalCategoryCount() {
    const count = await client.fetch(groq`count(*[_type == "category"])`);
    return count;
}

export async function sanityGetPages(): Promise<Page[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pages: any[] = await client.fetch(groq`*[_type == "page"] {
        _id, title, slug, content, publishedAt, mainImage, seo
    }`);
    return pages.map(adaptSanityPage);
}

export async function sanityGetPageBySlug(slug: string): Promise<Page | null> {
    const page = await client.fetch(groq`*[_type == "page" && slug.current == $slug][0] {
        _id, title, slug, content, publishedAt, mainImage, seo
    }`, { slug });
    return page ? adaptSanityPage(page) : null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adaptSanityPage(sanityPage: any): Page {
    return {
        id: sanityPage.slug?.current || '',
        slug: sanityPage.slug?.current || '',
        title: sanityPage.title || '',
        content: sanityPage.content || '',
        date: sanityPage.publishedAt ? new Date(sanityPage.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : '',
        image: sanityPage.mainImage ? sanityImage(sanityPage.mainImage) : null,
        // F-60.1 cleanup — seoFields shape only. Note: no `page` document
        // type exists in the schema currently; this adapter is kept for
        // defensive future use.
        seo: {
            title: sanityPage.seo?.title || sanityPage.title || '',
            description: sanityPage.seo?.description || '',
            keywords: ''
        }
    };
}

// F-48: cached. Cache key is the category slug — each /blog/category/X is
// an independent entry. Tag includes both `categories` and `posts` so a
// future webhook can invalidate this entry when either changes.
const fetchCategoryDataRaw = unstable_cache(
    async (categorySlug: string) => {
        const category = await client.fetch(queries.categoryBySlugQuery, { slug: categorySlug });
        if (!category) return null;
        const posts = await client.fetch(queries.postsByCategoryQuery, { categorySlug });
        return { category, posts };
    },
    ['sanity:category-data'],
    { revalidate: BLOG_DATA_REVALIDATE_SECONDS, tags: ['categories', 'posts'] },
);

export async function sanityGetAdaptedCategoryData(categorySlug: string) {
    const raw = await fetchCategoryDataRaw(categorySlug);
    if (!raw) return null;
    return {
        category: adaptSanityCategory(raw.category),
        posts: raw.posts.map(adaptSanityPost),
        pageInfo: { hasNextPage: false } // Basic support for now
    };
}

export async function sanitySearchPosts(term: string): Promise<Post[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = await client.fetch(queries.searchPostsQuery, { searchTerm: term });
    return posts.map(adaptSanityPost);
}

// F-48: cached. Cache key = tag slug; each /blog/tag/X gets its own
// 60s-TTL entry. Tag list `tags` + `posts` for future webhook invalidation.
const fetchTagDataRaw = unstable_cache(
    async (tagSlug: string) => {
        // We have tagsQuery but not tagBySlugQuery — inline the by-slug query
        // here rather than adding to sanity-queries (one-off use).
        const tagQuery = `*[_type == "tag" && slug.current == $tagSlug][0]`;
        const tag = await client.fetch(tagQuery, { tagSlug });
        if (!tag) return null;
        const posts = await client.fetch(queries.postsByTagQuery, { tagSlug });
        return { tag, posts };
    },
    ['sanity:tag-data'],
    { revalidate: BLOG_DATA_REVALIDATE_SECONDS, tags: ['tags', 'posts'] },
);

export async function sanityGetPostsByTag(tagSlug: string) {
    const raw = await fetchTagDataRaw(tagSlug);
    if (!raw) return { tag: null, posts: [] };
    return {
        tag: {
            id: raw.tag.slug.current,
            name: raw.tag.title,
            slug: raw.tag.slug.current,
            description: `Explore all articles tagged with ${raw.tag.title}.`,
            count: raw.posts.length
        },
        posts: raw.posts.map(adaptSanityPost) // Return adapted posts directly
    };
}

// F-48: cached — used by sidebars across blog routes.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchTagsRaw = unstable_cache(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (): Promise<any[]> => await client.fetch(queries.tagsQuery),
    ['sanity:tags'],
    { revalidate: BLOG_DATA_REVALIDATE_SECONDS, tags: ['tags'] },
);

export async function sanityGetTags(): Promise<Tag[]> {
    const tags = await fetchTagsRaw();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return tags.map((t: any) => ({
        id: t.slug.current,
        name: t.title,
        slug: t.slug.current,
        count: t.count
    }));
}

export async function sanityGetRelatedPosts(currentPostId: string, limit: number = 6): Promise<Post[]> {
    // Determine query to fetch latest posts excluding current
    const query = groq`*[_type == "post" && slug.current != $currentPostId] | order(publishedAt desc)[0...${limit}]`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = await client.fetch(query, { currentPostId, limit });
    return posts.map(adaptSanityPost);
}

// =============================================
// Case Study Types & Adapters
// =============================================

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client: string;
    industry: string;
    duration: string;
    description: string;
    image: string;
    metadata: {
        title: string;
        description: string;
        keywords?: string[];
        authors?: { name: string }[];
        creator?: string;
        publisher?: string;
        formatDetection?: {
            email?: boolean;
            address?: boolean;
            telephone?: boolean;
        };
        metadataBase?: string;
        alternates?: {
            canonical?: string;
        };
        openGraph?: {
            type?: string;
            locale?: string;
            url?: string;
            siteName?: string;
            title?: string;
            description?: string;
            images?: {
                url: string;
                width?: number;
                height?: number;
                alt?: string;
            }[];
        };
        twitter?: {
            card?: "summary" | "summary_large_image" | "app" | "player";
            site?: string;
            creator?: string;
            title?: string;
            description?: string;
            images?: string[];
        };
        robots?: {
            index?: boolean;
            follow?: boolean;
            googleBot?: {
                index?: boolean;
                follow?: boolean;
                "max-video-preview"?: number;
                "max-image-preview"?: string;
                "max-snippet"?: number;
            };
        };
        verification?: {
            google?: string;
            yandex?: string;
            yahoo?: string;
            [key: string]: string | undefined;
        };
    };
    overview: {
        clientBackground: string;
        projectScope: string;
        teamSize: string;
        timeline: string;
    };
    challenge: {
        title: string;
        description: string;
        keyIssues: string[];
        businessImpact: string;
    };
    solution: {
        title: string;
        description: string;
        approach: string[];
        methodology: string;
        keyStrategies: string[];
    };
    results: {
        bugReduction: string;
        performanceImprovement: string;
        roi: string;
        additionalMetrics: {
            label: string;
            value: string;
        }[];
    };
    technologies: {
        name: string;
        link: string;
    }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        company: string;
        rating: number;
    };
    timeline: {
        phase: string;
        duration: string;
        activities: string[];
    }[];
    keyTakeaways: string[];
    nextSteps: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adaptSanityCaseStudy(raw: any): CaseStudy {
    const slug = raw.slug?.current || '';
    return {
        id: raw._id || slug,
        slug,
        title: raw.title || '',
        client: raw.client || '',
        industry: raw.industry || '',
        duration: raw.duration || '',
        description: raw.description || '',
        image: raw.image || '',
        // F-60.1 cleanup — legacy `seoMetadata` fallback paths dropped now
        // that all case studies have been migrated to `seo` (seoFields shape)
        // + sibling `openGraph` / `twitter` fields. Migration verified.
        metadata: (() => {
            const seoBase = raw.seo || {};
            const og = raw.openGraph || {};
            const tw = raw.twitter || {};
            const canonical = seoBase.canonicalUrl || `https://www.testriq.com/${slug}`;
            return {
                title: seoBase.title || raw.title || '',
                description: seoBase.description || raw.description || '',
                keywords: seoBase.keywords || [],
                authors: [{ name: 'Testriq QA Lab' }],
                creator: 'Testriq QA Lab LLP',
                publisher: 'Testriq QA Lab LLP',
                formatDetection: { email: false, address: false, telephone: false },
                metadataBase: 'https://www.testriq.com/',
                alternates: {
                    canonical,
                },
                openGraph: {
                    type: 'article',
                    locale: 'en_US',
                    url: canonical,
                    siteName: 'Testriq - QA Case Studies',
                    title: og.title || seoBase.title || '',
                    description: og.description || seoBase.description || '',
                    images: og.imageUrl
                        ? [{
                            url: og.imageUrl,
                            width: 1200,
                            height: 630,
                            alt: og.imageAlt || '',
                        }]
                        : [],
                },
                twitter: {
                    card: 'summary_large_image' as const,
                    site: '@testriq',
                    creator: '@testriq',
                    title: tw.title || seoBase.title || '',
                    description: tw.description || seoBase.description || '',
                    images: tw.imageUrl
                        ? [tw.imageUrl]
                        : [],
                },
                robots: {
                    index: true,
                    follow: true,
                    googleBot: {
                        index: true,
                        follow: true,
                        'max-video-preview': -1,
                        'max-image-preview': 'large',
                        'max-snippet': -1,
                    },
                },
                verification: {
                    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
                    yandex: 'ff703971283d110e',
                    yahoo: '0A67349B8CD11BF71173B38572028507',
                },
            };
        })(),
        overview: {
            clientBackground: raw.overview?.clientBackground || '',
            projectScope: raw.overview?.projectScope || '',
            teamSize: raw.overview?.teamSize || '',
            timeline: raw.overview?.timeline || '',
        },
        challenge: {
            title: raw.challenge?.title || '',
            description: raw.challenge?.description || '',
            keyIssues: raw.challenge?.keyIssues || [],
            businessImpact: raw.challenge?.businessImpact || '',
        },
        solution: {
            title: raw.solution?.title || '',
            description: raw.solution?.description || '',
            approach: raw.solution?.approach || [],
            methodology: raw.solution?.methodology || '',
            keyStrategies: raw.solution?.keyStrategies || [],
        },
        results: {
            bugReduction: raw.results?.bugReduction || '',
            performanceImprovement: raw.results?.performanceImprovement || '',
            roi: raw.results?.roi || '',
            additionalMetrics: (raw.results?.additionalMetrics || []).map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (m: any) => ({ label: m.label || '', value: m.value || '' })
            ),
        },
        technologies: (raw.technologies || []).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (t: any) => ({ name: t.name || '', link: t.link || '#' })
        ),
        testimonial: {
            quote: raw.testimonial?.quote || '',
            author: raw.testimonial?.author || '',
            role: raw.testimonial?.role || '',
            company: raw.testimonial?.company || '',
            rating: raw.testimonial?.rating || 5,
        },
        timeline: (raw.timeline || []).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (t: any) => ({
                phase: t.phase || '',
                duration: t.duration || '',
                activities: t.activities || [],
            })
        ),
        keyTakeaways: raw.keyTakeaways || [],
        nextSteps: raw.nextSteps || [],
    };
}

// --- Case Study Data Fetching Functions ---

export async function sanityGetAllCaseStudies(): Promise<CaseStudy[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawData: any[] = await client.fetch(queries.allCaseStudiesQuery);
    return rawData.map(adaptSanityCaseStudy);
}

export async function sanityGetCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const raw = await client.fetch(queries.caseStudyBySlugQuery, { slug });
    return raw ? adaptSanityCaseStudy(raw) : null;
}

export async function sanityGetAllCaseStudySlugs(): Promise<string[]> {
    return await client.fetch(queries.caseStudySlugsQuery);
}

export async function sanityGetRelatedCaseStudies(
    currentSlug: string,
    limit: number = 3
): Promise<CaseStudy[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawData: any[] = await client.fetch(queries.relatedCaseStudiesQuery, { slug: currentSlug, limit });
    return rawData.map(adaptSanityCaseStudy);
}

// =============================================
// Job Posting Types & Adapters
// =============================================

export interface SanityJobOpening {
    id: number;
    title: string;
    slug: string;
    location: string;
    type: string;
    experience: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: any;
    skills: string[];
    badges?: string[];
    icon?: string;
    color?: string;
    salary?: string;
    department?: string;
    // ISO 8601 timestamps from Sanity (used by F-40 JobPosting JSON-LD
    // builder for datePosted / validThrough). Optional so existing UI
    // code that doesn't need them keeps compiling.
    createdAt?: string;
    updatedAt?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adaptSanityJobPosting(raw: any, index: number): SanityJobOpening {
    return {
        id: index + 1,
        title: raw.title || '',
        slug: raw.slug?.current || '',
        location: raw.location || '',
        type: raw.type || '',
        experience: raw.experience || '',
        description: raw.description || '',
        skills: raw.skills || [],
        badges: raw.badges || [],
        icon: raw.icon || 'bug',
        color: raw.color || 'from-green-400 to-green-600',
        salary: raw.salary || undefined,
        department: raw.department || undefined,
        createdAt: raw._createdAt || undefined,
        updatedAt: raw._updatedAt || undefined,
    };
}

// --- Job Posting Data Fetching Functions ---

export async function sanityGetAllJobOpenings(): Promise<SanityJobOpening[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawData: any[] = await client.fetch(queries.allJobPostingsQuery);
    return rawData.map((raw, index) => adaptSanityJobPosting(raw, index));
}

export async function sanityGetJobOpeningBySlug(slug: string): Promise<SanityJobOpening | null> {
    const raw = await client.fetch(queries.jobPostingBySlugQuery, { slug });
    return raw ? adaptSanityJobPosting(raw, 0) : null;
}

