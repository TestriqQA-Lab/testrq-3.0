import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    shiftLeftServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

// Dynamic imports for section components
const ShiftLeftHeroSection = dynamic(() => import("@/components/sections/ShiftLeftHeroSection"));
const ShiftLeftImperativeSection = dynamic(() => import("@/components/sections/ShiftLeftImperativeSection"));
const ShiftLeftWhySection = dynamic(() => import("@/components/sections/ShiftLeftWhySection"));
const ShiftLeftSolutionsSection = dynamic(() => import("@/components/sections/ShiftLeftSolutionsSection"));
const ShiftLeftAdvantageSection = dynamic(() => import("@/components/sections/ShiftLeftAdvantageSection"));
const ShiftLeftChallengesSection = dynamic(() => import("@/components/sections/ShiftLeftChallengesSection"));
const ShiftLeftFAQs = dynamic(() => import("@/components/sections/ShiftLeftFAQs"));
const ShiftLeftNextStepsSection = dynamic(() => import("@/components/sections/ShiftLeftNextStepsSection"));

export const metadata: Metadata = {
    title: "Shift-Left Testing Services | Early QA & Defect Prevention | Testriq",
    description: "Accelerate releases & cut costs with Testriq's expert Shift-Left Testing Services. Early defect detection, DevOps integration & continuous quality for Agile teams. Partner with us!",
    keywords: [
        "shift-left testing services",
        "early QA services",
        "defect prevention",
        "DevOps testing solutions",
        "continuous quality assurance",
        "Agile testing experts",
        "test-driven development coaching",
        "BDD consulting",
        "CI/CD testing integration",
        "early bug detection"
    ],
    alternates: {
        canonical: "https://www.testriq.com/services/shift-left-testing",
    },
};

export default function ShiftLeftTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/services/" },
        { name: "Shift-Left Testing", url: "https://www.testriq.com/services/shift-left-testing" },
    ];

    return (
        <MainLayout>
            <StructuredData data={shiftLeftServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

            <main>
                <ShiftLeftHeroSection />
                <ShiftLeftImperativeSection />
                <ShiftLeftWhySection />
                <ShiftLeftSolutionsSection />
                <ShiftLeftAdvantageSection />
                <ShiftLeftChallengesSection />
                <ShiftLeftFAQs />
                <ShiftLeftNextStepsSection />
            </main>
        </MainLayout>
    );
}
