import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimonial Apps Certification | Secure & Trusted Platform Testing | Testriq",
  description: "Get your matrimonial app certified with comprehensive security, privacy, and quality assurance testing. ISO 27001, GDPR compliance, and ISTQB standards. Trusted by leading matrimonial platforms.",
  keywords: [
    "matrimonial app certification",
    "matrimonial app security",
    "dating app privacy certification",
    "mobile app quality assurance",
    "ISO 27001 certification for apps",
    "GDPR compliance for dating apps",
    "secure matrimonial platform",
    "app testing services",
    "user trust in dating apps",
    "online matchmaking security",
    "certified dating app",
    "app verification process",
    "data protection for matrimonial apps",
    "QA for dating applications",
    "mobile app security testing",
    "app certification standards",
    "matrimonial platform testing",
    "wedding app security",
    "matchmaking app certification",
    "relationship app quality assurance"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testriq.com/'),
  alternates: {
    canonical: '/services/matrimonial-apps-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/services/matrimonial-apps-certification',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Matrimonial Apps Certification | Secure & Trusted Platform Testing | Testriq',
    description: 'Get your matrimonial app certified with comprehensive security, privacy, and quality assurance testing. ISO 27001, GDPR compliance, and ISTQB standards. Trusted by leading matrimonial platforms.',
    images: [
      {
        url: '/og/matrimonial-apps-certification-og.webp',
        width: 1200,
        height: 630,
        alt: 'Matrimonial Apps Certification - Secure & Trusted Platform Testing',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Matrimonial Apps Certification | Secure & Trusted Platform Testing | Testriq',
    description: 'Get your matrimonial app certified with comprehensive security, privacy, and quality assurance testing. ISO 27001, GDPR compliance, and ISTQB standards.',
    images: ['/og/matrimonial-apps-certification-og.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MatrimonialAppsCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

