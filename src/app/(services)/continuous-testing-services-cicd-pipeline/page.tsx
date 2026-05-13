import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    continuousTestingServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ContinuousTestingHeroSection from "@/components/sections/ContinuousTestingHeroSection";
import ContinuousTestingWhyDevOps from "@/components/sections/ContinuousTestingWhyDevOps";
import ContinuousTestingBenefits from "@/components/sections/ContinuousTestingBenefits";
import ContinuousTestingComprehensiveSlider from "@/components/sections/ContinuousTestingComprehensiveSlider";
import ContinuousTestingSpecialized from "@/components/sections/ContinuousTestingSpecialized";
import ContinuousTestingFAQs from "@/components/sections/ContinuousTestingFAQs";
import ContinuousTestingReadyToAccelerate from "@/components/sections/ContinuousTestingReadyToAccelerate";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/continuous-testing-services-cicd-pipeline",
        title: "Continuous Testing Services & CI/CD Integration | Testriq",
        description:
            "Shift quality left with Testriq's continuous testing. Automated regression, performance, and security gates integrated into your CI/CD for DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/continues-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Continuous Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "continuous testing services",
            "ci/cd pipeline testing",
            "devops testing integration",
            "shift-left testing",
            "automated regression testing",
            "continuous performance testing",
            "continuous security testing",
            "test data management",
            "dora metrics optimization",
            "ci/cd quality engineering",
        ],
    });
}

export default function ContinuousTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~191 chars, now 153
    // with action-verb start and explicit listing of CI/CD test types
    // (regression / performance / security). Keywords lowercased.
    // 6 dynamic() imports converted to direct ES imports. Breadcrumb
    // already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={continuousTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/continuous-testing-services-cicd-pipeline",
                    "Continuous Testing"
                )}
            />
            <MainLayout>
                <ContinuousTestingHeroSection />
                <ContinuousTestingWhyDevOps />
                <ContinuousTestingBenefits />
                <ContinuousTestingComprehensiveSlider />
                <ContinuousTestingSpecialized />
                <ContinuousTestingFAQs />
                <ContinuousTestingReadyToAccelerate />
            </MainLayout>
        </div>
    );
}
