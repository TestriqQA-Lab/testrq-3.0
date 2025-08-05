"use client";

import Link from "next/link";
import React from "react";
import {
  FaMobile,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaSync,
  FaApple,
  FaFlask,
} from "react-icons/fa";

const MobileComprehensive: React.FC = () => {
  const testingServices = [
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Functional Testing",
      description:
        "Comprehensive functionality testing of all mobile app features, user flows, and interactions across iOS and Android devices — including software UI testing and API validation.",
      features: [
        "Feature validation",
        "User flow testing",
        "Data synchronization",
        "API integration testing",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Testing",
      description:
        "Thorough security assessment to protect your mobile apps from vulnerabilities and ensure data protection compliance.",
      features: [
        "Penetration testing",
        "Data encryption validation",
        "Authentication testing",
        "OWASP compliance",
      ],
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Performance Testing",
      description:
        "Optimize your mobile app's performance under various network conditions, device configurations, and user loads.",
      features: [
        "Load testing",
        "Battery usage analysis",
        "Memory optimization",
        "Network performance",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Usability Testing",
      description:
        "Ensure your mobile app delivers intuitive user journeys with usability testing, accessibility checks, and UI interaction validation across user personas and use cases.",
      features: [
        "UX/UI testing",
        "Accessibility compliance",
        "User journey optimization",
        "Touch interaction testing",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Compatibility Testing",
      description:
        "Verify mobile app compatibility across devices, OS versions, screen sizes, and orientations with full-cycle testing for cross-platform mobile environments.",
      features: [
        "Device compatibility",
        "OS version testing",
        "Screen resolution testing",
        "Orientation testing",
      ],
    },
    {
      icon: <FaSync className="w-8 h-8" />,
      title: "Automation Testing",
      description:
        "Implement mobile test automation with CI/CD pipelines. Our QA team builds automated suites for iOS, Android, and cross-platform apps using tools like Appium.",
      features: [
        "Automated regression",
        "CI/CD integration",
        "Cross-platform automation",
        "Continuous testing",
      ],
    },
  ];
  const scrollToProcess = () => {
    document.querySelector("#mobile-process-section")?.scrollIntoView({
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
            Complete Mobile Application{" "}
            <span className="text-[theme(color.brand.blue)]">
              Testing Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From functional validation to performance optimization, our
            comprehensive mobile testing services ensure your applications
            deliver exceptional user experiences across all devices and
            platforms.
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

        {/* Platform Support */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Platform & Device Coverage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iOS Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">
                    <FaApple width={4} height={4} />
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  iOS Testing
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iPhone (6s to 15 Pro Max)</li>
                    <li>• iPad (Air, Pro, Mini)</li>
                    <li>• Apple Watch</li>
                    <li>• Apple TV</li>
                  </ul>
                </div>
                <div>
                  <strong>iOS Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iOS 12.0 - 17.x</li>
                    <li>• iPadOS 13.0 - 17.x</li>
                    <li>• watchOS 6.0 - 10.x</li>
                    <li>• tvOS 13.0 - 17.x</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Android Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Android Testing
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Samsung Galaxy Series</li>
                    <li>• Google Pixel Series</li>
                    <li>• OnePlus, Xiaomi, Huawei</li>
                    <li>• Tablets & Foldables</li>
                  </ul>
                </div>
                <div>
                  <strong>Android Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Android 7.0 - 14.0</li>
                    <li>• Custom ROMs</li>
                    <li>• Wear OS</li>
                    <li>• Android TV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Ensure Your Mobile App&apos;s Quality?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a comprehensive testing strategy tailored to your mobile
              application&apos;s specific needs and target audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us">
                <button className="px-8 py-3 cursor-pointer bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors">
                  Start Free Consultation
                </button>
              </Link>
              <button
                onClick={scrollToProcess}
                className="cursor-pointer px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
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

export default MobileComprehensive;
