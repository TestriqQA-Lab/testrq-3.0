import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    usabilityTestingServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import UsabilityTestingHeroSection from "@/components/sections/UsabilityTestingHeroSection";
import UsabilityTestingCrucialSection from "@/components/sections/UsabilityTestingCrucialSection";
import UsabilityTestingAdvantage from "@/components/sections/UsabilityTestingAdvantage";
import UsabilityTestingServicesGrid from "@/components/sections/UsabilityTestingServicesGrid";
import UsabilityTestingMethodology from "@/components/sections/UsabilityTestingMethodology";
import UsabilityTestingFAQs from "@/components/sections/UsabilityTestingFAQs";
import UsabilityTestingCTASection from "@/components/sections/UsabilityTestingCTASection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/usability-testing-services",
        title: "Usability Testing Services | UX Audit & User Research | Testriq",
        description:
            "Drive engagement with Testriq's usability testing services. UX audits, mobile and web user research, and ISTQB-certified QA for evidence-driven product teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/usability-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Usability Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "usability testing services",
            "ux audit services",
            "user research services",
            "mobile app usability testing",
            "website usability testing",
            "ecommerce usability testing",
            "ai-driven ux audit",
            "istqb certified ux testing",
            "remote usability testing",
        ],
    });
}

export default function UsabilityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Mixed-separator double-brand
    // fixed via title.absolute (previous title ended with " - Testriq"
    // dash). Title dropped "Company" keyword-stuffing tail. The page
    // previously had THREE different description strings (page ~217
    // chars, og ~131, twitter ~107); now all mirror the page-level
    // description rewritten to 159 chars. Keywords lowercased. 6
    // dynamic() imports converted to direct ES imports. Breadcrumb
    // already migrated in PR-3 — unchanged.
    return (
        <div className="scroll-smooth">
            <StructuredData data={usabilityTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/usability-testing-services",
                    "Usability Testing"
                )}
            />
            <MainLayout>
                <UsabilityTestingHeroSection />
                <UsabilityTestingCrucialSection />
                <UsabilityTestingAdvantage />
                <UsabilityTestingServicesGrid />
                <UsabilityTestingMethodology />
                <UsabilityTestingFAQs />
                <UsabilityTestingCTASection />
            </MainLayout>
        </div>
    );
}
