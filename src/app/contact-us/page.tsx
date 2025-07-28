import React from "react";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactMethodsSection from "@/components/sections/ContactMethodsSection";
import ContactFAQSection from "@/components/sections/ContactFAQSection";
import ContactOfficeSection from "@/components/sections/ContactOfficeSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us Testriq QA Lab | Software Testing Services",
  description: "Get in touch with Testriq QA Lab for expert software testing services. Reach out for project inquiries, careers, or collaborations. We respond quickly & securely.",
  keywords: [
    "contact Testriq",
    "QA consultation",
    "software testing support",
    "schedule QA call",
    "QA expert contact",
    "Testriq support",
    "software QA consultation",
    "test automation support",
    "contact software testers",
    "software testing company contact"
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
    canonical: 'https://testriq.com/contact-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/contact-us',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Contact Us | Get in Touch with Testriq QA Experts | Testriq',
    description: 'Reach out to Testriq for expert QA consultations, support, or partnerships. Call, email, chat, or schedule a meeting with our certified software testing specialists.',
    images: [
      {
        url: '/og/testriq-contact-page-og-img.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Testriq QA Experts',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Contact Us | Get in Touch with Testriq QA Experts | Testriq',
    description: 'Reach out to Testriq for expert QA consultations, support, or partnerships. Call, email, chat, or schedule a meeting with our certified software testing specialists.',
    images: ['/og/testriq-contact-page-og-img.webp'],
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
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
  },
};

export const contactUsPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "url": "https://testriq.com/contact",
  "description": "Reach out to Testriq QA Lab for expert QA consultation, project inquiries, support requests, or partnership opportunities. Get in touch via call, email, video consultation, or schedule a meeting.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "https://testriq.com",
    "logo": "https://testriq.com/images/Testriq_Logo.png",
    "email": "contact@testriq.com",
    "telephone": "+91-915-2929-343",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East",
      "addressLocality": "Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91-915-2929-343",
        "email": "contact@testriq.com",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "telephone": "+91-915-2929-343",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  }
};




const ContactUsPage: React.FC = () => {
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/contact-us" },
    { name: "Contact Us", url: "https://testriq.com/contact-uss" }
  ];
  return (
    <div>
         <StructuredData data={contactUsPageSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-gray-50">
      <ContactHeroSection />
      <ContactMethodsSection />
      <ContactFAQSection />
      <ContactOfficeSection />
    </main>
    </div>
  );
};

export default ContactUsPage;

