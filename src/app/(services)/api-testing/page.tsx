import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  apiTestingSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ApiTestingHeroSection from "@/components/sections/ApiTestingHeroSection";
import ApiComprehensiveSlider from "@/components/sections/ApiComprehensiveSlider";
import ApiCardSlider from "@/components/sections/ApiCardSlider";
import ApiProvenTestingProcess from "@/components/sections/ApiProvenTestingProcess";
import ApiWhyChooseTestriq from "@/components/sections/ApiWhyChooseTestriq";
import ApiToolsFramework from "@/components/sections/ApiToolsFramework";
import ApiCaseStudies from "@/components/sections/ApiCaseStudies";
import ApiFAQs from "@/components/sections/ApiFAQs";
import ApiAnyQuestions from "@/components/sections/ApiAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/api-testing",
    title: "API Testing Services | REST, GraphQL & SOAP QA | Testriq",
    description:
      "Validate REST, GraphQL, and SOAP APIs with Testriq's API testing. OWASP API security, performance, and ISO 29119-compliant QA for microservices teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/API-Testing-Service-Og.webp",
      width: 1200,
      height: 630,
      alt: "API Testing Services by Testriq QA Lab",
      type: "image/webp",
    },
    keywords: [
      "api testing services",
      "rest api automation",
      "graphql testing",
      "soap api testing",
      "iso 29119 api testing",
      "api performance testing",
      "owasp api top 10",
      "microservices integrated qa",
      "api security testing",
      "automated api qa",
    ],
  });
}

export default function ApiTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed.
  // og:title and twitter:title now mirror page title (were a separate
  // string "API Testing Services - Secure & Reliable Integrations | Testriq").
  // twitter:image fixed — previously pointed at the WRONG asset
  // (Automation-testing-Services-Twitter.webp — copy-paste bug from another
  // page); now unified with og:image. "2026 API Testing Landscape" keyword
  // dropped (time anchor). 9 dynamic() imports converted to direct ES imports.
  // Breadcrumb already migrated in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={apiTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/api-testing", "API Testing")}
      />
      <MainLayout>
        <ApiTestingHeroSection />
        <ApiComprehensiveSlider />
        <ApiCardSlider />
        <ApiProvenTestingProcess />
        <ApiWhyChooseTestriq />
        <ApiToolsFramework />
        <ApiCaseStudies />
        <ApiFAQs />
        <ApiAnyQuestions />
      </MainLayout>
    </div>
  );
}
