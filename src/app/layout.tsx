import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Import the new component

const Navbar = dynamic(
  () => import("@/components/layout/Header"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const Footer = dynamic(
  () => import("@/components/layout/Footer"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

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
    template: "%s",
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
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"  ),
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
}>  ) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased bg-[theme(color.background.gray)]`}
        >
          <GoogleAnalytics /> {/* Render the GoogleAnalytics component here */}
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* <TawkToScript /> */}

        </body>
      </html>
  );
}
