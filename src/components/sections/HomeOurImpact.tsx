import React from "react";
import { FaArrowRight } from "react-icons/fa";

const renderTitle = () => {
        const titleParts = impactSection.title.split('Real-World Successes');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Real-World Successes</span>
                {titleParts[1]}
            </>
        );
    };

const impactSection = {
  title: "Our Impact: Real-World Successes",
  subtitle:
    "Discover how Testriq has helped clients achieve their software quality goals and overcome complex QA challenges.",
  caseStudies: [
    {
      title: "E-commerce Performance Boost",
      badge: "30% faster load times",
      description:
        "Reduced page load times by 30% for a leading e-commerce client through comprehensive performance testing.",
    },
    {
      title: "Mobile Banking Security",
      badge: "Zero security incidents",
      description:
        "Identified and mitigated critical vulnerabilities for a mobile banking application through thorough security audit and security testing.",
    },
    {
      title: "Smart Home Compatibility",
      badge: "100% compatibility",
      description:
        "Ensured seamless compatibility and functionality for a new line of smart home devices across various operating systems.",
    },
  ],
};

const HomeOurImpact = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          {impactSection.subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {impactSection.caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="bg-white ring-sky-200 ring-2 rounded-lg shadow-sm p-6 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl hover:-translate-y-2"
          >
            <h3 className="text-xl mb-2">{study.title}</h3>
            <span className="inline-block text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full mb-3">
              {study.badge}
            </span>
            <p className="text-gray-500 text-sm py-2">{study.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2  px-5 py-2.5 rounded-md text-sm font-medium ring-sky-00 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white">
          View All Case Studies
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </section>
  );
};

export default HomeOurImpact;
