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
  "image": "https://www.testriq.com/logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Testriq QA Lab"
  },
  "sku": "TQ-QA-001",
  "mpn": "TQ-QA-MAIN",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "184",
    "reviewCount": "184"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Enterprise Client"
      },
      "reviewBody": "Testriq provided exceptional QA support for our fintech application. Their attention to detail is unmatched."
    }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 5,
          "unitCode": "DAY"
        }
      }
    }
  }
};

// Home Page FAQ Schema
export const homeFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the benefits of Managed QA Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed QA Services allow organizations to outsource their entire quality function to experts. Our approach cuts overhead and gives you access to advanced test automation. You get comprehensive testing without the costs of internal hiring."
      }
    },
    {
      "@type": "Question",
      "name": "How does Testriq ensure security in Software Testing Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate Security at the heart of the SDLC through DevSecOps Integration. This includes risk-based testing, Pentesting, and regular Security Audits to ensure compliance with global standards like SOC2 and GDPR."
      }
    },
    {
      "@type": "Question",
      "name": "Why is ISO/IEC/IEEE 29119 important for QA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ISO/IEC/IEEE 29119 is the international standard for software testing. Our approach uses a standard language and process for risk-based testing. This ensures all reports and bug tracking meet the highest global standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Mobile App QA Testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide mobile QA for both iOS and Android. Our testing includes cross-browser checks and UX validation to ensure your global rollout is seamless across all devices."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle Generative AI Testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in Generative AI testing to protect your brand. We ensure your AI is reliable and secure. Our team audits agents for inaccurate data, prevents prompt injections, and guarantees model fairness."
      }
    }
  ]
};

// Service Schema for Web Application Testing
export const webAppTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web Application Testing Services",
      "alternateName": "Web Application Testing",
      "serviceType": "QA and Software Testing",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "image": "https://www.testriq.com/assets/images/logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/web-application-testing-services",
      "description": "Professional web application testing services including functional, performance, and security testing to ensure cross-browser compatibility and bug-free web apps.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Testing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Functional Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Usability Testing"
            }
          }
        ]
      }
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of web applications do you test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We test all types of web applications, including e-commerce platforms, SaaS applications, content management systems, social media platforms, educational portals, healthcare apps, and custom web solutions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does web application testing typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web application testing typically takes 1-4 weeks, depending on the application's complexity. Simple applications may require 5-7 days, while complex platforms like SaaS or e-commerce may take 2-4 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What testing tools and technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use industry-leading tools like Selenium, Cypress, and Playwright for functional testing; JMeter and K6 for performance testing; OWASP ZAP and Burp Suite for security testing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide automated testing for web applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide automated testing using tools like Selenium, Cypress, and TestCafe to ensure rapid, repeatable validation of functionality, performance, and regression scenarios."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure cross-browser compatibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We ensure cross-browser compatibility by testing on major browsers (Chrome, Firefox, Safari, Edge) and their versions using tools like BrowserStack and Sauce Labs."
          }
        }
      ]
    }
  ]

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
      "price": "0"
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
      "price": "0"
    }
  }
};


// Service Schema for LaunchFast QA
export const exploratoryTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Exploratory Testing Services",
  "description": "Discover hidden bugs and usability issues with expert-led exploratory testing. Our systematic, human-centered approach ensures your product delivers exceptional quality and seamless user experiences.",
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
          "name": "Session-Based Testing",
          "description": "Charter-driven sessions with time-boxed exploration, documentation, and issue discovery."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Journey Exploration",
          "description": "End-to-end user scenario and edge case testing for better user experience validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Investigation",
          "description": "Assessment of user interface design, accessibility, and UX flows for optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bug Discovery",
          "description": "Heuristic evaluation and creative scenario testing to find unexpected bugs and failures."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Persona-Based Testing",
          "description": "Testing using role-based personas to mimic real-user interactions and uncover contextual issues."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heuristic Evaluation",
          "description": "Expert usability review using Nielsen heuristics and design best practices."
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
      "price": "0"
    }
  }
};


// Service Schema for Desktop Application service
export const desktopAppTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desktop Application Testing Services",
  "description": "Comprehensive testing of desktop applications for functionality, compatibility, security, and performance across Windows, macOS, and Linux platforms.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Desktop App QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Feature validation and business logic verification of desktop apps on various OS."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Vulnerability scanning, data encryption testing, access control validation for desktop software."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Load, stress, memory, and CPU usage analysis to optimize desktop app performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "UX testing, interface design validation, and accessibility compliance across platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Cross-OS and hardware compatibility validation for Windows, macOS, and Linux apps."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regression Testing",
          "description": "Automated regression suites to ensure updates do not break existing functionality."
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
      "price": "0"
    }
  }
};


// Service Schema for Mobile Application service
export const mobileAppTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Global Mobile Application Testing Services 2026",
  "description": "Expert-led mobile app testing across iOS 19 and Android 15. Specialized in 5G optimization, security penetration testing, and ISO 29119 compliance for 24,000+ device combinations.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Mobile Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Advanced Mobile QA Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5G & Performance Stress Testing",
          "description": "Optimizing software for 5G and edge computing, preventing crashes during network-edge connectivity shifts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISO 29119-3 Compliance Mapping",
          "description": "Standardized Test Environment Requirements and Test Design Specifications following international benchmarks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Elite Security Penetration Testing",
          "description": "Mobile security audits mapped to OWASP Mobile Top 10 with biometric identity validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Driven Automation (Appium)",
          "description": "Self-healing AI tools and Model-Based Testing (MBT) for rapid iOS and Android release cycles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Device Cloud Testing",
          "description": "Exhaustive validation across over 24,000 Android device combinations and newest iOS versions."
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
      "price": "0"
    }
  }
};


// Service Schema for IOT Testing Service
export const iotDeviceTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/iot-device-testing-services/#service",
      "name": "IoT Device Testing Services",
      "serviceType": "Embedded & Firmware QA",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/assets/images/testriq-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab",
          "https://clutch.co/profile/testriq-qa-lab"
        ]
      },
      "areaServed": "Worldwide",
      "description": "End-to-end IoT testing services including Firmware (OTA) validation, MQTT/Zigbee protocol testing, and Security Pen-testing for smart devices.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IoT Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MQTT & Zigbee Protocol Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Firmware OTA Update Validation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IoT Security Penetration Testing"
            }
          }
        ]
      },

    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most critical challenge in testing IoT devices in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most critical challenge is device diversity and interoperability across 21.1 billion active devices. We use ISO/IEC 29119 to ensure flawless Multi-Vendor Connectivity."
          }
        },
        {
          "@type": "Question",
          "name": "How to test IoT connection in remote locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use network conditioners to simulate satellite/cellular handovers and signal jammers to test device performance in 'dead zones' and high-interference environments."
          }
        },
        {
          "@type": "Question",
          "name": "Why is security testing for medical IoT devices so important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medical IoT breaches directly impact patient safety. Compliance with the Cyber Resilience Act (CRA) and HIPAA is essential for ransomware defense and data privacy."
          }
        }
      ]
    },

  ]
};


