
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    pricingServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
    title: "Service Packages & Pricing | Expert QA Outsourcing",
    description:
        "Transparent pricing for software testing services. Choose from monthly Managed QA retainers or project-based audits. Scalable solutions for startups and enterprises.",
    keywords: [
        "software testing pricing",
        "QA outsourcing cost",
        "managed qa services packages",
        "software testing retainer",
        "QA project pricing",
        "test automation pricing",
    ],
    alternates: {
        canonical: "https://www.testriq.com/pricing",
    },
    openGraph: {
        title: "QA Testing Packages & Pricing | Testriq",
        description: "Flexible, transparent pricing for world-class software testing services.",
        url: "https://www.testriq.com/pricing",
    }
};

const PricingHeroSection = dynamic(
    () => import("@/components/sections/PricingHeroSection"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const PricingPlans = dynamic(
    () => import("@/components/sections/PricingPlans"),
    { ssr: true, loading: () => <ContentLoader /> }
);

const PricingComparison = dynamic(
    () => import("@/components/sections/PricingComparison"),
    { ssr: true, loading: () => <ContentLoader /> }
);

const PricingFAQ = dynamic(
    () => import("@/components/sections/PricingFAQ"),
    { ssr: true, loading: () => <ContentLoader /> }
);

export default function PricingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Pricing", url: "https://www.testriq.com/pricing" },
    ];

    return (
        <div>
            <StructuredData data={pricingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <PricingHeroSection />
                <PricingPlans />
                <PricingComparison />
                <PricingFAQ />
            </MainLayout>
        </div>
    );
}
