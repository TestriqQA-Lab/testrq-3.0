"use client";

import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWifi,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaComments,
  FaSignal,
} from "react-icons/fa";

const TelecomContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone Consultation",
      description: "Speak directly with our telecom software QA specialists",
      contact: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      availability: "24/7 Critical Issue Response",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description:
        "Get detailed responses to your telecom software testing needs",
      contact: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      availability: "Response within 1 hour",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaCalendarAlt,
      title: "Schedule Meeting",
      description: "Book a tailored telecom software quality assessment",
      contact: "Schedule Now",
      action: "/contact-us#calendly-section",
      availability: "Flexible scheduling worldwide",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const supportFeatures = [
    {
      icon: FaWifi,
      title: "Telecom Software Expertise",
      description:
        "Access experts in OSS/BSS testing, billing systems, portals, and telecom apps",
    },
    {
      icon: FaClock,
      title: "Rapid Issue Resolution",
      description:
        "Round-the-clock assistance for urgent software bugs and performance issues",
    },
    {
      icon: FaUsers,
      title: "Global QA Team",
      description:
        "Specialists available in major telecom markets to support your releases",
    },
    {
      icon: FaCheckCircle,
      title: "Proven Track Record",
      description:
        "Successful validation of telecom software systems for leading providers",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaComments className="w-4 h-4" />
            <span className="text-sm">Get In Touch</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your
            <span className="block text-[theme(color.brand.blue)]">
              Telecom Software Quality?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our telecom software QA experts to address platform
            performance, application reliability, integration challenges, and
            ensure your OSS/BSS systems, customer portals, and billing platforms
            deliver flawless user experiences.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <method.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {method.description}
              </p>

              <div className="bg-white bg-opacity-60 rounded-xl p-4 mb-4">
                <p className="font-semibold text-gray-800">{method.contact}</p>
                <p className="text-sm text-gray-600">{method.availability}</p>
              </div>

              <button
                onClick={
                  method.action
                    ? () => (window.location.href = method.action)
                    : undefined
                }
                className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Now
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our telecom software testing
                specialists will get back to you within 1 hour.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                    placeholder="john.doe@telecom.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                    placeholder="Your Telecom Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testing Requirements
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300">
                    <option>Select your primary need</option>
                    <option>OSS/BSS Testing</option>
                    <option>Billing Platform Validation</option>
                    <option>Customer Portal & App Testing</option>
                    <option>API & Integration Testing</option>
                    <option>Performance & Load Testing</option>
                    <option>Security & Compliance Testing</option>
                    <option>Comprehensive Software QA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                    placeholder="Please describe your telecom software testing requirements, performance goals, and any specific platforms you are working with..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-98 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Support Features */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our QA Support?
              </h3>
              <div className="space-y-6 mb-8">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Critical Software Issue Support
                </h4>
                <p className="text-gray-600 mb-4">
                  For urgent software outages, severe bugs, or platform
                  performance degradation, our emergency response team is
                  available 24/7 to provide immediate assistance and rapid
                  resolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaSignal className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Start Your Telecom Software QA Journey Today
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for software glitches to affect your customers.
            Contact our QA team now to discuss how we can help ensure flawless
            performance, integration, and security across your telecom
            platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Get Free QA Consultation
              </button>
            </Link>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Service Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomContactSection;
