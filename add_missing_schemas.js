const fs = require('fs');
const filePath = 'src/components/seo/StructuredData.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// All the missing schemas that pages import but don't exist yet
const missingSchemas = `
// ============================================================
// MISSING SERVICE SCHEMAS (referenced by service pages)
// ============================================================

export const accessibilityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accessibility Testing Services",
  "description": "Comprehensive WCAG 2.2 and ADA compliance accessibility testing services to ensure your digital products are inclusive and accessible to all users.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Accessibility & WCAG Compliance Testing",
  "areaServed": "Worldwide"
};

export const adHocTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ad Hoc Testing Services",
  "description": "Expert ad hoc and exploratory testing services for rapid defect identification without formal test plans. Ideal for agile teams needing flexible QA coverage.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Ad Hoc & Exploratory Testing",
  "areaServed": "Worldwide"
};

export const architectureServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Application Architecture Inspection Services",
  "description": "In-depth application architecture inspection and software architecture audit services to identify design flaws, scalability risks, and technical debt early.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Application Architecture Audit",
  "areaServed": "Worldwide"
};

export const architectureFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is application architecture inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Application architecture inspection is a systematic review of a software system's structural design to identify weaknesses, scalability bottlenecks, security vulnerabilities, and deviations from best practices."
      }
    },
    {
      "@type": "Question",
      "name": "Why is architecture inspection important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It helps identify design flaws and technical debt early, reducing long-term maintenance costs and improving system reliability, security, and performance."
      }
    }
  ]
};

export const azureTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Azure Testing Services",
  "description": "Comprehensive Azure cloud testing services including cloud-native QA, DevOps integration, Azure DevTest Labs management, and performance validation for enterprise workloads.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cloud & Azure Testing",
  "areaServed": "Worldwide"
};

export const azureFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Azure testing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Azure testing services involve validating applications deployed on Microsoft Azure, including functional testing, performance testing, security auditing, and CI/CD pipeline integration using Azure DevOps."
      }
    },
    {
      "@type": "Question",
      "name": "How does Testriq support Azure DevOps testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testriq integrates automated test suites directly into Azure DevOps pipelines, enabling continuous testing, faster release cycles, and real-time quality gates for enterprise cloud applications."
      }
    }
  ]
};

export const blockchainServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain Application Testing Services",
  "description": "Specialized blockchain testing services covering smart contract auditing, DeFi platform testing, NFT marketplace QA, and decentralized application security validation.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Blockchain & Smart Contract Testing",
  "areaServed": "Worldwide"
};

export const blockchainFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does blockchain testing cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blockchain testing covers smart contract functionality, consensus mechanism validation, security audits, network performance, tokenomics logic, and integration testing with external systems."
      }
    },
    {
      "@type": "Question",
      "name": "Why is smart contract auditing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart contracts are immutable once deployed. A single bug can result in irreversible financial loss. Rigorous auditing ensures contract logic is correct, secure, and free from common vulnerabilities."
      }
    }
  ]
};

export const compatibilityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Compatibility Testing Services",
  "description": "End-to-end compatibility testing across browsers, devices, operating systems, and network environments to ensure your application works flawlessly everywhere.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cross-Browser & Cross-Device Compatibility Testing",
  "areaServed": "Worldwide"
};

export const compatibilityFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is compatibility testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compatibility testing verifies that a software application works correctly across different browsers, devices, operating systems, screen resolutions, and network configurations."
      }
    },
    {
      "@type": "Question",
      "name": "Why is cross-browser testing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different browsers render web pages differently. Cross-browser testing ensures a consistent user experience across Chrome, Firefox, Safari, Edge, and other browsers."
      }
    }
  ]
};

export const cyberSecurityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cyber Security Testing Services",
  "description": "Comprehensive cyber security testing including penetration testing, vulnerability assessments, VAPT, and security audits to protect your digital assets from threats.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cyber Security & Penetration Testing",
  "areaServed": "Worldwide"
};

export const embeddedTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Embedded Systems Testing Services",
  "description": "Specialized embedded software and hardware testing services for IoT devices, firmware validation, real-time systems, and safety-critical embedded applications.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Embedded & Firmware Testing",
  "areaServed": "Worldwide"
};

export const managedTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed Testing Services",
  "description": "End-to-end managed QA and testing services with dedicated testing teams, test management, and full ownership of your software quality lifecycle.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Managed QA & Testing Outsourcing",
  "areaServed": "Worldwide"
};

export const microservicesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Microservices Testing Services",
  "description": "Comprehensive microservices testing including contract testing, API testing, service mesh validation, and end-to-end integration testing for distributed architectures.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Microservices & API Testing",
  "areaServed": "Worldwide"
};

export const migrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Migration Testing Services",
  "description": "Specialized migration testing services for database migrations, cloud migrations, platform upgrades, and data migration projects to ensure zero data loss and business continuity.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Data & System Migration Testing",
  "areaServed": "Worldwide"
};

export const saasTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Application Testing Services",
  "description": "Comprehensive SaaS testing services including multi-tenant architecture validation, subscription management testing, API integration testing, and scalability assessment.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "SaaS & Cloud Application Testing",
  "areaServed": "Worldwide"
};

export const shiftLeftServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shift Left Testing Services",
  "description": "Shift-left testing services that integrate quality assurance early in the development lifecycle, reducing defect costs and accelerating software delivery.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Shift-Left QA & Early Testing",
  "areaServed": "Worldwide"
};

export const timezoneTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Timezone Testing Services",
  "description": "Real-time QA and follow-the-sun testing services that provide round-the-clock quality assurance coverage across global time zones for uninterrupted software delivery.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Timezone & Follow-the-Sun Testing",
  "areaServed": "Worldwide"
};

export const timezoneFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is timezone testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timezone testing ensures your application correctly handles date and time operations across multiple time zones, including daylight saving time transitions, locale-specific formatting, and scheduling logic."
      }
    },
    {
      "@type": "Question",
      "name": "What is follow-the-sun testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Follow-the-sun testing is a global testing model where QA teams in different time zones hand off work continuously, providing round-the-clock testing coverage without overtime costs."
      }
    }
  ]
};
`;

// Append the missing schemas to the end of the file
content = content.trimEnd() + '\n' + missingSchemas;
fs.writeFileSync(filePath, content, 'utf-8');

// Verify
const matches = [...content.matchAll(/export const (\w+)/g)];
console.log('Total exports after fix:', matches.length);
const missing = [
    'accessibilityServiceSchema', 'adHocTestingServiceSchema', 'architectureServiceSchema',
    'architectureFAQSchema', 'azureTestingSchema', 'azureFAQSchema',
    'blockchainServiceSchema', 'blockchainFAQSchema', 'compatibilityTestingServiceSchema',
    'compatibilityFAQSchema', 'cyberSecurityServiceSchema', 'embeddedTestingSchema',
    'managedTestingServiceSchema', 'microservicesServiceSchema', 'migrationServiceSchema',
    'saasTestingServiceSchema', 'shiftLeftServiceSchema', 'timezoneTestingServiceSchema',
    'timezoneFAQSchema'
];
const exportNames = matches.map(m => m[1]);
const stillMissing = missing.filter(n => !exportNames.includes(n));
if (stillMissing.length === 0) {
    console.log('All previously missing schemas are now present!');
} else {
    console.log('Still missing:', stillMissing.join(', '));
}
