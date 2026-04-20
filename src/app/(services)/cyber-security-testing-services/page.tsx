import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    cyberSecurityServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600; // ISR: Revalidate every hour

export const metadata: Metadata = {
    title: "Cyber Security Testing Services & Penetration Testing | Testriq",
    description:
        "Fortify your digital defenses with Testriq's expert Cyber Security Testing Services. We offer comprehensive penetration testing, vulnerability assessments, and security audits to protect your business from 2026 cyber threats. ISTQB & CEH certified.",
    keywords: [
        "Cyber Security Testing Services",
        "Penetration Testing Services",
        "Vulnerability Assessment Services",
        "Security Audit Services",
        "Application Security Testing",
        "Infrastructure Security Audit",
        "Ethical Hacking Services",
        "ISTQB Certified Security Testing",
        "VAPT Services",
        "Compliance Audits GDPR HIPAA SOC2",
    ],
    authors: [{ name: "Testriq QA Lab" }],
    creator: "Testriq QA Lab LLP",
    publisher: "Testriq QA Lab LLP",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/cyber-security-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/cyber-security-testing-services",
        siteName: "Testriq - Global Security QA",
        title: "Cyber Security Testing Services & Penetration Testing | Testriq",
        description:
            "Fortify your digital defenses with Testriq's expert Cyber Security Testing Services. Comprehensive VAPT, security audits, and ethical hacking.",
        images: [
            {
                url: "/OG/Cyber-Security-Testing-Og.webp",
                width: 1200,
                height: 630,
                alt: "Cyber Security Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Cyber Security Testing Services & Penetration Testing | Testriq",
        description:
            "Global cyber security solutions. Expert VAPT and security audits for enterprise software across the US, UK, EU, and Asia.",
        images: ["/OG/Cyber-Security-Testing-Twitter.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

import CyberSecurityHeroSection from "@/components/sections/CyberSecurityHeroSection";

const SecurityTestingCrucialSection = dynamic(
    () => import("@/components/sections/SecurityTestingCrucialSection"),
    {
        ssr: true,
        loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />
    }
);

const SecurityTestingServicesGrid = dynamic(
    () => import("@/components/sections/SecurityTestingServicesGrid"),
    {
        ssr: true,
        loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />
    }
);

const SecurityTestingMethodology = dynamic(
    () => import("@/components/sections/SecurityTestingMethodology"),
    {
        ssr: true,
        loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />
    }
);

const CyberSecurityROISection = dynamic(
    () => import("@/components/sections/CyberSecurityROISection"),
    {
        ssr: true,
        loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />
    }
);

const CyberSecurityFAQs = dynamic(
    () => import("@/components/sections/CyberSecurityFAQs"),
    {
        ssr: true,
        loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />
    }
);

const CyberSecurityCTASection = dynamic(
    () => import("@/components/sections/CyberSecurityCTASection"),
    {
        ssr: true,
        loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />
    }
);

export default function CyberSecurityTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com" },
        {
            name: "Services",
            url: "https://www.testriq.com/services",
        },
        {
            name: "Cyber Security Testing",
            url: "https://www.testriq.com/cyber-security-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={cyberSecurityServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <CyberSecurityHeroSection />
                <SecurityTestingCrucialSection />
                <SecurityTestingServicesGrid />
                <SecurityTestingMethodology />
                <CyberSecurityROISection />
                <CyberSecurityFAQs />
                <CyberSecurityCTASection />
            </MainLayout>
        </div>
    );
}
