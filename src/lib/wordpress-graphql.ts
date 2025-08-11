// src/lib/wordpress-graphql.ts

export interface WordPressPost {
  id: string;
  databaseId: number;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
  modified: string;
  status: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
  author: {
    node: {
      name: string;
      slug: string;
      avatar: {
        url: string;
      };
    };
  };
  categories: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
      count: number;
    }>;
  };
  tags: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  };
}

export interface WordPressCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface WordPressPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface PostsResponse {
  posts: {
    nodes: WordPressPost[];
    pageInfo: WordPressPageInfo;
  };
}

export interface PostResponse {
  post: WordPressPost | null;
}

export interface CategoriesResponse {
  categories: {
    nodes: WordPressCategory[];
  };
}

const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

// Ensure GRAPHQL_URL is defined before proceeding
if (!GRAPHQL_URL) {
  throw new Error("WordPress GraphQL URL is not defined in environment variables");
}

// GraphQL query for fetching posts
const GET_POSTS_QUERY = `
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      nodes {
        id
        databaseId
        title
        content
        excerpt
        slug
        date
        modified
        status
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
            count
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

// GraphQL query for fetching a single post by slug
const GET_POST_BY_SLUG_QUERY = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      content
      excerpt
      slug
      date
      modified
      status
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          id
          name
          slug
          count
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
`;

// GraphQL query for fetching posts by category
const GET_POSTS_BY_CATEGORY_QUERY = `
  query GetPostsByCategory($categorySlug: String!, $first: Int, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH, categoryName: $categorySlug }) {
      nodes {
        id
        databaseId
        title
        content
        excerpt
        slug
        date
        modified
        status
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
            count
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

// GraphQL query for fetching categories
const GET_CATEGORIES_QUERY = `
  query GetCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        description
        count
      }
    }
  }
`;

// Helper function to make GraphQL requests
async function graphqlRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  try {
    // Use a non-null assertion or type guard if TypeScript still complains
    // However, the check above should be sufficient.
    const response = await fetch(GRAPHQL_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  } catch (error) {
    console.error('GraphQL request error:', error);
    throw error;
  }
}

// Fetch all posts with pagination support
export async function getPosts(first: number = 10, after?: string): Promise<{
  posts: WordPressPost[];
  pageInfo: WordPressPageInfo;
}> {
  try {
    const data = await graphqlRequest<PostsResponse>(GET_POSTS_QUERY, {
      first,
      after,
    });

    return {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      posts: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
    };
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const data = await graphqlRequest<PostResponse>(GET_POST_BY_SLUG_QUERY, {
      slug,
    });

    return data.post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

// Fetch posts by category
export async function getPostsByCategory(
  categorySlug: string,
  first: number = 10,
  after?: string
): Promise<{
  posts: WordPressPost[];
  pageInfo: WordPressPageInfo;
  category: WordPressCategory | null;
}> {
  try {
    // First, get the category information
    const categoriesData = await graphqlRequest<CategoriesResponse>(GET_CATEGORIES_QUERY);
    const category = categoriesData.categories.nodes.find(cat => cat.slug === categorySlug) || null;

    // Then fetch posts for this category
    const data = await graphqlRequest<PostsResponse>(GET_POSTS_BY_CATEGORY_QUERY, {
      categorySlug,
      first,
      after,
    });

    return {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
      category,
    };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return {
      posts: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
      category: null,
    };
  }
}

// Fetch all categories
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const data = await graphqlRequest<CategoriesResponse>(GET_CATEGORIES_QUERY);
    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Helper function to extract featured image URL
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  return post.featuredImage?.node?.sourceUrl || null;
}

// Helper function to get author name
export function getAuthorName(post: WordPressPost): string {
  return post.author?.node?.name || 'Unknown Author';
}

// Helper function to get category names
export function getCategoryNames(post: WordPressPost): string[] {
  return post.categories?.nodes?.map(category => category.name) || [];
}

// Helper function to get tag names
export function getTagNames(post: WordPressPost): string[] {
  return post.tags?.nodes?.map(tag => tag.name) || [];
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

// Helper function to format date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

