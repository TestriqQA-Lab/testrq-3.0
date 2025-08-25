import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const renderTitle = () => {
  const titleParts = ctaSection.title.split("Questions");
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">Questions</span>
      {titleParts[1]}
    </>
  );
};

const ctaSection = {
  title: "Still Have Questions?",
  subtitle:
    "Our web application testing experts are here to help. Get in touch with us for personalized answers to your specific testing requirements.",
  primaryButton: {
    label: "Contact Our Experts",
    href: "/contact-us",
  },
};

const WebappProvenTestingProcess = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 text-center bg-[theme(color.background.gray)]">
      <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
      <p className="mt-4 text-gray-500 text-base sm:text-lg">
        {ctaSection.subtitle}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Button */}
        <Link
          href={ctaSection.primaryButton.href}
          className="inline-flex items-center px-6 py-3 gap-2 rounded-md ring-sky-400 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white text-sm font-medium"
        >
          {ctaSection.primaryButton.label}
          <FaArrowRight className="text-xs" />
        </Link>
        {/* <button className="inline-flex items-center px-6 py-3 gap-2 rounded-md bg-brand-blue hover:bg-sky-700 text-white transition duration-300 cursor-pointer text-sm font-medium">
          Download Our Guide
        </button> */}
      </div>
    </section>
  );
};

export default WebappProvenTestingProcess;
