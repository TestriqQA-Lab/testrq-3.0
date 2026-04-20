import {
    Cpu,
    Smartphone,
    Globe,
    Shield,
    Zap,
    TestTube,
    Bug,
    Code,
    Database,
    Cloud,
    Lock,
    Gauge,
    MonitorSmartphone,
    Settings,
    FileCode,
    Network,
    Bot,
    Layers,
    CheckCircle,
    ClipboardCheck,
    Search,
    Eye,
    Target,
    Workflow,
    Boxes,
    Rocket,
    Terminal,
    Binary,
    Cog,
    type LucideIcon,
} from "lucide-react";

/**
 * Maps category names/slugs to relevant Lucide icons.
 * Returns a matching icon based on keywords found in the category name.
 */
export function getCategoryIcon(categoryName: string): LucideIcon {
    const name = categoryName.toLowerCase();

    // Automation / Test Automation
    if (name.includes("automation") || name.includes("automated")) {
        return Bot;
    }

    // Mobile Testing
    if (name.includes("mobile") || name.includes("app testing") || name.includes("ios") || name.includes("android")) {
        return Smartphone;
    }

    // Web Testing
    if (name.includes("web") || name.includes("browser") || name.includes("frontend")) {
        return Globe;
    }

    // API Testing
    if (name.includes("api") || name.includes("rest") || name.includes("graphql") || name.includes("backend")) {
        return Network;
    }

    // Security Testing
    if (name.includes("security") || name.includes("penetration") || name.includes("vulnerability")) {
        return Shield;
    }

    // Performance Testing
    if (name.includes("performance") || name.includes("load") || name.includes("stress")) {
        return Gauge;
    }

    // Manual Testing
    if (name.includes("manual") || name.includes("exploratory")) {
        return Search;
    }

    // Regression Testing
    if (name.includes("regression")) {
        return Workflow;
    }

    // Database / ETL Testing
    if (name.includes("database") || name.includes("etl") || name.includes("data")) {
        return Database;
    }

    // Cloud Testing
    if (name.includes("cloud") || name.includes("aws") || name.includes("azure")) {
        return Cloud;
    }

    // DevOps / CI/CD
    if (name.includes("devops") || name.includes("ci/cd") || name.includes("pipeline")) {
        return Rocket;
    }

    // AI / ML Testing
    if (name.includes("ai") || name.includes("machine learning") || name.includes("ml")) {
        return Cpu;
    }

    // IoT Testing
    if (name.includes("iot") || name.includes("smart device") || name.includes("embedded")) {
        return MonitorSmartphone;
    }

    // Integration Testing
    if (name.includes("integration") || name.includes("system")) {
        return Boxes;
    }

    // Unit Testing
    if (name.includes("unit") || name.includes("component")) {
        return Binary;
    }

    // Acceptance Testing / UAT
    if (name.includes("acceptance") || name.includes("uat") || name.includes("user")) {
        return CheckCircle;
    }

    // Functional Testing
    if (name.includes("functional")) {
        return ClipboardCheck;
    }

    // Compatibility Testing
    if (name.includes("compatibility") || name.includes("cross-browser") || name.includes("cross-platform")) {
        return Layers;
    }

    // Usability / UX Testing
    if (name.includes("usability") || name.includes("ux") || name.includes("accessibility")) {
        return Eye;
    }

    // Code Quality / Static Analysis
    if (name.includes("code") || name.includes("static") || name.includes("quality")) {
        return FileCode;
    }

    // Selenium / Cypress / Playwright
    if (name.includes("selenium") || name.includes("cypress") || name.includes("playwright")) {
        return Terminal;
    }

    // Agile / Scrum Testing
    if (name.includes("agile") || name.includes("scrum") || name.includes("sprint")) {
        return Target;
    }

    // Configuration / Settings
    if (name.includes("configuration") || name.includes("config")) {
        return Settings;
    }

    // Bug / Defect Management
    if (name.includes("bug") || name.includes("defect") || name.includes("issue")) {
        return Bug;
    }

    // Test Cases / Test Management
    if (name.includes("test case") || name.includes("test management") || name.includes("test plan")) {
        return ClipboardCheck;
    }

    // Coding / Development
    if (name.includes("coding") || name.includes("development") || name.includes("programming")) {
        return Code;
    }

    // Generic Testing fallback
    if (name.includes("test") || name.includes("qa") || name.includes("quality")) {
        return TestTube;
    }

    // Default fallback
    return Cog;
}

/**
 * Icon mapping for specific category slugs (when exact match is needed)
 */
export const categoryIconMap: Record<string, LucideIcon> = {
    "automation-testing": Bot,
    "manual-testing": Search,
    "mobile-testing": Smartphone,
    "web-testing": Globe,
    "api-testing": Network,
    "security-testing": Shield,
    "performance-testing": Gauge,
    "regression-testing": Workflow,
    "database-testing": Database,
    "cloud-testing": Cloud,
    "ai-testing": Cpu,
    "iot-testing": MonitorSmartphone,
    "integration-testing": Boxes,
    "unit-testing": Binary,
    "functional-testing": ClipboardCheck,
    "usability-testing": Eye,
    "devops": Rocket,
    "selenium": Terminal,
    "cypress": Terminal,
    "playwright": Terminal,
    "agile": Target,
    "test-automation": Bot,
    "exploratory-testing": Search,
    "compatibility-testing": Layers,
    "acceptance-testing": CheckCircle,
    "localization": Globe,
    "accessibility": Eye,
};

/**
 * Get icon by slug (exact match) or fall back to name-based matching
 */
export function getCategoryIconBySlug(slug: string, name: string): LucideIcon {
    if (categoryIconMap[slug]) {
        return categoryIconMap[slug];
    }
    return getCategoryIcon(name);
}
