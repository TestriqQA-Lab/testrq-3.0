import { IconType } from "react-icons";
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaMobile,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  fullDescription: string; // Added for detailed view
  skills: string[];
  badges: string[];
  icon: IconType;
  color: string;
}

export const positions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Test Automation Engineer",
    department: "automation",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead automation testing initiatives using Selenium, Cypress, and modern testing frameworks. Design and implement comprehensive test automation strategies for web and mobile applications.",
    fullDescription: `
      **Job Summary:**\n
      We are seeking a highly skilled and experienced Senior Test Automation Engineer to lead our automation testing initiatives. In this role, you will be responsible for designing, developing, and implementing comprehensive test automation strategies for web and mobile applications. You will work closely with development teams to ensure the delivery of high-quality software products.\n
      **Responsibilities:**\n
      * Lead the design, development, and maintenance of robust and scalable test automation frameworks using tools like Selenium, Cypress, and Playwright.\n
      * Develop, execute, and maintain automated test scripts for functional, regression, and integration testing.\n
      * Integrate automated tests into CI/CD pipelines to enable continuous testing and faster feedback loops.\n
      * Collaborate with cross-functional teams (developers, product managers, manual QA) to understand requirements and ensure testability of features.\n
      * Mentor junior automation engineers and promote best practices in test automation.\n
      * Analyze test results, identify defects, and work with development teams to resolve issues.\n
      * Stay up-to-date with the latest industry trends and technologies in test automation.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 5+ years of experience in software quality assurance with a strong focus on test automation.\n
      * Proven expertise in designing and implementing test automation frameworks from scratch.\n
      * Hands-on experience with test automation tools such as Selenium WebDriver, Cypress, or Playwright.\n
      * Strong programming skills in JavaScript/TypeScript, Python, or Java.\n
      * Experience with API testing (REST, GraphQL) using tools like Postman, Newman, or similar.\n
      * Familiarity with CI/CD tools (e.g., Jenkins, GitLab CI, GitHub Actions) and version control systems (Git).\n
      * Solid understanding of software development life cycle (SDLC) and agile methodologies.\n
      * Excellent problem-solving, analytical, and communication skills.\n
      **Preferred Qualifications:**\n
      * Experience with mobile test automation (Appium, Espresso, XCUITest).\n
      * Knowledge of performance testing tools (JMeter, LoadRunner).\n
      * Experience with cloud platforms (AWS, Azure, GCP) for testing environments.\n
      * Certifications in software testing (e.g., ISTQB).`, // Example full description
    skills: [
      "Selenium WebDriver",
      "Cypress",
      "JavaScript/TypeScript",
      "CI/CD Pipelines",
      "API Testing",
    ],
    badges: ["Urgent", "Featured"],
    icon: FaCode,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "QA Test Engineer",
    department: "manual",
    location: "New York, NY",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Execute comprehensive manual testing across web applications and mobile apps, including UI/UX validation and functional test cases. Collaborate with development teams to ensure quality deliverables, reduce defects, and enhance user satisfaction through effective software quality assurance.",
    fullDescription: `
      **Job Summary:**\n
      We are looking for a dedicated QA Test Engineer to perform comprehensive manual testing on our web and mobile applications. You will be responsible for ensuring the quality of our software products by executing test cases, identifying defects, and collaborating with development teams to resolve issues.\n
      **Responsibilities:**\n
      * Design, develop, and execute detailed test cases based on functional and non-functional requirements.\n
      * Perform various types of manual testing, including functional, regression, integration, UI/UX, and user acceptance testing.\n
      * Identify, document, and track software defects using bug tracking systems (e.g., Jira, Azure DevOps).\n
      * Collaborate closely with product managers, developers, and other QA team members throughout the software development lifecycle.\n
      * Participate in requirements reviews, design discussions, and test plan creation.\n
      * Provide clear and concise reports on testing progress, defect status, and overall quality metrics.\n
      * Contribute to the continuous improvement of QA processes and methodologies.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 2-4 years of experience in manual software testing.\n
      * Strong understanding of software testing principles, methodologies, and best practices.\n
      * Experience with test case management tools and bug tracking systems.\n
      * Ability to analyze requirements and create effective test cases.\n
      * Excellent attention to detail and strong analytical skills.\n
      * Good communication and interpersonal skills.\n
      * Familiarity with Agile/Scrum development processes.\n
      **Preferred Qualifications:**\n
      * Experience with mobile application testing.\n
      * Basic understanding of SQL and database concepts.\n
      * Knowledge of automated testing concepts and tools.\n
      * Certifications in software testing (e.g., ISTQB Foundation).`, // Example full description
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Bug Tracking",
      "Agile Methodology",
      "User Experience",
    ],
    badges: [],
    icon: FaUsers,
    color: "from-green-500 to-green-700",
  },
  {
    id: 3,
    title: "Performance Testing Specialist",
    department: "performance",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Design and execute performance testing strategies using tools like JMeter, LoadRunner, and cloud-based load testing platforms such as BlazeMeter and Loader.io. Analyze system scalability, response times, and resource utilization to provide actionable performance optimization recommendations for high-traffic web and mobile applications.",
    fullDescription: `
      **Job Summary:**\n
      We are seeking a highly skilled Performance Testing Specialist to design and execute comprehensive performance testing strategies. You will be responsible for analyzing system scalability, response times, and resource utilization to provide actionable recommendations for optimizing high-traffic web and mobile applications.\n
      **Responsibilities:**\n
      * Develop and implement performance test plans, strategies, and scenarios based on system requirements and expected load.\n
      * Design, script, and execute performance tests using industry-standard tools such as JMeter, LoadRunner, or Gatling.\n
      * Utilize cloud-based load testing platforms like BlazeMeter, Loader.io, or AWS Load Testing for large-scale simulations.\n
      * Monitor system performance during tests, collect key metrics (e.g., response times, throughput, error rates, resource utilization), and analyze results.\n
      * Identify performance bottlenecks, root causes of issues, and provide detailed recommendations for optimization to development teams.\n
      * Collaborate with architects, developers, and operations teams to ensure performance requirements are met throughout the SDLC.\n
      * Prepare comprehensive performance test reports and present findings to stakeholders.\n
      * Stay current with emerging performance testing tools, techniques, and industry best practices.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 4+ years of dedicated experience in performance testing and engineering.\n
      * Strong hands-on experience with at least one major performance testing tool (JMeter, LoadRunner, NeoLoad, etc.).\n
      * Experience with cloud-based load testing platforms.\n
      * Solid understanding of performance testing concepts, methodologies, and metrics.\n
      * Proficiency in analyzing performance data and identifying system bottlenecks.\n
      * Knowledge of application architecture, databases, and network protocols.\n
      * Excellent analytical, problem-solving, and communication skills.\n
      **Preferred Qualifications:**\n
      * Experience with APM tools (e.g., Dynatrace, New Relic, AppDynamics).\n
      * Scripting skills (e.g., Python, Groovy, Shell scripting).\n
      * Experience with containerization technologies (Docker, Kubernetes).\n
      * Certifications in performance testing or related areas.`, // Example full description
    skills: [
      "JMeter",
      "LoadRunner",
      "Performance Analysis",
      "Cloud Platforms",
      "Monitoring Tools",
    ],
    badges: ["Featured"],
    icon: FaRocket,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 4,
    title: "Mobile QA Engineer",
    department: "mobile",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Specialize in mobile application testing across iOS and Android platforms, performing functional, UI/UX, compatibility, and performance testing on real devices and emulators. Ensure optimal user experience through comprehensive mobile testing strategies using tools like Appium, Firebase Test Lab, and BrowserStack.",
    fullDescription: `
      **Job Summary:**\n
      We are looking for a skilled Mobile QA Engineer to specialize in mobile application testing across iOS and Android platforms. You will be responsible for ensuring an optimal user experience by performing functional, UI/UX, compatibility, and performance testing on real devices and emulators.\n
      **Responsibilities:**\n
      * Design, develop, and execute test plans and test cases for mobile applications on iOS and Android.\n
      * Perform various types of mobile testing, including functional, regression, UI/UX, performance, security, and compatibility testing.\n
      * Utilize mobile testing tools such as Appium, Firebase Test Lab, BrowserStack, or similar.\n
      * Identify, document, and track defects, working closely with development teams for timely resolution.\n
      * Conduct testing on a wide range of mobile devices, operating system versions, and network conditions.\n
      * Participate in all phases of the mobile application development lifecycle, from requirements gathering to deployment.\n
      * Provide feedback on usability and user experience of mobile applications.\n
      * Stay updated with the latest mobile technologies and testing trends.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 3+ years of experience in mobile application testing.\n
      * Strong understanding of iOS and Android platforms and their ecosystems.\n
      * Hands-on experience with mobile testing tools and frameworks (e.g., Appium, XCUITest, Espresso).\n
      * Experience with bug tracking systems (e.g., Jira) and test case management tools.\n
      * Ability to work independently and as part of a team in an agile environment.\n
      * Excellent analytical, problem-solving, and communication skills.\n
      **Preferred Qualifications:**\n
      * Experience with mobile test automation.\n
      * Knowledge of mobile performance profiling tools.\n
      * Familiarity with CI/CD pipelines for mobile apps.`, // Example full description
    skills: [
      "iOS Testing",
      "Android Testing",
      "Appium",
      "Mobile Automation",
      "Device Testing",
    ],
    badges: ["Urgent"],
    icon: FaMobile,
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 5,
    title: "Security Testing Engineer",
    department: "security",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Conduct security assessments and penetration testing. Identify vulnerabilities and ensure application security compliance with industry standards.",
    fullDescription: `
      **Job Summary:**\n
      We are seeking a skilled Security Testing Engineer to conduct comprehensive security assessments and penetration testing. You will be responsible for identifying vulnerabilities, assessing risks, and ensuring our applications and systems comply with industry security standards.\n
      **Responsibilities:**\n
      * Perform manual and automated security testing, including penetration testing, vulnerability assessments, and code reviews.\n
      * Identify and exploit security vulnerabilities in web applications, mobile applications, APIs, and network infrastructure.\n
      * Utilize various security testing tools (e.g., Burp Suite, OWASP ZAP, Nessus, Metasploit).\n
      * Document security findings, provide clear and actionable recommendations for remediation, and communicate risks to stakeholders.\n
      * Collaborate with development and operations teams to implement security best practices and ensure timely resolution of vulnerabilities.\n
      * Stay up-to-date with the latest security threats, vulnerabilities, and attack techniques.\n
      * Contribute to the development and improvement of security testing methodologies and processes.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Information Security, or a related field.\n
      * 4+ years of experience in security testing, penetration testing, or ethical hacking.\n
      * Strong understanding of common web application vulnerabilities (e.g., OWASP Top 10) and their exploitation.\n
      * Hands-on experience with security testing tools.\n
      * Knowledge of network protocols, operating systems, and security architectures.\n
      * Familiarity with security standards and regulations (e.g., GDPR, HIPAA, PCI DSS).\n
      * Excellent analytical, problem-solving, and reporting skills.\n
      * Relevant security certifications (e.g., OSCP, CEH, CompTIA Security+).`, // Example full description
    skills: [
      "Penetration Testing",
      "OWASP",
      "Security Scanning",
      "Vulnerability Assessment",
      "Compliance",
    ],
    badges: ["Featured"],
    icon: FaShieldAlt,
    color: "from-red-500 to-red-700",
  },
  {
    id: 6,
    title: "Junior QA Analyst",
    department: "manual",
    location: "Remote",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Entry-level QA position for new graduates looking to start a career in software testing. Learn testing fundamentals including manual testing, test case execution, and defect reporting while contributing to real-world QA projects under the guidance of senior QA professionals and mentorship programs.",
    fullDescription: `
      **Job Summary:**\n
      We are looking for an enthusiastic and detail-oriented Junior QA Analyst to join our growing quality assurance team. This is an entry-level position perfect for new graduates or individuals looking to start a career in software testing. You will learn testing fundamentals and contribute to real-world QA projects under the guidance of senior QA professionals.\n
      **Responsibilities:**\n
      * Execute manual test cases and document test results accurately.\n
      * Identify, record, and track software defects using a bug tracking system.\n
      * Collaborate with senior QA analysts and developers to understand project requirements and test objectives.\n
      * Participate in daily stand-ups and team meetings.\n
      * Assist in the creation and maintenance of test documentation (test cases, test plans).\n
      * Learn and apply various testing techniques and methodologies.\n
      * Provide timely feedback on software quality and user experience.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, IT, or a related field (or equivalent practical experience).\n
      * 0-2 years of experience in software testing or a strong interest in QA.\n
      * Basic understanding of software development life cycle (SDLC) and testing concepts.\n
      * Excellent attention to detail and strong analytical skills.\n
      * Good communication and interpersonal skills.\n
      * Eagerness to learn and adapt to new technologies and processes.\n
      * Ability to work effectively in a team environment.\n
      **Preferred Qualifications:**\n
      * Familiarity with any bug tracking tool (e.g., Jira, Trello).\n
      * Basic knowledge of web or mobile applications.\n
      * Any relevant coursework or certifications in software testing.`, // Example full description
    skills: [
      "Basic Testing",
      "Attention to Detail",
      "Learning Mindset",
      "Communication",
      "Problem Solving",
    ],
    badges: [],
    icon: FaUsers,
    color: "from-teal-500 to-teal-700",
  },
  {
    id: 7,
    title: "Lead QA Engineer",
    department: "automation",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Lead a team of QA engineers and drive quality initiatives across multiple projects. Mentor junior team members and establish testing best practices.",
    fullDescription: `
      **Job Summary:**\n
      We are seeking an experienced and dynamic Lead QA Engineer to lead a team of QA engineers and drive quality initiatives across multiple projects. You will be responsible for mentoring junior team members, establishing testing best practices, and ensuring the overall quality of our software products.\n
      **Responsibilities:**\n
      * Lead and manage a team of QA engineers, providing guidance, mentorship, and performance feedback.\n
      * Define and implement comprehensive test strategies, test plans, and test methodologies for various projects.\n
      * Oversee the design, development, and execution of test cases (manual and automated).\n
      * Drive the adoption of test automation frameworks and continuous integration/continuous delivery (CI/CD) practices.\n
      * Collaborate with product management, development, and other stakeholders to ensure alignment on quality goals and deliverables.\n
      * Identify and mitigate risks related to software quality throughout the development lifecycle.\n
      * Conduct root cause analysis of defects and implement preventive measures.\n
      * Stay abreast of industry trends and advancements in QA and testing technologies.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 7+ years of experience in software quality assurance, with at least 2 years in a lead or senior role.\n
      * Proven experience in leading and mentoring QA teams.\n
      * Strong expertise in test automation tools and frameworks (e.g., Selenium, Cypress, Playwright, Appium).\n
      * Solid understanding of software development methodologies (Agile, Scrum, Kanban).\n
      * Excellent analytical, problem-solving, and decision-making skills.\n
      * Exceptional communication, leadership, and interpersonal skills.\n
      * Experience with performance testing, security testing, or other specialized testing areas is a plus.\n
      **Preferred Qualifications:**\n
      * Master's degree in a relevant field.\n
      * Certifications in software testing or project management.\n
      * Experience with cloud-based testing environments.`, // Example full description
    skills: [
      "Team Leadership",
      "Test Strategy",
      "Mentoring",
      "Process Improvement",
      "Stakeholder Management",
    ],
    badges: ["Featured", "Leadership"],
    icon: FaStar,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 8,
    title: "API Testing Specialist",
    department: "automation",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Focus on API testing and backend service validation. Develop automated API test suites and ensure service reliability and performance.",
    fullDescription: `
      **Job Summary:**\n
      We are seeking an API Testing Specialist to focus on API testing and backend service validation. You will be responsible for developing automated API test suites and ensuring the reliability, performance, and security of our backend services.\n
      **Responsibilities:**\n
      * Design, develop, and execute automated test cases for RESTful and GraphQL APIs.\n
      * Utilize API testing tools such as Postman, Newman, SoapUI, or similar.\n
      * Integrate API tests into CI/CD pipelines for continuous validation.\n
      * Perform functional, performance, security, and regression testing on APIs.\n
      * Collaborate with development teams to understand API specifications and data models.\n
      * Identify, document, and track defects related to API functionality and performance.\n
      * Analyze API test results and provide detailed reports to stakeholders.\n
      * Contribute to the improvement of API testing processes and automation frameworks.\n
      **Requirements:**\n
      * Bachelor's degree in Computer Science, Engineering, or a related field.\n
      * 3+ years of experience in software quality assurance with a strong focus on API testing.\n
      * Hands-on experience with API testing tools and frameworks.\n
      * Solid understanding of REST, GraphQL, and other API protocols.\n
      * Experience with JSON and XML data formats.\n
      * Proficiency in at least one scripting language (e.g., JavaScript, Python, Groovy).\n
      * Familiarity with database concepts and SQL for data validation.\n
      * Excellent analytical, problem-solving, and communication skills.\n
      **Preferred Qualifications:**\n
      * Experience with performance testing of APIs.\n
      * Knowledge of security testing for APIs.\n
      * Experience with microservices architecture.`, // Example full description
    skills: [
      "API Testing",
      "REST/GraphQL",
      "Postman",
      "Newman",
      "Database Testing",
    ],
    badges: [],
    icon: FaCode,
    color: "from-indigo-500 to-indigo-700",
  },
];



