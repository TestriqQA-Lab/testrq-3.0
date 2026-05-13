import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    functionalServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import FunctionalHeroSection from "@/components/sections/FunctionalHeroSection";
import FunctionalCriticalitySection from "@/components/sections/FunctionalCriticalitySection";
import FunctionalWhySection from "@/components/sections/FunctionalWhySection";
import FunctionalSolutionsSection from "@/components/sections/FunctionalSolutionsSection";
import FunctionalAdvantageSection from "@/components/sections/FunctionalAdvantageSection";
import FunctionalFAQs from "@/components/sections/FunctionalFAQs";
import FunctionalNextStepsSection from "@/components/sections/FunctionalNextStepsSection";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/functional-testing-services",
        title: "Functional Testing Services | Software QA & Automation | Testriq",
        description:
            "Validate every workflow with Testriq's functional testing services. Web, mobile, and enterprise QA — manual and automated, ISO 29119-aligned for global teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/functional-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Functional Testing Services by Testriq QA Lab",
            type: "image/webp",
        },
        keywords: [
            "functional testing services",
            "software functional testing",
            "automated functional testing",
            "qa functional testing",
            "functional qa solutions",
            "web app functional testing",
            "mobile app functional testing",
            "enterprise software testing",
        ],
    });
}

export default function FunctionalTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~196 chars, now 158
    // with action-verb start; surfaces "ISO 29119-aligned" for
    // enterprise SEO. Keywords lowercased. 6 dynamic() imports converted
    // to direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={functionalServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/functional-testing-services",
                    "Functional Testing"
                )}
            />
            <MainLayout>
                <FunctionalHeroSection />
                <FunctionalCriticalitySection />
                <FunctionalWhySection />
                <FunctionalSolutionsSection />
                <FunctionalAdvantageSection />
                <FunctionalFAQs />
                <FunctionalNextStepsSection />
            </MainLayout>
        </div>
    );
}
