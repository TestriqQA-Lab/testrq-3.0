"use client";

import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaComments,
} from "react-icons/fa";

const BankingContactSection: React.FC = () => {
  const contactOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule Consultation",
      description:
        "Book a free 30-minute consultation with our Banking testing experts",
      detail: "",
      text: "Schedule Now",
      action: "/contact-us",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaPhone,
      title: "Speak with Expert",
      description:
        "Get immediate answers from our Banking compliance specialists",
      detail: "(+91) 915-2929-343",
      text: "Call Now",
      action: "tel:(+91) 915-2929-343",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaEnvelope,
      title: "Request Proposal",
      description:
        "Get a detailed proposal and quote for your Banking testing needs",
      detail: "contact@testriq.com",
      text: "Get Quote",
      action: "mailto:contact@testriq.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const supportFeatures = [
    {
      icon: FaShieldAlt,
      title: "Secure Communication",
      description: "All communications are encrypted and confidential",
    },
    {
      icon: FaClock,
      title: "Rapid Response",
      description: "Emergency support available 24/7 for critical issues",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Direct access to senior banking testing consultants",
    },
    {
      icon: FaCheckCircle,
      title: "Compliance Ready",
      description: "All discussions maintain regulatory compliance standards",
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
            Ready to Secure Your
            <span className="block text-[theme(color.brand.blue)]">
              Banking Platform?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our banking and finance testing experts to discuss your
            specific QA requirements, regulatory compliance needs (including PCI
            DSS, SOX, and GDPR), and how our security-focused testing solutions
            can help strengthen your financial institution’s security posture,
            reduce operational risks, and ensure application reliability.
          </p>
        </div>

        {/* Contact Methods */}
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className={`${option.bgColor} ring-1 ring-brand-blue rounded-3xl p-8 text-center hover:shadow-lg hover:ring-3 transition-all duration-300 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {option.description}
              </p>
              <h3 className="text-gray-900 mb-3">{option.detail}</h3>
              <Link href={option.action}>
                <button
                  className={`bg-gradient-to-r ${option.color} cursor-pointer text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto group`}
                >
                  {option.text}
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
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
                Fill out the form below and our banking testing experts will get
                back to you within 2 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[theme(color.brand.blue)] focus:ring-2 focus:outline-none transition-all duration-300"
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
                    placeholder="john.doe@bank.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Institution *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                    placeholder="Your Financial Institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testing Requirements
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300">
                    <option>Select your primary need</option>
                    <option>Security Testing</option>
                    <option>Compliance Testing</option>
                    <option>Performance Testing</option>
                    <option>Mobile Banking QA</option>
                    <option>Core Banking Testing</option>
                    <option>API Testing</option>
                    <option>Comprehensive Testing Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                    placeholder="Please describe your testing requirements, compliance needs, and any specific challenges you're facing..."
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
                Why Choose Our Support?
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
                  Emergency Support Available
                </h4>
                <p className="text-gray-600 mb-4">
                  For critical security incidents or urgent compliance issues,
                  our emergency response team is available 24/7 to provide
                  immediate assistance.
                </p>
                <Link href="tel:+91 90049 88859">
                  <button className="bg-red-600 cursor-pointer text-white px-6 py-3 mb-5 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300">
                    Emergency Hotline: +91 90049 88859
                  </button>
                </Link>
                <Link href="tel:+91 98206 80665">
                  <button className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300">
                    Emergency Hotline: +91 98206 80665
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Your Banking Testing Journey Today
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for a security breach or compliance failure. Contact
            our experts now to discuss how we can help secure and optimize your
            banking platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us#calendly-section">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Get Free Consultation
              </button>
            </Link>
            <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Service Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingContactSection;