// Service Schema for Robotics  Testing Service
export const roboticTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise RPA & Robotics Testing Services 2026",
  "description": "Comprehensive robotics and RPA QA for the 2026 automation era. Specialized in ISO 10218 compliance, Sim2Real validation, AI-driven path planning, and enterprise RPA bot validation.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Robotics Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Global Robotics & Automation Testing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISO 10218-1:2026 Compliance",
          "description": "Functional safety validation for industrial co-bots and integrators following international 2026 benchmarks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sim2Real Gap Validation",
          "description": "Bridging simulation-to-reality gaps using Digital Twin technology and Physical AI predictive modeling."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HW-SW Integration (ROS2)",
          "description": "Synchronizing sensors, actuators, and ROS/ROS2 middleware using FMEA and HAZOP frameworks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI/ML Path Consistency",
          "description": "Validating non-deterministic AI path planning (Move It) and human-robot collaborative safety (ISO 13482)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Global Regulatory Safety (UL 3100)",
          "description": "Stringent safety compliance audits including force interaction, proximity testing, and ANSI/RIA R15.06 standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise RPA Testing Services",
          "description": "Automated UI-level testing for virtual workforces (UiPath, Blue Prism) on legacy enterprise systems."
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
      "price": "0"
    }
  }
};

// Service Schema for ETL Testing Service
export const etlTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ETL Testing Services",
  "description": "Comprehensive ETL testing solutions for data extraction, transformation, and loading processes. Ensure accuracy, performance, and security across your data pipelines.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "ETL QA Services",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ETL Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Extraction Testing",
          "description": "Validates data completeness, accuracy, and connectivity from source systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Transformation Testing",
          "description": "Ensures business rules and transformation logic are applied correctly across pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Loading Testing",
          "description": "Verifies successful and accurate loading of data into target databases or warehouses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Testing",
          "description": "Checks for completeness, consistency, uniqueness, and accuracy across all stages."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Tests throughput, latency, and scalability of ETL processes under real-world data volumes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Security Testing",
          "description": "Validates access controls, encryption, compliance, and secure data handling."
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
      "price": "0"
    }
  }
};

// Service Schema for manual Testing Service
export const manualTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.testriq.com/manual-testing-services/#product",
      "name": "Manual & Exploratory Testing Services",
      "category": "Software Quality Assurance",
      "brand": {
        "@type": "Brand",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/assets/images/testriq-logo.png"
      },
      "image": "https://www.testriq.com/assets/images/testriq-logo.png",
      "sku": "TQ-MANUAL-001",
      "mpn": "TQ-MANUAL-SVC",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.testriq.com/contact",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "IN",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 5,
              "unitCode": "DAY"
            }
          }
        }
      },
      "areaServed": "Worldwide",
      "description": "Expert Manual Testing services focusing on Exploratory Testing, User Acceptance Testing (UAT), and WCAG Accessibility Audits to find bugs automation misses.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manual Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Exploratory Testing (Ad-hoc)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "User Acceptance Testing (UAT) Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WCAG 2.1 Accessibility Audits"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Localization (L10n) Testing"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "44", // Update with your real numbers
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Enterprise Client"
          },
          "datePublished": "2024-02-15",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9"
          },
          "reviewBody": "Testriq's manual testing team identified critical edge cases we missed. Highly recommended."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I choose manual testing over automated testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manual testing is essential for User Experience (UX), Exploratory testing, and finding visual or cultural issues that automation scripts miss. It is also the standard for User Acceptance Testing (UAT)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you perform Accessibility (WCAG) testing manually?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While we use tools for basic checks, our expert testers manually validate screen reader navigation, keyboard traps, and color contrast to ensure full WCAG 2.1 compliance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Manual and Exploratory testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manual testing often follows a script. Exploratory testing is unscripted and relies on the tester's creativity to find 'edge cases'—unexpected scenarios that break the software."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.testriq.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Manual Testing",
          "item": "https://www.testriq.com/manual-testing-services"
        }
      ]
    }
  ]
};

// Service Schema for automation Testing Service
export const automationTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.testriq.com/automation-testing-services/#product",
      "name": "Intelligent Automation Testing Services",
      "category": "Test Automation & QA Architecture",
      "brand": {
        "@type": "Brand",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/assets/images/testriq-logo.png"
      },
      "areaServed": "Worldwide",
      "description": "Transform your testing strategy with AI-powered automation. We use Selenium, Playwright, and API automation to reduce testing time by 80% and improve coverage.",
      "image": "https://www.testriq.com/assets/images/testriq-logo.png",
      "sku": "TQ-AUTO-001",
      "mpn": "TQ-AUTO-SVC",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.testriq.com/contact",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "IN",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 5,
              "unitCode": "DAY"
            }
          }
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automation Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Automation (Selenium & Playwright)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Automation Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Automation (Android & iOS)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CI/CD Pipeline Integration"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120", // Update with your real numbers
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Enterprise Client"
          },
          "datePublished": "2024-02-15",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9"
          },
          "reviewBody": "Testriq's manual testing team identified critical edge cases we missed. Highly recommended."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Automation testing and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automation testing ensures your applications meet top quality standards by running tests automatically. It helps detect issues early, cut costs by up to 50%, and reduces testing time by 80%."
          }
        },
        {
          "@type": "Question",
          "name": "What tools do you use for Automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use industry-leading tools including Selenium WebDriver, Playwright, Cypress, TestCafe, and Appium, integrated with CI/CD tools like Jenkins and Azure DevOps."
          }
        },
        {
          "@type": "Question",
          "name": "When should I implement Automation testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automation is best implemented for regression testing, repetitive tasks, large-scale data-driven testing, and stable features where manual testing becomes a bottleneck."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.testriq.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Automation Testing",
          "item": "https://www.testriq.com/automation-testing-services"
        }
      ]
    }
  ]
};



// Service Schema for api testing
export const apiTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "API Testing Services",
  "description": "Ensure your APIs deliver reliable, secure, and high-performance integrations with Testriq’s comprehensive API testing services. REST, SOAP, GraphQL, microservices covered.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
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
          "description": "End-to-end API testing for functionality, input/output validation, and error handling."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Performance Testing",
          "description": "Ensure optimal response times and performance under load for REST, SOAP, and GraphQL APIs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing for APIs",
          "description": "Vulnerability assessments and security testing for APIs including authentication, encryption, and authorization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Integration Testing",
          "description": "Validation of complex API workflows, request chaining, and inter-service communication for microservices."
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
      "price": "0"
    }
  }
};

