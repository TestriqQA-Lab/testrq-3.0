import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    pricingServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
    title: "QA Testing Packages & Pricing | Transparent Software Testing Costs",
    description:
        "Transparent, predictable pricing for world-class software testing services. Choose from monthly Managed QA retainers or project-based audits. Scalable solutions for startups and global enterprises.",
    keywords: [
        "software testing pricing",
        "QA outsourcing cost",
        "managed qa services packages",
        "software testing retainer",
        "QA project pricing",
        "test automation pricing",
        "VAPT pricing",
        "API testing cost",
    ],
    alternates: {
        canonical: "https://www.testriq.com/pricing",
    },
    openGraph: {
        title: "QA Testing Packages & Pricing | Testriq",
        description: "No fluff, just results. Transparent pricing for world-class software testing services.",
        url: "https://www.testriq.com/pricing",
    }
};

const PricingHeroSection = dynamic(
    () => import("@/components/sections/PricingHeroSection"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const PricingPacksTable = dynamic(
    () => import("@/components/sections/PricingPacksTable"),
    { ssr: true, loading: () => <ContentLoader /> }
);

const PricingAddOns = dynamic(
    () => import("@/components/sections/PricingAddOns"),
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
                <PricingPacksTable />
                <PricingAddOns />
                <PricingFAQ />
            </MainLayout>
        </div>
    );
}
