
// City Data Structure for Dynamic QA Testing Services Pages

export interface CityData {
  slug: string;
  name: string;
  state: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  heroContent: {
    title: string;
    subtitle: string;
    description: string;
    certifications: string[];
    stats: { number: string; label: string; description: string; }[];
    landmarks?: string[]; // Added landmarks for HeroSection
  };
  servicesContent: {
    title: string;
    description: string;
    subtitle: string;
    services: { icon: string; trending: boolean; name: string; description: string; features: string[]; }[];
  };
  processContent: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string; deliverables?: string[]; }[]; // Added deliverables for ProcessSection
  };
  toolsFrameworkContent: {
    title: string;
    description: string;
    stats: {
      projectsCompleted: string;
      clientSatisfaction: string;
      supportAvailable: string;
      yearsExperience: string;
    };
  };
  whyChooseContent: {
    title: string;
    subtitle: string;
    reasons: { icon: string; title: string; stats: string; description: string; }[];
    testimonial: { text: string; author: string; company: string; rating: number; };
  };
  caseStudiesContent: {
    title: string;
    description: string;
    subtitle: string;
    studies: {
      company: string;
      industry: string;
      challenge: string;
      results: string[];
    }[];
  };
  trendingServicesContent: {
    title: string;
    description: string;
    subtitle: string;
    services: {
      name: string;
      trending: boolean;
      description: string;
      citySpecific: string;
      benefits: string[];
      technologies: string[];
    }[];
  };
  faqsContent: {
    title: string;
    subtitle: string;
    faqs: { question: string; answer: string; }[];
  };
  ctaContent: {
    title: string;
    description: string;
    subtitle: string; // Added subtitle
    benefits?: string[]; // Added benefits for CTASection
    contactInfo: {
      phone: string;
      email: string;
      address: string; // Added address
    };
  };
  industries: string[];
}

