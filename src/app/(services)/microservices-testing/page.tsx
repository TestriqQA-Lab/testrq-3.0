import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    microservicesServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

// Dynamic imports for section components
const MicroservicesHeroSection = dynamic(() => import("@/components/sections/MicroservicesHeroSection"));
const MicroservicesWhatIsSection = dynamic(() => import("@/components/sections/MicroservicesWhatIsSection"));
const MicroservicesPyramidSection = dynamic(() => import("@/components/sections/MicroservicesPyramidSection"));
const MicroservicesChallengesSection = dynamic(() => import("@/components/sections/MicroservicesChallengesSection"));
const MicroservicesKeySolutionsSection = dynamic(() => import("@/components/sections/MicroservicesKeySolutionsSection"));
const MicroservicesApproachesSection = dynamic(() => import("@/components/sections/MicroservicesApproachesSection"));
const MicroservicesApplicationsSection = dynamic(() => import("@/components/sections/MicroservicesApplicationsSection"));
const MicroservicesBestPracticesSection = dynamic(() => import("@/components/sections/MicroservicesBestPracticesSection"));
const MicroservicesToolsSection = dynamic(() => import("@/components/sections/MicroservicesToolsSection"));
const MicroservicesFAQs = dynamic(() => import("@/components/sections/MicroservicesFAQs"));
const MicroservicesMethodologySection = dynamic(() => import("@/components/sections/MicroservicesMethodologySection"));
const MicroservicesScenariosSection = dynamic(() => import("@/components/sections/MicroservicesScenariosSection"));
const MicroservicesWhyChooseSection = dynamic(() => import("@/components/sections/MicroservicesWhyChooseSection"));
const MicroservicesNextStepsSection = dynamic(() => import("@/components/sections/MicroservicesNextStepsSection"));

export const metadata: Metadata = {
    title: "Microservices Testing Services | API & Microservices Testing Solutions | Testriq",
    description: "Testriq's microservices testing services provide comprehensive API testing, contract testing, chaos engineering, and cloud-native testing for distributed systems and Kubernetes environments.",
    keywords: [
        "microservices testing services",
        "distributed systems testing",
        "API testing solutions",
        "contract testing",
        "chaos engineering",
        "kubernetes testing",
        "cloud native testing",
        "pact testing",
        "resilience testing",
        "service mesh validation"
    ],
    alternates: {
        canonical: "https://www.testriq.com/services/microservices-testing",
    },
};

export default function MicroservicesTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/services/" },
        { name: "Microservices Testing", url: "https://www.testriq.com/services/microservices-testing" },
    ];

    return (
        <MainLayout>
            <StructuredData data={microservicesServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

            <main>
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
            </main>
        </MainLayout>
    );
}
