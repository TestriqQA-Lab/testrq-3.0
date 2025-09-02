import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "",
    default:
      "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
  },
  description:
    "Discover expert insights on test automation, performance testing, security testing, mobile app testing, and quality assurance best practices to accelerate your testing excellence.",
  keywords: [
    "software testing",
    "test automation",
    "quality assurance",
    "QA testing",
    "selenium testing",
    "performance testing",
    "security testing",
    "mobile testing",
    "API testing",
    "testing best practices",
    "testing tutorials",
    "testing frameworks",
    "testing tools",
    "automation testing",
    "manual testing",
  ],
  authors: [{ name: "Testriq QA Team" }],
  creator: "Testriq",
  publisher: "Testriq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com"),
  alternates: {
    canonical: "/blog",
    languages: {
      "en-US": "/blog",
    },
  },
  openGraph: {
    title:
      "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
    description:
      "Discover expert insights on test automation, performance testing, security testing, mobile app testing, and quality assurance best practices.",
    url: "/blog",
    siteName: "Testriq Blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/placeholder/1200/630",
        width: 1200,
        height: 630,
        alt: "Testriq Software Testing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
    description:
      "Discover expert insights on test automation, performance testing, security testing, mobile app testing, and quality assurance best practices.",
    creator: "@testriq",
    images: ["/api/placeholder/1200/630"],
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>


      {children}
    </>
  );
}
