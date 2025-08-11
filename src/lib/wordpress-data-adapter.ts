// src/lib/wordpress-data-adapter.ts
import { WordPressPost, WordPressCategory, getPostsByCategory } from './wordpress-graphql';

// Define the interfaces that your existing components expect
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
  id: string; // Changed to string to match WordPress slug
  slug: string; // Add explicit slug property for URL generation
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  trending: boolean;
  views: string;
  likes: number;
  shares: number;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Category color mapping based on category names
const categoryColorMap: Record<string, string> = {
  'test automation': 'from-blue-500 to-blue-600',
  'automation': 'from-blue-500 to-blue-600',
  'selenium': 'from-blue-500 to-blue-600',
  'performance testing': 'from-green-500 to-green-600',
  'performance': 'from-green-500 to-green-600',
  'load testing': 'from-green-500 to-green-600',
  'security testing': 'from-red-500 to-red-600',
  'security': 'from-red-500 to-red-600',
  'mobile testing': 'from-purple-500 to-purple-600',
  'mobile': 'from-purple-500 to-purple-600',
  'api testing': 'from-indigo-500 to-indigo-600',
  'api': 'from-indigo-500 to-indigo-600',
  'qa': 'from-yellow-500 to-yellow-600',
  'testing': 'from-gray-500 to-gray-600',
  'default': 'from-gray-500 to-gray-600'
};

// Category icon mapping based on category names
const categoryIconMap: Record<string, string> = {
  'test automation': '🤖',
  'automation': '🤖',
  'selenium': '🤖',
  'performance testing': '⚡',
  'performance': '⚡',
  'load testing': '⚡',
  'security testing': '🔒',
  'security': '🔒',
  'mobile testing': '📱',
  'mobile': '📱',
  'api testing': '🔗',
  'api': '🔗',
  'qa': '✅',
  'testing': '🧪',
  'default': '📝'
};

// Featured tools mapping based on category names
const categoryToolsMap: Record<string, string[]> = {
  'test automation': ['Selenium WebDriver', 'Cypress', 'Playwright', 'TestComplete', 'Robot Framework'],
  'automation': ['Selenium WebDriver', 'Cypress', 'Playwright', 'TestComplete', 'Robot Framework'],
  'selenium': ['Selenium WebDriver', 'Selenium Grid', 'WebDriverIO', 'Selenide'],
  'performance testing': ['Apache JMeter', 'LoadRunner', 'K6', 'Gatling', 'BlazeMeter'],
  'performance': ['Apache JMeter', 'LoadRunner', 'K6', 'Gatling', 'BlazeMeter'],
  'load testing': ['Apache JMeter', 'LoadRunner', 'K6', 'Gatling', 'BlazeMeter'],
  'security testing': ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Veracode', 'Checkmarx'],
  'security': ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Veracode', 'Checkmarx'],
  'mobile testing': ['Appium', 'Espresso', 'XCUITest', 'Detox', 'TestComplete Mobile'],
  'mobile': ['Appium', 'Espresso', 'XCUITest', 'Detox', 'TestComplete Mobile'],
  'api testing': ['Postman', 'REST Assured', 'SoapUI', 'Insomnia', 'Newman'],
  'api': ['Postman', 'REST Assured', 'SoapUI', 'Insomnia', 'Newman'],
  'default': ['Testing Tools', 'QA Tools', 'Automation Tools']
};

// Function to get category color based on name
function getCategoryColor(categoryName: string): string {
  const lowerName = categoryName.toLowerCase();
  for (const [key, color] of Object.entries(categoryColorMap)) {
    if (lowerName.includes(key)) {
      return color;
    }
  }
  return categoryColorMap.default;
}

// Function to get category icon based on name
function getCategoryIcon(categoryName: string): string {
  const lowerName = categoryName.toLowerCase();
  for (const [key, icon] of Object.entries(categoryIconMap)) {
    if (lowerName.includes(key)) {
      return icon;
    }
  }
  return categoryIconMap.default;
}

// Function to get category tools based on name
function getCategoryTools(categoryName: string): string[] {
  const lowerName = categoryName.toLowerCase();
  for (const [key, tools] of Object.entries(categoryToolsMap)) {
    if (lowerName.includes(key)) {
      return tools;
    }
  }
  return categoryToolsMap.default;
}

