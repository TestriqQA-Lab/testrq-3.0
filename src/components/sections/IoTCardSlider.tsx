"use client";

import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const IoTCardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: "Device Functionality Testing",
      description:
        "Comprehensive validation of IoT device functionality, features, and user interactions.",
      features: [
        "Device feature validation",
        "User interface testing",
        "Sensor accuracy testing",
        "Actuator response validation",
      ],
      highlight: "99.9% functionality coverage",
    },
    {
      title: "Connectivity & Protocol Testing",
      description:
        "Ensure your IoT devices communicate reliably across all supported protocols and networks.",
      features: [
        "Wireless protocol testing",
        "Network connectivity validation",
        "Data transmission testing",
        "Protocol compliance verification",
      ],
      highlight: "100% protocol compliance",
    },
    {
      title: "Security & Privacy Testing",
      description:
        "Comprehensive security assessment to protect your IoT devices from threats and vulnerabilities with robust encryption and privacy protocols.",
      features: [
        "Device authentication testing",
        "Data encryption validation",
        "Vulnerability assessment",
        "Privacy protection testing",
      ],
      highlight: "Zero security vulnerabilities",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              IoT Testing Types
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing approaches ensure your IoT devices meet the
            highest standards of functionality, connectivity, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">
                  {type.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheckCircle className="w-4 h-4 text-[theme(color.brand.blue)] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="flex items-center text-[theme(color.brand.blue)] font-semibold hover:text-blue-400 transition-colors duration-300">
                <span>Learn More</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact-us">
            <button className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
              Get Comprehensive IoT Testing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IoTCardSlider;