// Service Schema for regression Testing ServiceS
export const regressionTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Regression Testing Services",
  "description": "Testriq provides comprehensive regression testing services including automated, manual, and risk-based testing to ensure software stability across updates. We help you prevent defects, maintain quality, and accelerate releases.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
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
          "description": "Run automated regression test suites across releases for faster and more consistent validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Regression Testing",
          "description": "Manual test execution for scenarios requiring human judgment or not yet automated."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Risk-Based Regression Testing",
          "description": "Prioritize regression tests based on business impact and likelihood of defect introduction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Regression Testing",
          "description": "CI/CD-integrated regression testing for real-time validation during deployments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Impact Analysis",
          "description": "Determine affected functionalities due to code changes to scope regression suites efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Platform Testing",
          "description": "Regression testing across web, mobile, legacy systems, and APIs for end-to-end quality."
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
      "price": "0"
    }
  }
};

// Service Schema for performance Testing Service
export const performanceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Testing Services",
  "description": "Comprehensive performance testing services including load testing, stress testing, endurance testing, and spike testing to ensure application speed, scalability, and reliability under any load conditions.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
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
          "description": "Simulate user loads to evaluate application behavior and performance under expected traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stress Testing",
          "description": "Determine the system’s breaking point by applying load beyond normal operational capacity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spike Testing",
          "description": "Evaluate how applications respond to sudden and extreme increases in traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endurance Testing",
          "description": "Assess application behavior and memory leaks under sustained load for long periods."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scalability Testing",
          "description": "Determine the system’s ability to scale up or out to accommodate increased load."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Volume Testing",
          "description": "Assess system performance with large volumes of data to validate database and processing capabilities."
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
      "price": "0"
    }
  }
};

// Structured data for SEO
export const toolsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA LAB LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com//testriq-logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-915-2929-343",
        "contactType": "sales",
        "areaServed": "Global",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
        "addressLocality": "Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testriq-qa-lab",
        "https://www.facebook.com/testriq.lab"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.testriq.com/technology-stack/#webpage",
      "url": "https://www.testriq.com/technology-stack",
      "name": "Software Testing Tools & Frameworks Technology Stack",
      "isPartOf": {
        "@id": "https://www.testriq.com/#website"
      },
      "description": "Comprehensive suite of 50+ industry-leading testing tools and frameworks including Selenium, Cypress, Playwright, and JMeter for Enterprise QA automation.",
      "breadcrumb": {
        "@id": "https://www.testriq.com/technology-stack/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.testriq.com/technology-stack/#breadcrumb",
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
          "name": "Tools & Technology Stack",
          "item": "https://www.testriq.com/technology-stack"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "QA Automation & Testing Technology Services",
      "provider": {
        "@id": "https://www.testriq.com/#organization"
      },
      "serviceType": "Software Testing Services",
      "areaServed": "Global",
      "description": "Implementation of advanced QA automation frameworks using Selenium, Cypress, Appium, and JMeter for web, mobile, and API testing.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Testing Tools & Framework Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Testing",
              "description": "Automation using Selenium WebDriver, Cypress, Playwright, and TestCafe."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Testing Frameworks",
              "description": "Mobile automation using Appium, Espresso, XCUITest, and Detox."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Testing",
              "description": "Load and stress testing using JMeter, LoadRunner, K6, and Gatling."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Testing",
              "description": "Vulnerability assessment using OWASP ZAP, Burp Suite, and Veracode."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Healthcare Compliance Testing",
              "description": "HIPAA and FDA compliance testing using specialized healthcare validation tools."
            }
          }
        ]
      }
    }
  ]
};

// Service Schema for security Testing Service
export const securityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.testriq.com/security-testing/#product",
      "name": "VAPT & Security Testing Center of Excellence (TCoE)",
      "category": "Cybersecurity & Penetration Testing",
      "brand": {
        "@type": "Brand",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/assets/images/testriq-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab",
          "https://clutch.co/profile/testriq-qa-lab"
        ]
      },
      "image": "https://www.testriq.com/assets/images/testriq-logo.png",
      "sku": "TQ-SEC-001",
      "mpn": "TQ-SEC-SVC",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.testriq.com/contact",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "IN",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 5,
              "unitCode": "DAY"
            }
          }
        }
      },
      "areaServed": "Worldwide",
      "description": "Enterprise-grade VAPT services, GDPR Compliance Audits, and Source Code Review delivered by our CISSP & OSCP certified Security Center of Excellence.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Security Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vulnerability Assessment & Penetration Testing (VAPT)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Application Security (OWASP MASVS)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ISO 27001 & GDPR Compliance Audit"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SecureGuard™ Managed Security Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Testriq SecureGuard™ Framework?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureGuard™ is our proprietary hybrid testing methodology that combines AI-driven automated scanning (SAST/DAST) with manual ethical hacking to uncover zero-day vulnerabilities with zero false positives."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide a 'Safe-to-Host' Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Upon successful remediation and re-testing of identified vulnerabilities, we issue a formal 'Safe-to-Host' certificate required for third-party audits, payment gateway integration, and regulatory compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does your Security TCoE (Center of Excellence) work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Security TCoE is a dedicated R&D unit staffed by CISSP and CEH certified researchers who monitor global CVE databases 24/7 to update our threat models against emerging cyber attacks."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.testriq.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Security Testing",
          "item": "https://www.testriq.com/security-testing"
        }
      ]
    }
  ]
};

// Service Schema for qa Documentation Service 
export const qaDocumentationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "QA Documentation Services",
  "description": "Professional QA documentation services including test plans, test cases, requirements documentation, and compliance-ready deliverables.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "QA Documentation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Planning & Strategy",
          "description": "Comprehensive documentation for test planning, test strategy, scope, timelines, risk management, and test entry/exit criteria."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Case Documentation",
          "description": "Detailed test cases with expected results, test data, and traceability to requirements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Requirements Documentation",
          "description": "Functional and non-functional requirement documentation aligned with business goals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Process Documentation",
          "description": "QA process flows, standard operating procedures (SOPs), and test lifecycle documentation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reporting & Analytics",
          "description": "Test summary reports, defect metrics, coverage reports, and executive dashboards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Acceptance Testing Documentation",
          "description": "UAT planning, scenarios, test logs, and sign-off documents for stakeholder validation."
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
      "price": "0"
    }
  }
};


