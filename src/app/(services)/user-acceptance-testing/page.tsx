import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { uatServiceSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "User Acceptance Testing Services | UAT Testing for Enterprise Software | Testriq",
    description: "Testriq's user acceptance testing services provide professional UAT testing, beta testing management, and end-user validation for enterprise software, ERP, CRM, and digital transformation projects.",
    keywords: [
        "User Acceptance Testing Services",
        "UAT Testing Enterprise Software",
        "Beta Testing Management",
        "End-user Validation",
        "ERP UAT Testing",
        "CRM UAT Services",
        "Digital Transformation QA",
        "Operational Acceptance Testing",
        "ISTQB UAT Facilitators"
    ],
    alternates: {
        canonical: "https://www.testriq.com/services/user-acceptance-testing",
    },
    openGraph: {
        title: "User Acceptance Testing Services | Testriq",
        description: "Professional UAT testing and business-driven quality validation for enterprise software.",
        url: "https://www.testriq.com/services/user-acceptance-testing",
        siteName: "Testriq",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Testriq UAT Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

// Dynamic imports for sections
const UATHeroSection = dynamic(() => import("@/components/sections/UATHeroSection"));
const UATWhatIsSection = dynamic(() => import("@/components/sections/UATWhatIsSection"));
const UATTypesSection = dynamic(() => import("@/components/sections/UATTypesSection"));
const UATVsFunctionalSection = dynamic(() => import("@/components/sections/UATVsFunctionalSection"));
const UATChallengesSection = dynamic(() => import("@/components/sections/UATChallengesSection"));
const UATProcessSection = dynamic(() => import("@/components/sections/UATProcessSection"));
const UATApplicationsSection = dynamic(() => import("@/components/sections/UATApplicationsSection"));
const UATBestPracticesSection = dynamic(() => import("@/components/sections/UATBestPracticesSection"));
const UATComparisonSection = dynamic(() => import("@/components/sections/UATComparisonSection"));
const UATFAQs = dynamic(() => import("@/components/sections/UATFAQs"));
const UATScenariosSection = dynamic(() => import("@/components/sections/UATScenariosSection"));
const UATWhyChooseSection = dynamic(() => import("@/components/sections/UATWhyChooseSection"));
const UATNextStepsSection = dynamic(() => import("@/components/sections/UATNextStepsSection"));

export default function UserAcceptanceTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/services" },
        { name: "User Acceptance Testing", url: "https://www.testriq.com/services/user-acceptance-testing" }
    ];

    return (
        <>
            <StructuredData data={uatServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <UATHeroSection />
                <UATWhatIsSection />
                <UATTypesSection />
                <UATVsFunctionalSection />
                <UATChallengesSection />
                <UATProcessSection />
                <UATApplicationsSection />
                <UATBestPracticesSection />
                <UATComparisonSection />
                <UATScenariosSection />
                <UATFAQs />
                <UATWhyChooseSection />
                <UATNextStepsSection />
            </MainLayout>
        </>
    );
}
