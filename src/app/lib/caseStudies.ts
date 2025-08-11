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
    id: 4,
    slug: "canva-case-study",
    title: "Comprehensive Testing for Canva – A Free Graphic Design Platform",
    client: "Canva",
    industry: "Graphic design",
    duration: "Ongoing since 2018",
    description: "The platform is free to use but offers paid subscriptions like Canva Pro and Canva for Enterprise for additional functionality. Testriq Lab ensured seamless implementation and defect-free releases for Canva's massive UI changes and new features across multiple platforms.",
    image: "/case-study-canva.jpg",
    overview: {
      clientBackground: "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, documents and other visual content. Users can choose from many professional designed templates, and edit the designs and upload their own photos through a drag and drop interface. The platform is free to use but offers paid subscriptions like Canva Pro and Canva for Enterprise for additional functionality.",
      projectScope: "Complete testing overhaul covering desktop browsers, mobile browsers and native apps for Android and Apple devices. We helped Canva in testing across all platforms/browsers on supported old and new versions of OS/Browsers covering 100s of test cases every day to support daily release on mentioned platforms.",
      teamSize: "Dedicated QA team with expertise in cross-platform testing",
      timeline: "Ongoing since 2018, supporting daily releases across multiple platforms"
    },
    challenge: {
      title: "Massive UI Changes and Multi-Platform Testing Complexity",
      description: "Canva has been going on massive change since 2018 where the UI has been changed completely with the introduction of many new features which were not supported earlier. As a testing partner, we were responsible to make sure these changes are implemented and released without defects and document all QA documents for any references.",
      keyIssues: [
        "Complete UI overhaul since 2018 with introduction of many new features",
        "Supporting daily releases across desktop browsers, mobile browsers and native apps",
        "Testing across 100s of test cases daily for multiple platforms",
        "Ensuring drag-and-drop interface functionality across all platforms",
        "Cross-platform compatibility issues (PC, Mobile, iPad, Tablet)",
        "Maintaining comprehensive QA documentation for references"
      ],
      businessImpact: "Failure to ensure quality would lead to poor user experience across millions of users, negative brand perception, and potential loss of market position as a leading graphic design platform."
    },
    solution: {
      title: "Comprehensive Multi-Platform QA and Testing Strategy",
      description: "We implemented a comprehensive testing approach covering all aspects of Canva's platform evolution, from UI changes to new feature integration, ensuring seamless user experience across all supported platforms and devices.",
      approach: [
        "Understanding requirement through requirement documents and client communication",
        "Drafting requirement documents, mind maps, etc for references",
        "Creating test cases based on requirement",
        "Creating different test sets for Sanity, Regression etc",
        "Executing test runs after release",
        "Posting issues for found bugs",
        "Maintaining test data, records",
        "Help development team to reproduce issues, if required",
        "Create status reports of test runs and share with team",
        "Perform fixed defect verification"
      ],
      methodology: "Agile testing methodology with continuous testing to support daily releases and rapid feature integration across multiple platforms and browsers.",
      keyStrategies: [
        "Comprehensive testing across desktop browsers, mobile browsers and native apps for Android and Apple devices",
        "Daily execution of 100s of test cases covering all supported platforms",
        "Focus on functional testing, GUI testing, usability testing, accessibility testing, and performance testing",
        "Extensive drag-and-drop interface testing across all platforms",
        "Cross-platform compatibility testing (PC, Mobile, iPad, Tablet)",
        "Close collaboration with development team for defect reproduction and verification"
      ]
    },
    results: {
      bugReduction: "Significant",
      performanceImprovement: "Optimized",
      roi: "Enhanced",
      additionalMetrics: [
        { label: "Defect-Free Daily Releases", value: "Consistent" },
        { label: "Cross-Platform Stability", value: "High" },
        { label: "User Experience", value: "Seamless" },
        { label: "Feature Integration", value: "Smooth" },
        { label: "Platform Coverage", value: "100%" }
      ]
    },
    technologies: ["Manual Testing", "Automation Testing", "Cross-Browser Testing", "Mobile App Testing", "Performance Testing", "Usability Testing", "Accessibility Testing", "GUI Testing", "Functional Testing"],
    testimonial: {
      quote: "I highly recommend Testriq for their outstanding QA testing services provided to Canva over the past few years.",
      author: "Loren De Camas",
      role: "QA Lead at Canva",
      company: "Canva",
      rating: 5
    },
    timeline: [
      {
        phase: "Requirement Analysis & Documentation",
        duration: "Ongoing",
        activities: [
          "Understanding requirements through requirement documents and client communication",
          "Drafting requirement documents, mind maps, etc for references"
        ]
      },
      {
        phase: "Test Case Design & Management",
        duration: "Ongoing",
        activities: [
          "Creating test cases based on requirement",
          "Creating different test sets for Sanity, Regression etc"
        ]
      },
      {
        phase: "Daily Test Execution & Quality Assurance",
        duration: "Ongoing",
        activities: [
          "Executing test runs after release",
          "Posting issues for found bugs",
          "Maintaining test data, records",
          "Perform fixed defect verification"
        ]
      },
      {
        phase: "Collaboration & Reporting",
        duration: "Ongoing",
        activities: [
          "Help development team to reproduce issues, if required",
          "Create status reports of test runs and share with team",
          "Maintaining comprehensive QA documentation"
        ]
      }
    ],
    keyTakeaways: [
      "Comprehensive cross-platform testing is essential for graphic design platforms with diverse user bases",
      "Daily testing execution supports rapid feature development and release cycles",
      "Strong collaboration between QA and development teams ensures quick issue resolution",
      "Detailed QA documentation is vital for long-term project success and reference",
      "Drag-and-drop interface testing requires specialized attention across all platforms"
    ],
    nextSteps: [
      "Continue supporting Canva's evolution with new features and platform expansions",
      "Implement advanced automation techniques for even more efficient daily testing",
      "Explore AI-driven testing approaches for predictive quality assurance",
      "Enhance cross-platform testing capabilities for emerging devices and browsers"
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find(caseStudy => caseStudy.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData;
}

export function getRelatedCaseStudies(currentSlug: string, limit: number = 3): CaseStudy[] {
  return caseStudiesData
    .filter(caseStudy => caseStudy.slug !== currentSlug)
    .slice(0, limit);
}

