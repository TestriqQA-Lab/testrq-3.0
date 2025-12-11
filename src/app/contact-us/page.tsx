import React from "react";
import { Metadata } from "next";
import StructuredData, {
  contactUsPageSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";

const ContactHeroSection = dynamic(
  () => import("@/components/sections/ContactHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactMethodsSection = dynamic(
  () => import("@/components/sections/ContactMethodsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactFAQSection = dynamic(
  () => import("@/components/sections/ContactFAQSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactOfficeSection = dynamic(
  () => import("@/components/sections/ContactOfficeSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Contact Us Testriq QA Lab | Software Testing Services",
  description:
    "Get in touch with Testriq QA Lab for expert software testing services. Reach out for project inquiries, careers, or collaborations. We respond quickly & securely.",
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
    "software testing company contact",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
 metadataBase: new URL('https://www.testriq.com/'),
 alternates: {
  canonical: 'https://www.testriq.com/contact-us',
  },
  openGraph: {
    title: "Contact Us | Get in Touch with Testriq QA Experts",
    description: "Reach out to Testriq for your QA and software testing needs.",
    type: "website",
    url: "https://www.testriq.com/contact-us",
    images: [
      {
        url: "/OG/Contact-Us-Og.webp",
        width: 1200,
        height: 630,
        alt: "Testriq Contact Us OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch with Testriq QA Experts",
    description: "Reach out to Testriq for your QA and software testing needs.",
    images: [
      {
        url: "/OG/Contact-Us-Twitter.webp",
        width: 1200,
        height: 675,
        alt: "Testriq Contact Us Twitter Image",
      },
    ],
  },
};

const ContactUsPage: React.FC = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/contact-us" },
    { name: "Contact Us", url: "https://www.testriq.com/contact-uss" },
  ];
  return (
    <div className="scroll-smooth">
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
