import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TawkToScript from "@/components/TawkToScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Software Testing Company in Mumbai India | Testriq",
    template: "%s | Testriq",
  },
  description:
    "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.",
  keywords: [
    "software testing",
    "QA services",
    "web application testing",
    "mobile app testing",
    "API testing",
    "automation testing",
    "quality assurance",
    "testing services",
    "software quality",
    "test automation",
    "software testing company",
    "testing companies in india",
    "best software testing companies in india",
    "top software testing companies",
    "qa india",
    "software testing services india",
    "testing qa",
    "test company",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/",
    siteName: "Testriq - Professional Software Testing Services",
    title: "Testriq - Professional Software Testing Services | QA Solutions",
    description:
      "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.",
    images: [
      {
        url: "/OG/testriq-qa-lab-llp-og-img.webp",
        width: 1200,
        height: 630,
        alt: "Testriq - Professional Software Testing Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Testriq - Professional Software Testing Services | QA Solutions",
    description:
      "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.",
    images: ["/OG/testriq-qa-lab-llp-twitter-img.webp"],
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
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="canonical" href="https://www.testriq.com/" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Local Business Schema for Mumbai location */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Testriq QA Lab LLP",
              "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing services.",
              "url": "https://www.testriq.com/",
              "telephone": "+91-9876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Address",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://twitter.com/testriq",
                "https://www.linkedin.com/company/testriq"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased bg-[theme(color.background.gray)]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <TawkToScript />
      </body>
    </html>
  );
}
