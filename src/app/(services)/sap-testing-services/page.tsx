import React from "react";
import dynamic from "next/dynamic";
import SapTestingHeroSection from "@/components/sections/SapTestingHeroSection";
import SapComprehensiveSlider from "@/components/sections/SapComprehensiveSlider";
import SapProvenTestingProcess from "@/components/sections/SapProvenTestingProcess";
import SapWhyChooseTestriq from "@/components/sections/SapWhyChooseTestriq";
import SapToolsFramework from "@/components/sections/SapToolsFramework";
import SapCaseStudies from "@/components/sections/SapCaseStudies";
import SapFAQs from "@/components/sections/SapFAQs";
import SapAnyQuestions from "@/components/sections/SapAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
    createBreadcrumbSchema,
    sapTestingSchema,
} from "@/components/seo/StructuredData";

const SapTestingChallenges = dynamic(
    () => import("@/components/sections/SapTestingChallenges"),
    { ssr: true }
);

export const metadata: Metadata = {
    title: "SAP Testing Services: S/4HANA Migrations & Upgrades",

    description:
        "Enterprise-grade SAP QA for S/4HANA transitions. End-to-end testing services for complex implementations, ensuring global compliance and zero-defect deployments.",
    keywords: [
        "SAP Testing Services",
        "SAP Quality Assurance",
        "Independent SAP Testing",
        "SAP Automation Testing",
        "SAP S/4HANA Testing",
        "SAP Upgrade Testing",
        "SAP Regression Testing",
        "Tricentis Tosca",
        "Worksoft Certify",
        "SAP Fiori testing",
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
        canonical: "https://www.testriq.com/sap-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/sap-testing-services",
        siteName: "Testriq - SAP Testing Services",
        title:
            "SAP Testing Services: Accelerated QA for Seamless S/4HANA Migrations & Upgrades",
        description:
            "Accelerate your SAP deployment and minimize risk with Testriq's ISTQB-certified SAP testing experts, leveraging intelligent automation for seamless S/4HANA migrations and upgrade stability.",
        images: [
            {
                url: "/OG/SAP-Testing-Service-Og.webp",
                width: 1200,
                height: 630,
                alt: "SAP Testing Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title:
            "SAP Testing Services: Accelerated QA for Seamless S/4HANA Migrations & Upgrades",
        description:
            "Accelerate your SAP deployment and minimize risk with Testriq's ISTQB-certified SAP testing experts, leveraging intelligent automation for seamless S/4HANA migrations and upgrade stability.",
        images: ["/OG/SAP-Testing-Service-Twitter.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
        yandex: "ff703971283d110e",
        yahoo: "0A67349B8CD11BF71173B38572028507",
    },
};

export default function SapTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/sap-testing-services" },
        { name: "SAP Testing", url: "https://www.testriq.com/sap-testing-services" },
    ];
    return (
        <main className="min-h-screen bg-white">
            <StructuredData data={sapTestingSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <SapTestingHeroSection />
            <SapTestingChallenges />
            <SapComprehensiveSlider />
            <SapProvenTestingProcess />
            <SapWhyChooseTestriq />
            <SapToolsFramework />
            <SapCaseStudies />
            <SapFAQs />
            <SapAnyQuestions />
        </main>
    );
}
