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

const NewPricingHero = dynamic(
    () => import("@/components/sections/NewPricingHero"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const NewPricingCards = dynamic(
    () => import("@/components/sections/NewPricingCards"),
    { ssr: true, loading: () => <ContentLoader /> }
);

export default function PricingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Pricing", url: "https://www.testriq.com/pricing" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <StructuredData data={pricingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <NewPricingHero />
                <NewPricingCards />
            </MainLayout>
        </div>
    );
}
