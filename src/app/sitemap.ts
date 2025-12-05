import { MetadataRoute } from 'next';
import { getPosts, getCategories, getTags, WordPressPost, WordPressCategory, WordPressTag } from '@/lib/wordpress-graphql';
// Import the dynamic page data sources
import { getAllCities, CityData } from '@/app/lib/CityData';
import { getAllCaseStudies, CaseStudy } from '@/app/lib/caseStudies';

// Define interface for WordPress pages (to be added to wordpress-graphql.ts)
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

// Define interface for WordPress page response
export interface PagesResponse {
  pages: {
    nodes: WordPressPage[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
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

// Helper function to make GraphQL requests for pages
async function graphqlRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

  if (!GRAPHQL_URL) {
    throw new Error("WordPress GraphQL URL is not defined in environment variables");
  }

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

// Function to fetch all WordPress pages
async function getPages(first: number = 100, after?: string): Promise<{
  pages: WordPressPage[];
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; startCursor: string; endCursor: string; };
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

// Function to determine change frequency based on content type and last modified date
function getChangeFrequency(contentType: 'home' | 'page' | 'post' | 'category' | 'tag' | 'service' | 'solution' | 'city' | 'case-study', lastModified?: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  const now = new Date();
  const modifiedDate = lastModified ? new Date(lastModified) : now;
  const daysSinceModified = Math.floor((now.getTime() - modifiedDate.getTime()) / (1000 * 60 * 60 * 24));

  switch (contentType) {
    case 'home':
      return 'weekly';
    case 'post':
      return daysSinceModified < 30 ? 'weekly' : 'monthly';
    case 'category':
    case 'tag':
      return 'weekly';
    case 'service':
    case 'solution':
      return 'monthly';
    case 'city':
      return 'monthly'; // City pages are relatively stable
    case 'case-study':
      return 'yearly'; // Case studies are rarely updated once published
    case 'page':
    default:
      return daysSinceModified < 90 ? 'monthly' : 'yearly';
  }
}

// Function to determine priority based on content type and importance
function getPriority(contentType: 'home' | 'page' | 'post' | 'category' | 'tag' | 'service' | 'solution' | 'city' | 'case-study', slug?: string): number {
  switch (contentType) {
    case 'home':
      return 1.0;
    case 'service':
      return 0.9;
    case 'solution':
      return 0.8;
    case 'city':
      return 0.7; // City pages are important for local SEO
    case 'case-study':
      return 0.6; // Case studies are valuable for showcasing expertise
    case 'page':
      // Higher priority for important pages
      if (slug && ['about-us', 'contact-us', 'careers'].includes(slug)) {
        return 0.8;
      }
      return 0.7;
    case 'post':
      return 0.7;
    case 'category':
      return 0.6;
    case 'tag':
      return 0.5;
    default:
      return 0.5;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.testriq.com';
  const currentDate = new Date();

  try {
    // Static Next.js pages that are not managed in WordPress
    const staticNextJSPages = [
      // Core pages
      { slug: '', title: 'Home' },
      { slug: 'about-us', title: 'About Us' },
      { slug: 'our-team', title: 'Our Team' },
      { slug: 'careers', title: 'Careers' },
      { slug: 'contact-us', title: 'Contact Us' },
      { slug: 'case-studies', title: 'Case Studies' },
      { slug: 'technology-stack', title: 'Tools' },
      { slug: 'roi-calculator', title: 'ROI Calculator' },
      { slug: 'locations-we-serve', title: 'Locations We Serve' },

      // Legal pages
      { slug: 'privacy-policy', title: 'Privacy Policy' },
      { slug: 'terms-of-service', title: 'Terms of Service' },
      { slug: 'cookies-policy', title: 'Cookies Policy' },

      // Blog pages
      { slug: 'blog', title: 'Blog' },
      { slug: 'blog/categories', title: 'Blog Categories' },
      { slug: 'blog/search', title: 'Blog Search' },
    ];

    const staticPages = staticNextJSPages.map(page => ({
      url: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency(page.slug === '' ? 'home' : 'page'),
      priority: getPriority(page.slug === '' ? 'home' : 'page', page.slug),
    }));

    // Service pages (Next.js routes)
    const servicePages = [
      'web-application-testing-services',
      'mobile-application-testing',
      'api-testing',
      'desktop-application-testing-services',
      'ai-application-testing',
      'iot-device-testing-services',
      'etl-testing-services',
      'robotics-testing-services',
      'smart-device-testing-services',
      'automation-testing-services',
      'corporate-qa-training',
      'data-analysis-services',
      'dating-app-certification',
      'exploratory-testing',
      'launchfast-qa',
      'manual-testing',
      'matrimonial-apps-certification',
      'performance-testing-services',
      'qa-documentation-services',
      'regression-testing',
      'security-testing',
      'shopping-apps-certification',
      'software-testing-guide',
      'trading-apps-certification',
    ].map(service => ({
      url: `${baseUrl}/${service}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('service'),
      priority: getPriority('service'),
    }));

    // Solution pages (Next.js routes)
    const solutionPages = [
      'e-commerce-testing-services',
      'e-learning-testing-services',
      'healthcare-testing-services',
      'gaming-app-testing-services',
      'banking-finance-industry-testing-services',
      'iot-appliances-and-apps-testing-services',
      'telecommunications-testing-services',
    ].map(solution => ({
      url: `${baseUrl}/${solution}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('solution'),
      priority: getPriority('solution'),
    }));

    // Dynamic City Pages - NEW ADDITION
    let cityPages: MetadataRoute.Sitemap = [];
    try {
      const allCities = getAllCities();
      console.log(`Found ${allCities.length} cities for sitemap`);

      cityPages = allCities.map((city: CityData) => ({
        url: `${baseUrl}/${city.slug}`,
        lastModified: currentDate,
        changeFrequency: getChangeFrequency('city'),
        priority: getPriority('city'),
      }));
    } catch (error) {
      console.error('Error fetching city data for sitemap:', error);
    }

    // Dynamic Case Study Pages - NEW ADDITION
    let caseStudyPages: MetadataRoute.Sitemap = [];
    try {
      const allCaseStudies = getAllCaseStudies();
      console.log(`Found ${allCaseStudies.length} case studies for sitemap`);

      caseStudyPages = allCaseStudies.map((caseStudy: CaseStudy) => ({
        url: `${baseUrl}/${caseStudy.slug}`,
        lastModified: currentDate,
        changeFrequency: getChangeFrequency('case-study'),
        priority: getPriority('case-study'),
        images: caseStudy.image ? [caseStudy.image.startsWith('http') ? caseStudy.image : `${baseUrl}${caseStudy.image}`] : undefined,
      }));
    } catch (error) {
      console.error('Error fetching case study data for sitemap:', error);
    }

    // Fetch WordPress pages dynamically (if any exist)
    let allWordPressPages: WordPressPage[] = [];
    let hasNextPagePages = true;
    let endCursorPages: string | undefined = undefined;

    while (hasNextPagePages) {
      try {
        const { pages, pageInfo } = await getPages(100, endCursorPages);
        allWordPressPages = allWordPressPages.concat(pages);
        hasNextPagePages = pageInfo.hasNextPage;
        endCursorPages = pageInfo.endCursor;

        // Safety break to prevent infinite loops
        if (allWordPressPages.length > 1000) {
          console.warn('Reached 1000 WordPress pages, breaking to prevent infinite loop.');
          break;
        }
      } catch (error) {
        console.error('Error fetching WordPress pages:', error);
        break;
      }
    }

    const wordpressPages = allWordPressPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(page.modified || page.date),
      changeFrequency: getChangeFrequency('page', page.modified),
      priority: getPriority('page', page.slug),
      images: page.featuredImage?.node?.sourceUrl ? [page.featuredImage.node.sourceUrl] : undefined,
    }));

    // Get all blog posts using GraphQL pagination
    let allPosts: WordPressPost[] = [];
    let hasNextPagePosts = true;
    let endCursorPosts: string | undefined = undefined;

    while (hasNextPagePosts) {
      try {
        const { posts, pageInfo } = await getPosts(100, endCursorPosts);
        allPosts = allPosts.concat(posts);
        hasNextPagePosts = pageInfo.hasNextPage;
        endCursorPosts = pageInfo.endCursor;

        // Safety break to prevent infinite loops
        if (allPosts.length > 10000) {
          console.warn('Reached 10000 blog posts, breaking to prevent infinite loop.');
          break;
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        break;
      }
    }

    const blogPosts = allPosts.map((post) => ({
      url: `${baseUrl}/blog/post/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: getChangeFrequency('post', post.modified),
      priority: getPriority('post'),
      images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : undefined,
    }));

    // Get all categories
    let allCategories: WordPressCategory[] = [];
    try {
      allCategories = await getCategories();
    } catch (error) {
      console.error('Error fetching categories:', error);
    }

    const categoryPages = allCategories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('category'),
      priority: getPriority('category'),
    }));

    // Get all tags
    let allTags: WordPressTag[] = [];
    try {
      allTags = await getTags();
    } catch (error) {
      console.error('Error fetching tags:', error);
    }

    const tagPages = allTags.map((tag) => ({
      url: `${baseUrl}/blog/tag/${tag.slug}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('tag'),
      priority: getPriority('tag'),
    }));

    // Combine all sitemap entries - INCLUDING THE NEW DYNAMIC PAGES
    const allSitemapEntries = [
      ...staticPages,
      ...servicePages,
      ...solutionPages,
      ...cityPages,        // NEW: City pages from dynamic route
      ...caseStudyPages,   // NEW: Case study pages from dynamic route
      ...wordpressPages,
      ...blogPosts,
      ...categoryPages,
      ...tagPages,
    ];

    // Sort by priority (highest first) and then by lastModified (newest first)
    allSitemapEntries.sort((a, b) => {
      if (b.priority! !== a.priority!) {
        return b.priority! - a.priority!;
      }
      return new Date(b.lastModified!).getTime() - new Date(a.lastModified!).getTime();
    });

    console.log(`Generated sitemap with ${allSitemapEntries.length} URLs:`, {
      staticPages: staticPages.length,
      servicePages: servicePages.length,
      solutionPages: solutionPages.length,
      cityPages: cityPages.length,           // NEW: Log city pages count
      caseStudyPages: caseStudyPages.length, // NEW: Log case study pages count
      wordpressPages: wordpressPages.length,
      blogPosts: blogPosts.length,
      categoryPages: categoryPages.length,
      tagPages: tagPages.length,
    });

    return allSitemapEntries;

  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Return minimal sitemap in case of error
    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
    ];
  }
}