// Service Schema for data Analysis Service
export const dataAnalysisServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Data Analysis Services",
  "description": "Transform raw data into actionable insights through descriptive, predictive, prescriptive, and cognitive analytics. Our services help businesses make data-driven decisions for growth and efficiency.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Data Analysis & Analytics",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Analytics Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Descriptive Analytics",
          "description": "Understand historical data and business performance through visualizations and statistical summaries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Predictive Analytics",
          "description": "Leverage machine learning to forecast trends and predict future outcomes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prescriptive Analytics",
          "description": "Generate data-backed recommendations for optimal business decision-making."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diagnostic Analytics",
          "description": "Analyze past performance to identify causes and correlations within your data."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Analytics",
          "description": "Use AI and natural language processing to simulate human thought processes in data interpretation."
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
      "price": "0"
    }
  }
};


// Service Schema for complete Testing Guide
export const completeTestingGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Complete Software Testing Guide",
  "description": "Master software testing with our comprehensive guide covering manual, automation, performance, and security testing. Learn tools, types, methodologies, and best practices.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing Education",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Testing Guide Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Testing",
          "description": "Learn the fundamentals of manual testing including test case design, bug tracking, and test execution processes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing",
          "description": "Explore automation frameworks and tools like Selenium, Cypress, and Playwright through hands-on examples."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Understand load testing, stress testing, and performance tuning using tools like JMeter and LoadRunner."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Learn security testing techniques to identify vulnerabilities and ensure application security."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Testing",
          "description": "Get practical guidance on testing APIs using tools like Postman, REST Assured, and SoapUI."
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



// Service Schema for E-Commerce Testing
export const ecommerceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Testing Services",
  "description": "Comprehensive QA testing solutions for online stores including cart, payment, performance, and security testing. Testriq ensures optimized user experiences, reduced cart abandonment, and secure transactions for e-commerce businesses.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "www.testriq.com"
  },
  "serviceType": "E-Commerce QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-Commerce QA Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopping Cart Testing",
          "description": "Validating shopping cart functionality, checkout flows, and payment integration accuracy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Gateway Testing",
          "description": "Secure testing for multiple payment gateways ensuring PCI DSS compliance and transaction success."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Commerce Testing",
          "description": "Mobile-first testing approach covering responsiveness, performance, and mobile payment workflows."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Load Testing",
          "description": "Stress, spike, and load testing during peak sales periods like Black Friday to ensure uptime and speed."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Compliance Testing",
          "description": "Testing for vulnerabilities, SSL, data privacy (GDPR), and security compliance (SOC2, ISO 27001)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Platform Compatibility Testing",
          "description": "Ensuring seamless user experience across devices, browsers, and operating systems."
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
      "price": "0"
    }
  }
};

// Service Schema for elearning Testing Service
export const elearningTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Learning Testing Services",
  "description":
    "Comprehensive testing for LMS platforms, online courses, and educational applications including accessibility compliance, SCORM/xAPI validation, video QA, mobile optimization, security, and performance testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-Learning Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LMS Platform Testing",
          "description":
            "Functional and usability testing for Moodle, Canvas, Blackboard, Google Classroom, and custom LMS platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accessibility Compliance Testing",
          "description":
            "Testing against WCAG 2.1 AA, ADA, Section 508, and EN 301 549 standards for inclusive education platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SCORM & xAPI Compliance Testing",
          "description":
            "SCORM 1.2/2004 and Tin Can (xAPI) compatibility testing across LMS environments and devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multimedia & Video Content Testing",
          "description":
            "QA for video playback, audio clarity, captioning, device compatibility, and streaming optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Learning Optimization",
          "description":
            "Performance and usability testing across smartphones and tablets to reduce dropout and enhance engagement."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Load Testing",
          "description":
            "Testing e-learning platforms for scalability, uptime, and stress-handling during high-traffic academic periods."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Privacy Testing",
          "description":
            "Ensuring GDPR, FERPA, and COPPA compliance through secure login, encryption, and data protection validation."
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
      "price": "0"
    }
  }
};


// Service Schema for healthcare Testing Service
export const healthcareTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Testing Services",
  "description": "Testriq provides professional QA testing for healthcare software, including HIPAA compliance testing, FDA validation, EHR integration testing, medical device validation, and patient data security audits.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Healthcare Software QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIPAA Compliance Testing",
          "description": "Comprehensive validation of patient data protection, PHI access controls, and HIPAA Security & Privacy Rule compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EHR System Testing",
          "description": "Functional, integration, and workflow testing of Electronic Health Record and EMR systems including HL7 and FHIR standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FDA Validation Support",
          "description": "Test documentation and compliance validation for FDA regulations including 21 CFR Part 820 and IEC 62304."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Device Testing",
          "description": "QA for IoT-enabled medical devices including connectivity, real-time data validation, and device integration testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Telehealth App Testing",
          "description": "Testing of video quality, mobile compatibility, encryption, and security for telemedicine applications and mHealth platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Cybersecurity",
          "description": "Penetration testing, threat modeling, and vulnerability assessment tailored for healthcare applications and cloud systems."
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
      "price": "0"
    }
  }
};

// Service Schema for gaming Testing Service
export const gamingTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gaming App Testing Solutions",
  "description": "Testriq provides game QA services including mobile game testing, console compatibility, VR/AR validation, multiplayer synchronization, performance testing, anti-cheat validation, and cloud gaming QA.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Game Testing & QA",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gaming App Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Game Testing",
          "description": "Functional and performance testing for iOS and Android games, including device compatibility and battery optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Console Game Testing",
          "description": "Testing across PlayStation, Xbox, and Nintendo Switch platforms for certification, controls, and hardware compatibility."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multiplayer & Network Testing",
          "description": "Multiplayer synchronization, matchmaking, network load testing, and social features validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VR/AR Game Testing",
          "description": "Motion tracking, comfort testing, hand tracking, and immersive experience validation for VR and AR platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Frame rate testing, load time analysis, memory usage optimization, and platform stress testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Game Security Testing",
          "description": "Anti-cheat system validation, penetration testing, and protection against hacking or data leaks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Gaming Testing",
          "description": "Streaming quality validation, latency optimization, cross-device sync, and bandwidth testing for cloud-based games."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Launch Readiness Testing",
          "description": "Final validation before release including day-one patch verification, stress testing, and launch-day monitoring."
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
      "price": "0"
    }
  }
};

// Service Schema for iot Testing Service
export const iotTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IoT Testing Solutions",
  "description": "Comprehensive IoT testing services including device connectivity, edge computing, cloud integration, protocol validation, performance, and IoT security testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "IoT Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IoT Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Device Connectivity Testing",
          "description": "Testing smart devices for reliable network connectivity across various protocols."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT Security Testing",
          "description": "Security validation through penetration testing, encryption, access control, and compliance checks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Edge Computing Testing",
          "description": "Validation of edge processing, latency optimization, and edge-cloud synchronization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Testing",
          "description": "Testing device integration with cloud platforms like AWS IoT, Azure IoT, and Google Cloud."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Protocol Interoperability",
          "description": "Testing cross-platform compatibility and communication across IoT protocols like MQTT, CoAP, Zigbee, LoRaWAN, etc."
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
      "price": "0"
    }
  }
};

