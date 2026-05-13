import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    uatServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import UATHeroSection from "@/components/sections/UATHeroSection";
import UATWhatIsSection from "@/components/sections/UATWhatIsSection";
import UATTypesSection from "@/components/sections/UATTypesSection";
import UATVsFunctionalSection from "@/components/sections/UATVsFunctionalSection";
import UATChallengesSection from "@/components/sections/UATChallengesSection";
import UATProcessSection from "@/components/sections/UATProcessSection";
import UATApplicationsSection from "@/components/sections/UATApplicationsSection";
import UATBestPracticesSection from "@/components/sections/UATBestPracticesSection";
import UATComparisonSection from "@/components/sections/UATComparisonSection";
import UATFAQs from "@/components/sections/UATFAQs";
import UATScenariosSection from "@/components/sections/UATScenariosSection";
import UATWhyChooseSection from "@/components/sections/UATWhyChooseSection";
import UATNextStepsSection from "@/components/sections/UATNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/user-acceptance-testing",
        title: "User Acceptance Testing Services | Enterprise UAT | Testriq",
        description:
            "Validate software with real users through Testriq's UAT services. ISTQB-certified facilitators for ERP, CRM, and digital transformation acceptance testing.",
        ogImage: {
            url: "https://www.testriq.com/OG/user-acceptance-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq UAT Services",
            type: "image/webp",
        },
        keywords: [
            "user acceptance testing services",
            "uat testing",
            "beta testing management",
            "end-user validation",
            "erp uat testing",
            "crm uat services",
            "digital transformation qa",
            "operational acceptance testing",
            "istqb uat facilitators",
        ],
    });
}

export default function UserAcceptanceTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/user-acceptance-testing). Pattern D
    // fixed — breadcrumb reduced from 3 items (Home / Services / User Acceptance Testing, all with
    // /services/ prefix URLs) to 2 canonical items per PR-2A template. StructuredData moved inside
    // <div> wrapper (was in <> fragment outside <MainLayout>) to match PR-2A template.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "User Acceptance Testing",
            url: "https://www.testriq.com/user-acceptance-testing",
        },
    ];

    return (
        <div>
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
        </div>
    );
}
