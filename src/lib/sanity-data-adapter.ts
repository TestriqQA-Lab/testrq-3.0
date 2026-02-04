
import { client, urlFor } from './sanity';
import { groq } from "next-sanity";
import * as queries from './sanity-queries';
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
    authorImage: string;
    authorBio: string;
    date: string;
    dateISO: string;
    modifiedISO: string;
    readTime: string;
    image: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any;
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

// Helper to estimate read time for Portable Text or String
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function estimateReadTime(body: any): string {
    if (!body) return '1 min read';

    let text = '';
    if (typeof body === 'string') {
        text = body;
    } else if (Array.isArray(body)) {
        // Simple extraction from Portable Text
        text = body
            .map(block => {
                if (block._type !== 'block' || !block.children) return '';
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return block.children.map((child: any) => child.text).join(' ');
            })
            .join(' ');
    } else {
        text = JSON.stringify(body);
    }

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
            featured: false,
            trending: false,
            views: '0',
            likes: 0,
            shares: 0,
            tags: [],
            tagsData: [],
            seo: { title: '', description: '', keywords: '' }
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
        authorImage: sanityPost.author?.image ? urlFor(sanityPost.author.image).width(60).height(60).url() : 'https://placehold.co/60x60/png',
        authorImageRaw: sanityPost.author?.image || null,
        authorBio: sanityPost.author?.bio || 'QA Expert',
        date: new Date(sanityPost.publishedAt || new Date().toISOString()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }),
        dateISO: sanityPost.publishedAt || new Date().toISOString(),
        modifiedISO: sanityPost._updatedAt || new Date().toISOString(),
        readTime: estimateReadTime(sanityPost.body || sanityPost.excerpt),
        image: sanityPost.mainImage ? urlFor(sanityPost.mainImage).width(800).height(500).url() : 'https://placehold.co/800x500/png',
        mainImage: sanityPost.mainImage || null,
        featured: generateConsistentValue(sanityPost._id + 'feat', 10) < 2,
        trending: generateConsistentValue(sanityPost._id + 'trend', 10) < 3,
        views,
        likes,
        shares,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tags: sanityPost.tags?.filter((t: any) => t).map((t: any) => t.title) || [],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tagsData: sanityPost.tags?.filter((t: any) => t).map((t: any) => ({ name: t.title, slug: t.slug?.current })) || [],
        seo: {
            title: sanityPost.seo?.metaTitle || sanityPost.title,
            description: sanityPost.seo?.metaDescription || sanityPost.excerpt,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            keywords: sanityPost.tags?.map((t: any) => t.title).join(', ') || ''
        }
    };
}

// --- Data Fetching Functions ---

export async function sanityGetPosts(limit?: number): Promise<Post[]> {
    const query = limit ? groq`${queries.postsQuery}[0...${limit}]` : queries.postsQuery;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = await client.fetch(query);
    return posts.map(adaptSanityPost);
}

export async function sanityGetPostBySlug(slug: string) {
    console.log(`Fetching post for slug: ${slug}`);
    try {
        const post = await client.fetch(queries.postBySlugQuery, { slug });
        console.log(`[DEBUG] Raw Sanity Post Data for ${slug}:`, JSON.stringify(post, null, 2));
        console.log(`Sanity fetch result for ${slug}:`, post ? "Found" : "Not Found");
        return post ? adaptSanityPost(post) : null;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}

export async function sanityGetCategories(): Promise<Category[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const categories: any[] = await client.fetch(queries.categoriesQuery);
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
        image: sanityPage.mainImage ? urlFor(sanityPage.mainImage).url() : null,
        seo: {
            title: sanityPage.seo?.metaTitle || sanityPage.title || '',
            description: sanityPage.seo?.metaDescription || '',
            keywords: ''
        }
    };
}

export async function sanityGetAdaptedCategoryData(categorySlug: string) {
    const category = await client.fetch(queries.categoryBySlugQuery, { slug: categorySlug });
    if (!category) return null;

    const posts = await client.fetch(queries.postsByCategoryQuery, { categorySlug });

    return {
        category: adaptSanityCategory(category),
        posts: posts.map(adaptSanityPost),
        pageInfo: { hasNextPage: false } // Basic support for now
    };
}

export async function sanitySearchPosts(term: string): Promise<Post[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: any[] = await client.fetch(queries.searchPostsQuery, { searchTerm: term });
    return posts.map(adaptSanityPost);
}

export async function sanityGetPostsByTag(tagSlug: string) {
    // Determine tag details - typically we'd fetch the tag too or just use the slug for the title fallback
    // For full parity we need the tag object. 
    // Let's assume we can fetch the tag or infer it. 
    // The WP version returns { tag: ..., posts: ... }

    // Let's verify queries available. We have tagsQuery but not tagBySlugQuery.
    // Let's create a quick query here or reuse.
    const tagQuery = `*[_type == "tag" && slug.current == $tagSlug][0]`;
    const tag = await client.fetch(tagQuery, { tagSlug });

    if (!tag) return { tag: null, posts: [] };

    const posts = await client.fetch(queries.postsByTagQuery, { tagSlug });

    return {
        tag: {
            id: tag.slug.current,
            name: tag.title,
            slug: tag.slug.current,
            description: `Explore all articles tagged with ${tag.title}.`,
            count: posts.length
        },
        posts: posts.map(adaptSanityPost) // Return adapted posts directly
    };
}

export async function sanityGetTags(): Promise<Tag[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tags: any[] = await client.fetch(queries.tagsQuery);
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