// Service Schema for banking Finance Testing Service
export const bankingFinanceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Banking & Finance Testing Solutions",
  "description": "Comprehensive BFSI testing services by Testriq including security testing, compliance validation (PCI DSS, SOX, GDPR), core banking QA, mobile banking validation, and performance testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "www.testriq.com"
  },
  "serviceType": "Banking & Finance Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "BFSI Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Advanced penetration testing, vulnerability assessments, and threat modeling for financial systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance Testing",
          "description": "Validation for PCI DSS, SOX, GDPR, Basel III and other financial regulations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Core Banking Validation",
          "description": "QA for core banking platforms including account management, transactions, and data integrity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Banking QA",
          "description": "Cross-platform testing for mobile apps with biometric, security, and offline functionality validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Stress, load, and scalability testing for high-volume banking transactions and peak loads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing",
          "description": "CI/CD integrated regression testing and automated workflows for BFSI platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Security Testing",
          "description": "Testing for open banking APIs, OAuth validation, and secure financial integrations."
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
      "price": "0"
    }
  }
};

// Service Schema for telecommunication Testing
export const telecommunicationTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Telecommunication Testing Solutions",
  "description": "Testriq provides comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN testing, and performance optimization for telecom operators worldwide.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Telecom Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Telecommunication Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5G Network Testing",
          "description": "Protocol validation, network slicing, edge computing, and latency optimization for 5G networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT Connectivity Testing",
          "description": "Device compatibility testing, protocol validation, and connectivity performance monitoring for IoT networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VoIP/VoLTE Testing",
          "description": "Voice quality analysis, jitter optimization, codec validation, and call setup testing for voice networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "NFV/SDN Testing",
          "description": "Validation of network function virtualization and software-defined networking in cloud-native telecom environments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Security Testing",
          "description": "Penetration testing, vulnerability assessment, protocol security validation, and threat modeling for telecom networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Load and stress testing, capacity planning, throughput analysis, and real-time network performance improvement."
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
      "price": "0"
    }
  }
};

// Service Schema for about page
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ENTITY 1: The Organization (Who You Are)
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/images/logo.png",
        "width": 112,
        "height": 112
      },
      "foundingDate": "2010",
      "description": "Testriq QA Lab LLP is a globally trusted software testing company with over 15 years of experience delivering expert-led QA solutions across the SDLC.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
        "addressLocality": "Mira Road East, Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-915-2929-343",
        "contactType": "sales",
        "email": "contact@testriq.com",
        "areaServed": "World"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testriq-qa-lab",
        "https://www.facebook.com/testriq",
        "https://twitter.com/testriq"
        // Add other social links found in your footer
      ],
      "awards": [
        "ISO 9001 Certified",
        "ISTQB Certified Team",
        "Top 10 QA Companies",
        "99.8% Project Success Rate"
      ]
    },
    // ENTITY 2: The FAQ Section (Matches your page content 1:1)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Testriq a trusted QA partner with over 15 years of experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Testriq combines over 15 years of experience with ISO 9001 processes and a team of ISTQB-certified professionals. We have executed over 500k test cases with a 99.8% success rate across 15+ countries."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries does Testriq serve with its software testing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve a wide range of industries including Fintech, Healthcare, SaaS, E-commerce, Drone Technology, and IoT. Our domain experts ensure compliance and performance for specific industry standards."
          }
        },
        {
          "@type": "Question",
          "name": "Why do startups and enterprises choose Testriq for software quality assurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Startups choose us for our agility and 'LaunchFast QA' services, while enterprises rely on our scalable teams, robust security testing, and ability to integrate seamlessly with existing DevOps pipelines."
          }
        },
        {
          "@type": "Question",
          "name": "How does Testriq ensure quality and transparency in testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain 100% transparency through real-time reporting, dedicated project managers, and open communication channels. Our 'Quality First' value ensures every bug is documented with precision."
          }
        },
        {
          "@type": "Question",
          "name": "What types of testing does Testriq perform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We perform comprehensive testing including Manual, Automation (Selenium/Cypress), API, Mobile App, Performance, Security, and IoT Device Testing."
          }
        }
      ]
    },
    // ENTITY 3: Breadcrumbs (Site Hierarchy)
    {
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
          "name": "About Us",
          "item": "https://www.testriq.com/about-us"
        }
      ]
    }
  ]
};;

// Service Schema for our Team Page
export const ourTeamPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Meet Our Team - Testriq QA Lab",
  "description": "Meet the certified QA professionals behind Testriq's success. Our team of ISTQB-certified experts brings decades of software testing experience across multiple domains.",
  "url": "www.testriq.com/our-team",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com",
    "logo": "www.testriq.com/images/Testriq_Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9152929343",
      "contactType": "customer support",
      "email": "contact@testriq.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/testriq",
      "https://twitter.com/testriq",
      "https://www.facebook.com/testriq"
    ]
  },
  "hasPart": {
    "@type": "ItemList",
    "name": "Testriq Team Members",
    "itemListElement": [
      {
        "@type": "Person",
        "name": "Sandeep Maske",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "www.testriq.com/our-team#sandeep-maske"
      },
      {
        "@type": "Person",
        "name": "Santosh Kakade",
        "jobTitle": "VP Operations",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "www.testriq.com/our-team#santosh-kakade"
      },
      {
        "@type": "Person",
        "name": "Goutam Mishra",
        "jobTitle": "Head of QA and BD",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "www.testriq.com/our-team#goutam-mishra"
      },
      {
        "@type": "Person",
        "name": "Rohan Maske",
        "jobTitle": "VP - Marketing",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "www.testriq.com/our-team#rohan-maske"
      },
      {
        "@type": "Person",
        "name": "Aatish Jadhav",
        "jobTitle": "Senior Manager - Strategic Growth",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "www.testriq.com/our-team#aatish-jadhav"
      }
    ]
  }
};

