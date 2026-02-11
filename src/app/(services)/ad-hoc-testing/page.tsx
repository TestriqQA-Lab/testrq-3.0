import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    adHocTestingServiceSchema,
    organizationSchema,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";

const AdHocTestingHeroSection = dynamic(() => import("@/components/sections/AdHocTestingHeroSection"), { ssr: true });
const AdHocTestingWhatIs = dynamic(() => import("@/components/sections/AdHocTestingWhatIs"), { ssr: true });
const AdHocTestingScenarios = dynamic(() => import("@/components/sections/AdHocTestingScenarios"), { ssr: true });
const AdHocTestingMethodologies = dynamic(() => import("@/components/sections/AdHocTestingMethodologies"), { ssr: true });
const AdHocTestingApplications = dynamic(() => import("@/components/sections/AdHocTestingApplications"), { ssr: true });
const AdHocTestingProsCons = dynamic(() => import("@/components/sections/AdHocTestingProsCons"), { ssr: true });
const AdHocTestingBestPractices = dynamic(() => import("@/components/sections/AdHocTestingBestPractices"), { ssr: true });
const AdHocTestingStrategy = dynamic(() => import("@/components/sections/AdHocTestingStrategy"), { ssr: true });
const AdHocTestingWhyTestriq = dynamic(() => import("@/components/sections/AdHocTestingWhyTestriq"), { ssr: true });
const AdHocTestingFAQs = dynamic(() => import("@/components/sections/AdHocTestingFAQs"), { ssr: true });
const AdHocTestingReadyToStart = dynamic(() => import("@/components/sections/AdHocTestingReadyToStart"), { ssr: true });

export const metadata: Metadata = {
    title: "Ad-Hoc Testing Services | On-Demand QA Testing & Error Guessing | Testriq",
    description: "Testriq's ad-hoc testing services provide rapid, on-demand QA for hotfixes, mobile apps, and urgent scenarios. Error guessing, monkey testing, and exploratory testing for fast feedback.",
    keywords: [
        "ad-hoc testing services",
        "on-demand QA testing",
        "error guessing testing",
        "monkey testing services",
        "exploratory testing services",
        "rapid QA feedback",
        "hotfix validation testing",
        "unplanned scenario testing",
        "mobile app ad-hoc testing",
        "intuitive software testing",
        "random testing solutions",
        "agile ad-hoc QA",
        "DevOps rapid testing",
        "startups QA services",
        "cost-effective software testing",
        "buddy testing services",
        "pair testing solutions",
        "sanity testing services",
        "smoke testing services",
        "QA feedback loops",
    ],
    openGraph: {
        title: "Ad-Hoc Testing Services | On-Demand QA Testing & Error Guessing | Testriq",
        description: "Testriq's ad-hoc testing services provide rapid, on-demand QA for hotfixes, mobile apps, and urgent scenarios. Error guessing, monkey testing, and exploratory testing for fast feedback.",
        url: "https://www.testriq.com/services/ad-hoc-testing",
        siteName: "Testriq QA Lab",
        type: "website",
        images: [
            {
                url: "https://www.testriq.com/assets/images/services/ad-hoc-testing-og.jpg",
                width: 1200,
                height: 630,
                alt: "Testriq Ad-Hoc Testing Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ad-Hoc Testing Services | On-Demand QA Testing & Error Guessing | Testriq",
        description: "Testriq's ad-hoc testing services provide rapid, on-demand QA for hotfixes, mobile apps, and urgent scenarios.",
    },
    alternates: {
        canonical: "https://www.testriq.com/services/ad-hoc-testing",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.testriq.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.testriq.com/services",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Ad-Hoc Testing",
            item: "https://www.testriq.com/services/ad-hoc-testing",
        },
    ],
};

export default function AdHocTestingPage() {
    return (
        <MainLayout>
            <StructuredData data={adHocTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={breadcrumbSchema} />

            <AdHocTestingHeroSection />
            <AdHocTestingWhatIs />
            <AdHocTestingScenarios />
            <AdHocTestingMethodologies />
            <AdHocTestingApplications />
            <AdHocTestingProsCons />
            <AdHocTestingBestPractices />
            <AdHocTestingStrategy />
            <AdHocTestingWhyTestriq />
            <AdHocTestingFAQs />
            <AdHocTestingReadyToStart />
        </MainLayout>
    );
}
