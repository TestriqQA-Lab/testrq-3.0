import React from "react";
import { FaArrowRight } from "react-icons/fa";

const renderTitle = () => {
  const titleParts = ctaSection.title.split("Web App's Quality?");
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">Web App&apos;s Quality?</span>
      {titleParts[1]}
    </>
  );
};

const ctaSection = {
  title: "Ready to Ensure Your Web App's Quality?",
  subtitle:
    "Get a comprehensive testing strategy tailored to your web application's specific needs and requirements.",
  primaryButton: {
    label: "Get Free Consultation",
    href: "#",
  },
};

const WebappReadyToEnsureQuality = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 text-center bg-white">
      <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
      <p className="mt-4 text-gray-500 text-base sm:text-lg">
        {ctaSection.subtitle}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Button */}
        <a
          href={ctaSection.primaryButton.href}
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[theme(color.brand.blue)] transition rounded-md text-sm font-medium"
        >
          {ctaSection.primaryButton.label}
          <FaArrowRight className="text-xs" />
        </a>
      </div>
    </section>
  );
};

export default WebappReadyToEnsureQuality;
