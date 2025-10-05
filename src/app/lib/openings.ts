import { FaBug, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
  badges?: string[];
  icon?: IconType;
  color?: string;
  salary?: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 1, // unique ID
    title: "Manual Tester (API – Postman)",
    location: "Hybrid (Mira Road, Mumbai)",
    type: "Full-time",
    experience: "3–5 Years",
    description: `
### Key Responsibilities:
- Actively attend all stand-ups and team meetings with pods.
- Manage end-to-end QA for both backend and frontend applications.
- Write, maintain and review detailed test cases.
- Execute manual API testing using Postman.
- Contribute to API automation efforts when required.
- Perform database testing using SQL queries.
- Track and manage bugs using JIRA.
- Work with GitHub for version control and Jenkins for CI/CD integrations.

### Requirements:
- 3–5 years of experience as a Manual Tester / QA Engineer.
- Hands-on experience in API testing (Postman).
- Exposure to API automation frameworks.
- Strong understanding of frontend and backend QA processes.
- Proficiency in writing and executing test cases.
- Familiarity with GitHub, Jenkins, and JIRA.
- Good knowledge of DB testing (SQL queries).
- Strong communication and collaboration skills to work with cross-functional pods.
  `,
    skills: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "API Automation",
      "Frontend & Backend QA",
      "Test Case Design",
      "SQL (DB Testing)",
      "JIRA",
      "GitHub",
      "Jenkins",
      "CI/CD",
    ],
    badges: ["Urgent", "Featured"],
    icon: FaBug,
    color: "from-green-400 to-green-600",
    salary: "Competitive",
  },
  {
    id: 2,
    title: "Manual Tester (Trading Domain)",
    location: "On-Site (Kurla, Mumbai)",
    type: "Full-time",
    experience: "2–4 Years",
    description: `
### Key Responsibilities:
- Analyze business requirements and prepare detailed test scenarios and test cases.
- Perform manual testing of trading applications, order management systems, and related modules.
- Validate trade workflows including order entry, execution, settlement and reporting.
- Identify, log and track defects using bug-tracking tools.
- Execute functional, regression, integration, and UAT testing.

### Requirements:
- 2–4 years of experience in Manual Testing, preferably in the Trading/Finance domain.
- Strong understanding of trading workflows, financial products (Equity, Derivatives, Commodities, etc.).
- Hands-on experience with bug tracking and test management tools (e.g., JIRA, Bugzilla, TestRail).
- Good understanding of SDLC & STLC processes.
- Strong analytical, problem-solving, and communication skills.
- Knowledge of SQL for basic data validation will be an added advantage.
    `,
    skills: [
      "Manual Testing",
      "Trading",
      "Finance Domain",
      "JIRA",
      "TestRail",
      "SQL",
    ],
    badges: ["Urgent", "Featured"],
    icon: FaBug,
    color: "from-yellow-400 to-yellow-600",
    salary: "Competitive",
  },
  {
    id: 3,
    title: "Automation Test Engineer (Playwright + Javascript)",
    location: "On-site (Prabhadevi, Mumbai)",
    type: "Full-time",
    experience: "2 – 3 years",
    description: `
### Job Description:

Role: Automation Test Engineer (Playwright + Javascript)  
Experience: 2 – 3 years  
Location: On-site (Prabhadevi, Mumbai)  
Work Type: Full-time  

---

### Key Responsibilities:

- Develop and maintain automation test scripts using **Javascript** and **Playwright**.
- Execute cross-browser and responsive testing.
- Integrate automation tests with **CI/CD pipelines** (Jenkins, GitHub Actions).
- Identify, log, and track defects using **JIRA** or similar tools.

---

### Required Skills:

- At least **2 years of experience** in Automation.
- Proficient in **Playwright**.
- Strong programming knowledge of **JavaScript**.
- Experience with frameworks like **TestNG, Mocha, Jest**, or similar.
- Familiarity with **Git, Jenkins**, and other DevOps tools.
    `,
    skills: [
      "Playwright",
      "JavaScript",
      "TestNG",
      "Mocha",
      "Jest",
      "CI/CD (Jenkins/GitHub Actions)",
      "Git",
      "JIRA",
    ],
    badges: ["Urgent", "Featured"],
    icon: FaCode,
    color: "from-green-500 to-green-700",
    salary: "Competitive",
  },
  {
    id: 4,
    title: "Automation Test Engineer (Selenium + Playwright)",
    location: "On-site (Mira Road, Mumbai)",
    type: "Full-time",
    experience: "2 – 3 years",
    description: `
### Job Description:

Role: Automation Test Engineer (Selenium + Playwright)  
Experience: 2 – 3 years  
Location: On-site (Mira Road, Mumbai)  
Work Type: Full-time  

---

### Key Responsibilities:

- Develop and maintain automation test scripts using **Selenium** and **Playwright**.
- Execute cross-browser and responsive testing.
- Integrate automation tests with **CI/CD pipelines** (Jenkins, GitHub Actions).
- Identify, log, and track defects using **JIRA** or similar tools.

---

### Required Skills:

- At least **1 year of experience** in Automation.
- Proficient in **Selenium WebDriver** and **Playwright**.
- Strong programming knowledge in **Java / Python / JavaScript / TypeScript**.
- Experience with frameworks like **TestNG, Mocha, Jest**, or similar.
- Familiarity with **Git, Jenkins**, and other DevOps tools.
- Experience with **Performance Testing**.
    `,
    skills: [
      "Selenium WebDriver",
      "Playwright",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "TestNG",
      "Mocha",
      "Jest",
      "CI/CD (Jenkins/GitHub Actions)",
      "Performance Testing",
      "Git",
      "JIRA",
    ],
    badges: ["Urgent", "Featured"],
    icon: FaCode,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 5,
    title: "Playwright Automation Tester",
    location: "On-site (Western Mumbai)",
    type: "Full-time",
    experience: "2 years",
    description: `
### Job Description:

Role: Playwright Automation Tester  
Experience: 2 years  
Location: On-site (Western Mumbai)  
Work Type: Full-time  

---

### Key Responsibilities:

- Develop and maintain automation test scripts using **Playwright**.
- Execute cross-browser and responsive testing.
- Maintain test suites and ensure integration with **CI/CD pipelines** (Jenkins, GitHub Actions).
- Identify, log, and track defects using **JIRA** or similar tools.
- Execute tests across different browsers (**Chromium, Firefox, WebKit**).

---

### Required Skills:

- At least **2 years of experience** in Automation.
- Proficient in **Selenium WebDriver**.
- Strong programming knowledge in **Java / Python / JavaScript / TypeScript**.
- Experience with frameworks like **TestNG, Mocha, Jest**, or similar.
- Familiarity with **Git, Jenkins**, and other DevOps tools.
- Experience with **Performance Testing**.
    `,
    skills: [
      "Playwright",
      "Selenium WebDriver",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "TestNG",
      "Mocha",
      "Jest",
      "CI/CD (Jenkins/GitHub Actions)",
      "Performance Testing",
      "Git",
      "JIRA",
    ],
    icon: FaCode,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 6,
    title:
      "QA / Automation Intern / Software Testing Intern (Java / JavaScript)",
    location: "On-site (Mira Road)",
    type: "Internship",
    experience: "3–6 months",
    description: `
### Job Description:

Role: QA / Automation Intern / Software Testing Intern (Java / JavaScript)  
Location: On-site (Mira Road)  
Duration: 3–6 months  

---

### Responsibilities:

- Design, write, and execute manual and automated test cases for web/mobile applications.
- Develop and maintain automation scripts using **Java (Selenium, TestNG/JUnit)** or **JavaScript (Playwright, Cypress, Jest)**.
- Perform functional, regression, integration, and cross-browser/device testing.
- Debug automation failures and report defects using **JIRA/Trello**.
- Collaborate with developers to reproduce issues and verify fixes.
- Contribute to test documentation (plans, cases, bug reports, execution results).

---

### Requirements:

- Basic understanding of **STLC, SDLC**, and defect lifecycle.
- Strong knowledge of **Core Java** or **JavaScript (ES6+)**.
- Familiarity with automation tools:  
  - **Java:** Selenium, TestNG/JUnit  
  - **JavaScript:** Playwright, Cypress, Jest/Mocha  
- Understanding of APIs (**REST**) and tools like **Postman** is a plus.
- Exposure to **Git/GitHub** for version control.
    `,
    skills: [
      "Java",
      "JavaScript",
      "Selenium",
      "Playwright",
      "Cypress",
      "TestNG",
      "JUnit",
      "Jest",
      "Mocha",
      "STLC/SDLC",
      "REST APIs",
      "Postman",
      "Git",
      "JIRA",
      "Trello",
    ],
    icon: FaCode,
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 7,
    title: "Penetration Tester",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "1-3 Years",
    description: `
### Job Description

Role: Penetration Tester  
Experience: 1-3 Years  
Location: Mumbai (Mira Road)  
Work Mode: Work from office  
Work Type: Full Time  

---

### Key Responsibilities

- Conduct penetration tests on networks, web apps, and IT infrastructure.
- Identify and exploit vulnerabilities to assess risk.
- Generate detailed reports with findings and remediation recommendations.
- Develop custom tools and techniques for testing security.
- Collaborate with internal teams to fix security issues.
- Stay current on the latest threats, tools, and trends in cybersecurity.

---

### Skills and Qualifications

- Bachelor’s degree in Cybersecurity or related field, or equivalent experience.
- 2-5 years of penetration testing or cybersecurity experience.
- Certifications like CEH, OSCP, or GPEN are preferred.
- Strong knowledge of networking, OS (Linux/Windows), and web app security.
- Proficiency in tools like Kali Linux, Burp Suite, Metasploit, and scripting (Python, Bash, etc.).
- Excellent communication skills for reporting and presenting findings.
- Experience with mobile security, cloud environments (AWS, Azure), and red teaming.
- Familiarity with common vulnerabilities (OWASP, SQL injection, XSS).
    `,
    skills: [
      "Penetration Testing",
      "Kali Linux",
      "Burp Suite",
      "Metasploit",
      "Python",
      "Bash",
      "Networking",
      "Linux",
      "Windows",
      "Web App Security",
      "CEH",
      "OSCP",
      "GPEN",
    ],
    icon: FaCode,
    color: "from-red-500 to-red-700",
  },
  {
    id: 8,
    title: "Data Processing Executive",
    location: "Mumbai",
    type: "Full-time",
    experience: "1-3 Years",
    description: `
### Job Description

Role: Data Processing Executive  
Experience: 1-3 Years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  
Shift: Night Shift  
Timing: 8:30pm to 5:30am  

---

### Key Responsibilities

- Ensure accurate and timely processing of data.
- Maintain data integrity and quality.
- Support various departments with high-quality data outputs.
- Effective communication (verbal and written).
- Attend to internal / client queries and requests.
- Basic computer skills.
- Participate in projects beyond core responsibilities.
- Perform keyword optimization (SEO) of websites & web pages.
- Data population in back sheets.
- Data health check.
- Data quality assurance.

---

### Education

- 12th passed or Higher Education in any field.
    `,
    skills: [
      "Data Processing",
      "Excel/Sheets",
      "SEO Basics",
      "Data Quality Assurance",
      "Communication",
    ],
    icon: FaCode,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    id: 9,
    title: "Business Development Executive - Intern",
    location: "Mumbai (Mira Road)",
    type: "Internship",
    experience: "Fresher / Training Provided",
    description: `
### Job Description

Role: Business Development Executive – Intern  
Location: Mumbai (Mira Road)  
Work Mode: Work from office  
Internship Duration: 3 Months  

---

### Key Responsibilities

- Use LinkedIn Sales Navigator, Upwork, and other B2B platforms to connect with company representatives and business professionals.
- Draft and send email proposals to potential clients, partners, and stakeholders.
- Engage in professional conversations and pitch products/services to prospective clients.
- Collaborate with the team to identify and pursue new business opportunities.
- Assist in additional responsibilities as assigned.

---

### Key Skills

- Fluency in English.
- Strong communication and presentation skills.

---

### Qualifications

- Strong oral and written English communication skills.
- Hardworking, proactive, and eager to learn.
- Ability to adapt and take on diverse tasks professionally.
    `,
    skills: [
      "Business Development",
      "LinkedIn Sales Navigator",
      "Upwork",
      "Email Drafting",
      "Communication",
      "Presentation Skills",
    ],
    icon: FaCode,
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 10,
    title: "SOC Analyst",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "1-2 Years",
    description: `
### Job Description

Role: SOC Analyst  
Experience: 1-2 Years  
Location: Mumbai (Mira Road)  
Work Mode: Work from office  
Work Type: Full Time  
Shift: Day Shift (9 AM – 6 PM, Mon – Sat)  

---

### Key Responsibilities

- Conduct automated monitoring to detect potential threats in real-time.
- Analyze alerts and incidents from security tools and prioritize actions.
- Perform security mitigation and coordinate with teams for implementation.
- Create actionable reports for ongoing vulnerability management, including threat and risk assessments.

---

### Qualifications

- Experience in cybersecurity operations or SOC environment.
- Familiarity with security tools: WAF, OpenVPN, Rapid-7, Snyk.
- Knowledge of Cloud Security principles and tools.
- Knowledge of Pen-testing and Blue/Red Team strategies is a plus.
- Relevant cybersecurity certifications (CompTIA Security+, CISSP, CEH, etc.).
- Experience with automated incident response systems and security dashboards.
    `,
    skills: [
      "SOC Analysis",
      "Threat Monitoring",
      "Security Dashboards",
      "WAF",
      "OpenVPN",
      "Rapid-7",
      "Snyk",
      "Cloud Security",
      "Penetration Testing",
      "Blue Team",
      "Red Team",
      "Incident Response",
    ],
    icon: FaCode,
    color: "from-teal-500 to-teal-700",
  },
  {
    id: 11,
    title: "SEO & Digital Marketing Expert",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "2 Years",
    description: `
### Job Description

Role: SEO & Digital Marketing Expert  
Experience: 2 Years  
Location: Mumbai (Mira Road)  
Work Mode: On-Site  
Work Type: Full Time  

---

### Key Responsibilities

- Conduct keyword research and optimize website content (On-Page SEO).
- Develop backlinks and increase domain authority (Off-Page SEO).
- Write and deploy SEO-friendly content.
- Track and optimize SEO performance using tools like Google Analytics, SEMrush, Ahrefs.
- Develop, execute, and optimize digital marketing campaigns (Google Ads, Facebook Ads, LinkedIn Ads).
- Implement organic and paid social media strategies to grow engagement.

---

### KPIs

- Increase organic website visits and keyword rankings.
- Improve CTR and quality of backlinks.
- Increase conversion rate by 5-10% per month.
- Grow social media followers organically.
- Increase leads per week across all channels.

---

### Skills and Qualifications

- Proven experience in SEO and Digital Marketing.
- Certification in SEO & Digital Marketing.
- In-depth understanding of search engine algorithms, social media trends, and AI platforms.
- Experience with Meta, Google, Adobe Analytics.
- Strong written and communication skills.
    `,
    skills: [
      "SEO",
      "Digital Marketing",
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Content Optimization",
      "Social Media Marketing",
      "PPC Campaigns",
      "Analytics Reporting",
    ],
    icon: FaCode,
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 12,
    title: "Front End Developer (Immediate Joiners Only)",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "5+ Years",
    description: `
### Job Description

Role: Front End Developer (Immediate Joiners Only)  
Experience: 5+ Years  
Location: Mumbai (Mira Road)  
Work Mode: On Site  
Work Type: Full Time  

---

### Responsibilities and Duties

- Develop responsive front-end layout and UI using modern HTML, CSS, and JavaScript.
- Test and validate features across browsers and devices.
- Write clean, usable, and testable code.
- Collaborate with developers, designers, and project managers.
- Stay updated on UI design, cross-browser standards, and web development best practices.

---

### Minimum Qualifications

- 5+ years of verifiable experience in HTML, CSS, and JavaScript.
- Strong knowledge of HTML semantics and W3C coding standards.
- Solid understanding of modern CSS and responsive layouts.
- Proficiency in JavaScript including reusable functions, loops, objects, and arrays.
- Experience with Git/GitHub/BitBucket.
- Ability to work night shifts (8:30pm – 5:30am IST).
- Bachelor’s degree in IT, Computer Science, or related field.
    `,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git",
      "Cross-Browser Testing",
      "UI Development",
      "Team Collaboration",
    ],
    icon: FaCode,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 13,
    title: "Graphic Designer",
    location: "Mumbai",
    type: "Full-time",
    experience: "Fresher – 1 Year",
    description: `
### Job Description

Role: Graphic Designer  
Experience: Fresher – 1 Year  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Collaborate with teams/clients to strategize on web pages, presentations, signage, newsletters, and marketing collateral.
- Translate strategic direction into high-quality designs aligned with brand identity.
- Develop concepts and execute designs using software or hand-drawn methods.
- Manage the design and uploading process for project materials.
- Stay updated with design trends and market knowledge.

---

### Qualifications

- Bachelor’s degree in Fine Arts, Multimedia Arts, or related field OR specialization course in Graphic Designing.
- Strong portfolio showcasing graphic design, video editing, web design, and presentation skills.
- Proficiency in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects).
- Familiarity with web design tools: Sketch, Figma, Adobe XD.
- Strong sense of typography, layout, and color theory.
- Excellent communication, time management, and teamwork skills.
- Attention to detail and commitment to high-quality work.
    `,
    skills: [
      "Graphic Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Web Design",
      "Figma",
      "Sketch",
      "Typography",
      "Layout",
    ],
    icon: FaCode,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 14,
    title: "Cypress Automation Tester",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "1-3 Years",
    description: `
### Job Description

Role: Cypress Automation Tester  
Experience: 1-3 Years  
Location: Mumbai (Mira Road)  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Develop, execute, and maintain automated test scripts using Cypress.
- Collaborate with developers, QA engineers, and product managers.
- Identify, document, and track software defects and inconsistencies.
- Perform regression testing when bugs are resolved.
- Analyze test results and debug issues.
- Participate in test planning and creation of comprehensive test plans and cases.
- Continuously improve the automated testing framework.
- Document and report on test outcomes.
- Stay current with industry trends and best practices.

---

### Preferred Skills

- 1 to 3 years of experience in automated testing for web apps.
- Hands-on experience with Cypress.
- Proficiency in JavaScript/TypeScript, HTML, CSS.
- Experience with Git and CI/CD tools (Jenkins, GitLab CI/CD).
- Familiarity with Selenium, WebDriverIO, BDD frameworks (Cucumber), Gherkin syntax.
- Knowledge of API testing tools (Postman, RestAssured).
- Understanding of containerization (Docker, Kubernetes) and Agile methodologies.
- Strong analytical and problem-solving skills.
- Effective communication skills.
- Bachelor’s degree in Computer Science, IT, or related field.
    `,
    skills: [
      "Cypress",
      "Automation Testing",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Git",
      "CI/CD",
      "Selenium",
      "WebDriverIO",
      "BDD",
      "Cucumber",
      "API Testing",
      "Docker",
      "Kubernetes",
    ],
    icon: FaCode,
    color: "from-green-400 to-green-600",
    salary: "Competitive",
  },
  {
    id: 15,
    title: "Business Development Manager",
    location: "Mumbai (Mira Road)",
    type: "Full-time",
    experience: "5 to 10 years",
    description: `
### Job Description

Role: Business Development Manager  
Experience: 5 to 10 years  
Location: Mumbai (Mira Road)  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- New Client Acquisition: Identify and develop new business opportunities through proactive prospecting, lead generation, and strategic networking. Build and maintain a robust sales pipeline to ensure consistent revenue growth.
- Client Relationship Management: Establish and cultivate long-term relationships with new and existing clients. Understand their unique needs and provide tailored solutions.
- Revenue Growth: Set and achieve revenue targets and contribute to overall company growth.
- Market Expansion: Explore domestic and international market opportunities and execute strategies for expansion.
- Business Development: Develop strategic plans to drive company growth and identify potential partnerships.
- Client Retention: Maintain strong relationships with existing clients and identify upsell opportunities.
- Reporting and Analysis: Provide insights on sales activities, market trends, and client feedback.

---

### Qualifications

- Proven experience in business development or sales, minimum 5 years in B2B software/tech.
- Successful track record acquiring clients and achieving sales targets.
- Strong communication, negotiation, and analytical skills.
- Proficiency in CRM systems and sales tools.
- Bachelor's or Master's degree in Business Administration, Marketing, or related field.
    `,
    skills: [
      "Business Development",
      "Client Acquisition",
      "Sales Strategy",
      "Revenue Growth",
      "CRM",
      "Market Expansion",
      "Client Retention",
      "Reporting & Analysis",
    ],
    icon: FaCode,
    color: "from-blue-500 to-blue-700",
  },

  {
    id: 16,
    title: "Digital Marketing Executive",
    location: "Mumbai",
    type: "Full-time",
    experience: "1 to 3 years",
    description: `
### Job Description

Role: Digital Marketing Executive  
Experience: 1 to 3 years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Develop, implement, and manage campaigns across social media, email, SEO, and display advertising.
- Monitor and analyze campaign performance and optimize accordingly.
- Manage organic and paid social media campaigns.
- Conduct keyword research and manage Google Ads campaigns.
- Collaborate with content team to produce engaging content.
- Stay updated on digital marketing trends and best practices.

---

### Qualifications

- 1-3 years experience in digital marketing with measurable results.
- Strong understanding of SEO, SEM, email, and social media marketing.
- Experience with tools like Google Analytics, Facebook Ads Manager, MailChimp.
- Excellent analytical, written, and verbal communication skills.
- Bachelor’s degree in Marketing, Communications, or related field.
    `,
    skills: [
      "SEO",
      "SEM",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Google Analytics",
      "Facebook Ads",
      "Campaign Optimization",
    ],
    icon: FaCode,
    color: "from-green-500 to-green-700",
    salary: "Competitive",
  },

  {
    id: 17,
    title: "Social Media Manager",
    location: "Mumbai",
    type: "Full-time",
    experience: "3 to 5 years",
    description: `
### Job Description

Role: Social Media Manager  
Experience: 3 to 5 years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Develop and execute social media strategy aligned with marketing goals.
- Create, curate, and manage content across platforms (Instagram, Facebook, Twitter, LinkedIn).
- Grow followers and engagement; monitor trends and optimize content.
- Provide analytics reports and performance recommendations.
- Collaborate with teams to identify target personas and product highlights.
- Identify opportunities for campaigns, partnerships, and influencer marketing.

---

### Qualifications

- 3+ years managing business-focused social media accounts.
- Strong communication, creative flair, and analytical skills.
- Familiarity with social media analytics and reporting.
- Bachelor’s degree in Marketing, Communications, Business, or related field.
    `,
    skills: [
      "Social Media Strategy",
      "Content Creation",
      "Engagement Growth",
      "Analytics",
      "Influencer Marketing",
      "Campaign Management",
    ],
    icon: FaCode,
    color: "from-pink-500 to-pink-700",
  },

  {
    id: 18,
    title: "QA Test Lead",
    location: "Mumbai",
    type: "Full-time",
    experience: "5 to 7 years",
    description: `
### Job Description

Role: QA Test Lead  
Experience: 5 to 7 years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Develop and implement test plans, strategies, and processes.
- Lead and mentor QA testers.
- Oversee creation and execution of test cases.
- Manage defect identification, logging, and resolution.
- Generate reports and communicate testing progress.
- Continuously improve testing processes.

---

### Qualifications

- Proven experience as QA Test Lead or similar role.
- Strong knowledge of software testing methodologies and tools.
- Leadership, communication, and analytical skills.
- Experience with test management tools.
- Bachelor’s degree in Computer Science or related field.
    `,
    skills: [
      "Test Planning",
      "Team Leadership",
      "Defect Management",
      "QA Strategy",
      "Test Execution",
      "Reporting",
    ],
    icon: FaCode,
    color: "from-purple-500 to-purple-700",
  },

  {
    id: 19,
    title: "Product Manager",
    location: "Mumbai",
    type: "Full-time",
    experience: "3 to 5 years",
    description: `
### Job Description

Role: Product Manager  
Experience: 3 to 5 years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Define and communicate product strategy aligned with company goals.
- Conduct market research and competitive analysis.
- Plan product roadmap and prioritize features.
- Collaborate with development, design, marketing, and sales teams.
- Lead product development from ideation to launch.
- Monitor performance metrics and recommend improvements.

---

### Qualifications

- Experience as Product Manager in IT industry.
- Strong understanding of software development processes.
- Strategic thinking and problem-solving skills.
- Effective communication and project management skills.
- Bachelor’s degree in Business, CS, Engineering; MBA is a plus.
    `,
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "Market Research",
      "Cross-Functional Collaboration",
      "Product Launch",
      "KPI Analysis",
    ],
    icon: FaCode,
    color: "from-orange-500 to-orange-700",
  },

  {
    id: 20,
    title: "Tele Sales Executive",
    location: "Mumbai",
    type: "Full-time",
    experience: "3 to 5 years",
    description: `
### Job Description

Role: Tele Sales Executive  
Experience: 3 to 5 years  
Location: Mumbai  
Work Mode: On Site  
Work Type: Full Time  

---

### Key Responsibilities

- Client outreach and building sales pipeline.
- Present solutions to clients via virtual presentations.
- Build and maintain strong client relationships.
- Meet and exceed monthly and quarterly sales targets.
- Conduct market research and identify new opportunities.

---

### Qualifications

- Proven experience in tele sales, preferably in IT/software services.
- Strong communication, negotiation, and presentation skills.
- Familiarity with software testing concepts is advantageous.
- Bachelor’s degree in Business, IT, or related field.
    `,
    skills: [
      "Client Outreach",
      "Tele Sales",
      "Sales Target Achievement",
      "Relationship Building",
      "Market Research",
      "Presentation Skills",
    ],
    icon: FaCode,
    color: "from-teal-500 to-teal-700",
  },
];
