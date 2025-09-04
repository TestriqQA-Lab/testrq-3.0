"use client";

import Link from "next/link";
import React from "react";
import {
  FaDesktop,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaSync,
  FaFlask,
} from "react-icons/fa";

const DesktopComprehensive: React.FC = () => {
  const testingServices = [
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: (<><Link href='blog/post/functional-regression-testing-for-desktop-apps-ensuring-quality-at-every-update'>Functional Testing</Link></>),
      description:
        (<>Comprehensive testing of all desktop application features, workflows, and user interactions to ensure everything works as intended. Our <Link href='software-testing-guide'>software testing</Link> for desktop apps ensures complete validation across modules.</>),
      features: [
        "Feature validation",
        "Workflow testing",
        "Data integrity",
        "Business logic verification",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: (<><Link href='security-testing'>Security Testing</Link></>),
      description:
        "Thorough security assessment to protect your desktop applications from vulnerabilities and ensure data protection.",
      features: [
        "Vulnerability scanning",
        "Data encryption testing",
        "Access control validation",
        "Security compliance",
      ],
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: (<><Link href='performance-testing-services'>Performance Testing</Link></>),
      description:
        "Optimize your desktop application's performance under various load conditions and system configurations.",
      features: [
        "Load testing",
        "Stress testing",
        "Memory usage analysis",
        "CPU optimization",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: (<><Link href='blog/post/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates'>Usability Testing</Link></>),
      description:
        "Ensure your desktop application provides an intuitive and user-friendly experience across different user personas.",
      features: [
        "User experience testing",
        "Interface design validation",
        "Accessibility compliance",
        "User journey optimization",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: (<><Link href='blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa'>Compatibility Testing</Link></>),
      description:
        "Verify your desktop application works seamlessly across different operating systems, versions, and hardware configurations.",
      features: [
        "OS compatibility",
        "Hardware compatibility",
        "Version testing",
        "Environment validation",
      ],
    },
    {
      icon: <FaSync className="w-8 h-8" />,
      title: (<><Link href='blog/post/risk-based-regression-testing-smarter-test-optimization'>Regression Testing</Link></>),
      description:
        "Ensure new updates and changes don't break existing functionality with comprehensive regression testing suites.",
      features: [
        "Automated regression",
        "Change impact analysis",
        "Version comparison",
        "Continuous testing",
      ],
    },
  ];
  const scrollToProcess = () => {
    document.querySelector("#desktop-process-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Desktop Application{" "}
            <span className="text-[theme(color.brand.blue)]">
              Testing Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From functional validation to performance optimization, our
            comprehensive desktop testing services ensure your applications
            deliver exceptional <Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>user experiences</Link> across all platforms and
            environments, including enterprise <Link href='blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance'>desktop testing</Link> needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 text-[theme(color.brand.blue)]">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Ensure Your Desktop App&apos;s Quality?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a comprehensive testing strategy tailored to your desktop
              application&apos;s specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us">
                <button className="px-8 py-3 cursor-pointer bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors">
                  Start Free Consultation
                </button>
              </Link>
              <button
                onClick={scrollToProcess}
                className="px-8 py-3 border cursor-pointer border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Testing Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopComprehensive;
