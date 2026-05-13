import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    embeddedTestingSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import EmbeddedTestingHeroSection from "@/components/sections/EmbeddedTestingHeroSection";
import EmbeddedComplexity from "@/components/sections/EmbeddedComplexity";
import EmbeddedCritically from "@/components/sections/EmbeddedCritically";
import EmbeddedServiceOfferings from "@/components/sections/EmbeddedServiceOfferings";
import EmbeddedTestriqAdvantage from "@/components/sections/EmbeddedTestriqAdvantage";
import EmbeddedFAQs from "@/components/sections/EmbeddedFAQs";
import EmbeddedAnyQuestions from "@/components/sections/EmbeddedAnyQuestions";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/embedded-testing-services",
        title: "Embedded Testing Services | Software & Hardware QA | Testriq",
        description:
            "Ensure precision and reliability with Testriq's embedded testing services. V&V for automotive (ISO 26262), medical, and IoT safety-critical systems.",
        ogImage: {
            url: "https://www.testriq.com/OG/Embedded-testing-service-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Embedded Testing Services by Testriq",
            type: "image/webp",
        },
        keywords: [
            "embedded testing services",
            "embedded software testing",
            "automotive embedded testing",
            "medical device software testing",
            "iso 26262 compliance",
            "do-178c testing",
            "v&v services",
            "software-in-the-loop sil testing",
            "model-in-the-loop mil testing",
            "hardware-in-the-loop hil testing",
            "rtos testing",
            "firmware testing",
            "soc testing",
            "iot device testing",
        ],
    });
}

export default function EmbeddedTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was 159 chars with smart
    // quote ’, now 149 with regular apostrophe. Helper added the robots
    // block (page had NONE). Helper expanded the twitter block (was
    // short-form, missing site/creator). ogImage.type "image/webp" added.
    // Keywords lowercased. 7 dynamic() imports converted to direct ES
    // imports. Breadcrumb already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={embeddedTestingSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/embedded-testing-services",
                    "Embedded Testing Services"
                )}
            />
            <MainLayout>
                <EmbeddedTestingHeroSection />
                <EmbeddedComplexity />
                <EmbeddedCritically />
                <EmbeddedServiceOfferings />
                <EmbeddedTestriqAdvantage />
                <EmbeddedFAQs />
                <EmbeddedAnyQuestions />
            </MainLayout>
        </div>
    );
}
