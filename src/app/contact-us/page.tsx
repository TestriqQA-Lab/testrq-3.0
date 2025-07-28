import React from "react";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactMethodsSection from "@/components/sections/ContactMethodsSection";
import ContactFAQSection from "@/components/sections/ContactFAQSection";
import ContactOfficeSection from "@/components/sections/ContactOfficeSection";

export const metadata = {
  title: "Contact Us | Get in Touch with Testriq QA Experts",
  description: "Reach out to Testriq for your QA and software testing needs. Contact us via form, email, phone, or schedule a meeting with our experts.",
  keywords: "contact us, Testriq contact, QA contact, software testing contact, schedule meeting, Calendly integration",
  openGraph: {
    title: "Contact Us | Get in Touch with Testriq QA Experts",
    description: "Reach out to Testriq for your QA and software testing needs.",
    type: "website",
    url: "https://testriq.com/contact-us",
    images: [
      {
        url: "/OG/og_image_final.png",
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
        url: "/OG/twitter_image_final.png",
        width: 1200,
        height: 675,
        alt: "Testriq Contact Us Twitter Image",
      },
    ],
  },
};

const ContactUsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactHeroSection />
      <ContactMethodsSection />
      <ContactFAQSection />
      <ContactOfficeSection />
    </main>
  );
};

export default ContactUsPage;

