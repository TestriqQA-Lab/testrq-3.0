import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  desktopAppTestingSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import DesktopTestingHeroSection from "@/components/sections/DesktopTestingHeroSection";
import DesktopChallenges from "@/components/sections/DesktopChallenges";
import DesktopCompliance from "@/components/sections/DesktopCompliance";
import DesktopTechStack from "@/components/sections/DesktopTechStack";
import DesktopCardSlider from "@/components/sections/DesktopCardSlider";
import DesktopWhyChooseTestriq from "@/components/sections/DesktopWhyChooseTestriq";
import DesktopFAQs from "@/components/sections/DesktopFAQs";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/desktop-application-testing-services",
    title: "Desktop Application Testing Services | Cross-Platform QA | Testriq",
    description:
      "Validate desktop apps across Windows, macOS, and Linux with Testriq's testing. Installer, performance, and security QA for enterprise software.",
    ogImage: {
      url: "https://www.testriq.com/OG/Desktop-Application-Service-OG.webp",
      width: 1200,
      height: 630,
      alt: "Desktop Application Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "desktop application testing",
      "desktop app qa services",
      "windows app testing",
      "macos application testing",
      "linux desktop testing",
      "cross-platform desktop testing",
      "wpf and winforms testing",
      "desktop performance testing",
      "exe and msi installer testing",
      "offline functionality testing",
      "desktop security testing",
      "enterprise software qa",
    ],
  });
}

export default function DesktopAppTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. New title surfaces full primary keyword "Desktop
  // Application Testing Services" (was abbreviated to "Desktop App
  // Testing & QA Services"). Description rewritten — was ~236 chars
  // (well over Google's snippet cutoff), now 144 with action-verb start.
  // twitter:image unified with og:image (was a separate -Twitter.webp).
  // ogImage.type "image/webp" added. Keywords lowercased. 7 dynamic()
  // imports converted to direct ES imports. Breadcrumb already migrated
  // in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={desktopAppTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/desktop-application-testing-services",
          "Desktop Application Service"
        )}
      />
      <MainLayout>
        <DesktopTestingHeroSection />
        <DesktopChallenges />
        <DesktopCompliance />
        <DesktopTechStack />
        <DesktopCardSlider />
        <DesktopWhyChooseTestriq />
        <DesktopFAQs />
      </MainLayout>
    </div>
  );
}
