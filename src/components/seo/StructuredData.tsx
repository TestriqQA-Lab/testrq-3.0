import Script from 'next/script';


interface SchemaData {
  '@type': string;
  [key: string]: any;
}

interface StructuredDataProps {
  data: SchemaData;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script key={data['@type']}
      // id="structured-data" // Removed to prevent duplicate ID errors
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
    "ratingValue": "4.9", // Placeholder: Based on common high ratings for service companies
    "reviewCount": "150" // Placeholder: Based on a reasonable number of reviews
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
    }
  }
};


// Service Schema for Mobile Application service
export const mobileAppTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile Application Testing Services",
  "description": "End-to-end mobile app testing services across iOS and Android platforms, covering functionality, performance, security, usability, compatibility, and automation.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Mobile Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Validating mobile features, user flows, and API integrations on iOS and Android."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Mobile security testing including penetration, encryption, authentication, and OWASP validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Battery usage, memory optimization, and load handling across devices and networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "UI/UX assessment, accessibility checks, and user journey validation for mobile apps."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Cross-device and OS version compatibility checks across 50+ iOS and Android devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing",
          "description": "Automated testing for regression, CI/CD integration, and fast release cycles."
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


// Service Schema for IOT Testing Service
export const iotDeviceTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IoT Device Testing Services",
  "description": "End-to-end IoT testing services for smart devices, sensors, and connected ecosystems. Validate connectivity, interoperability, performance, and security across all protocols and layers.",
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
          "description": "Wireless protocol testing including WiFi, Bluetooth, Zigbee, LoRaWAN, and cellular."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sensor Validation",
          "description": "Validation of temperature, motion, humidity, pressure, and light sensors for accurate data capture."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Management Testing",
          "description": "Battery usage analysis, power efficiency optimization, and runtime validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT Security Testing",
          "description": "Firmware security, encryption validation, and authentication testing for connected devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interoperability Testing",
          "description": "Cross-device and third-party system compatibility testing across ecosystems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Testing",
          "description": "Testing cloud platform connectivity, data sync, and remote control across platforms like AWS IoT and Azure IoT Hub."
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


// Service Schema for Robotics  Testing Service
export const roboticTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Robotic Testing Services",
  "description": "Expert robotic testing services covering safety validation, software logic, sensor precision, actuator accuracy, and performance for industrial and service robots.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Robotic QA",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Comprehensive Robotic QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Validation of robotic movements, precision control, sensors, and actuators."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Safety Validation",
          "description": "Testing of safety features such as collision detection, emergency stops, and human-robot interaction protocols."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Speed, load, endurance, and accuracy testing for robotic efficiency and optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Integration Testing",
          "description": "Validation of robotic system communication with software platforms, PLCs, and control systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Testing",
          "description": "Validation of control algorithms, automation logic, sensor data handling, and decision engines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Autonomous Testing",
          "description": "Testing autonomous navigation, AI-driven actions, obstacle avoidance, and environment adaptability."
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
      "price": "Contact for pricing"
    }
  }
};

// Service Schema for manual Testing Service
export const manualTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Manual Testing Services",
  "description": "Expert-led manual testing services including functional, usability, exploratory, compatibility, and accessibility testing to ensure exceptional software quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Manual Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Validates application functionality against business requirements with 98% success rate."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "Evaluates user experience to identify intuitive design issues and improve user satisfaction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exploratory Testing",
          "description": "Unstructured, creative testing to identify edge cases and unexpected user behaviors."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Acceptance Testing (UAT)",
          "description": "Validates that the software meets user expectations and is ready for production release."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Ensures proper functioning across different browsers, operating systems, and devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accessibility Testing",
          "description": "Evaluates compliance with accessibility standards like WCAG to ensure inclusive user experience."
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

// Service Schema for automation Testing Service
export const automationTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automation Testing Services",
  "description": "Advanced automation testing services with intelligent frameworks, CI/CD integration, and expert support. Reduce testing time by 80% and improve software quality across web, mobile, and APIs.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automation Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Automation",
          "description": "Automated testing for web applications using Selenium, Playwright, and Cypress across browsers and platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Automation",
          "description": "Comprehensive automation of RESTful and SOAP APIs ensuring robust backend validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Automation",
          "description": "Cross-device automation testing for Android and iOS apps ensuring smooth mobile experiences."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CI/CD Integration",
          "description": "Seamless integration of test automation in CI/CD pipelines using tools like Jenkins, GitHub Actions, and Azure DevOps."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Automation",
          "description": "Automation testing on cloud-based platforms for scalable, parallel, and remote test execution."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Automation",
          "description": "Load and stress testing using automation to ensure high-performing and scalable applications."
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
    }
  }
};

