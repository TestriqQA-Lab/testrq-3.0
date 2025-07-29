import { Metadata } from "next";
import SEOHead from "@/components/seo/SEOHead";

export const metadata: Metadata = {
  title: "Shopping Apps Certification | E-commerce Testing | Testriq QA Lab",
  description:
    "Get your shopping app certified with comprehensive e-commerce testing covering security, payment processing, performance optimization, and user experience. Trusted by 400+ e-commerce platforms worldwide.",
  keywords: [
    "shopping app certification",
    "e-commerce app testing",
    "mobile commerce certification",
    "shopping app security",
    "e-commerce quality assurance",
    "payment gateway testing",
    "shopping platform validation",
    "mobile shopping testing",
    "e-commerce compliance",
    "retail app certification",
  ],
  openGraph: {
    title: "Shopping Apps Certification | E-commerce Testing | Testriq QA Lab",
    description:
      "Comprehensive certification for shopping apps ensuring security, payment processing, and optimal user experience. Join 400+ certified e-commerce platforms.",
    url: "https://testriq.com/shopping-apps-certification",
    siteName: "Testriq QA Lab",
    images: [
      {
        url: "https://testriq.com/images/shopping-apps-certification-og.jpg",
        width: 1200,
        height: 630,
        alt: "Shopping Apps Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopping Apps Certification | E-commerce Testing | Testriq QA Lab",
    description:
      "Get your shopping app certified with comprehensive e-commerce testing. Security, payments, and performance optimization.",
    images: ["https://testriq.com/images/shopping-apps-certification-twitter.jpg"],
  },
  alternates: {
    canonical: "https://testriq.com/shopping-apps-certification",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ShoppingAppsCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEOHead
        title="Shopping Apps Certification | E-commerce Testing | Testriq QA Lab"
        description="Get your shopping app certified with comprehensive e-commerce testing covering security, payment processing, performance optimization, and user experience. Trusted by 400+ e-commerce platforms worldwide."
        keywords="shopping app certification, e-commerce app testing, mobile commerce certification, shopping app security, e-commerce quality assurance"
        canonicalUrl="https://testriq.com/shopping-apps-certification"
      />
      {children}
    </>
  );
}

