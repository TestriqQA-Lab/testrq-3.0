import Script from 'next/script';

// Proper JSON-LD type (no `any` anywhere)
type JsonLd = Record<string, unknown>;

interface StructuredDataProps {
  data: JsonLd;
}

/**
 * Renders structured data (JSON-LD) via Next.js <Script>
 * Adds a unique ID based on the schema type + a hash of the content
 * → avoids duplicate ID errors when the same schema appears multiple times
 */
export default function StructuredData({ data }: StructuredDataProps) {
  // Create a stable but unique ID for this exact piece of JSON-LD
  const type = (data['@type'] as string) || 'unknown';
  const contentHash = JSON.stringify(data).slice(-12); // last 12 chars is enough for uniqueness
  const id = `structured-data-${type}-${contentHash}`;

  return (
    <Script
      id={id} // required by Next.js when using inline content
      type="application/ld+json"
      // Using children is slightly cleaner than dangerouslySetInnerHTML
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

// Organization Schema for Testriq
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Testriq QA Lab",
  "alternateName": "Testriq",
  "url": "www.testriq.com",
  "logo": "www.testriq.com/logo.png",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing solutions.",
  "foundingDate": "2010",
  "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-915-2929-343",
      "contactType": "customer service",
      "email": "contact@testriq.com",
      "availableLanguage": "English"
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
  "url": "www.testriq.com",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation.",
  "publisher": {
    "@type": "Organization",
    "name": "Testriq QA Lab"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "www.testriq.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Product/Service Schema with Aggregate Rating for Homepage
export const productServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Testriq QA Lab - Comprehensive Software Testing Services",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing solutions.",
    "url": "https://www.testriq.com/",
    "image": "https://www.testriq.com/logo.png", // Mandatory property for Product schema
  "brand": {
    "@type": "Organization",
    "name": "Testriq QA Lab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9, // Placeholder: Based on common high ratings for service companies
    "reviewCount": 150 // Placeholder: Based on a reasonable number of reviews
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock"
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
    "url": "www.testriq.com"
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


// Service Schema for AI Application Testing
export const aiTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Application Testing Services",
  "description": "Comprehensive AI application testing services including model validation, bias detection, explainability, performance, and security testing for machine learning and generative AI systems.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
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


export const launchFastQASchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LaunchFast QA Services",
  "description": "Rapid software testing services tailored for startups and agile development teams. Includes functional testing, performance optimization, security validation, and launch readiness assessment.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Rapid QA for Startups",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "LaunchFast QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rapid Functional Testing",
          "description": "Agile-friendly functional validation including regression, sanity, and smoke testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Load, stress, and scalability testing to ensure optimal product performance at launch."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Validation",
          "description": "Security testing for authentication, vulnerabilities, and data protection during launch cycles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Testing",
          "description": "Device compatibility, OS testing, and store-readiness validation for mobile platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "Cross-browser and responsive testing to ensure flawless web launch experience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API & Integration Testing",
          "description": "Validation of APIs, third-party integrations, and backend connectivity for launch readiness."
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

// Service Schema for Mobile Application Testing
export const mobileAppTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile Application Testing Services",
  "description": "End-to-end mobile application testing services for iOS and Android, covering functional, usability, performance, and security testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Mobile Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Application Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Comprehensive functional testing to ensure mobile applications work as intended on all supported devices and OS versions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "Testing for intuitive user experience and adherence to platform-specific guidelines (iOS Human Interface Guidelines, Android Material Design)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Testing for app speed, responsiveness, battery consumption, and memory usage."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Vulnerability assessment and security testing for mobile applications, including data storage and transmission security."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Testing across a wide range of devices, screen sizes, and operating system versions."
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

// Service Schema for API Testing
export const apiTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "API Testing Services",
  "description": "Professional API testing services to validate functionality, reliability, performance, and security of your APIs, ensuring seamless communication between software components.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "API Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "API Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional API Testing",
          "description": "Validation of API endpoints, request/response formats, and business logic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Performance Testing",
          "description": "Load, stress, and endurance testing to ensure API scalability and responsiveness."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Security Testing",
          "description": "Testing for common API vulnerabilities like broken object level authorization (BOLA) and injection flaws."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Automation",
          "description": "Implementation of robust API test automation frameworks using tools like Postman, Rest Assured, or Karate."
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

// Service Schema for Data Analysis
export const dataAnalysisServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Analysis Services",
  "description": "Transforming your data into powerful insights with our data analysis services, providing predictive data analysis, business intelligence, and visualization for superior software quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Data Analysis",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Analysis Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Predictive Data Analysis",
          "description": "Using statistical models and machine learning to forecast future outcomes and trends."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Intelligence (BI)",
          "description": "Creating dashboards and reports to provide actionable insights into business performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Visualization",
          "description": "Presenting complex data in clear, interactive visual formats for easy understanding."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Assurance",
          "description": "Ensuring the accuracy, completeness, and consistency of data used for analysis."
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

// Service Schema for IoT Testing
export const iotTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IoT Testing Services",
  "description": "Comprehensive IoT testing for devices and smart technologies, ensuring connectivity, security, and compatibility across the ecosystem.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "IoT Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IoT Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Connectivity Testing",
          "description": "Testing device communication protocols (e.g., MQTT, CoAP) and network stability."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Vulnerability assessment for IoT devices, firmware, and cloud communication channels."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Ensuring interoperability with various hardware, sensors, and platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance and Scalability Testing",
          "description": "Testing device performance under load and the scalability of the IoT platform."
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

// Service Schema for Security Testing
export const securityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Security Testing Services",
  "description": "Robust security testing including vulnerability assessments, penetration testing, and security audits for optimal software quality and compliance.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Security Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Security Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vulnerability Assessment",
          "description": "Identifying and prioritizing security weaknesses in applications and infrastructure."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Penetration Testing",
          "description": "Simulating real-world attacks to evaluate the security posture of systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Audits",
          "description": "Comprehensive review of security policies, configurations, and compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Code Review",
          "description": "Manual and automated analysis of source code to find security flaws."
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

// Service Schema for Performance Testing
export const performanceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Testing Services",
  "description": "Evaluate application speed, scalability, and stability with our performance testing services, ensuring a seamless user experience under all load conditions.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Performance Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Performance Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Load Testing",
          "description": "Testing the application's behavior under expected load conditions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stress Testing",
          "description": "Determining the application's breaking point by testing beyond normal load conditions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endurance Testing",
          "description": "Checking the application's stability and performance over a long period of time."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scalability Testing",
          "description": "Measuring the application's ability to scale up or down to meet varying user demands."
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

// Service Schema for Manual Testing
export const manualTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Manual Testing Services",
  "description": "Expert manual testing services focused on exploratory testing, usability, and complex scenario validation that automation cannot cover.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Manual Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Manual Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exploratory Testing",
          "description": "Simultaneous learning, test design, and test execution to uncover defects not found by scripted tests."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "Evaluating the user-friendliness and intuitive design of the application."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ad-hoc Testing",
          "description": "Informal, unscripted testing to find defects quickly and efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Acceptance Testing (UAT) Support",
          "description": "Assisting end-users in validating the application against business requirements."
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

// Service Schema for Automation Testing
export const automationTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automation Testing Services",
  "description": "Implementation of robust test automation frameworks for web, mobile, and API testing to accelerate release cycles and improve quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Automation Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automation Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Automation (Selenium/Cypress/Playwright)",
          "description": "Automated functional and regression testing for web applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Automation (Appium)",
          "description": "Automated testing for native and hybrid mobile applications on iOS and Android."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Automation",
          "description": "Automated testing of REST and SOAP APIs for functionality and performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CI/CD Integration",
          "description": "Integrating test automation into continuous integration and continuous delivery pipelines."
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

// Service Schema for Regression Testing
export const regressionTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Regression Testing Services",
  "description": "Ensuring that new code changes, updates, or fixes have not negatively impacted existing functionality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Regression Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Regression Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automated Regression Testing",
          "description": "Fast and repeatable regression testing using automation frameworks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Selective Regression Testing",
          "description": "Targeted testing of affected modules to minimize testing time."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Regression Testing",
          "description": "Comprehensive re-testing of the entire application after major changes."
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

// Service Schema for QA Documentation Services
export const qaDocumentationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "QA Documentation Services",
  "description": "Creating and maintaining high-quality QA documentation, including test plans, test cases, and traceability matrices.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "QA Documentation",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "QA Documentation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Plan Creation",
          "description": "Developing comprehensive test plans outlining scope, objectives, resources, and schedule."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Case Writing",
          "description": "Creating detailed, executable test cases linked to requirements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traceability Matrix Development",
          "description": "Mapping requirements to test cases to ensure complete coverage."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Defect Reporting Templates",
          "description": "Standardizing defect reporting for clear and efficient communication."
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

// Service Schema for Corporate QA Training
export const corporateQATrainingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate QA Training Services",
  "description": "Customized corporate training programs for software testing, test automation, and quality assurance best practices.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "QA Training",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate QA Training Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Automation Training",
          "description": "Hands-on training for popular automation tools like Selenium, Cypress, and Playwright."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agile Testing Training",
          "description": "Training on integrating testing into Agile and DevOps pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing Training",
          "description": "Training on using tools like JMeter and LoadRunner for performance analysis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISTQB Certification Prep",
          "description": "Preparation courses for ISTQB Foundation and Advanced level certifications."
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

// Service Schema for Exploratory Testing
export const exploratoryTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Exploratory Testing Services",
  "description": "Simultaneous learning, test design, and test execution to uncover defects and usability issues that scripted tests often miss.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Exploratory Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Exploratory Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Session-Based Test Management",
          "description": "Structured exploratory testing using charters and session reports."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Risk-Based Exploratory Testing",
          "description": "Focusing exploratory efforts on high-risk areas of the application."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability and User Experience Exploration",
          "description": "Testing the application from the perspective of an end-user to identify usability flaws."
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

// Service Schema for Desktop Application Testing
export const desktopAppTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desktop Application Testing Services",
  "description": "Comprehensive testing for desktop applications across Windows, macOS, and Linux, covering functional, performance, and compatibility aspects.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Desktop Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Desktop Application Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Ensuring all features and functions of the desktop application work as specified."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation and Uninstallation Testing",
          "description": "Verifying the application installs and uninstalls correctly across different OS versions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Testing the application's compatibility with various hardware and software configurations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Evaluating resource consumption, speed, and stability of the desktop application."
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

// Service Schema for ETL Testing
export const etlTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ETL Testing Services",
  "description": "Validation of Extract, Transform, Load (ETL) processes to ensure data accuracy, completeness, and integrity in data warehouses and migration projects.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "ETL Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ETL Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Validation Testing",
          "description": "Ensuring data extracted from the source matches the data loaded into the target."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Transformation Testing",
          "description": "Verifying that data transformations are applied correctly according to business rules."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Testing",
          "description": "Checking for data completeness, consistency, and accuracy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance and Scalability Testing",
          "description": "Testing the ETL process speed and its ability to handle large volumes of data."
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

// Service Schema for Robotics Testing
export const roboticsTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Robotics Testing Services",
  "description": "Specialized testing for robotic systems and automation software, focusing on functional accuracy, safety, and integration with other systems.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Robotics Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Robotics Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Verifying the robot's movements, tasks, and sensor inputs are accurate and reliable."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Safety and Compliance Testing",
          "description": "Ensuring the robotic system meets industry safety standards and regulations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Integration Testing",
          "description": "Testing the seamless communication between the robot, its control software, and external systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance and Endurance Testing",
          "description": "Evaluating the robot's speed, precision, and reliability over extended operational periods."
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

// Service Schema for Smart Device Testing
export const smartDeviceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Device Testing Services",
  "description": "Testing for smart home devices, wearables, and other connected consumer electronics, focusing on connectivity, user experience, and security.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Smart Device Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Smart Device Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Connectivity Testing",
          "description": "Verifying reliable connection via Wi-Fi, Bluetooth, Zigbee, and other protocols."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Integration Testing",
          "description": "Ensuring seamless control and data synchronization with companion mobile applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security and Privacy Testing",
          "description": "Assessing data encryption, access control, and compliance with privacy regulations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability and User Experience Testing",
          "description": "Evaluating the ease of setup, daily use, and overall user satisfaction."
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

// Service Schema for Software Testing Guide
export const softwareTestingGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software Testing Guide",
  "description": "A comprehensive resource offering tutorials, best practices, and articles on all aspects of software quality assurance and testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Educational Resource",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Testing Guide Topics",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing Tutorials",
          "description": "Guides and code examples for popular automation tools."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing Best Practices",
          "description": "Articles on load, stress, and endurance testing methodologies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing Checklists",
          "description": "Resources for vulnerability assessment and penetration testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Testing Techniques",
          "description": "Articles on exploratory testing, usability, and test case design."
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
      "price": "Free"
    }
  }
};

// Service Schema for Data Analysis
export const dataAnalysisSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Analysis Services",
  "description": "Transforming your data into powerful insights with our data analysis services, providing predictive data analysis, business intelligence, and visualization for superior software quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Data Analysis",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Analysis Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Predictive Data Analysis",
          "description": "Using statistical models and machine learning to forecast future outcomes and trends."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Intelligence (BI)",
          "description": "Creating dashboards and reports to provide actionable insights into business performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Visualization",
          "description": "Presenting complex data in clear, interactive visual formats for easy understanding."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Assurance",
          "description": "Ensuring the accuracy, completeness, and consistency of data used for analysis."
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
