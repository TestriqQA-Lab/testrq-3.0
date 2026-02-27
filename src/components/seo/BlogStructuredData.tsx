import React from 'react';

interface BlogStructuredDataProps {
  type: 'blog' | 'category' | 'tag' | 'search';
  title: string;
  description: string;
  url: string;
  categoryName?: string;
  tagName?: string;
  postCount?: number;
}

export default function BlogStructuredData({
  type,
  title,
  description,
  url,
  categoryName,
  tagName,
  postCount
}: BlogStructuredDataProps) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Testriq",
      "url": "https://www.testriq.com",
      "description": "Leading software testing company providing expert QA services, test automation, performance testing, security testing, and mobile testing solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.testriq.com/images/testriq-logo.png",
          "width": 200,
          "height": 60
        },
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab/",
          "https://x.com/testriq",
          "https://www.facebook.com/testriq.lab/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-915-2929-343",
          "contactType": "customer service",
          "email": "contact@testriq.com"
        }
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.testriq.com/blog"
        }
      ]
    }
  };

  // Add specific breadcrumb items based on page type
  if (type === 'category' && categoryName) {
    baseStructuredData.breadcrumb.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": "Categories",
      "item": "https://www.testriq.com/blog/categories"
    });
    baseStructuredData.breadcrumb.itemListElement.push({
      "@type": "ListItem",
      "position": 4,
      "name": categoryName,
      "item": url
    });
  } else if (type === 'tag' && tagName) {
    baseStructuredData.breadcrumb.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": tagName,
      "item": url
    });
  } else if (type === 'search') {
    baseStructuredData.breadcrumb.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": "Search",
      "item": url
    });
  }

  // Add specific structured data based on page type
  let specificStructuredData = {};

  if (type === 'blog') {
    specificStructuredData = {
      "@type": ["WebPage", "Blog"],
      "about": {
        "@type": "Thing",
        "name": "Software Testing",
        "description": "Software testing, quality assurance, test automation, and QA best practices"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "QA Engineers, Software Testers, Developers, IT Professionals"
      },
      "keywords": "software testing, QA, test automation, performance testing, security testing, mobile testing, API testing, regression testing, manual testing",
      "mainEntity": {
        "@type": "Blog",
        "name": "Testriq Software Testing Blog",
        "description": "Expert insights, tutorials, and best practices in software testing and quality assurance",
        "url": "https://www.testriq.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Testriq QA Lab",
          "url": "https://www.testriq.com"
        }
      }
    };
  } else if (type === 'category' && categoryName) {
    specificStructuredData = {
      "@type": ["WebPage", "CollectionPage"],
      "about": {
        "@type": "Thing",
        "name": `${categoryName} Testing`,
        "description": `Articles and resources about ${categoryName} testing and quality assurance`
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": `${categoryName} Testing Articles`,
        "description": `Collection of articles about ${categoryName} testing`,
        "numberOfItems": postCount || 0,
        "itemListElement": []
      },
      "keywords": `${categoryName.toLowerCase()}, ${categoryName.toLowerCase()} testing, ${categoryName.toLowerCase()} qa, software testing, quality assurance`
    };
  } else if (type === 'tag' && tagName) {
    specificStructuredData = {
      "@type": ["WebPage", "CollectionPage"],
      "about": {
        "@type": "Thing",
        "name": tagName,
        "description": `Articles tagged with ${tagName}`
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": `${tagName} Articles`,
        "description": `Collection of articles tagged with ${tagName}`,
        "numberOfItems": postCount || 0,
        "itemListElement": []
      },
      "keywords": `${tagName.toLowerCase()}, software testing, quality assurance, QA insights`
    };
  } else if (type === 'search') {
    specificStructuredData = {
      "@type": ["WebPage", "SearchResultsPage"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.testriq.com/blog/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Search Results",
        "description": "Search results for blog posts",
        "itemListElement": []
      }
    };
  }

  const finalStructuredData = { ...baseStructuredData, ...specificStructuredData };

  // Create Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.testriq.com/images/testriq-logo.png",
      "width": 200,
      "height": 60
    },
    "description": "Leading software testing company providing expert QA services, test automation, performance testing, security testing, and mobile testing solutions.",
    "foundingDate": "2010",
    "serviceArea": "Global",
    "sameAs": [
      "https://www.linkedin.com/company/testriq-qa-lab/",
      "https://x.com/testriq",
      "https://www.facebook.com/testriq.lab/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-915-2929-343",
      "contactType": "customer service",
      "email": "contact@testriq.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  // Create Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Testriq",
    "url": "https://www.testriq.com",
    "description": "Leading software testing company providing expert QA services, test automation, performance testing, security testing, and mobile testing solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Testriq QA Lab"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.testriq.com/blog/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData, null, 0)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData, null, 0)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData, null, 0)
        }}
      />
    </>
  );
}