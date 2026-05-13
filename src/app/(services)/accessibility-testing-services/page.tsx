import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    accessibilityServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AccessibilityHeroSection from "@/components/sections/AccessibilityHeroSection";
import AccessibilitySolutionsSection from "@/components/sections/AccessibilitySolutionsSection";
import AccessibilityWhySection from "@/components/sections/AccessibilityWhySection";
import AccessibilityServicesListSection from "@/components/sections/AccessibilityServicesListSection";
import AccessibilityProcessSection from "@/components/sections/AccessibilityProcessSection";
import AccessibilityFAQSection from "@/components/sections/AccessibilityFAQSection";
import AccessibilityAnyQuestions from "@/components/sections/AccessibilityAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/accessibility-testing-services",
        title: "Accessibility Testing Services | WCAG 2.2 & ADA Compliance | Testriq",
        description:
            "Ensure your digital products are inclusive with Testriq's expert Accessibility Testing Services. We specialize in WCAG 2.2, Section 508, and ADA compliance.",
        ogImage: {
            url: "https://www.testriq.com/OG/Accessibility-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Accessibility Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "accessibility testing services",
            "wcag 2.2 compliance testing",
            "ada compliance testing",
            "section 508 compliance testing",
            "web accessibility testing",
            "mobile app accessibility testing",
            "screen reader testing",
            "digital inclusion services",
            "vpat accessibility testing",
            "inclusive design testing",
        ],
    });
}

export default function AccessibilityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed —
    // page title ended with "| Testriq" while the root layout's title
    // template ("%s | Testriq") added a second "| Testriq" suffix. og:title
    // and twitter:title now mirror the page title (were a different string).
    // ogImage.type "image/webp" added. 7 dynamic() imports converted to
    // direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={accessibilityServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/accessibility-testing-services",
                    "Accessibility Testing"
                )}
            />
            <MainLayout>
                <AccessibilityHeroSection />
                <AccessibilitySolutionsSection />
                <AccessibilityWhySection />
                <AccessibilityServicesListSection />
                <AccessibilityProcessSection />
                <AccessibilityFAQSection />
                <AccessibilityAnyQuestions />
            </MainLayout>
        </div>
    );
}
