const fs = require('fs');

const config = fs.readFileSync('next.config.ts', 'utf8');

const userLinks = [
    "/blog/tag/xss-prevention",
    "/blog/tag/risk-assessment-in-testing",
    "/blog/tag/mobile-app-automation-testing-tools",
    "/blog/tag/jmeter-performance-testing-2024",
    "/blog/tag/responsive-design-testing",
    "/blog/tag/conversion-optimization",
    "/blog/post/using-assistive-technologies-in-accessibility-testing",
    "/blog/tag/mobile-usability-testing",
    "/blog/tag/top-software-testing-tools-2024",
    "/blog/tag/streamlining",
    "/blog/tag/iso-10218-compliance",
    "/blog/post/sap-testing-services",
    "/blog/tag/human-robot-interaction",
    "/blog/tag/qa-performance-testing",
    "/blog/tag/ios-app-automation",
    "/blog/tag/mobile-app-test",
    "/blog/tag/network-resilience",
    "/blog/tag/locust-automation",
    "/software-testing-guide",
    "/blog/tag/secure-payment-testing",
    "/blog/tag/open-source-testing-tools-2024",
    "/blog/tag/best-mobile-app-testing-tools",
    "/blog/tag/regression-automation",
    "/blog/tag/regression-automation-qa",
    "/blog/tag/mobile-testing-challenges",
    "/blog/category/Iot Appliances & App Testing Service",
    "/blog/tag/qa",
    "/blog/tag/secure-payment-testing",
    "/blog/tag/open-source-testing-tools-2024",
    "/blog/tag/best-mobile-app-testing-tools",
    "/blog/tag/regression-automation",
    "/blog/tag/regression-automation-qa",
    "/blog/tag/mobile-testing-challenges",
    "/blog/category/Iot Appliances & App Testing Service",
    "/blog/tag/qa",
    "/blog/tag/software-testing-best-practices",
    "/blog/category/API Testing",
    "/blog/category/Web Development",
    "/blog/tag/software-testing-strategies",
    "/blog/tag/qa-workflows",
    "/blog/post/the-future-of-software-testing-top-trends-for-the-next-decadee",
    "/blog/tag/types-of-software-testing",
    "/Load Time Analysis",
    "/blog/tag/qa-techniques",
    "/blog/tag/qa-continuous-improvement",
    "/blog/tag/repetitive-strain-syndrome",
    "/blog/tag/version-compatibility",
    "/blog/tag/software-qa-process",
    "/blog/tag/test-case-metrics",
    "/blog/tag/qa-process-steps",
    "/blog/category/Robotics Testing",
    "/blog/tag/software-development",
    "/blog/tag/software-development",
    "/blog/category/Regression Testing",
    "/blog/tag/product-launch-qa",
    "/blog/category/Software Testing Tools",
    "/blog/tag/dry-run-testing",
    "/blog/tag/defect-tracking",
    "/blog/category/Mobile Application Testing",
    "/blog/tag/software-testing",
    "/blog/category/Performance Testing Services",
    "/blog/tag/qa-testing",
    "/blog/tag/testing-methodologies",
    "/blog/tag/software-debugging",
    "/blog/tag/test-run-implementation",
    "/blog/tag/software-stability-qa",
    "/blog/tag/testing-tag",
    "/services/software-testing-guide",
    "/services/qa-documentation",
    "/blog/post/version-compatibility-testing-best-practices",
    "/blog/post/5g-mobile-app-testing-strategies-for-smooth-performance-in-2025-2",
    "/integration-testing",
    "/software-testing-services/",
    "/blog/post/network-testing-tools-and-techniques",
    "/blog/post/best-practices-for-mobile-uiux-testing",
    "/blog/post/do-you-think-that-software-testing-is-a-destructive-activityy",
    "/blog/post/top-cross-browser-testing-tools-2025",
    "/blog/tag/bug-discovery-in-qa",
    "/blog/post/best-software-testing-companies-in-mumbai-for-2025-reviews-comparison-2",
    "/quality-assurance-services/",
    "/blog/tag/defect-discovery",
    "/blog/post/ultrasonic-testing-techniques",
    "/blog/tag/defect-reporting",
    "/blog/tag/defect-detection",
    "/blog/tag/enterprise-application-testing",
    "/blog/post/integrating-performance-testing-into-ci-cd-for-devops-success-2",
    "/blog/tag/mobile-learning-optimization",
    "/blog/tag/devops-qa-strategy",
    "/blog/tag/graphql-automation",
    "/blog/tag/cross-browser-testing",
    "/blog/tag/graphql-performance-testing",
    "/blog/post/weld-inspection-testing-methods",
    "/blog/post/magnetic-particle-inspection-techniques",
    "/blog/tag/control-system-testing",
    "/blog/tag/qa-best-practices",
    "/blog/tag/regression-testing",
    "/blog/tag/end-to-end-qa-scenarios",
    "/blog/tag/sdlc",
    "/blog/post/creating-compatibility-matrix-for-software-testing",
    "/blog/post/common-mobile-app-security-flaws-and-how-to-prevent-them",
    "/blog/tag/software-testing-challenges",
    "/regression-testings",
    "/blog/tag/software-testing-company",
    "/blog/tag/qa-technologies",
    "/blog/tag/end-to-end-testing",
    "/case-study/smart-doorbell-case-study",
    "/case-study/indo-wings-case-study",
    "/automated-etl-testing-best-practices",
    "/blog/principles-of-exploratory-testing",
    "/blog/why-do-we-need-exploratory-testing"
];

// Normalize by lowercasing for map comparison
// We will search for pattern in config
let missing = [];

const uniqueLinks = [...new Set(userLinks.map(l => l.trim()))];

uniqueLinks.forEach(link => {
    // Regex: source: * "LINK" * (case insensitive)
    // Escape special chars
    const escaped = link.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern matches source: "url" OR source: "url/" (optional trailing slash)
    // Note: Config might have spaces encoded or not. 
    // If strict match fails, try encoded version.

    const re = new RegExp(`source:\\s*"${escaped}/?"`, 'i');
    const matched = re.test(config);

    if (!matched) {
        // Try searching for the encoded version if link has spaces
        if (link.includes(' ')) {
            const encoded = encodeURI(link);
            const reEnc = new RegExp(`source:\\s*"${encoded}/?"`, 'i');
            if (!reEnc.test(config)) {
                missing.push(link);
            }
        } else {
            missing.push(link);
        }
    }
});

console.log(`checked ${uniqueLinks.length} unique links.`);
if (missing.length > 0) {
    console.log("Missing/Unmatched Links:");
    missing.forEach(m => console.log(m));
} else {
    console.log("All links have a match in next.config.ts");
}
