
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
        text: "Testriq\"s team in Bangalore provided exceptional support and expertise. Their testing services were crucial for our product launch. Highly recommend!",
        author: "Rahul Kumar",
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
          company: "Software Product Company",
          industry: "IT Services",
          challenge: "Frequent software regressions after new feature deployments.",
          results: [
            "Implemented a robust automation test suite, reducing regression cycles by 50%",
            "Decreased post-release defects by 40%",
            "Improved overall software stability and reliability",
          ],
        },
        {
          company: "E-learning Platform",
          industry: "Education Technology",
          challenge: "Poor user experience and accessibility issues on mobile devices.",
          results: [
            "Enhanced mobile responsiveness and UI/UX across all devices",
            "Achieved WCAG 2.1 AA accessibility compliance",
            "Increased user engagement and retention by 20%",
          ],
        },
        {
          company: "Logistics & Supply Chain",
          industry: "Logistics",
          challenge: "Inaccurate tracking and delivery delays due to system errors.",
          results: [
            "Implemented automated tracking system, reducing manual errors by 80%",
            "Improved on-time delivery rates by 15%",
            "Provided real-time visibility into shipment status",
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
          name: "AI-Powered Testing",
          trending: true,
          description: "Leverage artificial intelligence for smarter and faster test automation.",
          citySpecific: "Growing demand for AI solutions in Bangalore\"s tech sector.",
          benefits: ["Enhanced Test Coverage", "Faster Defect Detection", "Reduced Manual Effort"],
          technologies: ["TensorFlow", "PyTorch", "Selenium AI", "Appium AI"],
        },
        {
          name: "Cloud Testing Services",
          trending: false,
          description: "Scalable and flexible testing solutions on cloud platforms.",
          citySpecific: "Cloud adoption is high among Bangalore\"s startups and enterprises.",
          benefits: ["Cost-Effective Infrastructure", "On-Demand Scalability", "Global Accessibility"],
          technologies: ["AWS Device Farm", "Azure Test Plans", "BrowserStack", "Sauce Labs"],
        },
        {
          name: "IoT Device Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Bangalore is a hub for IoT innovation and development.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "Blockchain Testing",
          trending: false,
          description: "Ensuring the integrity and security of blockchain applications.",
          citySpecific: "Financial and supply chain sectors in Bangalore are exploring blockchain.",
          benefits: ["Smart Contract Validation", "Consensus Mechanism Testing", "Security Audits"],
          technologies: ["Ethereum", "Hyperledger Fabric", "Solidity", "Truffle"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Bangalore",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What types of software testing services do you offer in Bangalore?",
          answer: "We provide a full spectrum of testing services including manual, automation, performance, security, mobile, and API testing, catering to the dynamic needs of Bangalore businesses.",
        },
        {
          question: "How experienced is your QA team in Bangalore?",
          answer: "Our Bangalore team consists of highly experienced and certified QA professionals with over 10 years of industry experience, ensuring top-notch quality for your projects.",
        },
        {
          question: "Do you support Agile development methodologies?",
          answer: "Absolutely. We seamlessly integrate with Agile and DevOps pipelines, providing continuous testing and feedback to accelerate your development cycles.",
        },
        {
          question: "What is your approach to test automation?",
          answer: "We leverage industry-leading tools like Selenium and Cypress to build scalable and maintainable automation frameworks, ensuring efficient and reliable test execution.",
        },
        {
          question: "How can I get started with your testing services in Bangalore?",
          answer: "Simply reach out to us via phone or email, or fill out our online inquiry form. We\"ll schedule a consultation to understand your needs and propose a tailored solution.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Ensure Quality for Your Bangalore Project?",
      description: "Get started with our expert testing services in Bangalore today",
      subtitle: "Contact us for a free consultation and a tailored quote.", // Added subtitle
      benefits: ["Experienced QA Team", "Customized Solutions", "Competitive Pricing", "Fast Turnaround"],
      contactInfo: {
        phone: "+91 99887 76655",
        email: "info.bangalore@testriq.com",
        address: "456, MG Road, Bangalore, Karnataka, India", // Added address
      },
    },
    industries: ["IT Services", "Healthcare", "Automotive", "Manufacturing", "Financial Services", "E-commerce"],
  },
  "mumbai": {
    slug: "software-qa-testing-services-in-mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    metadata: {
      title: "Software QA Testing Services in Mumbai | Manual & Automation Testing | Testriq",
      description: "Leading software testing company in Mumbai offering manual testing, automation testing, performance testing, and QA consulting services. ISTQB certified experts.",
      keywords: "software testing services mumbai, qa testing mumbai, manual testing mumbai, automation testing mumbai, performance testing mumbai, software testing company mumbai, qa services maharashtra, testing services mumbai",
    },
    heroContent: {
      title: "Professional Software Testing Services in Mumbai",
      subtitle: "Leading QA Solutions in Maharashtra",
      description: "Transform your software quality with our comprehensive testing services in Mumbai. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across Maharashtra.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "250+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "97%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "9+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya"],
    },
    processContent: {
      title: "Our QA Testing Process in Mumbai",
      subtitle: "A systematic approach to ensure software quality for Mumbai businesses.",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project needs and defining the scope of testing.", deliverables: ["Scope Document", "Test Strategy"] },
        { number: "02", title: "Test Planning", description: "Developing a detailed test plan, strategies, and test cases.", deliverables: ["Test Plan Document", "Resource Allocation"] },
        { number: "03", title: "Test Case Development", description: "Creating comprehensive test cases based on requirements.", deliverables: ["Test Cases", "Test Scripts"] },
        { number: "04", title: "Test Environment Setup", description: "Configuring the necessary environment for effective testing.", deliverables: ["Environment Setup Report", "Test Data"] },
        { number: "05", title: "Test Execution", description: "Executing test cases and identifying defects.", deliverables: ["Execution Logs", "Defect Reports"] },
        { number: "06", title: "Reporting & Retesting", description: "Providing detailed reports and retesting fixed defects.", deliverables: ["Summary Reports", "Retest Reports"] },
      ],
    },
    servicesContent: {
      title: "Comprehensive Testing Services in Mumbai",
      description: "Professional QA solutions tailored for Mumbai businesses",
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
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Mumbai",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "250+",
        clientSatisfaction: "97%",
        supportAvailable: "24/7",
        yearsExperience: "9+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Mumbai Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Mumbai Focus", description: "Deep understanding of Mumbai\"s business ecosystem and tech needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "97% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s Mumbai team is incredibly professional and efficient. They helped us achieve our quality goals with their comprehensive testing services.",
        author: "Anjali Singh",
        company: "Financial Innovations, Mumbai",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Mumbai Success Stories",
      description: "Real-world examples of our impact in Mumbai.",
      subtitle: "Discover how we helped businesses in Mumbai achieve their quality goals.",
      studies: [
        {
          company: "Media & Entertainment",
          industry: "Entertainment",
          challenge: "Inconsistent streaming quality and playback issues across devices.",
          results: [
            "Improved video streaming quality by 25%",
            "Ensured seamless playback on 50+ device combinations",
            "Reduced user complaints related to buffering and errors",
          ],
        },
        {
          company: "Real Estate Portal",
          industry: "Real Estate",
          challenge: "Slow search results and inaccurate property listings.",
          results: [
            "Optimized search algorithms, reducing search time by 40%",
            "Achieved 99% accuracy in property data synchronization",
            "Enhanced user experience with faster and more reliable listings",
          ],
        },
        {
          company: "Logistics & Supply Chain",
          industry: "Logistics",
          challenge: "Manual tracking errors leading to delivery delays and lost shipments.",
          results: [
            "Implemented automated tracking system, reducing manual errors by 80%",
            "Improved on-time delivery rates by 15%",
            "Provided real-time visibility into shipment status",
          ],
        },
      ],
    },
    trendingServicesContent: {
      title: "Trending QA Services in Mumbai",
      description: "Stay ahead with the latest in software quality assurance.",
      subtitle: "Explore our cutting-edge services in Mumbai.",
      services: [
        {
          name: "AI-Powered Testing",
          trending: true,
          description: "Leverage artificial intelligence for smarter and faster test automation.",
          citySpecific: "Growing demand for AI solutions in Mumbai\"s tech sector.",
          benefits: ["Enhanced Test Coverage", "Faster Defect Detection", "Reduced Manual Effort"],
          technologies: ["TensorFlow", "PyTorch", "Selenium AI", "Appium AI"],
        },
        {
          name: "Cloud Testing Services",
          trending: false,
          description: "Scalable and flexible testing solutions on cloud platforms.",
          citySpecific: "Cloud adoption is high among Mumbai\"s startups and enterprises.",
          benefits: ["Cost-Effective Infrastructure", "On-Demand Scalability", "Global Accessibility"],
          technologies: ["AWS Device Farm", "Azure Test Plans", "BrowserStack", "Sauce Labs"],
        },
        {
          name: "IoT Device Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Mumbai is emerging as an IoT hub with increasing manufacturing.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "Blockchain Testing",
          trending: false,
          description: "Ensuring the integrity and security of blockchain applications.",
          citySpecific: "Financial and supply chain sectors in Mumbai are exploring blockchain.",
          benefits: ["Smart Contract Validation", "Consensus Mechanism Testing", "Security Audits"],
          technologies: ["Ethereum", "Hyperledger Fabric", "Solidity", "Truffle"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Mumbai",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What software testing services are available in Mumbai?",
          answer: "We offer a full suite of services including manual, automation, performance, security, mobile, and API testing, customized for the Mumbai market.",
        },
        {
          question: "How does Testriq ensure data security during testing?",
          answer: "We adhere to strict data privacy protocols and employ advanced security measures, including ISO 27001 certified practices, to protect your sensitive information during all testing phases.",
        },
        {
          question: "Can you help with testing for specific industry regulations in Mumbai?",
          answer: "Yes, our experts are well-versed in industry-specific compliance requirements, such as those for financial services and healthcare, ensuring your software meets all necessary standards.",
        },
        {
          question: "What is the typical turnaround time for testing projects?",
          answer: "Turnaround times vary based on project complexity and scope. We work closely with clients to establish realistic timelines and ensure timely delivery without compromising quality.",
        },
        {
          question: "Do you provide post-testing support?",
          answer: "Yes, we offer comprehensive post-testing support, including defect retesting, regression testing, and ongoing consultation to ensure your software remains robust and high-performing.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Ensure Quality for Your Mumbai Project?",
      description: "Get started with our expert testing services in Mumbai today",
      subtitle: "Contact us for a free consultation and a tailored quote.", // Added subtitle
      benefits: ["Local Expertise", "Certified Team", "Flexible Engagement", "Post-Testing Support"],
      contactInfo: {
        phone: "+91 97654 32109",
        email: "info.mumbai@testriq.com",
        address: "789, Bandra Kurla Complex, Mumbai, Maharashtra, India", // Added address
      },
    },
    industries: ["Financial Services", "Entertainment", "Healthcare", "E-commerce", "Manufacturing", "IT Services"],
  },
  "delhi": {
    slug: "software-qa-testing-services-in-delhi",
    name: "Delhi",
    state: "Delhi",
    metadata: {
      title: "Software QA Testing Services in Delhi | Manual & Automation Testing | Testriq",
      description: "Top software testing company in Delhi providing manual testing, automation testing, performance testing, and QA consulting services. Expert QA engineers.",
      keywords: "software testing services delhi, qa testing delhi, manual testing delhi, automation testing delhi, performance testing delhi, software testing company delhi, qa services ncr, testing services delhi",
    },
    heroContent: {
      title: "Professional Software Testing Services in Delhi",
      subtitle: "Leading QA Solutions in NCR",
      description: "Transform your software quality with our comprehensive testing services in Delhi. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across NCR.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "180+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "96%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "7+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["India Gate", "Red Fort", "Qutub Minar", "Humayun\"s Tomb"],
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
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Delhi",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "180+",
        clientSatisfaction: "96%",
        supportAvailable: "24/7",
        yearsExperience: "7+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Delhi Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Delhi Focus", description: "Deep understanding of Delhi\"s business ecosystem and tech needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "96% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s Delhi team is a game-changer! Their comprehensive testing approach and quick turnaround times are unmatched. Truly a reliable partner.",
        author: "Sanjay Gupta",
        company: "E-commerce Innovations, Delhi",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Delhi Success Stories",
      description: "Real-world examples of our impact in Delhi.",
      subtitle: "Discover how we helped businesses in Delhi achieve their quality goals.",
      studies: [
        {
          company: "Government Portal",
          industry: "Government",
          challenge: "Complex forms and slow data processing leading to user frustration.",
          results: [
            "Simplified user workflows and improved form submission rates by 30%",
            "Reduced data processing time by 20%",
            "Enhanced overall user satisfaction and accessibility",
          ],
        },
        {
          company: "EdTech Startup",
          industry: "Education",
          challenge: "Inconsistent performance and crashes during online exams.",
          results: [
            "Ensured stable performance for 10,000+ concurrent users",
            "Eliminated critical crashes during high-stakes assessments",
            "Improved reliability and trust in the online examination system",
          ],
        },
        {
          company: "Healthcare Provider",
          industry: "Healthcare",
          challenge: "Data privacy concerns and non-compliance with healthcare regulations.",
          results: [
            "Achieved 100% compliance with HIPAA and other regulations",
            "Implemented robust data encryption and access controls",
            "Strengthened patient data privacy and security",
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
          name: "AI-Powered Testing",
          trending: true,
          description: "Leverage artificial intelligence for smarter and faster test automation.",
          citySpecific: "Growing demand for AI solutions in Delhi\"s tech sector.",
          benefits: ["Enhanced Test Coverage", "Faster Defect Detection", "Reduced Manual Effort"],
          technologies: ["TensorFlow", "PyTorch", "Selenium AI", "Appium AI"],
        },
        {
          name: "Cloud Testing Services",
          trending: false,
          description: "Scalable and flexible testing solutions on cloud platforms.",
          citySpecific: "Cloud adoption is high among Delhi\"s startups and enterprises.",
          benefits: ["Cost-Effective Infrastructure", "On-Demand Scalability", "Global Accessibility"],
          technologies: ["AWS Device Farm", "Azure Test Plans", "BrowserStack", "Sauce Labs"],
        },
        {
          name: "IoT Device Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Delhi is seeing increased adoption of IoT in smart city initiatives.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "Blockchain Testing",
          trending: false,
          description: "Ensuring the integrity and security of blockchain applications.",
          citySpecific: "Financial and supply chain sectors in Delhi are exploring blockchain.",
          benefits: ["Smart Contract Validation", "Consensus Mechanism Testing", "Security Audits"],
          technologies: ["Ethereum", "Hyperledger Fabric", "Solidity", "Truffle"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Delhi",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What types of software testing services do you offer in Delhi?",
          answer: "We provide a full range of software testing services in Delhi, including manual, automation, performance, security, mobile, and API testing, tailored to your specific needs.",
        },
        {
          question: "How does Testriq ensure the quality of its testing processes?",
          answer: "Our testing processes are designed to be thorough and efficient, adhering to international standards and best practices. We use advanced tools and methodologies to ensure high-quality outcomes.",
        },
        {
          question: "Can you handle large-scale enterprise testing projects?",
          answer: "Yes, we have extensive experience in managing and executing large-scale enterprise testing projects, ensuring scalability, reliability, and performance for complex systems.",
        },
        {
          question: "What is your expertise in performance testing for high-traffic applications?",
          answer: "We specialize in performance testing for high-traffic applications, simulating real-world load conditions to identify bottlenecks and ensure optimal performance and user experience.",
        },
        {
          question: "How can I contact Testriq for software testing services in Delhi?",
          answer: "You can contact us directly via phone or email, or submit an inquiry through our website. Our Delhi team will respond promptly to discuss your testing requirements.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Ensure Quality for Your Delhi Project?",
      description: "Get started with our expert testing services in Delhi today",
      subtitle: "Contact us for a free consultation and a tailored quote.", // Added subtitle
      benefits: ["Comprehensive Coverage", "Agile Integration", "Scalable Solutions", "Dedicated Support"],
      contactInfo: {
        phone: "+91 96543 21098",
        email: "info.delhi@testriq.com",
        address: "10, Connaught Place, New Delhi, Delhi, India", // Added address
      },
    },
    industries: ["Government", "Healthcare", "E-commerce", "Financial Services", "IT Services", "Education"],
  },
  "hyderabad": {
    slug: "software-qa-testing-services-in-hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    metadata: {
      title: "Software QA Testing Services in Hyderabad | Manual & Automation Testing | Testriq",
      description: "Leading software testing company in Hyderabad offering manual testing, automation testing, performance testing, and QA consulting services. ISTQB certified experts.",
      keywords: "software testing services hyderabad, qa testing hyderabad, manual testing hyderabad, automation testing hyderabad, performance testing hyderabad, software testing company hyderabad, qa services telangana, testing services hyderabad",
    },
    heroContent: {
      title: "Professional Software Testing Services in Hyderabad",
      subtitle: "Leading QA Solutions in Telangana",
      description: "Transform your software quality with our comprehensive testing services in Hyderabad. We provide expert manual testing, automation testing, performance testing, and quality assurance solutions to businesses across Telangana.",
      certifications: ["ISTQB Certified Engineers", "Agile QA Expertise", "ISO 27001 Certified"],
      stats: [
        { number: "220+", label: "Projects Completed", description: "Successfully delivered QA projects" },
        { number: "98%", label: "Client Satisfaction", description: "High client retention rate" },
        { number: "8+", label: "Years Experience", description: "In the software testing industry" },
        { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      ],
      landmarks: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar Lake"],
    },
    processContent: {
      title: "Our QA Testing Process in Hyderabad",
      subtitle: "A systematic approach to ensure software quality for Hyderabad businesses.",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project needs and defining the scope of testing.", deliverables: ["Scope Document", "Test Strategy"] },
        { number: "02", title: "Test Planning", description: "Developing a detailed test plan, strategies, and test cases.", deliverables: ["Test Plan Document", "Resource Allocation"] },
        { number: "03", title: "Test Case Development", description: "Creating comprehensive test cases based on requirements.", deliverables: ["Test Cases", "Test Scripts"] },
        { number: "04", title: "Test Environment Setup", description: "Configuring the necessary environment for effective testing.", deliverables: ["Environment Setup Report", "Test Data"] },
        { number: "05", title: "Test Execution", description: "Executing test cases and identifying defects.", deliverables: ["Execution Logs", "Defect Reports"] },
        { number: "06", title: "Reporting & Retesting", description: "Providing detailed reports and retesting fixed defects.", deliverables: ["Summary Reports", "Retest Reports"] },
      ],
    },
    servicesContent: {
      title: "Comprehensive Testing Services in Hyderabad",
      description: "Professional QA solutions tailored for Hyderabad businesses",
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
    toolsFrameworkContent: {
      title: "Tools & Frameworks Used in Hyderabad",
      description: "Leveraging cutting-edge tools for superior QA testing.",
      stats: {
        projectsCompleted: "220+",
        clientSatisfaction: "98%",
        supportAvailable: "24/7",
        yearsExperience: "8+",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Hyderabad Testing Team?",
      subtitle: "Experience the Testriq advantage with our dedicated local expertise.",
      reasons: [
        { icon: "MapPin", title: "Local Expertise", stats: "Hyderabad Focus", description: "Deep understanding of Hyderabad\"s tech ecosystem and business needs." },
        { icon: "Award", title: "Certified Professionals", stats: "ISTQB Certified", description: "Our team comprises highly skilled and certified QA engineers." },
        { icon: "Users", title: "Client-Centric Approach", stats: "98% Satisfaction", description: "We prioritize your success with tailored solutions and transparent communication." },
        { icon: "Clock", title: "Timely Delivery", stats: "On-Time Guarantee", description: "Committed to delivering projects on schedule without compromising quality." },
      ],
      testimonial: {
        text: "Testriq\"s Hyderabad team exceeded our expectations. Their thorough testing and insightful feedback were invaluable for our project\"s success.",
        author: "Rajesh Reddy",
        company: "BioTech Innovations, Hyderabad",
        rating: 5,
      },
    },
    caseStudiesContent: {
      title: "Case Studies: Hyderabad Success Stories",
      description: "Real-world examples of our impact in Hyderabad.",
      subtitle: "Discover how we helped businesses in Hyderabad achieve their quality goals.",
      studies: [
        {
          company: "Pharmaceutical Company",
          industry: "Pharmaceuticals",
          challenge: "Compliance issues and data integrity problems in drug development software.",
          results: [
            "Ensured 100% compliance with regulatory standards (e.g., FDA, GMP)",
            "Implemented robust data validation and audit trails",
            "Improved data integrity and reliability for clinical trials",
          ],
        },
        {
          company: "Aerospace Manufacturer",
          industry: "Aerospace",
          challenge: "Critical software defects in flight control systems.",
          results: [
            "Identified and resolved safety-critical software bugs",
            "Achieved DO-178C compliance for avionics software",
            "Enhanced reliability and safety of flight control systems",
          ],
        },
        {
          company: "Biotechnology Research",
          industry: "Biotechnology",
          challenge: "Complex data analysis and visualization errors in research tools.",
          results: [
            "Improved accuracy of data analysis by 90%",
            "Developed intuitive data visualization dashboards",
            "Accelerated research insights and decision-making",
          ],
        },
      ],
    },
    trendingServicesContent: {
      title: "Trending QA Services in Hyderabad",
      description: "Stay ahead with the latest in software quality assurance.",
      subtitle: "Explore our cutting-edge services in Hyderabad.",
      services: [
        {
          name: "AI-Powered Testing",
          trending: true,
          description: "Leverage artificial intelligence for smarter and faster test automation.",
          citySpecific: "Growing demand for AI solutions in Hyderabad\"s tech sector.",
          benefits: ["Enhanced Test Coverage", "Faster Defect Detection", "Reduced Manual Effort"],
          technologies: ["TensorFlow", "PyTorch", "Selenium AI", "Appium AI"],
        },
        {
          name: "Cloud Testing Services",
          trending: false,
          description: "Scalable and flexible testing solutions on cloud platforms.",
          citySpecific: "Cloud adoption is high among Hyderabad\"s startups and enterprises.",
          benefits: ["Cost-Effective Infrastructure", "On-Demand Scalability", "Global Accessibility"],
          technologies: ["AWS Device Farm", "Azure Test Plans", "BrowserStack", "Sauce Labs"],
        },
        {
          name: "IoT Device Testing",
          trending: true,
          description: "Comprehensive testing for Internet of Things devices and ecosystems.",
          citySpecific: "Hyderabad is a hub for IoT innovation and development.",
          benefits: ["End-to-End Device Validation", "Security Assurance", "Performance Optimization"],
          technologies: ["MQTT", "CoAP", "Zigbee", "Bluetooth LE"],
        },
        {
          name: "Blockchain Testing",
          trending: false,
          description: "Ensuring the integrity and security of blockchain applications.",
          citySpecific: "Financial and supply chain sectors in Hyderabad are exploring blockchain.",
          benefits: ["Smart Contract Validation", "Consensus Mechanism Testing", "Security Audits"],
          technologies: ["Ethereum", "Hyperledger Fabric", "Solidity", "Truffle"],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions about QA in Hyderabad",
      subtitle: "Answers to common queries about our testing services.",
      faqs: [
        {
          question: "What types of software testing services do you offer in Hyderabad?",
          answer: "We provide a comprehensive suite of software testing services in Hyderabad, including manual, automation, performance, security, mobile, and API testing, tailored to meet your specific project needs.",
        },
        {
          question: "How does Testriq ensure the quality of its testing processes?",
          answer: "Our testing processes are meticulously designed to be thorough and efficient, adhering to international standards and best practices. We leverage advanced tools and methodologies to ensure high-quality outcomes.",
        },
        {
          question: "Can you handle large-scale enterprise testing projects?",
          answer: "Yes, we have extensive experience in managing and executing large-scale enterprise testing projects, ensuring scalability, reliability, and performance for complex systems.",
        },
        {
          question: "What is your expertise in performance testing for high-traffic applications?",
          answer: "We specialize in performance testing for high-traffic applications, simulating real-world load conditions to identify bottlenecks and ensure optimal performance and user experience.",
        },
        {
          question: "How can I contact Testriq for software testing services in Hyderabad?",
          answer: "You can contact us directly via phone or email, or submit an inquiry through our website. Our Hyderabad team will respond promptly to discuss your testing requirements.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Ensure Quality for Your Hyderabad Project?",
      description: "Get started with our expert testing services in Hyderabad today",
      subtitle: "Contact us for a free consultation and a tailored quote.", // Added subtitle
      benefits: ["Industry-Leading Expertise", "Customized Approach", "Proven Methodologies", "Dedicated Support"],
      contactInfo: {
        phone: "+91 95432 10987",
        email: "info.hyderabad@testriq.com",
        address: "101, Hitech City, Hyderabad, Telangana, India", // Added address
      },
    },
    industries: ["IT Services", "Pharmaceuticals", "Biotechnology", "Aerospace", "Financial Services", "E-commerce"],
  },
};

// Helper functions
export function getCityData(citySlug: string): CityData | null {
  const normalizedSlug = citySlug.toLowerCase();
  return cityData[normalizedSlug] || null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityData);
}

export function getAllCities(): CityData[] {
  return Object.values(cityData);
}


