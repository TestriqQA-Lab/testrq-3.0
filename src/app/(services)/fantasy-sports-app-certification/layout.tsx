import { Metadata } from "next";
import SEOHead from "@/components/seo/SEOHead";

export const metadata: Metadata = {
  title: "Fantasy Sports App Certification | Testriq QA Lab",
  description:
    "Get your fantasy sports app certified with comprehensive testing covering security, fair play, regulatory compliance, and performance optimization. Trusted by 200+ fantasy platforms worldwide.",
  keywords: [
    "fantasy sports app certification",
    "daily fantasy sports testing",
    "fantasy app security",
    "DFS compliance",
    "fantasy sports quality assurance",
    "gaming app certification",
    "fantasy platform testing",
    "sports app validation",
    "fantasy gaming compliance",
    "mobile fantasy testing",
  ],
  openGraph: {
    title: "Fantasy Sports App Certification | Testriq QA Lab",
    description:
      "Comprehensive certification for fantasy sports apps ensuring security, fair play, and regulatory compliance. Join 200+ certified platforms.",
    url: "https://testriq.com/fantasy-sports-app-certification",
    siteName: "Testriq QA Lab",
    images: [
      {
        url: "https://testriq.com/images/fantasy-sports-certification-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fantasy Sports App Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantasy Sports App Certification | Testriq QA Lab",
    description:
      "Get your fantasy sports app certified with comprehensive testing. Security, compliance, and performance optimization.",
    images: ["https://testriq.com/images/fantasy-sports-certification-twitter.jpg"],
  },
  alternates: {
    canonical: "https://testriq.com/fantasy-sports-app-certification",
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

export default function FantasySportsAppCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEOHead
        title="Fantasy Sports App Certification | Testriq QA Lab"
        description="Get your fantasy sports app certified with comprehensive testing covering security, fair play, regulatory compliance, and performance optimization. Trusted by 200+ fantasy platforms worldwide."
        keywords="fantasy sports app certification, daily fantasy sports testing, fantasy app security, DFS compliance, fantasy sports quality assurance"
        canonicalUrl="https://testriq.com/fantasy-sports-app-certification"
      />
      {children}
    </>
  );
}

