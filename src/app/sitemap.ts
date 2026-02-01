import { MetadataRoute } from 'next';
import {
  sanityGetPosts,
  sanityGetCategories,
  sanityGetTags,
  sanityGetPages
} from '@/lib/sanity-data-adapter';
import { getAllCities, CityData } from '@/app/lib/CityData';
import { getAllCaseStudies, CaseStudy } from '@/app/lib/caseStudies';

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
      return 'monthly';
    case 'case-study':
      return 'yearly';
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
      return 0.7;
    case 'case-study':
      return 0.6;
    case 'page':
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
    // Static Next.js pages
    const staticNextJSPages = [
      { slug: '', title: 'Home' },
      { slug: 'about-us', title: 'About Us' },
      { slug: 'our-team', title: 'Our Team' },
      { slug: 'careers', title: 'Careers' },
      { slug: 'contact-us', title: 'Contact Us' },
      { slug: 'case-studies', title: 'Case Studies' },
      { slug: 'technology-stack', title: 'Tools' },
      { slug: 'roi-calculator', title: 'ROI Calculator' },
      { slug: 'locations-we-serve', title: 'Locations We Serve' },
      { slug: 'privacy-policy', title: 'Privacy Policy' },
      { slug: 'terms-of-service', title: 'Terms of Service' },
      { slug: 'cookies-policy', title: 'Cookies Policy' },
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
      'automation-testing-services',
      'corporate-qa-training',
      'data-analysis-services',
      'dating-app-certification',
      'exploratory-testing',
      'launchfast-qa',
      'manual-testing-services',
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

    // Solution pages
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

    // Dynamic City Pages
    const allCities = getAllCities();
    const cityPages = allCities.map((city: CityData) => ({
      url: `${baseUrl}/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('city'),
      priority: getPriority('city'),
    }));

    // Dynamic Case Study Pages
    const allCaseStudies = getAllCaseStudies();
    const caseStudyPages = allCaseStudies.map((caseStudy: CaseStudy) => ({
      url: `${baseUrl}/${caseStudy.slug}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('case-study'),
      priority: getPriority('case-study'),
      images: caseStudy.image ? [caseStudy.image.startsWith('http') ? caseStudy.image : `${baseUrl}${caseStudy.image}`] : undefined,
    }));

    // Sanity Pages
    const sanityPagesData = await sanityGetPages();
    const sanityPages = sanityPagesData.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(page.date || currentDate),
      changeFrequency: getChangeFrequency('page'),
      priority: getPriority('page', page.slug),
      images: page.image ? [page.image] : undefined,
    }));

    // Sanity Blog Posts
    const sanityPostsData = await sanityGetPosts();
    const blogPosts = sanityPostsData.map((post) => ({
      url: `${baseUrl}/blog/post/${post.slug}`,
      lastModified: new Date(post.modifiedISO || post.dateISO),
      changeFrequency: getChangeFrequency('post', post.modifiedISO),
      priority: getPriority('post'),
      images: post.image ? [post.image] : undefined,
    }));

    // Sanity Categories
    const sanityCategoriesData = await sanityGetCategories();
    const categoryPages = sanityCategoriesData.map((category) => ({
      url: `${baseUrl}/blog/category/${category.id}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('category'),
      priority: getPriority('category'),
    }));

    // Sanity Tags
    const sanityTagsData = await sanityGetTags();
    const tagPages = sanityTagsData.map((tag) => ({
      url: `${baseUrl}/blog/tag/${tag.slug}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency('tag'),
      priority: getPriority('tag'),
    }));

    // Combine all sitemap entries
    const allSitemapEntries = [
      ...staticPages,
      ...servicePages,
      ...solutionPages,
      ...cityPages,
      ...caseStudyPages,
      ...sanityPages,
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

    return allSitemapEntries;

  } catch (error) {
    console.error('Error generating sitemap:', error);
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