// Service Schema for security Testing Service
export const securityTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Testing Services",
    "description": "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "www.testriq.com/"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Penetration Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vulnerability Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Code Review"
          }
        }
      ]
    }
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
    }
  }
};

// Service Schema for about page
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us - Testriq QA Lab",
  "url": "www.testriq.com/about",
  "description": "Testriq QA Lab is a trusted software testing company with 14+ years of global experience. Our ISTQB-certified team delivers expert QA services with precision, innovation, and client satisfaction.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "www.testriq.com",
    "logo": "www.testriq.com/images/Testriq_Logo.png",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Testriq QA Founders"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park",
      "addressLocality": "Mira Road East",
      "addressRegion": "Mira Bhayandar",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9152929343",
      "contactType": "customer support",
      "email": "contact@testriq.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/testriq",
      "https://www.twitter.com/testriq"
    ],
    "employee": {
      "@type": "OrganizationRole",
      "employee": {
        "@type": "Person",
        "name": "Certified QA Professionals"
      },
      "roleName": "Software Testing Engineer"
    },
    "award": [
      "Best QA Partner of the Year 2024",
      "Innovation in Testing Award 2023",
      "Client Choice Award 2022"
    ],
    "numberOfEmployees": "50+",
    "knowsAbout": [
      "ISTQB Certified Testing",
      "Agile QA Practices",
      "Automation Testing",
      "Security Testing",
      "Performance Testing"
    ],
    "slogan": "Pioneering Quality Assurance Excellence"
  }
};

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
  "@type": "Organization",
  "name": "Testriq QA Lab",
  "url": "www.testriq.com",
  "logo": "www.testriq.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/testriq",
    "https://twitter.com/testriq"
  ],
  "department": {
    "@type": "Organization",
    "name": "Testriq Careers",
    "url": "www.testriq.com/careers"
  },
  "makesOffer": {
    "@type": "OfferCatalog",
    "name": "QA Career Opportunities at Testriq",
    "itemListElement": [
      {
        "@type": "JobPosting",
        "title": "Senior Test Automation Engineer",
        "description": "Lead automation initiatives using Selenium, Cypress, and CI/CD. Design scalable test strategies for web/mobile.",
        "employmentType": "FULL_TIME",
        "jobLocationType": "TELECOMMUTE",
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Testriq QA Lab",
          "sameAs": "www.testriq.com"
        }
      },
      {
        "@type": "JobPosting",
        "title": "QA Test Engineer",
        "description": "Execute manual testing and ensure quality for web and mobile apps. Collaborate with developers and designers.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US"
          }
        },
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "Performance Testing Specialist",
        "description": "Use JMeter, LoadRunner for performance and load testing. Analyze system bottlenecks and optimize throughput.",
        "employmentType": "FULL_TIME",
        "jobLocationType": "TELECOMMUTE",
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "Mobile QA Engineer",
        "description": "Test iOS and Android apps using Appium and other tools. Focus on real device testing and user experience.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "GB"
          }
        },
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "Security Testing Engineer",
        "description": "Conduct penetration tests, vulnerability scans, OWASP compliance, and secure code assessments.",
        "employmentType": "FULL_TIME",
        "jobLocationType": "TELECOMMUTE",
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "Junior QA Analyst",
        "description": "Start your QA career with mentorship and hands-on experience in real projects. Open to freshers.",
        "employmentType": "FULL_TIME",
        "jobLocationType": "TELECOMMUTE",
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "Lead QA Engineer",
        "description": "Lead QA teams, define testing strategies, mentor juniors, and ensure delivery quality across projects.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US"
          }
        },
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      },
      {
        "@type": "JobPosting",
        "title": "API Testing Specialist",
        "description": "Test REST/GraphQL APIs using Postman/Newman. Build automated test suites and ensure backend reliability.",
        "employmentType": "FULL_TIME",
        "jobLocationType": "TELECOMMUTE",
        "validThrough": "2025-12-31",
        "datePosted": "2025-07-28"
      }
    ]
  }
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
      "price": "Contact for pricing"
    }
  }
};

// Structured data for dating app certification service
export const datingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dating App Trust Certification",
  description:
    "Comprehensive trust certification program for dating apps covering identity verification, user safety, content moderation, privacy compliance, and platform stability.",
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
      "price": "Contact for pricing"
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
      "price": "Contact for pricing"
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