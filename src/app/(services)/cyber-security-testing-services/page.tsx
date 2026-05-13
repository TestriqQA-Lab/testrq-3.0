import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    cyberSecurityServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import CyberSecurityHeroSection from "@/components/sections/CyberSecurityHeroSection";
import SecurityTestingCrucialSection from "@/components/sections/SecurityTestingCrucialSection";
import SecurityTestingServicesGrid from "@/components/sections/SecurityTestingServicesGrid";
import SecurityTestingMethodology from "@/components/sections/SecurityTestingMethodology";
import CyberSecurityROISection from "@/components/sections/CyberSecurityROISection";
import CyberSecurityFAQs from "@/components/sections/CyberSecurityFAQs";
import CyberSecurityCTASection from "@/components/sections/CyberSecurityCTASection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/cyber-security-testing-services",
        title: "Cyber Security Testing Services & Penetration Testing | Testriq",
        description:
            "Fortify your defenses with Testriq's cyber security testing. VAPT, vulnerability assessments, and ISTQB & CEH-certified ethical hacking for enterprise teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/Cyber-security-testing-ogimage.webp",
            width: 1200,
            height: 630,
            alt: "Cyber Security Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "cyber security testing services",
            "penetration testing services",
            "vulnerability assessment services",
            "security audit services",
            "application security testing",
            "infrastructure security audit",
            "ethical hacking services",
            "istqb certified security testing",
            "vapt services",
            "compliance audits gdpr hipaa soc2",
        ],
    });
}

export default function CyberSecurityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~241 chars (way over
    // Google snippet limit) with "2026 cyber threats" time anchor; now
    // 157 chars, action-verb start, drops time anchor, surfaces VAPT +
    // certifications. Keywords lowercased. 6 dynamic() imports converted
    // to direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={cyberSecurityServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/cyber-security-testing-services",
                    "Cyber Security Testing"
                )}
            />
            <MainLayout>
                <CyberSecurityHeroSection />
                <SecurityTestingCrucialSection />
                <SecurityTestingServicesGrid />
                <SecurityTestingMethodology />
                <CyberSecurityROISection />
                <CyberSecurityFAQs />
                <CyberSecurityCTASection />
            </MainLayout>
        </div>
    );
}
