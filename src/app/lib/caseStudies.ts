export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  description: string;
  image: string;
  overview: {
    clientBackground: string;
    projectScope: string;
    teamSize: string;
    timeline: string;
  };
  challenge: {
    title: string;
    description: string;
    keyIssues: string[];
    businessImpact: string;
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    methodology: string;
    keyStrategies: string[];
  };
  results: {
    bugReduction: string;
    performanceImprovement: string;
    roi: string;
    additionalMetrics: {
      label: string;
      value: string;
    }[];
  };
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };
  timeline: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  keyTakeaways: string[];
  nextSteps: string[];
}

// Case studies data
const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "ecommerce-platform-transformation",
    title: "E-commerce Platform Transformation",
    client: "Global Retail Leader",
    industry: "E-commerce",
    duration: "6 months",
    description: "How we transformed a legacy e-commerce platform to handle 10x more traffic with 99.9% uptime during peak shopping seasons.",
    image: "/case-study-ecommerce.jpg",
    overview: {
      clientBackground: "A leading global retail company with over 50 million customers worldwide, processing billions in annual revenue through their e-commerce platform.",
      projectScope: "Complete testing overhaul of legacy e-commerce system including web application, mobile apps, payment processing, and inventory management systems.",
      teamSize: "12 QA engineers, 3 automation specialists, 2 performance testing experts",
      timeline: "6 months from initial assessment to full deployment"
    },
    challenge: {
      title: "Legacy System Performance Crisis",
      description: "The client's legacy e-commerce platform was experiencing frequent crashes during peak shopping seasons, resulting in significant revenue loss and poor customer experience.",
      keyIssues: [
        "System crashes during high traffic periods (Black Friday, Cyber Monday)",
        "Slow page load times averaging 8-12 seconds",
        "Payment processing failures affecting 15% of transactions",
        "Mobile app crashes on iOS and Android platforms",
        "Inventory synchronization issues causing overselling",
        "Security vulnerabilities in user authentication system"
      ],
      businessImpact: "The performance issues were costing the company an estimated $2.3 million per month in lost sales and customer acquisition costs."
    },
    solution: {
      title: "Comprehensive Testing & Optimization Strategy",
      description: "We implemented a multi-layered testing approach focusing on performance optimization, automated regression testing, and continuous monitoring.",
      approach: [
        "Performance testing and load testing implementation",
        "Automated regression testing suite development",
        "Mobile application testing across multiple devices",
        "API testing and microservices validation",
        "Security testing and vulnerability assessment",
        "Continuous integration and deployment testing"
      ],
      methodology: "Agile testing methodology with 2-week sprints, continuous integration, and automated testing pipelines.",
      keyStrategies: [
        "Implemented comprehensive load testing using JMeter and K6",
        "Developed automated test suites using Selenium and Cypress",
        "Created mobile testing framework using Appium",
        "Established API testing protocols with Postman and REST Assured",
        "Implemented security testing using OWASP ZAP and Burp Suite",
        "Set up continuous monitoring and alerting systems"
      ]
    },
    results: {
      bugReduction: "95%",
      performanceImprovement: "75%",
      roi: "250%",
      additionalMetrics: [
        { label: "Uptime During Peak Season", value: "99.9%" },
        { label: "Page Load Time Reduction", value: "75%" },
        { label: "Conversion Rate Increase", value: "40%" },
        { label: "Mobile App Crash Rate", value: "Reduced by 90%" },
        { label: "Payment Success Rate", value: "99.8%" },
        { label: "Customer Satisfaction Score", value: "4.8/5" }
      ]
    },
    technologies: ["Selenium", "JMeter", "Cypress", "API Testing", "Appium", "OWASP ZAP", "K6", "Postman"],
    testimonial: {
      quote: "Testriq's testing expertise transformed our platform reliability. We now handle 10x more traffic without issues and our customers are happier than ever.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Global Retail Leader",
      rating: 5
    },
    timeline: [
      {
        phase: "Assessment & Planning",
        duration: "2 weeks",
        activities: [
          "System architecture analysis",
          "Performance bottleneck identification",
          "Test strategy development",
          "Team onboarding and tool setup"
        ]
      },
      {
        phase: "Test Framework Development",
        duration: "4 weeks",
        activities: [
          "Automated test suite creation",
          "Performance testing setup",
          "Mobile testing framework implementation",
          "API testing protocol establishment"
        ]
      },
      {
        phase: "Testing Execution",
        duration: "12 weeks",
        activities: [
          "Comprehensive functional testing",
          "Performance and load testing",
          "Security vulnerability assessment",
          "Mobile app testing across devices",
          "User acceptance testing coordination"
        ]
      },
      {
        phase: "Optimization & Deployment",
        duration: "6 weeks",
        activities: [
          "Performance optimization implementation",
          "Bug fixes and retesting",
          "Production deployment support",
          "Monitoring setup and documentation"
        ]
      }
    ],
    keyTakeaways: [
      "Early performance testing prevents costly production issues",
      "Automated testing reduces manual effort by 80% and improves accuracy",
      "Continuous monitoring is essential for maintaining system reliability",
      "Mobile testing requires device-specific strategies for optimal results",
      "Security testing should be integrated throughout the development lifecycle"
    ],
    nextSteps: [
      "Implement AI-powered testing for predictive quality assurance",
      "Expand automated testing coverage to include visual regression testing",
      "Develop advanced performance monitoring and alerting systems",
      "Create comprehensive disaster recovery testing procedures"
    ]
  },
  {
    id: 2,
    slug: "healthcare-app-security-compliance",
    title: "Healthcare App Security & Compliance",
    client: "MedTech Startup",
    industry: "Healthcare",
    duration: "4 months",
    description: "Comprehensive security testing and HIPAA compliance validation for a patient data management system, achieving FDA approval.",
    image: "/case-study-healthcare.jpg",
    overview: {
      clientBackground: "An innovative MedTech startup developing a revolutionary patient data management system for healthcare providers, serving over 100 hospitals nationwide.",
      projectScope: "Complete security testing, HIPAA compliance validation, and FDA approval preparation for a cloud-based healthcare application.",
      teamSize: "8 security testing specialists, 4 compliance experts, 2 healthcare domain experts",
      timeline: "4 months from security assessment to FDA approval"
    },
    challenge: {
      title: "Critical Security & Compliance Requirements",
      description: "The healthcare application needed to meet stringent HIPAA compliance requirements and pass FDA approval while maintaining high performance and user experience.",
      keyIssues: [
        "HIPAA compliance gaps in data handling and storage",
        "Security vulnerabilities in patient data transmission",
        "Insufficient access controls and user authentication",
        "Lack of audit trails for regulatory compliance",
        "Data encryption weaknesses in database and API layers",
        "Missing disaster recovery and data backup procedures"
      ],
      businessImpact: "Non-compliance would prevent market entry and FDA approval, potentially costing millions in development investment and market opportunity."
    },
    solution: {
      title: "Comprehensive Security & Compliance Testing",
      description: "We implemented a thorough security testing framework with HIPAA compliance validation and FDA approval preparation.",
      approach: [
        "Security vulnerability assessment and penetration testing",
        "HIPAA compliance gap analysis and remediation",
        "Data encryption and transmission security testing",
        "Access control and authentication system validation",
        "Audit trail implementation and testing",
        "Disaster recovery and backup system testing"
      ],
      methodology: "Risk-based security testing approach with continuous compliance monitoring and regulatory requirement validation.",
      keyStrategies: [
        "Conducted comprehensive penetration testing using OWASP methodology",
        "Implemented automated security scanning with Burp Suite and Nessus",
        "Developed HIPAA compliance testing framework",
        "Created comprehensive audit trail and logging systems",
        "Established data encryption protocols for all sensitive information",
        "Implemented multi-factor authentication and role-based access controls"
      ]
    },
    results: {
      bugReduction: "100%",
      performanceImprovement: "60%",
      roi: "400%",
      additionalMetrics: [
        { label: "HIPAA Compliance Score", value: "100%" },
        { label: "Security Vulnerabilities", value: "Zero Critical" },
        { label: "FDA Approval", value: "Achieved" },
        { label: "Patient Onboarding Speed", value: "50% Faster" },
        { label: "Data Encryption Coverage", value: "100%" },
        { label: "Audit Trail Completeness", value: "100%" }
      ]
    },
    technologies: ["OWASP ZAP", "Burp Suite", "Security Testing", "Compliance Testing", "Nessus", "Veracode", "Penetration Testing"],
    testimonial: {
      quote: "Their security testing expertise was crucial for our FDA approval and market launch success. The team's deep understanding of healthcare compliance requirements made all the difference.",
      author: "Dr. Michael Chen",
      role: "Head of Product",
      company: "MedTech Startup",
      rating: 5
    },
    timeline: [
      {
        phase: "Security Assessment",
        duration: "2 weeks",
        activities: [
          "Comprehensive security audit",
          "HIPAA compliance gap analysis",
          "Threat modeling and risk assessment",
          "Security testing strategy development"
        ]
      },
      {
        phase: "Vulnerability Testing",
        duration: "6 weeks",
        activities: [
          "Penetration testing execution",
          "Automated security scanning",
          "Data encryption validation",
          "Access control testing",
          "API security assessment"
        ]
      },
      {
        phase: "Compliance Validation",
        duration: "4 weeks",
        activities: [
          "HIPAA compliance testing",
          "Audit trail validation",
          "Data backup and recovery testing",
          "User access management verification",
          "Documentation and reporting"
        ]
      },
      {
        phase: "FDA Preparation",
        duration: "4 weeks",
        activities: [
          "Regulatory documentation preparation",
          "Final security validation",
          "Compliance certification",
          "FDA submission support"
        ]
      }
    ],
    keyTakeaways: [
      "Healthcare applications require specialized security testing expertise",
      "HIPAA compliance must be built into the testing process from day one",
      "Automated security scanning should complement manual penetration testing",
      "Comprehensive audit trails are essential for regulatory compliance",
      "Regular security assessments prevent costly compliance failures"
    ],
    nextSteps: [
      "Implement continuous security monitoring and threat detection",
      "Develop advanced encryption protocols for emerging threats",
      "Create automated compliance testing for ongoing validation",
      "Establish security incident response and recovery procedures"
    ]
  },
  {
    id: 3,
    slug: "fintech-mobile-app-optimization",
    title: "Fintech Mobile App Optimization",
    client: "Digital Banking Platform",
    industry: "Financial Services",
    duration: "8 months",
    description: "Mobile app performance optimization and regulatory compliance for a digital banking platform, achieving 99.99% transaction success rate.",
    image: "/case-study-fintech.jpg",
    overview: {
      clientBackground: "A leading digital banking platform serving over 2 million customers with mobile-first banking services, processing $50 billion in annual transactions.",
      projectScope: "Complete mobile application testing overhaul including performance optimization, security testing, and regulatory compliance validation.",
      teamSize: "15 mobile testing specialists, 5 performance engineers, 3 compliance experts",
      timeline: "8 months from initial assessment to full optimization deployment"
    },
    challenge: {
      title: "Mobile Performance & Compliance Crisis",
      description: "The digital banking app was experiencing performance issues, transaction failures, and regulatory compliance concerns that threatened customer trust and regulatory standing.",
      keyIssues: [
        "Mobile app performance degradation during peak usage",
        "Transaction failures affecting customer confidence",
        "SOX compliance gaps in financial reporting systems",
        "Security vulnerabilities in mobile authentication",
        "Cross-platform compatibility issues (iOS/Android)",
        "Real-time transaction processing delays"
      ],
      businessImpact: "Performance issues were causing customer churn and potential regulatory penalties, with estimated losses of $5 million annually."
    },
    solution: {
      title: "Comprehensive Mobile Testing & Optimization",
      description: "We implemented a comprehensive mobile testing strategy with real device testing, API validation, and security protocols to ensure optimal performance and compliance.",
      approach: [
        "Real device mobile testing across multiple platforms",
        "Performance optimization and load testing",
        "API testing and microservices validation",
        "Security testing for mobile authentication",
        "SOX compliance testing and validation",
        "Continuous integration and deployment testing"
      ],
      methodology: "Device-centric testing approach with continuous performance monitoring and automated regression testing.",
      keyStrategies: [
        "Implemented comprehensive mobile testing using Appium and real devices",
        "Developed API testing framework using REST Assured and Postman",
        "Created performance testing protocols for mobile applications",
        "Established security testing for mobile authentication systems",
        "Implemented SOX compliance testing procedures",
        "Set up continuous monitoring for transaction processing"
      ]
    },
    results: {
      bugReduction: "98%",
      performanceImprovement: "80%",
      roi: "350%",
      additionalMetrics: [
        { label: "Transaction Success Rate", value: "99.99%" },
        { label: "App Performance Improvement", value: "80%" },
        { label: "SOX Compliance", value: "Achieved" },
        { label: "App Store Rating", value: "4.8/5" },
        { label: "Customer Satisfaction", value: "95%" },
        { label: "Processing Speed", value: "3x Faster" }
      ]
    },
    technologies: ["Appium", "REST Assured", "Mobile Testing", "API Testing", "Performance Testing", "Security Testing", "Compliance Testing"],
    testimonial: {
      quote: "The mobile testing strategy delivered by Testriq exceeded our expectations and user satisfaction goals. Our app now performs flawlessly under any load condition.",
      author: "Jennifer Martinez",
      role: "VP of Engineering",
      company: "Digital Banking Platform",
      rating: 5
    },
    timeline: [
      {
        phase: "Mobile Assessment",
        duration: "3 weeks",
        activities: [
          "Mobile app performance analysis",
          "Device compatibility assessment",
          "API performance evaluation",
          "Security vulnerability assessment"
        ]
      },
      {
        phase: "Testing Framework Development",
        duration: "8 weeks",
        activities: [
          "Mobile testing automation setup",
          "API testing framework creation",
          "Performance testing implementation",
          "Security testing protocol establishment"
        ]
      },
      {
        phase: "Comprehensive Testing",
        duration: "16 weeks",
        activities: [
          "Real device testing execution",
          "Performance and load testing",
          "API and microservices testing",
          "Security and compliance validation",
          "User experience testing"
        ]
      },
      {
        phase: "Optimization & Deployment",
        duration: "5 weeks",
        activities: [
          "Performance optimization implementation",
          "Bug fixes and retesting",
          "Production deployment support",
          "Monitoring and documentation"
        ]
      }
    ],
    keyTakeaways: [
      "Real device testing is essential for mobile banking applications",
      "API performance directly impacts mobile app user experience",
      "Continuous monitoring prevents transaction processing issues",
      "Security testing must cover all mobile authentication methods",
      "Compliance testing should be integrated into the development lifecycle"
    ],
    nextSteps: [
      "Implement AI-powered fraud detection testing",
      "Develop advanced mobile security testing protocols",
      "Create predictive performance monitoring systems",
      "Establish comprehensive disaster recovery testing"
    ]
  }
];

// Helper functions
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find(caseStudy => caseStudy.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, limit: number = 2): CaseStudy[] {
  return caseStudiesData
    .filter(caseStudy => caseStudy.slug !== currentSlug)
    .slice(0, limit);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudiesData.filter(caseStudy => 
    caseStudy.industry.toLowerCase() === industry.toLowerCase()
  );
}

