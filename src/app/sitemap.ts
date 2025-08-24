import { MetadataRoute } from 'next';
import { getPosts, WordPressPost } from '@/lib/wordpress-graphql';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://testriq.com';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Service pages
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
  ].map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Solution pages
  const solutionPages = [
    'e-commerce-testing-services',
    'e-learning-testing-services',
    'healthcare-testing-services',
    'gaming-app-testing-services',
  ].map(solution => ({
    url: `${baseUrl}/${solution}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Get all blog posts using GraphQL pagination
  let allPosts: WordPressPost[] = [];
  let hasNextPage = true;
  let endCursor: string | undefined = undefined;

  while (hasNextPage) {
    const { posts, pageInfo } = await getPosts(100, endCursor); // Fetch 100 posts at a time
    allPosts = allPosts.concat(posts);
    hasNextPage = pageInfo.hasNextPage;
    endCursor = pageInfo.endCursor;
  }

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...solutionPages, ...blogPosts];
}
