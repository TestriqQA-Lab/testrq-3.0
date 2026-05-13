import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  securityTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import SecurityTestingHeroSection from "@/components/sections/SecurityTestingHeroSection";
import SecurityTestingChallenges from "@/components/sections/SecurityTestingChallenges";
import SecurityTestingComprehensiveSlider from "@/components/sections/SecurityTestingComprehensiveSlider";
import SecureGuardFramework from "@/components/sections/SecureGuardFramework";
import SecurityTestingROISection from "@/components/sections/SecurityTestingROISection";
import SecurityTestingWhyChooseTestriq from "@/components/sections/SecurityTestingWhyChooseTestriq";
import TestriqTCoE from "@/components/sections/TestriqTCoE";
import SecurityTestingToolsFramework from "@/components/sections/SecurityTestingToolsFramework";
import SecurityTestingCaseStudies from "@/components/sections/SecurityTestingCaseStudies";
import SecurityTestingFAQs from "@/components/sections/SecurityTestingFAQs";
import SecurityTestingReadyToEnsureQuality from "@/components/sections/SecurityTestingReadyToEnsureQuality";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/security-testing",
    title: "Security Testing Services | VAPT & Penetration Testing | Testriq",
    description:
      "Protect digital assets with Testriq's security testing services. VAPT, application security audits, and ISO 29119-aligned cyber resilience for enterprise teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Security-service-og-image.webp",
      width: 1200,
      height: 630,
      alt: "Security Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "security testing services",
      "vapt services",
      "penetration testing",
      "application security audits",
      "iso 29119 security testing",
      "cyber resilience testing",
      "enterprise security qa",
      "ethical hacking services",
    ],
  });
}

export default function SecurityTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title fixed "Services & ... Services" duplication
  // (was "Security Testing Services & Pen-testing Services | Testriq",
  // now leads with primary keyword + VAPT/Penetration as a clear
  // qualifier). Description rewritten — was ~191 chars with "2026"
  // anchor; now 160 chars, action-verb start, surfaces VAPT + ISO
  // 29119. og:title and twitter:title now mirror page title (og had
  // a third, different description string). ogImage.type "image/webp"
  // added. Keywords lowercased. 9 dynamic() imports converted to
  // direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={securityTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/security-testing", "Security Testing")}
      />
      <MainLayout>
        <SecurityTestingHeroSection />
        <SecurityTestingChallenges />
        <SecurityTestingComprehensiveSlider />
        <SecureGuardFramework />
        <SecurityTestingROISection />
        <SecurityTestingWhyChooseTestriq />
        <TestriqTCoE />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
