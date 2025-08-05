// src/lib/wordpress.ts

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
    'version-history': Array<{ count: number; href: string }>;
    'predecessor-version': Array<{ id: number; href: string }>;
    'wp:attachment': Array<{ href: string }>;
    'wp:term': Array<{ taxonomy: string; embeddable: boolean; href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    'wp:post_type': Array<{ href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
}

const API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!API_URL) {
  throw new Error('WordPress API URL is not defined in environment variables');
}

// Fetch all posts with pagination support
export async function getPosts(page: number = 1, perPage: number = 10): Promise<{
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
}> {
  try {
    const response = await fetch(
      `${API_URL}/posts?page=${page}&per_page=${perPage}&_embed`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');

    return {
      posts,
      totalPages,
      totalPosts,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      posts: [],
      totalPages: 1,
      totalPosts: 0,
    };
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${API_URL}/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

// Fetch posts by category
export async function getPostsByCategory(
  categorySlug: string,
  page: number = 1,
  perPage: number = 10
): Promise<{
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
  category: WordPressCategory | null;
}> {
  try {
    // First, get the category ID by slug
    const categoryResponse = await fetch(`${API_URL}/categories?slug=${categorySlug}`);
    const categories = await categoryResponse.json();
    const category = categories.length > 0 ? categories[0] : null;

    if (!category) {
      return {
        posts: [],
        totalPages: 1,
        totalPosts: 0,
        category: null,
      };
    }

    // Then fetch posts for this category
    const response = await fetch(
      `${API_URL}/posts?categories=${category.id}&page=${page}&per_page=${perPage}&_embed`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts by category: ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');

    return {
      posts,
      totalPages,
      totalPosts,
      category,
    };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return {
      posts: [],
      totalPages: 1,
      totalPosts: 0,
      category: null,
    };
  }
}

// Fetch all categories
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch featured media for a post
export async function getFeaturedMedia(mediaId: number): Promise<WordPressMedia | null> {
  if (!mediaId) return null;

  try {
    const response = await fetch(`${API_URL}/media/${mediaId}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching featured media:', error);
    return null;
  }
}

// Helper function to extract featured image URL from embedded data
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  if (post._embedded && post._embedded['wp:featuredmedia']) {
    const featuredMedia = post._embedded['wp:featuredmedia'][0];
    return featuredMedia?.source_url || null;
  }
  return null;
}

// Helper function to extract author name from embedded data
export function getAuthorName(post: WordPressPost): string {
  if (post._embedded && post._embedded.author) {
    const author = post._embedded.author[0];
    return author?.name || 'Unknown Author';
  }
  return 'Unknown Author';
}

// Helper function to extract category names from embedded data
export function getCategoryNames(post: WordPressPost): string[] {
  if (post._embedded && post._embedded['wp:term']) {
    const terms = post._embedded['wp:term'][0]; // Categories are the first term type
    return terms ? terms.map((term: any) => term.name) : [];
  }
  return [];
}

// Helper function to strip HTML tags from content
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Helper function to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}