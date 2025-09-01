// openings.ts
import { IconType } from "react-icons";
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaMobile,
} from "react-icons/fa";

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  fullDescription: string;
  skills: string[];
  badges: string[];
  icon: IconType;
  color: string;
}

export const positions: JobPosition[] = [
  {
    id: 1,
    title: "Automation Test Engineer [Python Selenium]",
    department: "automation",
    location: "Mira Road, Mumbai",
    type: "Full Time (Work from Office)",
    experience: "3–6 Years",
    description:
      "Own the design and maintenance of automated test suites using Python + Selenium to ensure high-quality, reliable releases.",
    fullDescription: `
**Role** – Automation Test Engineer [Python Selenium]  
**Experience** – 3–6 Years  
**Location** – Mira Road, Mumbai  
**Work Mode** – Work from office  
**Work Type** – Full Time  
**Shift** – Day Shift (9am – 6pm, Mon – Sat)


---


### Job Description
The ideal candidate will have a strong background in test automation with Python and Selenium. You will be responsible for developing and maintaining automated test scripts, integrating them into CI/CD pipelines, and ensuring product quality through rigorous testing and reporting.


---


### Key Responsibilities
- Design, develop, and maintain automated test scripts using **Python** and **Selenium WebDriver**.  
- Execute automated test suites; analyze results and report defects with clear reproduction steps and impact.  
- Identify, record, prioritize, and track software defects using tools like **Jira**.  
- Implement and optimize **CI** pipelines (e.g., Jenkins/GitHub Actions/GitLab CI) for automated test execution and reporting.  
- Collaborate with developers, QA, and product to define test strategies and acceptance criteria.  
- Contribute to test data creation, environment readiness, and stability of automation.  
- Track and improve automation coverage; refactor flaky tests and reduce execution time.


---


### Skills and Qualifications
- Proficient in **Python**; hands-on with **pytest** or **unittest**.  
- Solid experience with **Selenium WebDriver** for web application testing.  
- Working knowledge of **Git** and collaborative workflows (PRs, code reviews).  
- Experience with **Jenkins** or similar CI/CD tools.  
- **API testing** experience (Postman, REST Assured) and basic contract testing concepts.  
- Ability to write **SQL** queries for data validation.  
- Familiarity with Agile/Scrum and **TDD/BDD** concepts (Robot Framework or Cucumber a plus).


---


### Optional / Nice to Have
- Performance testing exposure (**JMeter**, **LoadRunner**).  
- **Docker** for isolated test environments.  
- Cloud platforms (**AWS**, **Azure**, or **GCP**) and cloud test execution services (e.g., BrowserStack/Sauce Labs).  
    `,
    skills: [
      "Python",
      "Selenium WebDriver",
      "Pytest/Unittest",
      "CI/CD (Jenkins/GitHub Actions)",
      "API Testing (Postman/REST Assured)",
      "SQL",
      "Git",
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
    experience: "2–4 Years",
    description:
      "Plan and execute manual testing for web and mobile apps, create detailed test cases, and drive quality with clear defect reporting.",
    fullDescription: `
**Role** – QA Test Engineer  
**Experience** – 2–4 Years  
**Location** – New York, NY (Hybrid/On-site as required)  
**Work Type** – Full Time

---

### Job Description
We are looking for a detail-oriented QA Test Engineer to perform comprehensive manual testing across web and mobile applications. You will collaborate with product and engineering to validate features, ensure usability, and maintain high-quality releases.

---

### Key Responsibilities
- Analyze requirements/user stories; derive **test scenarios** and **detailed test cases**.  
- Perform **functional, regression, integration, UI/UX, compatibility**, and **UAT** support.  
- Log, track, and verify defects using **Jira** (or similar), including root cause context and severity.  
- Maintain test documentation: **test plans**, **test cases**, **traceability**, and **execution reports**.  
- Partner with developers and designers to clarify acceptance criteria and usability.  
- Support release validation, smoke/sanity testing, and production checks.  
- Identify gaps and propose process improvements; assist in transitioning repeatable flows to automation.

---

### Skills and Qualifications
- Strong grasp of **SDLC/STLC**, test types, and risk-based testing.  
- Hands-on with test case management and bug tracking tools (Jira, TestRail/Zephyr).  
- Ability to build clear, reproducible test cases and articulate **expected vs. actual** outcomes.  
- Exposure to **API testing** basics and tools like **Postman**.  
- Familiarity with **Agile/Scrum** ceremonies and workflows.  
- Excellent communication, documentation, and stakeholder collaboration skills.

---

### Preferred / Nice to Have
- Basic understanding of automation concepts (Selenium/Cypress/Playwright).  
- SQL knowledge for data validation.  
- Mobile testing exposure (Android/iOS, device labs).  
- ISTQB Foundation (or similar) certification.  
    `,
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Bug Tracking (Jira)",
      "Agile/Scrum",
      "API Testing (Postman)",
      "Test Documentation",
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
    experience: "4+ Years",
    description:
      "Own performance, load, and stress testing using JMeter/LoadRunner; analyze bottlenecks and drive optimization for scalable systems.",
    fullDescription: `
**Role** – Performance Testing Specialist  
**Experience** – 4+ Years  
**Location** – Remote  
**Work Type** – Full Time

---

### Job Description
You will design and execute performance testing strategies to validate scalability, stability, and responsiveness of complex systems. You’ll collaborate with engineers and architects to identify bottlenecks across app tiers and recommend optimizations.

---

### Key Responsibilities
- Define **performance, load, stress, spike, endurance** test plans aligned to SLAs/SLOs.  
- Script and execute tests using **JMeter**, **LoadRunner**, or **Gatling**; parameterize data and correlate dynamic values.  
- Monitor KPIs: **response time, throughput, error rates, CPU/memory/GC, DB latency**, and network metrics.  
- Use APM tools (**New Relic, Dynatrace, AppDynamics**) to trace transactions and isolate hotspots.  
- Analyze results, create **performance baselines**, and provide actionable tuning recommendations.  
- Automate performance suites in **CI/CD** and support performance testing in pre-prod/staging.  
- Produce concise **performance reports** with trends, capacity projections, and risk assessment.

---

### Skills and Qualifications
- Hands-on with **JMeter/LoadRunner/Gatling** and test design best practices.  
- Strong analysis skills across **application, database, and infrastructure** layers.  
- Familiarity with **APM** and observability stacks (Prometheus/Grafana/ELK).  
- Understanding of **microservices**, **REST/GraphQL**, caching, and queuing.  
- Experience with **cloud** execution and distributed load generation.

---

### Preferred / Nice to Have
- Scripting skills (**Python**, **Groovy**, or **Shell**) for test utilities.  
- Containerized environments (**Docker**, **Kubernetes**).  
- Knowledge of CDNs, WAFs, and network optimization techniques.  
    `,
    skills: [
      "JMeter/LoadRunner",
      "Performance Analysis",
      "APM (New Relic/Dynatrace)",
      "CI/CD Integration",
      "Microservices",
      "Cloud Load Testing",
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
    experience: "3+ Years",
    description:
      "Test iOS/Android apps across devices and OS versions; ensure functional quality, performance, and great user experience.",
    fullDescription: `
**Role** – Mobile QA Engineer  
**Experience** – 3+ Years  
**Location** – London, UK  
**Work Type** – Full Time

---

### Job Description
We are seeking a Mobile QA Engineer to specialize in testing native and hybrid mobile apps across **iOS** and **Android**. You will validate functionality, UX flows, compatibility, and performance on real devices and emulators, ensuring a delightful user experience.

---

### Key Responsibilities
- Plan and execute **functional, regression, usability, compatibility**, and **smoke** tests for mobile apps.  
- Validate across **devices, screen sizes, OS versions**, and varying network conditions.  
- Create/maintain test cases and scenarios mapped to user stories and acceptance criteria.  
- Log and track defects with clear steps, logs, and screenshots/video evidence.  
- Coordinate with designers and developers to refine UX and accessibility.  
- Leverage device farms (e.g., **BrowserStack**, **Firebase Test Lab**) for broader coverage.  
- Contribute to mobile test automation using **Appium**, **XCUITest**, or **Espresso** (nice to have).

---

### Skills and Qualifications
- Strong understanding of **iOS** and **Android** ecosystems, store guidelines, and build processes.  
- Hands-on with **Appium** (or XCUITest/Espresso) and mobile debugging tools (ADB, Xcode).  
- Familiarity with **Crashlytics**, logs, and performance profiling for mobile.  
- Experience with bug tracking (Jira) and test management tools.  
- Solid understanding of **Agile/Scrum** workflows and CI basics.

---

### Preferred / Nice to Have
- API testing and mock setup for mobile backends.  
- Experience with **push notifications, deep links, in-app purchases**, and localization testing.  
- Basic security and privacy testing concepts for mobile apps.  
    `,
    skills: [
      "iOS Testing",
      "Android Testing",
      "Appium/XCUITest/Espresso",
      "Device & OS Matrix",
      "Usability & Accessibility",
      "BrowserStack/Firebase Test Lab",
    ],
    badges: ["Urgent"],
    icon: FaMobile,
    color: "from-pink-500 to-pink-700",
  },
];