// Service Schema for careers Page
export const careersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. The Page Itself (Breadcrumbs + Page Info)
    {
      "@type": "WebPage",
      "@id": "https://www.testriq.com/careers/#webpage",
      "url": "https://www.testriq.com/careers",
      "name": "Careers in Software Testing & QA Automation | Testriq",
      "description": "Join Testriq's global team. Hiring for 20+ Remote & On-site roles including Automation Engineers, Manual Testers, and Security Analysts.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.testriq.com/#website",
        "url": "https://www.testriq.com",
        "name": "Testriq QA Lab"
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
            "name": "Careers"
          }
        ]
      }
    },

    // 2. JOB 1: Business Development Executive (Sales) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Business Development Executive (Sales)",
      "description": "<p>Urgent opening for a Business Development Executive focused on IT Service Sales, B2B Sales, and Software Testing Sales. Location: Mira Road, Mumbai. Experience: 2–4 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-001"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 3. JOB 2: Manual Tester (API – Postman) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Manual Tester (API – Postman)",
      "description": "<p>Urgent opening for a Manual Tester skilled in API Testing, Postman, and API Automation. Location: Hybrid (Mira Road, Mumbai). Experience: 3–5 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-002"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 4. JOB 3: Automation Tester (Trading Domain) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Automation Tester (Trading Domain)",
      "description": "<p>Urgent opening for an Automation Tester experienced in Trading, Capital Market Domain, and JIRA. Location: Kurla, Mumbai. Experience: 2–4 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-003"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 5. JOB 4: Automation Test Engineer (Playwright + Javascript) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Automation Test Engineer (Playwright + Javascript)",
      "description": "<p>Urgent opening for an Automation Test Engineer skilled in Playwright, JavaScript, and TestNG/Mocha. Location: Prabhadevi, Mumbai. Experience: 2–3 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-004"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 6. JOB 5: Automation Test Engineer (Selenium + Playwright) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Automation Test Engineer (Selenium + Playwright)",
      "description": "<p>Urgent opening for an Automation Test Engineer proficient in Selenium WebDriver, Playwright, Java, and Python. Location: Mira Road, Mumbai. Experience: 2–3 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-005"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 7. JOB 6: Playwright Automation Tester (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Playwright Automation Tester",
      "description": "<p>Full-time role for a Playwright Automation Tester with skills in Selenium WebDriver, Java, and Python. Location: Western Mumbai. Experience: 2 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-006"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 8. JOB 7: QA / Automation Intern / Software Testing Intern (Java / JavaScript) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "QA / Automation Intern / Software Testing Intern (Java / JavaScript)",
      "description": "<p>Internship opportunity focusing on Java, JavaScript, Selenium, and Playwright. Location: Mira Road. Duration: 3–6 months.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-007"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "INTERNSHIP",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 9. JOB 8: Penetration Tester (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Penetration Tester",
      "description": "<p>Full-time role for a Penetration Tester experienced in Kali Linux, Burp Suite, and Metasploit. Location: Mira Road, Mumbai. Experience: 1–3 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-008"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 10. JOB 9: Data Processing Executive (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Data Processing Executive",
      "description": "<p>Full-time role for a Data Processing Executive with skills in Excel/Sheets, SEO Basics, and Data Quality Assurance. Location: Mumbai. Experience: 1–3 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-009"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 11. JOB 10: Business Development Executive - Intern (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Business Development Executive - Intern",
      "description": "<p>Internship opportunity in Business Development, focusing on LinkedIn Sales Navigator, Upwork, and Email Drafting. Location: Mira Road, Mumbai. Training provided.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-010"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "INTERNSHIP",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 12. JOB 11: SOC Analyst (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "SOC Analyst",
      "description": "<p>Full-time role for a SOC Analyst focusing on SOC Analysis, Threat Monitoring, Security Dashboards, and WAF. Location: Mira Road, Mumbai. Experience: 1–2 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-011"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 13. JOB 12: SEO & Digital Marketing Expert (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "SEO & Digital Marketing Expert",
      "description": "<p>Full-time role for an expert in SEO, Digital Marketing, Google Analytics, and SEMrush. Location: Mira Road, Mumbai. Experience: 2 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-012"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 14. JOB 13: Front End Developer (Immediate Joiners Only) (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Front End Developer (Immediate Joiners Only)",
      "description": "<p>Full-time role for a developer skilled in HTML, CSS, JavaScript, and Responsive Design. Location: Mira Road, Mumbai. Experience: 5+ Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-013"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 15. JOB 14: Graphic Designer (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Graphic Designer",
      "description": "<p>Full-time role for a Graphic Designer proficient in Adobe Photoshop, Adobe Illustrator, and Adobe Premiere Pro. Location: Mumbai. Experience: Fresher – 1 Year.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-014"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 16. JOB 15: Cypress Automation Tester (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Cypress Automation Tester",
      "description": "<p>Full-time role for a Cypress Automation Tester skilled in Cypress, JavaScript, and TypeScript. Location: Mira Road, Mumbai. Experience: 1–3 Years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-015"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mira Road, Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 17. JOB 16: Business Development Manager (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Business Development Manager",
      "description": "<p>Full-time role focused on Business Development, Client Acquisition, Sales Strategy, and Revenue Growth. Location: Mira Road, Mumbai. Experience: 5 to 10 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-016"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mira Road, Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 18. JOB 17: Digital Marketing Executive (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Digital Marketing Executive",
      "description": "<p>Full-time role for a Digital Marketing Executive specializing in SEO, SEM, Social Media Marketing, and Email Marketing. Location: Mumbai. Experience: 1 to 3 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-017"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 19. JOB 18: Social Media Manager (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Social Media Manager",
      "description": "<p>Full-time role for a Social Media Manager focusing on Social Media Strategy, Content Creation, Engagement Growth, and Analytics. Location: Mumbai. Experience: 3 to 5 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-018"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 20. JOB 19: QA Test Lead (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "QA Test Lead",
      "description": "<p>Full-time role for a QA Test Lead focusing on Test Planning, Team Leadership, Defect Management, and QA Strategy. Location: Mumbai. Experience: 5 to 7 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-019"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 21. JOB 20: Product Manager (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Product Manager",
      "description": "<p>Full-time role for a Product Manager focused on Product Strategy, Roadmap Planning, Market Research, and Cross-Functional Collaboration. Location: Mumbai. Experience: 3 to 5 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-020"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    },

    // 22. JOB 21: Tele Sales Executive (Extracted from testriq.com/careers)
    {
      "@type": "JobPosting",
      "title": "Tele Sales Executive",
      "description": "<p>Full-time role for a Tele Sales Executive focusing on Client Outreach, Tele Sales, Sales Target Achievement, and Relationship Building. Location: Mumbai. Experience: 3 to 5 years.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Testriq",
        "value": "JOB-021"
      },
      "datePosted": "2025-12-04",
      "validThrough": "2026-03-04",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "sameAs": "https://www.testriq.com",
        "logo": "https://www.testriq.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 600000,
          "maxValue": 1200000,
          "unitText": "YEAR"
        }
      }
    }
  ]
};

export const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA LAB LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.testriq.com/#website",
      "url": "https://www.testriq.com",
      "name": "Testriq QA Lab",
      "publisher": {
        "@id": "https://www.testriq.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.testriq.com/case-studies/#webpage",
      "url": "https://www.testriq.com/case-studies",
      "name": "Software Testing & QA Case Studies | Testriq QA Lab",
      "description": "Explore our library of software testing case studies. See how Testriq helps global enterprises like Canva and Ragnar achieve 99% bug-free releases through expert QA automation.",
      "isPartOf": {
        "@id": "https://www.testriq.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.testriq.com/case-studies/#breadcrumb"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://www.testriq.com/canva-design-platform",
            "name": "Testing Canva’s Design Platform"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://www.testriq.com/ragnar-sports-platform",
            "name": "Ragnar Sports Platform – QA by Testriq"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://www.testriq.com/kanishka-mobile-app",
            "name": "Testriq for Kanishka Mobile App Testing"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://www.testriq.com/home-facts-case-study",
            "name": "Real Estate QA Case Study – Testriq"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://www.testriq.com/realtytrac-case-study",
            "name": "RealtyTrac QA Case Study"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "url": "https://www.testriq.com/brandify-case-study",
            "name": "Brandify QA for Digital Marketing Case Study"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "url": "https://www.testriq.com/milton-case-study",
            "name": "Milton Smart Stainless Steel Water Bottle Case Study"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "url": "https://www.testriq.com/luep-case-study",
            "name": "Cross-Platform QA Case Study of Luep"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "url": "https://www.testriq.com/aalpha-information-systems",
            "name": "Securing Aalpha Information Systems' HR Portal"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "url": "https://www.testriq.com/digiboxx-case-study",
            "name": "Optimizing Digiboxx with Robust Testing"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "url": "https://www.testriq.com/rc-pets-case-study",
            "name": "Performance Testing for RC Pets' Growth"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "url": "https://www.testriq.com/worksocial-case-study",
            "name": "WorkSocial Software Optimized Through Testing"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "url": "https://www.testriq.com/leadoconnect-case-study",
            "name": "Refining LeadoConnect’s B2B Software with QA"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "url": "https://www.testriq.com/pro-ficiency-case-study",
            "name": "Elevating Pro-ficiency’s Software with QA and Rigorous Testing"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "url": "https://www.testriq.com/phyllo-case-study",
            "name": "Optimizing Phyllo's API with Efficient Testing"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "url": "https://www.testriq.com/indo-wings-case-study",
            "name": "Security Testing for High-end Drone for Indo Wings"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "url": "https://www.testriq.com/smart-doorbell-case-study",
            "name": "Comprehensive QA for Smart Video Doorbell App"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.testriq.com/case-studies/#breadcrumb",
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
          "name": "Case Studies",
          "item": "https://www.testriq.com/case-studies"
        }
      ]
    }
  ]
};

// Contact Us Page

export const contactUsPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "url": "www.testriq.com/contact",
  "description": "Reach out to Testriq QA Lab for expert QA consultation, project inquiries, support requests, or partnership opportunities. Get in touch via call, email, video consultation, or schedule a meeting.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "www.testriq.com",
    "logo": "www.testriq.com/images/Testriq_Logo.png",
    "email": "contact@testriq.com",
    "telephone": "+91-915-2929-343",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East",
      "addressLocality": "Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91-915-2929-343",
        "email": "contact@testriq.com",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "telephone": "+91-915-2929-343",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  }
};


export const smartDeviceTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Device Testing Services",
  "description": "Smart device and IoT testing services for wearables, smart home appliances, and connected ecosystems. Includes connectivity, performance, security, and cloud integration testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "IoT & Smart Device Testing",
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
          "description": "WiFi, Bluetooth, NFC, and cellular connectivity validation for seamless device communication."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Penetration testing, vulnerability scanning, and data protection validation for smart devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Evaluation of responsiveness, throughput, and power consumption of smart devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery & Power Testing",
          "description": "Monitoring and analysis of battery life, charging cycles, and energy consumption."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience Testing",
          "description": "Functional and usability testing under real-world scenarios and user conditions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Testing",
          "description": "Validation of cloud connectivity, synchronization, and backend communication for smart devices."
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
      "price": "0"
    }
  }
};



