import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    microservicesServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MicroservicesHeroSection from "@/components/sections/MicroservicesHeroSection";
import MicroservicesWhatIsSection from "@/components/sections/MicroservicesWhatIsSection";
import MicroservicesPyramidSection from "@/components/sections/MicroservicesPyramidSection";
import MicroservicesChallengesSection from "@/components/sections/MicroservicesChallengesSection";
import MicroservicesKeySolutionsSection from "@/components/sections/MicroservicesKeySolutionsSection";
import MicroservicesApproachesSection from "@/components/sections/MicroservicesApproachesSection";
import MicroservicesApplicationsSection from "@/components/sections/MicroservicesApplicationsSection";
import MicroservicesBestPracticesSection from "@/components/sections/MicroservicesBestPracticesSection";
import MicroservicesToolsSection from "@/components/sections/MicroservicesToolsSection";
import MicroservicesMethodologySection from "@/components/sections/MicroservicesMethodologySection";
import MicroservicesScenariosSection from "@/components/sections/MicroservicesScenariosSection";
import MicroservicesWhyChooseSection from "@/components/sections/MicroservicesWhyChooseSection";
import MicroservicesFAQs from "@/components/sections/MicroservicesFAQs";
import MicroservicesNextStepsSection from "@/components/sections/MicroservicesNextStepsSection";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/microservices-testing",
        title: "Microservices Testing Services | Contract & API Testing | Testriq",
        description:
            "Validate distributed systems with Testriq's microservices testing. Contract testing, chaos engineering, and Kubernetes API QA for cloud-native architectures.",
        ogImage: {
            url: "https://www.testriq.com/OG/Microservices-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Microservices Testing Services",
            type: "image/webp",
        },
        keywords: [
            "microservices testing services",
            "contract testing",
            "api testing for microservices",
            "distributed systems testing",
            "chaos engineering",
            "kubernetes testing",
            "cloud-native testing",
            "pact testing",
            "service mesh validation",
            "consumer-driven contract testing",
        ],
    });
}

export default function MicroservicesTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/microservices-testing). Pattern A*
    // fixed — og:url was absent from the openGraph block entirely. Pattern D fixed — breadcrumb
    // reduced from 3 items (Home / Services → /services/ / Microservices Testing →
    // /services/microservices-testing) to 2 canonical items per PR-2A/2B template.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Microservices Testing",
            url: "https://www.testriq.com/microservices-testing",
        },
    ];

    return (
        <div>
            <StructuredData data={microservicesServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <MicroservicesHeroSection />
                <MicroservicesWhatIsSection />
                <MicroservicesPyramidSection />
                <MicroservicesChallengesSection />
                <MicroservicesKeySolutionsSection />
                <MicroservicesApproachesSection />
                <MicroservicesApplicationsSection />
                <MicroservicesBestPracticesSection />
                <MicroservicesToolsSection />
                <MicroservicesMethodologySection />
                <MicroservicesScenariosSection />
                <MicroservicesWhyChooseSection />
                <MicroservicesFAQs />
                <MicroservicesNextStepsSection />
            </MainLayout>
        </div>
    );
}