// City Data Mapping
export const cityData: Record<string, CityData> = {
  "chennai": {
    slug: "software-qa-testing-services-in-chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    metadata: {
      title: "Software QA Testing Services in Chennai | Manual & Automation Testing | Testriq",
      description: "Leading software testing company in Chennai offering manual testing, automation testing, performance testing, and QA consulting services. ISTQB certified experts.",
      keywords: "software testing services chennai, qa testing chennai, manual testing chennai, automation testing chennai, performance testing chennai, software testing company chennai, qa services tamil nadu, testing services chennai",
    },
    heroContent: {
      title: "Professional Software Testing Services in Chennai",
      subtitle: "Leading QA Solutions in Tamil Nadu",
      description: "Transform your software quality with our comprehensive testing services in Chennai. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across Tamil Nadu.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "200+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "98%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "8+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Guindy National Park"],
    },
    servicesContent: {
      title: "Comprehensive Testing Services in Chennai",
      description: "Professional QA solutions tailored for Chennai businesses",
      subtitle: "Explore our wide range of software testing services designed to meet your specific needs.",
      services: [
        { icon: "TestTube", trending: true, name: "Manual Testing", description: "Thorough manual testing to identify critical bugs and ensure user satisfaction.", features: ["Exploratory Testing", "Usability Testing", "Regression Testing"] },
        { icon: "Bot", trending: false, name: "Automation Testing", description: "Automated test suites for faster execution and consistent results.", features: ["Selenium Automation", "Cypress Automation", "API Automation"] },
        { icon: "Zap", trending: true, name: "Performance Testing", description: "Assess application speed, scalability, and stability under various loads.", features: ["Load Testing", "Stress Testing", "Scalability Testing"] },
        { icon: "Shield", trending: false, name: "Security Testing", description: "Identify vulnerabilities and protect your applications from cyber threats.", features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits"] },
        { icon: "Smartphone", trending: true, name: "Mobile App Testing", description: "Ensure flawless performance across diverse mobile devices and platforms.", features: ["iOS Testing", "Android Testing", "Cross-Browser Testing"] },
        { icon: "Link", trending: false, name: "API Testing", description: "Validate the functionality, reliability, performance, and security of your APIs.", features: ["REST API Testing", "SOAP API Testing", "Microservices Testing"] },
      ],
    },
    processContent: {
      title: "Our QA Testing Process in Chennai",
      subtitle: "A systematic approach to ensure software quality for Chennai businesses.",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project needs and defining the scope of testing.", deliverables: ["Scope Document", "Test Strategy"] },
        { number: "02", title: "Test Planning", description: "Developing a detailed test plan, strategies, and test cases.", deliverables: ["Test Plan Document", "Resource Allocation"] },
        { number: "03", title: "Test Case Development", description: "Creating comprehensive test cases based on requirements.", deliverables: ["Test Cases", "Test Scripts"] },
        { number: "04", title: "Test Environment Setup", description: "Configuring the necessary environment for effective testing.", deliverables: ["Environment Setup Report", "Test Data"] },
        { number: "05", title: "Test Execution", description: "Executing test cases and identifying defects.", deliverables: ["Execution Logs", "Defect Reports"] },
        { number: "06", title: "Reporting & Retesting", description: "Providing detailed reports and retesting fixed defects.", deliverables: ["Summary Reports", "Retest Reports"] },
      ],
    },
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Chennai",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "200+",
        clientSatisfaction: "98%",
        supportAvailable: "24/7",
        yearsExperience: "8+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Chennai Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Chennai Focus", description: "Deep understanding of Chennai\"s tech landscape and business needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "98% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s team in Chennai delivered exceptional results. Their attention to detail and proactive approach significantly improved our software quality. Highly recommended!",
        author: "Priya Sharma",
        company: "Tech Solutions Pvt Ltd, Chennai",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Chennai Success Stories",
      description: "Real-world examples of our impact in Chennai.",
      subtitle: "Discover how we helped businesses in Chennai achieve their quality goals.",
      studies: [
        {
          company: "E-commerce Giant",
          industry: "E-commerce",
          challenge: "Slow performance during peak sales, leading to cart abandonment.",
          results: [
            "Reduced page load time by 30%",
            "Improved conversion rates by 15%",
            "Ensured stability during flash sales with 5x traffic increase",
          ],
        },
        {
          company: "FinTech Startup",
          industry: "Financial Services",
          challenge: "Security vulnerabilities in payment gateway and data breaches.",
          results: [
            "Identified and patched 10+ critical security flaws",
            "Achieved 100% compliance with PCI DSS standards",
            "Implemented continuous security monitoring and threat detection",
          ],
        },
        {
          company: "Healthcare Platform",
          industry: "Healthcare",
          challenge: "Inaccurate patient data synchronization across multiple systems.",
          results: [
            "Ensured 99.9% data accuracy and consistency",
            "Streamlined data flow between EMR and billing systems",
            "Improved overall system reliability and user trust",
          ],
        },
      ],
    },
    trendingServicesContent: {
      title: "Trending QA Services in Chennai",
      description: "Stay ahead with the latest in software quality assurance.",
      subtitle: "Explore our cutting-edge services in Chennai.",
      services: [
        {
          name: "AI-Powered Testing",
          trending: true,
          description: "Leverage artificial intelligence for smarter and faster test automation.",
          citySpecific: "Growing demand for AI solutions in Chennai\"s tech sector.",
          benefits: ["Enhanced Test Coverage", "Faster Defect Detection", "Reduced Manual Effort"],
          technologies: ["TensorFlow", "PyTorch", "Selenium AI", "Appium AI"],
        },
        {
          name: "Cloud Testing Services",
          trending: false,
          description: "Scalable and flexible testing solutions on cloud platforms.",
          citySpecific: "Cloud adoption is high among Chennai\"s startups and enterprises.",
          benefits: ["Cost-Effective Infrastructure", "On-Demand Scalability", "Global Accessibility"],
          technologies: ["AWS Device Farm", "Azure Test Plans", "BrowserStack", "Sauce Labs"],
        },
        {
          name: "IoT Device Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Chennai is emerging as an IoT hub with increasing manufacturing.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "Blockchain Testing",
          trending: false,
          description: "Ensuring the integrity and security of blockchain applications.",
          citySpecific: "Financial and supply chain sectors in Chennai are exploring blockchain.",
          benefits: ["Smart Contract Validation", "Consensus Mechanism Testing", "Security Audits"],
          technologies: ["Ethereum", "Hyperledger Fabric", "Solidity", "Truffle"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Chennai",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What types of software testing services do you offer in Chennai?",
          answer: "We offer a comprehensive range of services including manual testing, automation testing, performance testing, security testing, mobile app testing, and API testing, tailored for businesses in Chennai.",
        },
        {
          question: "How do you ensure the quality of your testing services?",
          answer: "Our team comprises ISTQB certified engineers who follow a rigorous QA process, including detailed test planning, execution, and reporting, ensuring high-quality deliverables.",
        },
        {
          question: "Can you provide customized testing solutions for my project?",
          answer: "Yes, we specialize in providing customized testing strategies and solutions that align with your specific project requirements, budget, and timelines.",
        },
        {
          question: "What industries do you serve in Chennai?",
          answer: "We serve a wide range of industries including IT services, healthcare, automotive, manufacturing, financial services, and e-commerce in the Chennai region.",
        },
        {
          question: "How can I get a quote for testing services in Chennai?",
          answer: "You can request a free quote by contacting us via phone or email, or by filling out the inquiry form on our website. Our team will get back to you promptly.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Ensure Quality for Your Chennai Project?",
      description: "Get started with our expert testing services in Chennai today",
      subtitle: "Contact us for a free consultation and a tailored quote.", // Added subtitle
      benefits: ["Expert QA Team", "Tailored Solutions", "Cost-Effective", "Timely Delivery"],
      contactInfo: {
        phone: "+91 98765 43210",
        email: "info.chennai@testriq.com",
        address: "123, Anna Salai, Chennai, Tamil Nadu, India", // Added address
      },
    },
    industries: ["IT Services", "Healthcare", "Automotive", "Manufacturing", "Financial Services", "E-commerce"],
  },
  "bangalore": {
    slug: "software-qa-testing-services-in-bangalore",
    name: "Bangalore",
    state: "Karnataka",
    metadata: {
      title: "Software QA Testing Services in Bangalore | Manual & Automation Testing | Testriq",
      description: "Top software testing company in Bangalore providing manual testing, automation testing, performance testing, and QA consulting services. Expert QA engineers.",
      keywords: "software testing services bangalore, qa testing bangalore, manual testing bangalore, automation testing bangalore, performance testing bangalore, software testing company bangalore, qa services karnataka, testing services bangalore",
    },
    heroContent: {
      title: "Professional Software Testing Services in Bangalore",
      subtitle: "Leading QA Solutions in Karnataka",
      description: "Transform your software quality with our comprehensive testing services in Bangalore. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across Karnataka.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "300+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "99%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "10+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["Lal Bagh Botanical Garden", "Cubbon Park", "Bangalore Palace", "Vidhana Soudha"],
    },
    servicesContent: {
      title: "Comprehensive Testing Services in Bangalore",
      description: "Professional QA solutions tailored for Bangalore businesses",
      subtitle: "Explore our wide range of software testing services designed to meet your specific needs.",
      services: [
        { icon: "TestTube", trending: true, name: "Manual Testing", description: "Thorough manual testing to identify critical bugs and ensure user satisfaction.", features: ["Exploratory Testing", "Usability Testing", "Regression Testing"] },
        { icon: "Bot", trending: false, name: "Automation Testing", description: "Automated test suites for faster execution and consistent results.", features: ["Selenium Automation", "Cypress Automation", "API Automation"] },
        { icon: "Zap", trending: true, name: "Performance Testing", description: "Assess application speed, scalability, and stability under various loads.", features: ["Load Testing", "Stress Testing", "Scalability Testing"] },
        { icon: "Shield", trending: false, name: "Security Testing", description: "Identify vulnerabilities and protect your applications from cyber threats.", features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits"] },
        { icon: "Smartphone", trending: true, name: "Mobile App Testing", description: "Ensure flawless performance across diverse mobile devices and platforms.", features: ["iOS Testing", "Android Testing", "Cross-Browser Testing"] },
        { icon: "Link", trending: false, name: "API Testing", description: "Validate the functionality, reliability, performance, and security of your APIs.", features: ["REST API Testing", "SOAP API Testing", "Microservices Testing"] },
      ],
    },
    processContent: {
      title: "Our QA Testing Process in Bangalore",
      subtitle: "A systematic approach to ensure software quality for Bangalore businesses.",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project needs and defining the scope of testing.", deliverables: ["Scope Document", "Test Strategy"] },
        { number: "02", title: "Test Planning", description: "Developing a detailed test plan, strategies, and test cases.", deliverables: ["Test Plan Document", "Resource Allocation"] },
        { number: "03", title: "Test Case Development", description: "Creating comprehensive test cases based on requirements.", deliverables: ["Test Cases", "Test Scripts"] },
        { number: "04", title: "Test Environment Setup", description: "Configuring the necessary environment for effective testing.", deliverables: ["Environment Setup Report", "Test Data"] },
        { number: "05", title: "Test Execution", description: "Executing test cases and identifying defects.", deliverables: ["Execution Logs", "Defect Reports"] },
        { number: "06", title: "Reporting & Retesting", description: "Providing detailed reports and retesting fixed defects.", deliverables: ["Summary Reports", "Retest Reports"] },
      ],
    },
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Bangalore",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "300+",
        clientSatisfaction: "99%",
        supportAvailable: "24/7",
        yearsExperience: "10+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Bangalore Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Bangalore Focus", description: "Deep understanding of Bangalore\"s tech landscape and business needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "99% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s team in Bangalore delivered exceptional results. Their attention to detail and proactive approach significantly improved our software quality. Highly recommended!",
        author: "Rajesh Kumar",
        company: "Innovate Solutions, Bangalore",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Bangalore Success Stories",
      description: "Real-world examples of our impact in Bangalore.",
      subtitle: "Discover how we helped businesses in Bangalore achieve their quality goals.",
      studies: [
        {
          company: "SaaS Startup",
          industry: "Software as a Service",
          challenge: "Ensuring seamless integration with third-party APIs and platforms.",
          results: [
            "Achieved 100% API integration success rate",
            "Reduced integration-related bugs by 40%",
            "Improved overall system stability and data flow",
          ],
        },
        {
          company: "Gaming Studio",
          industry: "Gaming",
          challenge: "Optimizing game performance and user experience across various devices.",
          results: [
            "Increased frame rates by 25% on average",
            "Reduced game crashes by 50%",
            "Enhanced user engagement through improved responsiveness",
          ],
        },
        {
          company: "EdTech Platform",
          industry: "Education Technology",
          challenge: "Ensuring accessibility and usability for diverse student populations.",
          results: [
            "Achieved WCAG 2.1 AA compliance",
            "Improved user satisfaction scores by 20%",
            "Implemented inclusive design principles across the platform",
          ],
        },
      ],
    },
    trendingServicesContent: {
      title: "Trending QA Services in Bangalore",
      description: "Stay ahead with the latest in software quality assurance.",
      subtitle: "Explore our cutting-edge services in Bangalore.",
      services: [
        {
          name: "DevOps Testing",
          trending: true,
          description: "Integrating testing into the DevOps pipeline for continuous delivery.",
          citySpecific: "Bangalore\"s strong DevOps culture drives demand for this service.",
          benefits: ["Faster Release Cycles", "Improved Collaboration", "Early Bug Detection"],
          technologies: ["Jenkins", "Docker", "Kubernetes", "GitLab CI/CD"],
        },
        {
          name: "Big Data Testing",
          trending: false,
          description: "Validating the quality and integrity of large datasets and big data applications.",
          citySpecific: "Data-driven companies in Bangalore require robust big data testing.",
          benefits: ["Data Accuracy Assurance", "Performance Optimization", "Scalability Testing"],
          technologies: ["Hadoop", "Spark", "Kafka", "Hive"],
        },
        {
          name: "Robotic Process Automation (RPA) Testing",
          trending: true,
          description: "Ensuring the reliability and efficiency of automated business processes.",
          citySpecific: "RPA adoption is increasing in Bangalore for business process automation.",
          benefits: ["Process Efficiency", "Error Reduction", "Faster ROI"],
          technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Robot Framework"],
        },
        {
          name: "AR/VR Testing",
          trending: false,
          description: "Specialized testing for Augmented Reality and Virtual Reality applications.",
          citySpecific: "Bangalore\"s innovation in AR/VR tech creates a need for specialized QA.",
          benefits: ["Immersive Experience Validation", "Performance in Virtual Environments", "Usability Testing"],
          technologies: ["Unity", "Unreal Engine", "Oculus SDK", "ARCore"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Bangalore",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What makes Testriq a preferred QA partner in Bangalore?",
          answer: "Our deep industry expertise, certified professionals, client-centric approach, and commitment to timely delivery make us a preferred choice for QA services in Bangalore.",
        },
        {
          question: "Do you offer on-site testing services in Bangalore?",
          answer: "Yes, we offer flexible engagement models including on-site, off-site, and hybrid models to best suit your project requirements in Bangalore.",
        },
        {
          question: "How do you handle urgent testing requirements?",
          answer: "We have agile teams and processes in place to quickly ramp up and address urgent testing requirements, ensuring minimal disruption to your development cycle.",
        },
        {
          question: "Can you integrate with our existing development pipeline?",
          answer: "Absolutely. Our QA processes are designed to integrate seamlessly with your existing CI/CD pipelines and development workflows, enhancing efficiency and collaboration.",
        },
        {
          question: "What is your approach to test automation?",
          answer: "We adopt a strategic approach to test automation, focusing on identifying the most impactful test cases for automation, selecting the right tools, and building robust, maintainable automation frameworks.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Elevate Your Software Quality in Bangalore?",
      description: "Partner with Testriq for unparalleled QA expertise.",
      subtitle: "Contact us for a free consultation and a tailored quote.",
      benefits: ["Expert QA Team", "Tailored Solutions", "Cost-Effective", "Timely Delivery"],
      contactInfo: {
        phone: "+91 98765 43210",
        email: "info.bangalore@testriq.com",
        address: "456, MG Road, Bangalore, Karnataka, India",
      },
    },
    industries: ["IT Services", "FinTech", "E-commerce", "Healthcare", "Gaming", "EdTech"],
  },
  "delhi": {
    slug: "software-qa-testing-services-in-delhi",
    name: "Delhi",
    state: "Delhi",
    metadata: {
      title: "Software QA Testing Services in Delhi | Manual & Automation Testing | Testriq",
      description: "Leading software testing company in Delhi offering manual testing, automation testing, performance testing, and QA consulting services. ISTQB certified experts.",
      keywords: "software testing services delhi, qa testing delhi, manual testing delhi, automation testing delhi, performance testing delhi, software testing company delhi, qa services delhi, testing services delhi",
    },
    heroContent: {
      title: "Professional Software Testing Services in Delhi",
      subtitle: "Leading QA Solutions in Delhi NCR",
      description: "Transform your software quality with our comprehensive testing services in Delhi. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across Delhi NCR.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "250+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "97%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "9+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["India Gate", "Qutub Minar", "Red Fort", "Humayun's Tomb"],
    },
    servicesContent: {
      title: "Comprehensive Testing Services in Delhi",
      description: "Professional QA solutions tailored for Delhi businesses",
      subtitle: "Explore our wide range of software testing services designed to meet your specific needs.",
      services: [
        { icon: "TestTube", trending: true, name: "Manual Testing", description: "Thorough manual testing to identify critical bugs and ensure user satisfaction.", features: ["Exploratory Testing", "Usability Testing", "Regression Testing"] },
        { icon: "Bot", trending: false, name: "Automation Testing", description: "Automated test suites for faster execution and consistent results.", features: ["Selenium Automation", "Cypress Automation", "API Automation"] },
        { icon: "Zap", trending: true, name: "Performance Testing", description: "Assess application speed, scalability, and stability under various loads.", features: ["Load Testing", "Stress Testing", "Scalability Testing"] },
        { icon: "Shield", trending: false, name: "Security Testing", description: "Identify vulnerabilities and protect your applications from cyber threats.", features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits"] },
        { icon: "Smartphone", trending: true, name: "Mobile App Testing", description: "Ensure flawless performance across diverse mobile devices and platforms.", features: ["iOS Testing", "Android Testing", "Cross-Browser Testing"] },
        { icon: "Link", trending: false, name: "API Testing", description: "Validate the functionality, reliability, performance, and security of your APIs.", features: ["REST API Testing", "SOAP API Testing", "Microservices Testing"] },
      ],
    },
    processContent: {
      title: "Our QA Testing Process in Delhi",
      subtitle: "A systematic approach to ensure software quality for Delhi businesses.",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project needs and defining the scope of testing.", deliverables: ["Scope Document", "Test Strategy"] },
        { number: "02", title: "Test Planning", description: "Developing a detailed test plan, strategies, and test cases.", deliverables: ["Test Plan Document", "Resource Allocation"] },
        { number: "03", title: "Test Case Development", description: "Creating comprehensive test cases based on requirements.", deliverables: ["Test Cases", "Test Scripts"] },
        { number: "04", title: "Test Environment Setup", description: "Configuring the necessary environment for effective testing.", deliverables: ["Environment Setup Report", "Test Data"] },
        { number: "05", title: "Test Execution", description: "Executing test cases and identifying defects.", deliverables: ["Execution Logs", "Defect Reports"] },
        { number: "06", title: "Reporting & Retesting", description: "Providing detailed reports and retesting fixed defects.", deliverables: ["Summary Reports", "Retest Reports"] },
      ],
    },
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Delhi",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "250+",
        clientSatisfaction: "97%",
        supportAvailable: "24/7",
        yearsExperience: "9+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Delhi Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Delhi Focus", description: "Deep understanding of Delhi\"s tech landscape and business needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "97% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s team in Delhi delivered exceptional results. Their attention to detail and proactive approach significantly improved our software quality. Highly recommended!",
        author: "Ananya Singh",
        company: "Digital Innovations, Delhi",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Delhi Success Stories",
      description: "Real-world examples of our impact in Delhi.",
      subtitle: "Discover how we helped businesses in Delhi achieve their quality goals.",
      studies: [
        {
          company: "E-commerce Startup",
          industry: "E-commerce",
          challenge: "Ensuring seamless user experience across various devices and browsers.",
          results: [
            "Achieved 99% cross-browser compatibility",
            "Improved mobile responsiveness by 30%",
            "Reduced UI/UX related bugs by 25%",
          ],
        },
        {
          company: "FinTech Company",
          industry: "Financial Services",
          challenge: "Validating complex financial calculations and reporting accuracy.",
          results: [
            "Ensured 100% accuracy in financial reports",
            "Automated regression testing for financial modules",
            "Reduced manual testing effort by 50%",
          ],
        },
        {
          company: "Logistics Provider",
          industry: "Logistics",
          challenge: "Optimizing route planning and delivery tracking system performance.",
          results: [
            "Improved route optimization efficiency by 20%",
            "Reduced tracking discrepancies by 15%",
            "Enhanced real-time data accuracy for logistics operations",
          ],
        },
      ],
    },
    trendingServicesContent: {
      title: "Trending QA Services in Delhi",
      description: "Stay ahead with the latest in software quality assurance.",
      subtitle: "Explore our cutting-edge services in Delhi.",
      services: [
        {
          name: "IoT Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Delhi's smart city initiatives drive demand for IoT testing.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "AI/ML Testing",
          trending: false,
          description: "Specialized testing for Artificial Intelligence and Machine Learning models.",
          citySpecific: "Growing AI adoption in Delhi's tech sector creates new testing needs.",
          benefits: ["Model Accuracy Validation", "Bias Detection", "Performance Benchmarking"],
          technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
        },
        {
          name: "Cloud Security Testing",
          trending: true,
          description: "Ensuring the security of cloud-based applications and infrastructure.",
          citySpecific: "Cloud migration in Delhi businesses necessitates robust security testing.",
          benefits: ["Data Protection", "Compliance Adherence", "Threat Mitigation"],
          technologies: ["AWS Security Hub", "Azure Security Center", "Google Cloud Security", "OWASP ZAP"],
        },
        {
          name: "Performance Engineering",
          trending: false,
          description: "Proactive approach to build performance into software from early stages.",
          citySpecific: "High-traffic applications in Delhi require strong performance engineering.",
          benefits: ["Optimized User Experience", "Scalability", "Cost Efficiency"],
          technologies: ["JMeter", "LoadRunner", "Gatling", "K6"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Delhi",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "Why is software testing important for businesses in Delhi?",
          answer: "Software testing ensures that applications are reliable, secure, and perform well, which is crucial for businesses in Delhi to maintain a competitive edge and customer trust.",
        },
        {
          question: "Do you offer testing services for mobile applications in Delhi?",
          answer: "Yes, we provide comprehensive mobile application testing services for both Android and iOS platforms, ensuring your app performs flawlessly across all devices and operating systems.",
        },
        {
          question: "How do you ensure data privacy and security during testing?",
          answer: "We adhere to strict data privacy and security protocols, including ISO 27001 standards, and implement robust measures to protect your sensitive information throughout the testing process.",
        },
        {
          question: "Can you help with test automation framework development?",
          answer: "Absolutely. Our experts can design and implement custom test automation frameworks tailored to your project's specific needs, enabling faster and more efficient testing cycles.",
        },
        {
          question: "What is your approach to quality assurance for startups in Delhi?",
          answer: "We offer flexible and scalable QA solutions designed to meet the unique needs of startups, focusing on cost-effectiveness, rapid feedback, and continuous quality improvement.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Enhance Your Software Quality in Delhi?",
      description: "Connect with Testriq for reliable and efficient QA solutions.",
      subtitle: "Contact us for a free consultation and a tailored quote.",
      benefits: ["Expert QA Team", "Tailored Solutions", "Cost-Effective", "Timely Delivery"],
      contactInfo: {
        phone: "+91 98765 43210",
        email: "info.delhi@testriq.com",
        address: "789, Nehru Place, Delhi, India",
      },
    },
    industries: ["IT Services", "E-commerce", "FinTech", "Logistics", "Healthcare", "Education"],
  },
};

export function getCityData(slug: string): CityData | undefined {
  console.log('getCityData called with slug:', slug); // Debug
  console.log('Available slugs:', Object.values(cityData).map((city) => city.slug)); // Debug
  const city = Object.values(cityData).find((city) => city.slug === slug);
  if (!city) {
    console.log('No matching city found for slug:', slug); // Debug
  }
  return city;
  }


export function getAllCities(): CityData[] {
  console.log('cityData keys:', Object.keys(cityData)); // Debug
  return Object.values(cityData);
}

console.log('cityData initialized with keys:', Object.keys(cityData));