// Breadcrumb Schema
export const createBreadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
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
export const createFAQSchema = (faqs: Array<{ question: string, answer: string }>) => ({
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


export const matrimonialAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Matrimonial App Certification Services",
  "description": "Comprehensive certification services for matrimonial apps covering security, privacy, compliance, user safety, and algorithm fairness. Ensures GDPR, ISO 27001, and CCPA compliance with high standards of trust and quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Application Security & Compliance Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Matrimonial App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Data Protection",
          "description": "Includes ISO 27001 compliance, data encryption, vulnerability assessment, and secure authentication mechanisms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Privacy Compliance",
          "description": "Covers GDPR, CCPA compliance, privacy by design, consent management, and data minimization practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance Testing",
          "description": "Includes functional testing, performance testing, usability testing, and ISTQB-aligned test coverage."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Safety & Trust",
          "description": "Identity verification, anti-scam protection, user reporting, and fake profile detection to ensure platform safety."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Algorithm Fairness & Transparency",
          "description": "Auditing of matching logic for fairness, bias detection, explainability, and ethical AI adherence."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regulatory Compliance",
          "description": "Full-spectrum compliance checks with ISO 27701, SOC 2, OWASP, and region-specific privacy laws."
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
      "price": "0"
    }
  }
};

// Structured data for dating app certification service
export const datingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dating App Trust Certification",
  description:
    "Comprehensive trust certification program for dating apps covering identity verification, user safety, content moderation, privacy compliance, and platform stability.",
  brand: {
    "@type": "Brand",
    name: "TESTRIQ QA Lab",
    url: "www.testriq.com",
    logo: "www.testriq.com/logo.png",
  },
  image: "https://www.testriq.com/logo.png",
  sku: "TQ-DATING-001",
  mpn: "TQ-DATING-CERT",
  offers: {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://www.testriq.com/contact",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 5,
          "unitCode": "DAY"
        }
      }
    }
  },
  category: "Quality Assurance and Certification",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dating App Certification Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basic Certification",
        description:
          "Platform Functionality + Privacy + Content Moderation Checklist",
        category: "New dating apps in MVP/early-launch phase",
      },
      {
        "@type": "Offer",
        name: "Advanced Certification",
        description: "Basic + Identity Verification + Messaging Audit",
        category: "Growth-stage or regionally scaling apps",
      },
      {
        "@type": "Offer",
        name: "Enterprise Certification",
        description:
          "All of the above + AI-based Matching Audit + Threat Modeling + Pen Testing",
        category: "Established or global dating platforms",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};




