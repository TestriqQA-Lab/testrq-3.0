import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    accessibilityServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Accessibility Testing Services | WCAG 2.2 & ADA Compliance | Testriq",
    description:
        "Ensure your digital products are inclusive with Testriq's expert Accessibility Testing Services. We specialize in WCAG 2.2, Section 508, and ADA compliance.",
    keywords: [
        "accessibility testing services",
        "WCAG 2.2 compliance testing",
        "ADA compliance testing",
        "Section 508 compliance testing",
        "web accessibility testing",
        "mobile app accessibility testing",
        "screen reader testing",
        "digital inclusion services",
        "VPAT accessibility testing",
        "inclusive design testing",
    ],
    authors: [{ name: "Testriq QA Lab" }],
    creator: "Testriq QA Lab LLP",
    publisher: "Testriq QA Lab LLP",
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/accessibility-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/accessibility-testing-services",
        siteName: "Testriq - Accessibility Testing Services",
        title: "Accessibility Testing Services | Ensuring Digital Inclusion",
        description:
            "Expert accessibility testing services to ensure your apps and sites are usable by everyone. WCAG, ADA, and Section 508 compliance.",
        images: [
            {
                url: "https://www.testriq.com/OG/Accessibility-testing-og-image.webp",
                width: 1200,
                height: 630,
                alt: "Accessibility Testing Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Accessibility Testing Services | Ensuring Digital Inclusion",
        description:
            "Expert accessibility testing services to ensure your apps and sites are usable by everyone. WCAG, ADA, and Section 508 compliance.",
        images: ["https://www.testriq.com/OG/Accessibility-testing-og-image.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const AccessibilityHeroSection = dynamic(
    () => import("@/components/sections/AccessibilityHeroSection"),
    { ssr: true }
);

const AccessibilitySolutionsSection = dynamic(
    () => import("@/components/sections/AccessibilitySolutionsSection"),
    { ssr: true }
);

const AccessibilityWhySection = dynamic(
    () => import("@/components/sections/AccessibilityWhySection"),
    { ssr: true }
);

const AccessibilityServicesListSection = dynamic(
    () => import("@/components/sections/AccessibilityServicesListSection"),
    { ssr: true }
);

const AccessibilityProcessSection = dynamic(
    () => import("@/components/sections/AccessibilityProcessSection"),
    { ssr: true }
);

const AccessibilityFAQSection = dynamic(
    () => import("@/components/sections/AccessibilityFAQSection"),
    { ssr: true }
);

const AccessibilityAnyQuestions = dynamic(
    () => import("@/components/sections/AccessibilityAnyQuestions"),
    { ssr: true }
);

export default function AccessibilityTestingPage() {
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
    // to 2 canonical items; URL now structurally derived from pathname.
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
