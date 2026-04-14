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
        canonical: "https://www.testriq.com/pricing4",
    },
    openGraph: {
        title: "QA Testing Packages & Pricing | Testriq",
        description: "No fluff, just results. Transparent pricing for world-class software testing services.",
        url: "https://www.testriq.com/pricing4",
    }
};

const Pricing4Hero = dynamic(
    () => import("@/components/sections/Pricing4Hero"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const Pricing4Cards = dynamic(
    () => import("@/components/sections/Pricing4Cards"),
    { ssr: true, loading: () => <ContentLoader /> }
);

export default function Pricing4Page() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Pricing", url: "https://www.testriq.com/pricing4" },
    ];

    return (
        <div className="bg-slate-950 min-h-screen">
            <StructuredData data={pricingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <Pricing4Hero />
                <Pricing4Cards />
            </MainLayout>
        </div>
    );
}