// Function to estimate read time based on content length
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Function to generate random but consistent values based on post ID
function generateConsistentValue(seed: number, max: number): number {
  // Simple hash function to generate consistent pseudo-random values
  let hash = seed;
  hash = ((hash << 5) - hash + seed) & 0xffffffff;
  hash = Math.abs(hash);
  return hash % max;
}

// Adapter function to convert WordPress category to expected Category interface
export function adaptWordPressCategory(wpCategory: WordPressCategory): Category {
  const color = getCategoryColor(wpCategory.name);
  const icon = getCategoryIcon(wpCategory.name);
  const tools = getCategoryTools(wpCategory.name);
  
  // Generate consistent subscriber count based on post count
  const baseSubscribers = Math.max(wpCategory.count * 50, 100);
  const subscribers = baseSubscribers + generateConsistentValue(parseInt(wpCategory.id), 500);

  return {
    id: wpCategory.slug,
    name: wpCategory.name,
    description: wpCategory.description || `Comprehensive guides and tutorials on ${wpCategory.name.toLowerCase()}.`,
    color,
    icon,
    postCount: wpCategory.count,
    subscribers,
    tags: [wpCategory.name, 'Testing', 'QA', 'Software Testing'],
    featuredTools: tools,
    seo: {
      title: `${wpCategory.name} Articles & Tutorials | Testriq Blog`,
      description: wpCategory.description || `Learn ${wpCategory.name.toLowerCase()} with comprehensive guides and best practices.`,
      keywords: `${wpCategory.name.toLowerCase()}, testing, qa, software testing, best practices`
    }
  };
}

// Adapter function to convert WordPress post to expected Post interface
export function adaptWordPressPost(wpPost: WordPressPost): Post {
  const primaryCategory = wpPost.categories?.nodes?.[0];
  const categoryName = primaryCategory?.name || 'Testing';
  const categoryColor = getCategoryColor(categoryName);
  
  // Generate consistent engagement metrics based on post ID
  const baseViews = generateConsistentValue(wpPost.databaseId, 50) * 100 + 1000;
  const views = baseViews > 10000 ? `${(baseViews / 1000).toFixed(1)}K` : baseViews.toString();
  const likes = generateConsistentValue(wpPost.databaseId * 2, 500) + 50;
  const shares = generateConsistentValue(wpPost.databaseId * 3, 100) + 10;
  
  return {
    id: wpPost.slug, // Use slug for ID to match Next.js dynamic routes
    slug: wpPost.slug, // Explicit slug property for URL generation
    title: wpPost.title,
    excerpt: wpPost.excerpt || '',
    content: wpPost.content,
    category: categoryName,
    categoryColor,
    author: wpPost.author?.node?.name || 'Testriq Team',
    authorImage: wpPost.author?.node?.avatar?.url || '/api/placeholder/60/60',
    authorBio: `Expert in ${categoryName} with years of experience in software testing and quality assurance.`,
    date: new Date(wpPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    readTime: estimateReadTime(wpPost.content),
    image: wpPost.featuredImage?.node?.sourceUrl || '/api/placeholder/800/400',
    featured: generateConsistentValue(wpPost.databaseId, 10) < 2, // ~20% chance
    trending: generateConsistentValue(wpPost.databaseId * 4, 10) < 3, // ~30% chance
    views,
    likes,
    shares,
    tags: wpPost.tags?.nodes?.map(tag => tag.name) || [categoryName, 'Testing'],
    seo: {
      title: `${wpPost.title} | Testriq Blog`,
      description: wpPost.excerpt || `Read this article about ${categoryName.toLowerCase()} on Testriq Blog`,
      keywords: wpPost.tags?.nodes?.map(tag => tag.name).join(', ') || `${categoryName.toLowerCase()}, testing, qa`
    }
  };
}

// Helper function to get adapted category data with posts
export async function getAdaptedCategoryData(categorySlug: string, postCount: number = 50) {
  try {
    const wpCategoryData = await getPostsByCategory(categorySlug, postCount);
    
    if (!wpCategoryData.category) {
      return null;
    }

    const adaptedCategory = adaptWordPressCategory(wpCategoryData.category);
    const adaptedPosts = wpCategoryData.posts.map(adaptWordPressPost);

    return {
      category: adaptedCategory,
      posts: adaptedPosts,
      pageInfo: wpCategoryData.pageInfo
    };
  } catch (error) {
    console.error('Error getting adapted category data:', error);
    return null;
  }
}

