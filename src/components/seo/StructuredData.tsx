import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for Testriq
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Testriq QA Lab",
  "alternateName": "Testriq",
  "url": "https://testrq-3-0.vercel.app",
  "logo": "https://testrq-3-0.vercel.app/logo.png",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing solutions.",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/testriq",
    "https://twitter.com/testriq",
    "https://github.com/TestriqQA-Lab"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "Comprehensive web application testing services including functional, performance, and security testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Testing",
          "description": "Mobile app testing across iOS and Android platforms with device compatibility testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Testing",
          "description": "RESTful API testing, GraphQL testing, and API automation services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Automation",
          "description": "Automated testing solutions using industry-leading frameworks and tools."
        }
      }
    ]
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Testriq - Professional Software Testing Services",
  "url": "https://testrq-3-0.vercel.app",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation.",
  "publisher": {
    "@type": "Organization",
    "name": "Testriq QA Lab"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://testrq-3-0.vercel.app/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Service Schema for Web Application Testing
export const webAppTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Application Testing Services",
  "description": "Professional web application testing services including functional testing, performance testing, security testing, and cross-browser compatibility testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://testrq-3-0.vercel.app"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Application Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Comprehensive functional testing to ensure web applications work as intended."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Load testing, stress testing, and performance optimization for web applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Vulnerability assessment and security testing for web applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Browser Testing",
          "description": "Compatibility testing across different browsers and devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Responsive Testing",
          "description": "Mobile responsiveness and device compatibility testing."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for pricing"
    }
  }
};

// Breadcrumb Schema
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ Schema
export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const aiTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Application Testing Services",
  "description": "Comprehensive AI application testing services including model validation, bias detection, explainability, performance, and security testing for machine learning and generative AI systems.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://testriq.com"
  },
  "serviceType": "AI Testing Services",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Model Validation Testing",
          "description": "Validation of AI/ML models including accuracy, precision, recall, and F1-score across datasets."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Bias Detection",
          "description": "Testing for demographic and algorithmic bias in AI systems to ensure fairness and ethical compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Explainability Testing",
          "description": "Ensuring transparency in AI decision-making with tools like SHAP, LIME, and InterpretML."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Testing for latency, throughput, and scalability of AI applications under load."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Security Testing",
          "description": "Robust testing for AI threats including adversarial attacks, model evasion, and data poisoning."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Testing",
          "description": "Validation of training data for completeness, consistency, and quality assurance."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for pricing"
    }
  }
};

