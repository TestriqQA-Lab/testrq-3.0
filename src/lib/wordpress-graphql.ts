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

export interface WordPressTag {
  id: string;
  name: string;
  slug: string;
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

export interface TagsResponse {
  tags: {
    nodes: WordPressTag[];
  };
}

const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

// Ensure GRAPHQL_URL is defined before proceeding
if (!GRAPHQL_URL) {
  throw new Error("WordPress GraphQL URL is not defined in environment variables");
}

// Helper function to make GraphQL requests
async function graphqlRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  try {
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

// GraphQL query for fetching posts by tag
const GET_POSTS_BY_TAG_QUERY = `
  query GetPostsByTag($tagSlug: String!, $first: Int, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH, tag: $tagSlug }) {
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
    categories(first: 100, where: { hideEmpty: true }) {
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

// GraphQL query for fetching tags
const GET_TAGS_QUERY = `
  query GetTags {
    tags(first: 100, where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

// GraphQL query for searching posts
const SEARCH_POSTS_QUERY = `
  query SearchPosts($search: String!, $first: Int) {
    posts(first: $first, where: { status: PUBLISH, search: $search }) {
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
    }
  }
`;

// GraphQL query for fetching related posts based on category and tags
const GET_RELATED_POSTS_QUERY = `
  query GetRelatedPosts($categorySlug: String!, $tagSlugs: [String!], $excludeId: ID!, $first: Int) {
    posts(
      first: $first, 
      where: { 
        status: PUBLISH, 
        categoryName: $categorySlug,
        notIn: [$excludeId]
      }
    ) {
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
    }
  }
`;

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

// Fetch posts by tag
export async function getPostsByTag(
  tagSlug: string,
  first: number = 10,
  after?: string
): Promise<{
  posts: WordPressPost[];
  pageInfo: WordPressPageInfo;
  tag: WordPressTag | null;
}> {
  try {
    // First, get the tag information
    const tagsData = await graphqlRequest<TagsResponse>(GET_TAGS_QUERY);
    const tag = tagsData.tags.nodes.find(t => t.slug === tagSlug) || null;

    // Then fetch posts for this tag
    const data = await graphqlRequest<PostsResponse>(GET_POSTS_BY_TAG_QUERY, {
      tagSlug,
      first,
      after,
    });

    return {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
      tag,
    };
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return {
      posts: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
      tag: null,
    };
  }
}

// Fetch related posts based on category and tags
export async function getRelatedPosts(
  currentPost: WordPressPost,
  first: number = 6
): Promise<WordPressPost[]> {
  try {
    const primaryCategory = currentPost.categories?.nodes?.[0];
    const tagSlugs = currentPost.tags?.nodes?.map(tag => tag.slug) || [];

    if (!primaryCategory) {
      // If no category, just get recent posts
      const data = await getPosts(first);
      return data.posts.filter(post => post.id !== currentPost.id);
    }

    const data = await graphqlRequest<PostsResponse>(GET_RELATED_POSTS_QUERY, {
      categorySlug: primaryCategory.slug,
      tagSlugs,
      excludeId: currentPost.id,
      first,
    });

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
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

// Fetch all tags
export async function getTags(): Promise<WordPressTag[]> {
  try {
    const data = await graphqlRequest<TagsResponse>(GET_TAGS_QUERY);
    return data.tags.nodes;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

// Search posts by query
export async function searchPosts(searchQuery: string, first: number | null = 100): Promise<WordPressPost[]> {
  try {
    const variables: { search: string; first?: number } = { search: searchQuery };
    if (first !== null) {
      variables.first = first;
    }

    const data = await graphqlRequest<PostsResponse>(SEARCH_POSTS_QUERY, variables);

    return data.posts.nodes;
  } catch (error) {
    console.error('Error searching posts:', error);
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

// Helper function to extract excerpt from content if excerpt is empty
export function getPostExcerpt(post: WordPressPost, maxLength: number = 160): string {
  if (post.excerpt && post.excerpt.trim()) {
    return stripHtmlTags(post.excerpt);
  }
  
  // If no excerpt, create one from content
  const cleanContent = stripHtmlTags(post.content);
  return truncateText(cleanContent, maxLength);
}

// Fetch total post count by fetching all posts and counting them
export async function getTotalPostCount(): Promise<number> {
  try {
    let totalCount = 0;
    let hasNextPage = true;
    let after: string | undefined = undefined;

    while (hasNextPage) {
      const data = await getPosts(100, after); // Fetch 100 posts at a time
      totalCount += data.posts.length;
      hasNextPage = data.pageInfo.hasNextPage;
      after = data.pageInfo.endCursor;
      
      // Safety break to avoid infinite loops
      if (totalCount > 10000) break;
    }

    return totalCount;
  } catch (error) {
    console.error('Error fetching total post count:', error);
    return 0;
  }
}

// Fetch total category count by fetching all categories and counting them
export async function getTotalCategoryCount(): Promise<number> {
  try {
    const categories = await getCategories();
    return categories.length;
  } catch (error) {
    console.error('Error fetching total category count:', error);
    return 0;
  }
}

// New function to get all posts without pagination limit
export async function getAllPosts(): Promise<WordPressPost[]> {
  let allPosts: WordPressPost[] = [];
  let hasNextPage = true;
  let after: string | undefined = undefined;

  try {
    while (hasNextPage) {
      const data = await getPosts(100, after); // Fetch 100 posts at a time
      allPosts = allPosts.concat(data.posts);
      hasNextPage = data.pageInfo.hasNextPage;
      after = data.pageInfo.endCursor;

      // Safety break to avoid infinite loops or excessive memory usage
      if (allPosts.length > 10000) {
        console.warn('Reached 10000 posts, breaking to prevent infinite loop.');
        break;
      }
    }
    return allPosts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
}

// Extension to wordpress-graphql.ts to add WordPress pages support
// Add these interfaces and functions to your existing wordpress-graphql.ts file

export interface WordPressPage {
  id: string;
  databaseId: number;
  title: string;
  content: string;
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
}

export interface WordPressPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface PagesResponse {
  pages: {
    nodes: WordPressPage[];
    pageInfo: WordPressPageInfo;
  };
}

export interface PageResponse {
  page: WordPressPage | null;
}

// GraphQL query for fetching WordPress pages
const GET_PAGES_QUERY = `
  query GetPages($first: Int, $after: String) {
    pages(first: $first, after: $after, where: { status: PUBLISH }) {
      nodes {
        id
        databaseId
        title
        content
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

// GraphQL query for fetching a single page by slug
const GET_PAGE_BY_SLUG_QUERY = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      databaseId
      title
      content
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
    }
  }
`;

// Fetch all WordPress pages with pagination support
export async function getPages(first: number = 10, after?: string): Promise<{
  pages: WordPressPage[];
  pageInfo: WordPressPageInfo;
}> {
  try {
    const data = await graphqlRequest<PagesResponse>(GET_PAGES_QUERY, {
      first,
      after,
    });

    return {
      pages: data.pages.nodes,
      pageInfo: data.pages.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching pages:', error);
    return {
      pages: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
    };
  }
}

// Fetch a single WordPress page by slug
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const data = await graphqlRequest<PageResponse>(GET_PAGE_BY_SLUG_QUERY, {
      slug,
    });

    return data.page;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
}

// Fetch all WordPress pages without pagination limit
export async function getAllPages(): Promise<WordPressPage[]> {
  let allPages: WordPressPage[] = [];
  let hasNextPage = true;
  let after: string | undefined = undefined;

  try {
    while (hasNextPage) {
      const data = await getPages(100, after); // Fetch 100 pages at a time
      allPages = allPages.concat(data.pages);
      hasNextPage = data.pageInfo.hasNextPage;
      after = data.pageInfo.endCursor;

      // Safety break to avoid infinite loops or excessive memory usage
      if (allPages.length > 1000) {
        console.warn('Reached 1000 pages, breaking to prevent infinite loop.');
        break;
      }
    }
    return allPages;
  } catch (error) {
    console.error('Error fetching all pages:', error);
    return [];
  }
}

// Helper function to get page excerpt
export function getPageExcerpt(page: WordPressPage, maxLength: number = 160): string {
  // Create excerpt from content since pages typically don't have excerpts
  const cleanContent = stripHtmlTags(page.content);
  return truncateText(cleanContent, maxLength);
}

// Helper function to extract featured image URL from page
export function getPageFeaturedImageUrl(page: WordPressPage): string | null {
  return page.featuredImage?.node?.sourceUrl || null;
}