// Structured data for fantasy sports app certification service
export const fantasyAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fantasy Sports App Certification",
  "description": "Get your fantasy sports platform certified for fair play, data privacy, security, and regulatory compliance. Testriq's certification builds user trust, prevents fraud, and improves engagement across fantasy gaming apps.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Fantasy Sports Platform Security & Compliance Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fantasy App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Privacy",
          "description": "End-to-end encryption, PCI DSS compliance, secure authentication, and GDPR/CCPA privacy compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fair Play & Compliance",
          "description": "Fair gaming verification, regulatory compliance checks, anti-fraud detection, and algorithm transparency."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Reliability",
          "description": "Load testing, uptime assurance, real-time data validation, and infrastructure scaling validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience Testing",
          "description": "UI/UX, accessibility (WCAG 2.1), mobile-first experience, and multi-device compatibility validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Integrity & Audit",
          "description": "Data validation, backup strategies, role-based access control, and audit trails for fantasy data."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & Testing",
          "description": "Functional testing, API testing, security audits, regression testing, and cheat detection systems."
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
      "price": "0"
    }
  }
};



export const tradingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Trading App Certification Services",
  "description": "Professional certification and QA services for trading applications, covering security testing, low-latency performance, regulatory compliance (FINRA, SEC, MiFID II), algorithm validation, and data integrity audits.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Trading Platform Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Trading App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Fraud Prevention Testing",
          "description": "Vulnerability scanning, end-to-end encryption, and multi-factor authentication for trading platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regulatory Compliance Validation",
          "description": "Verification of compliance with FINRA, SEC, MiFID II, GDPR, and PCI DSS standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Low Latency Testing",
          "description": "Real-time performance benchmarking, order execution speed testing, and stress testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Algorithmic Trading Validation",
          "description": "Validation of trading algorithms, risk controls, and automated execution safeguards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience & Accessibility Testing",
          "description": "Cross-device testing, error handling validation, and accessibility compliance (WCAG)."
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
      "price": "0"
    }
  }
};

// Structured data for shopping apps certification service
export const shoppingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopping Apps Certification",
  description:
    "Comprehensive certification program for e-commerce and shopping apps covering security, payment processing, performance optimization, user experience, and compliance standards.",
  provider: {
    "@type": "Organization",
    name: "TESTRIQ QA Lab",
    url: "www.testriq.com",
    logo: "www.testriq.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9004988859",
      contactType: "customer service",
    },
  },
  serviceType: "Quality Assurance and Certification",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shopping App Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Security & Privacy Certification",
        description: "PCI DSS compliance, SSL/TLS encryption, data anonymization, GDPR compliance",
        category: "Security and Privacy",
      },
      {
        "@type": "Offer",
        name: "Payment Security Certification",
        description: "Payment tokenization, fraud detection, multi-gateway support, 3D Secure authentication",
        category: "Payment Security",
      },
      {
        "@type": "Offer",
        name: "Performance & Speed Certification",
        description: "Sub-3s load times, CDN optimization, auto-scaling, performance monitoring",
        category: "Performance and Speed",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "203",
    bestRating: "5",
  },
};

// Service Schema for SAP Testing Service
export const sapTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.testriq.com/sap-testing-services/#product",
      "name": "SAP Testing Services",
      "category": "Enterprise Software QA",
      "brand": {
        "@type": "Brand",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/assets/images/testriq-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab",
          "https://clutch.co/profile/testriq-qa-lab"
        ]
      },
      "areaServed": "Worldwide",
      "description": "Comprehensive SAP testing services including S/4HANA migration validation, SAP Fiori testing, and automated regression testing for enterprise landscapes.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact-us"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SAP Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "S/4HANA Migration Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SAP Fiori UX Validation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SAP Test Automation (Tosca/Worksoft)"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "100",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Global Manufacturing Corp"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Testriq's rigorous testing strategy was crucial for our seamless transition to S/4HANA. We maintained full operational capability throughout the migration."
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is SAP testing critical for S/4HANA migration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SAP S/4HANA migration involves complex data transformation and process re-engineering. Comprehensive testing ensures business continuity and data integrity during the transition."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support SAP test automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in SAP automation using Tricentis Tosca, Worksoft Certify, and UFT One to accelerate regression cycles and reduce business risk."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle SAP integration testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We validate end-to-end data flow between SAP modules and non-SAP systems via middleware like SAP PO/PI and CPI, ensuring seamless enterprise connectivity."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.testriq.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SAP Testing",
          "item": "https://www.testriq.com/sap-testing-services"
        }
      ]
    }
  ]
};
// Professional Service Schema for Homepage/Local SEO
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Testriq QA Lab",
  "image": "https://www.testriq.com/logo.png",
  "url": "https://www.testriq.com",
  "telephone": "+91-915-2929-343",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
    "addressLocality": "Mira Bhayandar",
    "addressRegion": "Maharashtra",
    "postalCode": "401107",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.2812",
    "longitude": "72.8777"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/testriq-qa-lab",
    "https://www.facebook.com/testriq.lab"
  ],
  "priceRange": "$$"
};
// Service Schema for Timezone Testing
export const timezoneTestingServiceSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Testing in Your Time Zone Services",
  "description": "Accelerate your development with Testriq's Testing in Your Time Zone services. We offer real-time collaboration, follow-the-sun QA, and localized support for global enterprises.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Time Zone Aligned QA",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Timezone Testing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real-Time Collaborative QA",
          "description": "Testers participate in daily stand-ups, sprint planning, and retrospectives in your time zone."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Follow-the-Sun Continuous Testing",
          "description": "Seamless handoff between global regions for a 24/7 continuous QA cycle."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nearshore & Onshore Hybrid Models",
          "description": "Geographic proximity and cultural alignment for North American and European enterprises."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Localized User Acceptance Testing (UAT)",
          "description": "Linguistic accuracy, cultural relevance, and regional compliance validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Time-Critical Release Support",
          "description": "Dedicated real-time support for hitting critical launch windows."
        }
      }
    ]
  }
};

// FAQ Schema for Timezone Testing
export const timezoneFAQSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the benefits of testing in the same time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testing in the same time zone enables real-time collaboration, faster feedback loops, and immediate defect resolution. It eliminates the communication delays typical of traditional offshore models, ensuring that QA and development remain perfectly synchronized throughout the sprint."
      }
    },
    {
      "@type": "Question",
      "name": "How does follow-the-sun testing improve software quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Follow-the-sun testing provides a 24/7 QA cycle by leveraging teams in different global regions. This allows for continuous testing, where code developed in one region is tested in another while the original team sleeps, significantly reducing the overall testing lifecycle and improving time-to-market."
      }
    },
    {
      "@type": "Question",
      "name": "Why is real-time collaboration important in software QA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real-time collaboration allows testers to clarify requirements instantly, developers to fix bugs as they are found, and stakeholders to have immediate visibility into the product's quality. This synchronous approach reduces misunderstandings, minimizes rework, and fosters a stronger culture of quality."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between onshore, nearshore, and offshore testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Onshore testing involves teams in the same country. Nearshore testing involves teams in a neighboring country or the same time zone. Offshore testing involves teams in a distant country with a significant time zone difference. Nearshore and onshore models are preferred for projects requiring high levels of real-time collaboration."
      }
    }
  ]
};
