import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  webAppTestingServiceSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import WebappTestingHeroSection from "@/components/sections/WebappTestingHeroSection";
import WebappChallenges from "@/components/sections/WebappChallenges";
import WebappCompliance from "@/components/sections/WebappCompliance";
import WebappTechStack from "@/components/sections/WebappTechStack";
import CardSlider from "@/components/sections/WebAppCardSlider";
import WebappWhyChooseTestriq from "@/components/sections/WebappWhyChooseTestriq";
import WebappFAQs from "@/components/sections/WebappFAQs";
import WebappAnyQuestions from "@/components/sections/WebappAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/web-application-testing-services",
    title: "Web Application Testing Services | Cross-Browser & Security QA | Testriq",
    description:
      "Validate web applications with Testriq's testing. Cross-browser compatibility, OWASP Top 10 security, and Playwright/Cypress automation for global QA teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Web-Application-Service-Og.webp",
      width: 1200,
      height: 630,
      alt: "Web Application Testing Services by Testriq",
      type: "image/webp",
    },
    keywords: [
      "web application testing",
      "web qa services",
      "cross-browser testing",
      "web app security testing",
      "next.js testing",
      "iso 29119 web testing",
      "saas testing",
      "e-commerce testing",
      "playwright automation",
      "cypress automation",
      "owasp top 10 testing",
      "performance testing services",
    ],
  });
}

export default function WebAppTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped "Company" keyword-stuffing tail and
  // surfaces "Cross-Browser & Security QA" as concrete differentiators
  // (was "Web Application Testing Services | QA Company | Testriq").
  // Description rewritten — was ~213 chars, now 157 chars, action-verb
  // start; surfaces OWASP + Playwright/Cypress as concrete tech.
  // twitter:image unified with og:image (was a separate
  // Web-Application_Testing_Twitter.webp with non-standard underscore
  // casing). ogImage.type "image/webp" added. Keywords lowercased.
  // 8 dynamic() imports converted to direct ES imports. Breadcrumb
  // already migrated in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={webAppTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/web-application-testing-services",
          "Web Application Testing"
        )}
      />
      <MainLayout>
        <WebappTestingHeroSection />
        <WebappChallenges />
        <WebappCompliance />
        <WebappTechStack />
        <CardSlider />
        <WebappWhyChooseTestriq />
        <WebappFAQs />
        <WebappAnyQuestions />
      </MainLayout>
    </div>
  );
}
