import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    default: "Testriq - Professional Software Testing Services | QA Solutions",
    template: "%s | Testriq"
  },
  description: "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.",
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
    "test automation"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab",
  publisher: "Testriq QA Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testrq-3-0.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testrq-3-0.vercel.app',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Testriq - Professional Software Testing Services | QA Solutions',
    description: 'Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.',
    images: [
      {
        url: '/og/testriq-qa-lab-llp-og-img.webp',
        width: 1200,
        height: 630,
        alt: 'Testriq - Professional Software Testing Services',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    
    site: '@testriq',
    creator: '@testriq',
    title: 'Testriq - Professional Software Testing Services | QA Solutions',
    description: 'Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation. Ensure quality with expert testing solutions.',
    images: ['/og/testriq-qa-lab-llp-og-img.webp'],
    
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased bg-[theme(color.background.gray)]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
