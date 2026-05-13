import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    shiftLeftServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ShiftLeftHeroSection from "@/components/sections/ShiftLeftHeroSection";
import ShiftLeftImperativeSection from "@/components/sections/ShiftLeftImperativeSection";
import ShiftLeftWhySection from "@/components/sections/ShiftLeftWhySection";
import ShiftLeftSolutionsSection from "@/components/sections/ShiftLeftSolutionsSection";
import ShiftLeftAdvantageSection from "@/components/sections/ShiftLeftAdvantageSection";
import ShiftLeftChallengesSection from "@/components/sections/ShiftLeftChallengesSection";
import ShiftLeftFAQs from "@/components/sections/ShiftLeftFAQs";
import ShiftLeftNextStepsSection from "@/components/sections/ShiftLeftNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/shift-left-testing",
        title: "Shift-Left Testing Services | Early Defect Detection | Testriq",
        description:
            "Detect defects early with Testriq's shift-left testing services. CI/CD integration, TDD coaching, and BDD consulting for Agile and DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/Shift-left-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Shift-Left Testing Services",
            type: "image/webp",
        },
        keywords: [
            "shift-left testing services",
            "early defect detection",
            "ci/cd testing integration",
            "test-driven development",
            "bdd consulting",
            "devops testing solutions",
            "agile testing services",
            "continuous quality assurance",
            "early qa services",
            "defect prevention testing",
        ],
    });
}

export default function ShiftLeftTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/shift-left-testing). Pattern A*
    // fixed — og:url was absent from the openGraph block entirely. Pattern D fixed — breadcrumb
    // reduced from 3 items (Home / Services → /services/ / Shift-Left Testing →
    // /services/shift-left-testing) to 2 canonical items per PR-2A/2B template.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Shift-Left Testing",
            url: "https://www.testriq.com/shift-left-testing",
        },
    ];

    return (
        <div>
            <StructuredData data={shiftLeftServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <ShiftLeftHeroSection />
                <ShiftLeftImperativeSection />
                <ShiftLeftWhySection />
                <ShiftLeftSolutionsSection />
                <ShiftLeftAdvantageSection />
                <ShiftLeftChallengesSection />
                <ShiftLeftFAQs />
                <ShiftLeftNextStepsSection />
            </MainLayout>
        </div>
    );
}
