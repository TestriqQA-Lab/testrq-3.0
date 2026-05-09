import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    migrationServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MigrationHeroSection from "@/components/sections/MigrationHeroSection";
import MigrationCriticalitySection from "@/components/sections/MigrationCriticalitySection";
import MigrationWhySection from "@/components/sections/MigrationWhySection";
import MigrationSolutionsSection from "@/components/sections/MigrationSolutionsSection";
import MigrationAdvantageSection from "@/components/sections/MigrationAdvantageSection";
import MigrationFAQs from "@/components/sections/MigrationFAQs";
import MigrationNextStepsSection from "@/components/sections/MigrationNextStepsSection";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/migration-testing",
        title: "Migration Testing Services | Data & Cloud Migration QA | Testriq",
        description:
            "Prevent data loss and ensure seamless transitions with Testriq's migration testing. Expert ETL validation, data integrity checks, and cloud migration QA.",
        ogImage: {
            url: "https://www.testriq.com/OG/migration-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Migration Testing Services",
            type: "image/webp",
        },
        keywords: [
            "migration testing services",
            "data migration testing",
            "cloud migration qa",
            "database migration testing",
            "etl testing services",
            "data integrity testing",
            "application migration testing",
            "erp migration testing",
            "zero-downtime migration qa",
        ],
    });
}

export default function MigrationTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/migration-testing). Pattern A* fixed —
    // og:url was absent from the openGraph block entirely, causing it to be omitted from the HTML
    // head; helper always emits og:url matching canonical. Breadcrumb schema ADDED — this page had
    // none; 2 items per PR-2A template. PR-3 will fix at breadcrumb component level.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Migration Testing Services",
            url: "https://www.testriq.com/migration-testing",
        },
    ];

    return (
        <div>
            <StructuredData data={migrationServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <MigrationHeroSection />
                <MigrationCriticalitySection />
                <MigrationWhySection />
                <MigrationSolutionsSection />
                <MigrationAdvantageSection />
                <MigrationFAQs />
                <MigrationNextStepsSection />
            </MainLayout>
        </div>
    );
}
