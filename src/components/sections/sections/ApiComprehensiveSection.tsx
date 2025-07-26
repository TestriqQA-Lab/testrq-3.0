"use client";

import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaCogs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

const ApiComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "REST API Testing",
      description:
        "Comprehensive testing of RESTful APIs including endpoint validation, HTTP methods, status codes, and response data verification.",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "SOAP API Testing",
      description:
        "Complete SOAP web service testing including WSDL validation, XML schema verification, and protocol compliance testing.",
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "GraphQL Testing",
      description:
        "Advanced GraphQL API testing including query validation, mutation testing, subscription handling, and schema verification.",
    },
    {
      icon: <MdSpeed className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Performance Testing",
      description:
        "Load testing, stress testing, and scalability assessment to ensure your APIs perform under high traffic conditions.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Security Testing",
      description:
        "Comprehensive security assessment including authentication, authorization, injection attacks, and data exposure vulnerabilities.",
    },
    {
      icon: <FaCloud className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Microservices Testing",
      description:
        "End-to-end testing of microservices architecture including service communication, data consistency, and fault tolerance.",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">
              Comprehensive
            </span>{" "}
            API Testing Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our expert team provides end-to-end API testing solutions to ensure
            your applications communicate flawlessly, perform optimally, and
            maintain the highest security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiComprehensiveSection;
