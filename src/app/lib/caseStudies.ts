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
    image: "/Canva_Logo.png",
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
  },
  {
    id: 5,
    slug: "ragnar-case-study",
    title: "Ragnar Case Study – Sports Platform QA by Testriq",
    client: "Ragnar",
    industry: "Sports and Fitness",
    duration: "Ongoing",
    description: "Ragnar is a Sports and Fitness Online and Mobile Platform that organizes Marathon Majorly in USA and in Some Parts of Europe, Canada, Australia, Mexico and South Africa. Ragnar Provides a Platform for Individual Users to run a Day Challenge, a Month Challenge, Elevation Challenge, Night Challenges. Ragnar is the only Provider that Provides Runner and their Team with Glamping Benefits. Glamping Benefit is for a team, that they could spend precious hours hunting down tents, canopies, chairs, coolers, and other Ragnar gear for Themselves and their teammates. Ragnar also provides a Platform for Users running the Races Virtually.",
    image: "/Ragnar_logo.webp",
    overview: {
      clientBackground: "Ragnar is a Sports and Fitness Online and Mobile Platform that organizes Marathon Majorly in USA and in Some Parts of Europe, Canada, Australia, Mexico and South Africa. Ragnar Provides a Platform for Individual Users to run a Day Challenge, a Month Challenge, Elevation Challenge, Night Challenges. Ragnar is the only Provider that Provides Runner and their Team with Glamping Benefits. Glamping Benefit is for a team, that they could spend precious hours hunting down tents, canopies, chairs, coolers, and other Ragnar gear for Themselves and their teammates. Ragnar also provides a Platform for Users running the Races Virtually.",
      projectScope: "Complete QA and testing for Ragnar's online and mobile platform, including web architecture, mobile application, and new features like Ragnar Challenges and Virtual Challenges. This involved data migration from old systems and continuous support for new implementations.",
      teamSize: "Dedicated QA team with expertise in sports and fitness platforms",
      timeline: "Ongoing, with rapid development cycles for new features and platforms"
    },
    challenge: {
      title: "Buggy and Slow Legacy System with Complex Data Migration",
      description: "Ragnar's old system was buggy and slow, leading to dissatisfaction among the CEO and engineering team. The main challenge was to build a new system that was less complex for both customers and the internal Ragnar team, which involved a complicated data migration process from old text files to a new structure.",
      keyIssues: [
        "Old system was buggy and slow, causing dissatisfaction",
        "Need for a new, less knotty system for customers and internal team",
        "Complicated data migration from old text files to new structure",
        "Ensuring seamless integration of new platforms like Ragnar CMS, Team – Center, Hub Platform, and App",
        "Rapid development and QA for new features like Ragnar Challenges and Virtual Challenges",
        "Maintaining business continuity during Covid-19 pandemic with virtual events"
      ],
      businessImpact: "The legacy system's issues were impacting user experience and internal efficiency, threatening Ragnar's position as a leading sports event organizer. Failure to deliver a new, stable platform would lead to loss of users and revenue."
    },
    solution: {
      title: "Building a New, Robust Platform with Comprehensive QA",
      description: "Testriq Team proposed and built a new system for Ragnar, focusing on a less complex and more efficient platform. This involved extensive planning, data migration, and continuous QA support for new features and platforms, including Ragnar CMS, Ragnar Team – Center, Ragnar Hub Platform, and Ragnar App.",
      approach: [
        "Understanding actual business requirement and QA’ing it as per requirement.",
        "Performing Impact Analysis on the website to identify affected areas by functional/UI changes.",
        "Creating Test Cases according to SRS.",
        "Executing Test cases when the website is ready for QA.",
        "Creating issues for Failed Test Cases and logging them in Database.",
        "Monitoring processes to ensure effectiveness and keeping adequate records.",
        "Checking output for defects, with appropriate and corrective action where necessary.",
        "Setting the Priority and Severity of issues and assigning to Dev Team.",
        "Performing regression testing once issues are resolved.",
        "Sending back for UAT once issues are resolved.",
        "Regularly reviewing individual processes and the quality system itself for effectiveness.",
        "Performing Post Deployment testing as soon as Code was released to Prod.",
        "Working in teams from sprint 0 to find defects as early as possible.",
        "Creating testing strategies (formal or informal) and involving the entire team in the process.",
        "Planning testing activities, carrying out testing itself and interpreting testing results.",
        "Allocating Time Appropriately for each process."
      ],
      methodology: "Agile development and QA methodology, with a strong focus on early defect detection, continuous testing, and close collaboration with the Ragnar team. This included a detailed 15-point QA and testing process.",
      keyStrategies: [
        "Development of Ragnar CMS, Ragnar Team – Center, Ragnar Hub Platform, and Ragnar App.",
        "Implementation of Ragnar Challenges Platform with various event types.",
        "Introduction of 'Ragnar Virtual Challenges' during Covid-19 pandemic to maintain business continuity.",
        "Integration with Affirm for EMI payment options.",
        "Development of new event types like Trail Sprint and memorial marathons.",
        "Partnership with JDRF for charitable donations."
      ]
    },
    results: {
      bugReduction: "Significant",
      performanceImprovement: "Improved",
      roi: "Enhanced",
      additionalMetrics: [
        { label: "New Platform Development Time", value: "2-3 Months" },
        { label: "Virtual Challenges Impact", value: "Positive revenue impact during pandemic" },
        { label: "Customer Engagement", value: "Enhanced with new features" },
        { label: "System Stability", value: "Improved significantly" },
        { label: "User Satisfaction", value: "Increased" }
      ]
    },
    technologies: ["Web Testing", "Mobile Testing", "Data Migration", "CMS Testing", "App Testing", "Regression Testing", "UAT", "Post Deployment Testing"],
    testimonial: {
      quote: "Testriq is thorough and proficient in testing across our diverse user base. They are flexible and reliably meet deadlines.",
      author: "Jake Browning",
      role: "Director of Product and Technology",
      company: "Ragnar",
      rating: 5
    },
    timeline: [
      {
        phase: "System Overhaul Planning & Data Migration",
        duration: "Initial 2-3 Months",
        activities: [
          "Gathering new requirements from Ragnar Management Team",
          "Implementing new platform ideas (Ragnar CMS, Team – Center, Hub Platform, App)",
          "Complicated data migration from old text files to new structure",
          "Documenting and approving all implementations with Business Team"
        ]
      },
      {
        phase: "Ragnar Challenges Platform Development & QA",
        duration: "Ongoing",
        activities: [
          "Building and designing Ragnar Challenges Platform",
          "QA and Testing for various challenges (e.g., 'Chase The Moon', '7Summits Challenge')"
        ]
      },
      {
        phase: "Virtual Challenges Implementation & Support",
        duration: "During Covid-19 Pandemic",
        activities: [
          "Implementing 'Ragnar Virtual Challenges' on Team-Center site",
          "Arranging virtual races and promoting 'Virtual Run From Home'"
        ]
      },
      {
        phase: "Continuous Feature Integration & QA",
        duration: "Ongoing",
        activities: [
          "Integrating new features like Affirm payment option and Trail Sprint event type",
          "Developing and supporting memorial marathons and JDRF partnership events",
          "Continuous QA and testing for all new implementations"
        ]
      }
    ],
    keyTakeaways: [
      "Proactive system overhauls can significantly improve performance and user satisfaction.",
      "Complex data migration requires meticulous planning and execution.",
      "Adapting to unforeseen circumstances (like pandemics) with innovative solutions can maintain business continuity.",
      "Comprehensive QA throughout the development lifecycle is crucial for successful platform launches and updates.",
      "Strategic partnerships and community engagement can drive positive business and social impact."
    ],
    nextSteps: [
      "Continue planning and implementing innovative items for positive revenue impact.",
      "Further enhance the virtual challenge platform based on user feedback.",
      "Explore new technologies for even more engaging sports and fitness experiences.",
      "Strengthen community engagement through more charitable events and partnerships."
    ]
  },
  {
    id: 6,
    slug: "kanishka-software-case-study",
    title: "Mobile App Testing Case Study | Kanishka Software X Testriq",
    client: "Kanishka Software",
    industry: "Software Solutions",
    duration: "Undisclosed",
    description: "Delivering a high-performing mobile app through rigorous QA and seamless collaboration.",
    image: "/Kanishka_Software_Logo.webp",
    overview: {
      clientBackground: "Kanishka Software, a provider of advanced software solutions, partnered with Testriq QA Lab to ensure the successful release of a new mobile application. Their goal was to launch a high-performing app that exceeded quality benchmarks and customer expectations.",
      projectScope: "Comprehensive mobile app testing, including functional, usability, performance, compatibility, and security testing, to ensure flawless performance across a wide array of devices and operating systems within a tight timeline.",
      teamSize: "Dedicated QA team with expertise in mobile application testing",
      timeline: "Tight timeline, successfully met without compromising quality"
    },
    challenge: {
      title: "Maintaining High Quality Standards Under Tight Deadlines",
      description: "Kanishka Software faced the dual challenge of maintaining the highest quality standards while adhering to a tight timeline. The application’s success was contingent upon its flawless performance across a wide array of devices and operating systems.",
      keyIssues: [
        "Ensuring app functionality across all key features.",
        "Validating performance under different usage conditions.",
        "Guaranteeing compatibility across multiple devices and OS versions.",
        "Achieving all objectives within a limited timeframe without compromising on quality."
      ],
      businessImpact: "Failure to deliver a flawless app within the tight timeline would have resulted in missed market opportunities and potential damage to Kanishka Software’s reputation."
    },
    solution: {
      title: "Rigorous Multi-Phase QA Approach",
      description: "We implemented a rigorous multi-phase QA approach, starting with detailed requirement analysis and followed by comprehensive test strategy development and execution, ensuring a robust and user-friendly app.",
      approach: [
        "Initial Requirement Analysis: Detailed discussions to understand app functionality, key features, and user experience.",
        "Test Strategy Development: Devising a comprehensive test plan encompassing functional, usability, performance, compatibility, and security testing.",
        "Functional Testing: Verifying core features like user authentication, registration, navigation, and data processing.",
        "Usability Testing: Ensuring an intuitive and smooth UI/UX.",
        "Performance Testing: Testing scalability and responsiveness under varying traffic.",
        "Compatibility Testing: Ensuring flawless performance across devices and OS (iOS/Android).",
        "Security Testing: Ensuring compliance and safeguarding user data.",
        "Manual Testing: Validating complex user journeys and edge cases.",
        "Regression Testing: Ensuring fixes and new features didn’t impact existing functionalities.",
        "Continuous Collaboration: Real-time feedback and alignment with Kanishka’s dev team."
      ],
      methodology: "A collaborative and iterative QA methodology, emphasizing continuous feedback and alignment with the client’s development team to ensure timely and effective issue resolution.",
      keyStrategies: [
        "Early engagement and detailed requirement analysis to tailor testing strategy.",
        "Comprehensive test plan covering all critical aspects of mobile app quality.",
        "Combination of manual and regression testing for thorough validation.",
        "Proactive and continuous collaboration with the client’s development team."
      ]
    },
    results: {
      bugReduction: "Critical",
      performanceImprovement: "Improved",
      roi: "Enhanced",
      additionalMetrics: [
        { label: "Quality Assurance Achieved", value: "100%" },
        { label: "Timely Delivery", value: "On Time" },
        { label: "Client Satisfaction", value: "5/5" }
      ]
    },
    technologies: ["Mobile App Testing", "Functional Testing", "Usability Testing", "Performance Testing", "Compatibility Testing", "Security Testing", "Manual Testing", "Regression Testing"],
    testimonial: {
      quote: "We had a great experience working with TESTRIQ on testing our Client application. Their team provided clear, actionable insights that helped us improve both performance and user experience. The findings were thorough, well-documented, and aligned perfectly with our goals. We truly appreciate their professionalism and commitment to quality, and look forward to future collaborations.",
      author: "Vinay Vikram Singh",
      role: "Director",
      company: "Kanishka Software",
      rating: 5
    },
    timeline: [
      {
        phase: "Initial Requirement Analysis",
        duration: "Undisclosed",
        activities: [
          "Engaging in detailed discussions with Kanishka Software team",
          "Gaining clear understanding of app functionality, key features, and user experience",
          "Creating tailored testing strategy"
        ]
      },
      {
        phase: "Test Strategy Development",
        duration: "Undisclosed",
        activities: [
          "Devising a comprehensive test plan",
          "Encompassing functional, usability, performance, compatibility, and security testing"
        ]
      },
      {
        phase: "Execution & Collaboration",
        duration: "Undisclosed",
        activities: [
          "Performing manual testing for complex user journeys and edge cases",
          "Conducting regression testing to ensure no impact on existing functionalities",
          "Maintaining continuous collaboration and real-time feedback with Kanishka’s dev team"
        ]
      }
    ],
    keyTakeaways: [
      "Rigorous QA is essential for launching high-performing mobile applications.",
      "Comprehensive test strategies covering all aspects of quality ensure robust and user-friendly apps.",
      "Continuous collaboration and feedback loops with development teams are crucial for timely issue resolution.",
      "Meeting tight deadlines without compromising quality is achievable with a well-defined QA approach."
    ],
    nextSteps: [
      "Continue to support Kanishka Software in future app development and updates.",
      "Explore opportunities for further test automation to enhance efficiency.",
      "Apply lessons learned to other mobile app testing projects."
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

