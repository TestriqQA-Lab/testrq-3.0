import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  mobileAppTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MobileTestingHeroSection from "@/components/sections/MobileTestingHeroSection";
import MobileComprehensiveSection from "@/components/sections/MobileComprehensive";
import MobileReadyToEnsureQuality from "@/components/sections/MobileReadyToEnsureQuality";
import MobileComprehensiveSlider from "@/components/sections/MobileComprehensiveSlider";
import MobileCardSlider from "@/components/sections/MobileCardSlider";
import MobileProvenTestingProcess from "@/components/sections/MobileProvenTestingProcess";
import MobileWhyChooseTestriq from "@/components/sections/MobileWhyChooseTestriq";
import MobileFAQs from "@/components/sections/MobileFAQs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/mobile-application-testing",
    title:
      "Mobile Application Testing Services | iOS & Android QA | Testriq",
    description:
      "Validate iOS and Android performance with Testriq's mobile testing services. 5G optimization, security pen-testing, and ISO 29119-compliant QA for global teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Mobile_Application-Services-og.webp",
      width: 1200,
      height: 630,
      alt: "Global Mobile App Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "mobile application testing services",
      "ios app testing",
      "android app testing",
      "5g mobile performance testing",
      "mobile app security testing",
      "appium automation testing",
      "iso 29119-3 compliance",
      "mobile qa services",
      "owasp mobile top 10",
      "fintech mobile qa",
    ],
  });
}

export default function MobileAppTesting() {
  // TODO(seo phase-2-followup): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed — was "Ship
  // Faster with Expert Mobile Test Automation | Testriq" + root layout's title
  // template ("%s | Testriq") producing "...Testriq | Testriq". New title leads
  // with the primary keyword "Mobile Application Testing Services". Description
  // rewritten to drop the "2026" time anchor. ogImage.type added; twitter image
  // unified with og:image. 9 dynamic() imports converted to direct ES imports.
  // Breadcrumb was already migrated in PR-3 via createCanonicalBreadcrumb.
  return (
    <div>
      <StructuredData data={mobileAppTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/mobile-application-testing",
          "Mobile Application Testing"
        )}
      />
      <MainLayout>
        <MobileTestingHeroSection />
        <MobileComprehensiveSection />
        <MobileReadyToEnsureQuality />
        <MobileComprehensiveSlider />
        <MobileCardSlider />
        <MobileProvenTestingProcess />
        <MobileWhyChooseTestriq />
        <MobileFAQs />
      </MainLayout>
    </div>
  );
}
