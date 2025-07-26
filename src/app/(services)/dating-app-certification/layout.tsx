import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dating App Trust Certification | TESTRIQ QA Lab - Build User Trust & Safety",
  description: "Get your dating app certified for trust, safety, and security. TESTRIQ QA Lab provides comprehensive audits for identity verification, user safety, content moderation, and data privacy. Boost downloads and user retention with our trust certification.",
  keywords: [
    "dating app certification",
    "dating app security audit",
    "dating app compliance",
    "GDPR dating app",
    "dating app privacy",
    "app store optimization dating",
    "dating app trust badge",
    "online dating security",
    "dating platform certification",
    "romance scam prevention",
    "fake profile detection",
    "dating app penetration testing",
    "ISO 27001 dating app",
    "SOC 2 dating platform",
    "CCPA compliance dating",
    "dating app user safety",
    "content moderation dating",
    "identity verification dating",
    "dating app fraud prevention",
    "secure dating platform",
    "dating app QA testing",
    "TESTRIQ QA Lab",
    "matchmaking algorithm fairness",
    "dating app user protection"
  ],
  authors: [{ name: "TESTRIQ QA Lab" }],
  creator: "TESTRIQ QA Lab",
  publisher: "TESTRIQ QA Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testriq.com"),
  alternates: {
    canonical: "/dating-app-certification",
  },
  openGraph: {
    title: "Dating App Trust Certification | TESTRIQ QA Lab",
    description: "Build trust, boost downloads, and keep users safe with our comprehensive dating app certification program. Expert QA audits for identity verification, safety controls, and privacy compliance.",
    url: "/dating-app-certification",
    siteName: "TESTRIQ QA Lab",
    images: [
      {
        url: "/og-dating-certification.jpg",
        width: 1200,
        height: 630,
        alt: "Dating App Trust Certification by TESTRIQ QA Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating App Trust Certification | TESTRIQ QA Lab",
    description: "Build trust, boost downloads, and keep users safe with our comprehensive dating app certification program.",
    images: ["/og-dating-certification.jpg"],
    creator: "@TestriqQA",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function DatingAppCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Dating App Trust Certification',
            description: 'Comprehensive security audit and certification service for dating applications',
            provider: {
              '@type': 'Organization',
              name: 'TESTRIQ QA Lab',
              url: 'https://testriq.com',
              logo: 'https://testriq.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9004988859',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
            },
            serviceType: 'Software Testing and Security Audit',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Dating App Certification Plans',
              itemListElement: [
                {
                  '@type': 'Offer',
                  name: 'Starter Certification',
                  description: 'Basic security audit and trust badge for MVP and early-stage dating apps',
                  price: '2999',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Professional Certification',
                  description: 'Advanced certification with identity verification and real-time monitoring',
                  price: '7999',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Enterprise Certification',
                  description: 'Complete certification with penetration testing and custom compliance',
                  price: '19999',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does the dating app certification process take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The certification timeline varies by tier: Starter (2-3 weeks), Professional (3-4 weeks), and Enterprise (4-6 weeks). We provide regular updates throughout the process.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens if my dating app doesn\'t pass the initial audit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide detailed remediation guidance and work with your team to address any issues. Our goal is to help you achieve certification, not to fail you.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is the dating app certification recognized internationally?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, our certification is recognized globally and helps with compliance in major markets including US, EU, India, and APAC regions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide ongoing support after dating app certification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! We offer quarterly reviews, ongoing monitoring, and priority support to ensure your app maintains its security standards.',
                },
              },
            ],
          }),
        }}
      />
      
      {/* Performance and Analytics */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {children}
    </>
  );
}

