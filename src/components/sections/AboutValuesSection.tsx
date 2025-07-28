import React from "react";
import {
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaGem,
} from "react-icons/fa";

const AboutValuesSection = () => {
  const coreValues = [
    {
      icon: FaShieldAlt,
      title: "Quality First",
      description:
        "We never compromise on quality. Every test case, every bug report, every recommendation is crafted with meticulous attention to detail.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge testing methodologies and tools, constantly evolving to meet the demands of modern software development.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "Honest communication, transparent processes, and ethical practices form the foundation of every client relationship we build.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: FaRocket,
      title: "Excellence",
      description:
        "We strive for excellence in every project, pushing boundaries to deliver results that exceed expectations and drive business success.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, working closely with our clients as partners to achieve shared goals and mutual success.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: FaGem,
      title: "Precision",
      description:
        "Every detail matters. Our systematic approach ensures comprehensive coverage and precise execution in all testing activities.",
      gradient: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Core Values
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What We{" "}
            <span className="text-[theme(color.brand.blue)]">Stand For</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our values define who we are as a quality assurance partner. For
            decades, we&apos;ve shaped global QA strategies, built trusted
            relationships, and delivered performance-driven software testing
            solutions that scale with business growth.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Building a Culture of{" "}
                <span className="text-[theme(color.brand.blue)]">
                  Excellence
                </span>
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Our values aren&apos;t just words on a wall—they guide daily
                actions, strategic decisions, and quality-first delivery across
                our software QA services.
              </p>
              <div className="space-y-4">
                {[
                  "Continuous learning and professional development",
                  "Open communication and knowledge sharing",
                  "Recognition and celebration of achievements",
                  "Work-life balance and employee well-being",
                  "Diversity, inclusion, and equal opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: "98%", label: "Employee Satisfaction" },
                { metric: "5+", label: "Avg. Years Tenure" },
                { metric: "40+", label: "Certifications Held" },
                { metric: "100%", label: "Remote Work Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-700 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
