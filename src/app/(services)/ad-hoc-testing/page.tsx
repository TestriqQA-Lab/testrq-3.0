import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    adHocTestingServiceSchema,
    createBreadcrumbSchema,
    organizationSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AdHocTestingHeroSection from "@/components/sections/AdHocTestingHeroSection";
import AdHocTestingWhatIs from "@/components/sections/AdHocTestingWhatIs";
import AdHocTestingScenarios from "@/components/sections/AdHocTestingScenarios";
import AdHocTestingMethodologies from "@/components/sections/AdHocTestingMethodologies";
import AdHocTestingApplications from "@/components/sections/AdHocTestingApplications";
import AdHocTestingProsCons from "@/components/sections/AdHocTestingProsCons";
import AdHocTestingBestPractices from "@/components/sections/AdHocTestingBestPractices";
import AdHocTestingStrategy from "@/components/sections/AdHocTestingStrategy";
import AdHocTestingWhyTestriq from "@/components/sections/AdHocTestingWhyTestriq";
import AdHocTestingFAQs from "@/components/sections/AdHocTestingFAQs";
import AdHocTestingReadyToStart from "@/components/sections/AdHocTestingReadyToStart";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/ad-hoc-testing",
        title: "Ad-Hoc Testing Services | On-Demand QA & Error Guessing | Testriq",
        description:
            "Rapid, on-demand QA with Testriq's ad-hoc testing. Error guessing, monkey testing, and exploratory testing for hotfix validation and fast CI/CD feedback.",
        ogImage: {
            url: "https://www.testriq.com/OG/Ad-Hoc_Testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Ad-Hoc Testing Services",
            type: "image/webp",
        },
        keywords: [
            "ad-hoc testing services",
            "on-demand qa testing",
            "error guessing testing",
            "monkey testing services",
            "exploratory testing services",
            "hotfix validation",
            "rapid qa feedback",
            "agile ad-hoc qa",
            "buddy testing services",
            "unplanned scenario testing",
        ],
    });
}

export default function AdHocTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/ad-hoc-testing, a /services/ prefix
    // URL that does not exist as a route). Pattern D fixed — breadcrumb reduced from 3 items with
    // /services/ prefix URLs to 2 canonical items. PR-3 will fix at breadcrumb component level
    // cascading to 40 pages.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Ad-Hoc Testing",
            url: "https://www.testriq.com/ad-hoc-testing",
        },
    ];

    return (
        <div>
            <StructuredData data={adHocTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <AdHocTestingHeroSection />
                <AdHocTestingWhatIs />
                <AdHocTestingScenarios />
                <AdHocTestingMethodologies />
                <AdHocTestingApplications />
                <AdHocTestingProsCons />
                <AdHocTestingBestPractices />
                <AdHocTestingStrategy />
                <AdHocTestingWhyTestriq />
                <AdHocTestingFAQs />
                <AdHocTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
