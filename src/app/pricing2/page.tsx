import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    pricingServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
    title: "Testing Packs & Service Packages | Web, Mobile & Desktop QA",
    description:
        "Choose your dedicated testing pack: Web App Specialist, Mobile App Specialist, or Desktop App Specialist. No hidden pricing. No lock-ins. Risk-free trial periods.",
    keywords: [
        "web app testing services",
        "mobile app testing",
        "desktop app testing",
        "QA testing packages",
        "software testing pricing",
        "dedicated QA team",
        "API testing",
        "VAPT security testing",
    ],
    alternates: {
        canonical: "https://www.testriq.com/pricing2",
    },
    openGraph: {
        title: "Testing Packs | Web, Mobile & Desktop QA Specialists",
        description: "The No-Fluff QA Partner for Teams that Move Fast. Dedicated testing packs with transparent pricing.",
        url: "https://www.testriq.com/pricing2",
    }
};

const Pricing2HeroSection = dynamic(
    () => import("@/components/sections/Pricing2HeroSection"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const Pricing2PacksTable = dynamic(
    () => import("@/components/sections/Pricing2PacksTable"),
    { ssr: true, loading: () => <ContentLoader /> }
);

const Pricing2AddOns = dynamic(
    () => import("@/components/sections/Pricing2AddOns"),
    { ssr: true, loading: () => <ContentLoader /> }
);

const Pricing2FAQ = dynamic(
    () => import("@/components/sections/Pricing2FAQ"),
    { ssr: true, loading: () => <ContentLoader /> }
);

export default function Pricing2Page() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Service Packages", url: "https://www.testriq.com/pricing2" },
    ];

    return (
        <div>
            <StructuredData data={pricingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <Pricing2HeroSection />
                <Pricing2PacksTable />
                <Pricing2AddOns />
                <Pricing2FAQ />
            </MainLayout>
        </div>
    );
}
