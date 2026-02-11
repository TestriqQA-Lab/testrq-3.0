import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { migrationServiceSchema } from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";

// Dynamic imports for optimized loading
const MigrationHeroSection = dynamic(() => import("@/components/sections/MigrationHeroSection"));
const MigrationCriticalitySection = dynamic(() => import("@/components/sections/MigrationCriticalitySection"));
const MigrationWhySection = dynamic(() => import("@/components/sections/MigrationWhySection"));
const MigrationSolutionsSection = dynamic(() => import("@/components/sections/MigrationSolutionsSection"));
const MigrationAdvantageSection = dynamic(() => import("@/components/sections/MigrationAdvantageSection"));
const MigrationFAQs = dynamic(() => import("@/components/sections/MigrationFAQs"));
const MigrationNextStepsSection = dynamic(() => import("@/components/sections/MigrationNextStepsSection"));

export const metadata: Metadata = {
    title: "Migration Testing Services | Data & Cloud Migration QA | Testriq",
    description: "Ensure seamless data & application migrations with Testriq’s expert Migration Testing Services. Prevent data loss, ensure integrity & minimize downtime. Partner with us!",
    alternates: {
        canonical: "https://www.testriq.com/services/migration-testing",
    },
    keywords: [
        "Migration Testing Services",
        "Data Migration Testing",
        "Cloud Migration Testing",
        "Database Migration Testing",
        "Application Migration Testing Solutions",
        "Data Integrity Testing",
        "ERP Migration Testing",
        "ETL Testing Services"
    ],
};

const MigrationTestingPage = () => {
    return (
        <MainLayout>
            <StructuredData data={migrationServiceSchema} />
            <MigrationHeroSection />
            <MigrationCriticalitySection />
            <MigrationWhySection />
            <MigrationSolutionsSection />
            <MigrationAdvantageSection />
            <MigrationFAQs />
            <MigrationNextStepsSection />
        </MainLayout>
    );
};

export default MigrationTestingPage;
