import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    blockchainServiceSchema,
    blockchainFAQSchema,
} from "@/components/seo/StructuredData";

// Dynamic imports for performance
const BlockchainHero = dynamic(() => import("@/components/sections/BlockchainHero"), {
    ssr: true,
});
const BlockchainWhyChoose = dynamic(() => import("@/components/sections/BlockchainWhyChoose"), {
    ssr: true,
});
const BlockchainSolutions = dynamic(() => import("@/components/sections/BlockchainSolutions"), {
    ssr: true,
});
const BlockchainMethodology = dynamic(() => import("@/components/sections/BlockchainMethodology"), {
    ssr: true,
});
const BlockchainFAQs = dynamic(() => import("@/components/sections/BlockchainFAQs"), {
    ssr: true,
});
const BlockchainCTA = dynamic(() => import("@/components/sections/BlockchainCTA"), {
    ssr: true,
});

export const metadata: Metadata = {
    title: "Blockchain App Testing Services | Smart Contract Audit & dApp QA - Testriq",
    description:
        "Secure your Web3 ecosystem with Testriq's blockchain app testing services. We offer expert smart contract audits, dApp security testing, and decentralized network validation for global enterprises.",
    keywords: [
        "blockchain app testing services",
        "smart contract audit services",
        "dApp testing company",
        "blockchain penetration testing",
        "crypto wallet security testing company",
        "blockchain performance testing for enterprises",
        "web3 security audit",
    ],
    alternates: {
        canonical: "https://www.testriq.com/blockchain-app-testing-services",
    },
    openGraph: {
        title: "Blockchain App Testing Services | Smart Contract Audit & dApp QA - Testriq",
        description: "Secure your Web3 ecosystem with Testriq's blockchain app testing services.",
        url: "https://www.testriq.com/blockchain-app-testing-services",
        type: "website",
    },
};

export default function BlockchainAppTesting() {
    return (
        <MainLayout>
            {/* SEO Structured Data */}
            <StructuredData data={blockchainServiceSchema} />
            <StructuredData data={blockchainFAQSchema} />

            {/* Page Sections */}
            <BlockchainHero />
            <BlockchainWhyChoose />
            <BlockchainSolutions />
            <BlockchainMethodology />
            <BlockchainFAQs />
            <BlockchainCTA />
        </MainLayout>
    );
}
