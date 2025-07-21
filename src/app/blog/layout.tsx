import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Testriq Blog",
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
  metadataBase: new URL("https://testriq.com"),
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
      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Testriq Software Testing Blog",
            description:
              "Expert insights on test automation, performance testing, security testing, mobile app testing, and quality assurance best practices.",
            url: "https://testriq.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Testriq",
              logo: {
                "@type": "ImageObject",
                url: "https://testriq.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://testriq.com/blog",
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline:
                  "Complete Guide to Test Automation with Selenium WebDriver in 2025",
                description:
                  "Master Selenium WebDriver with our comprehensive guide covering setup, best practices, advanced techniques, and real-world examples.",
                author: {
                  "@type": "Person",
                  name: "Sarah Johnson",
                },
                datePublished: "2025-01-15",
                dateModified: "2025-01-15",
                url: "https://testriq.com/blog/selenium-webdriver-guide-2025",
              },
              {
                "@type": "BlogPosting",
                headline:
                  "Performance Testing Best Practices: Load Testing with JMeter",
                description:
                  "Learn how to conduct effective performance testing using Apache JMeter for optimal application performance.",
                author: {
                  "@type": "Person",
                  name: "Mike Chen",
                },
                datePublished: "2025-01-12",
                dateModified: "2025-01-12",
                url: "https://testriq.com/blog/performance-testing-jmeter",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Testriq",
            url: "https://testriq.com",
            logo: "https://testriq.com/logo.png",
            description:
              "Leading software testing and quality assurance services provider specializing in test automation, performance testing, and comprehensive QA solutions.",
            sameAs: [
              "https://twitter.com/testriq",
              "https://linkedin.com/company/testriq",
              "https://github.com/testriq",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-0123",
              contactType: "customer service",
              availableLanguage: "English",
            },
          }),
        }}
      />

      {/* JSON-LD for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Testriq Blog",
            url: "https://testriq.com/blog",
            description:
              "Expert insights on software testing, test automation, and quality assurance best practices.",
            publisher: {
              "@type": "Organization",
              name: "Testriq",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://testriq.com/blog/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* JSON-LD for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://testriq.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://testriq.com/blog",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}
