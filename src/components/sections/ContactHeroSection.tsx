"use client";

import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaComments,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const ContactHeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    urgency: "normal",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const quickContactMethods = [
    {
      icon: FaPhone,
      label: "Call Now",
      value: "+1 (555) 012-3456",
      action: "tel:+15550123456",
      color: "bg-green-500",
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "hello@testriq.com",
      action: "mailto:hello@testriq.com",
      color: "bg-blue-500",
    },
    {
      icon: FaCalendarAlt,
      label: "Schedule Meeting",
      value: "Book a Call",
      action: "#calendly-section",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="relative bg-white py-8 lg:py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[theme(color.brand.blue)] to-sky-600 opacity-10 rounded-full transform translate-x-48 -translate-y-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400 to-sky-600 opacity-10 rounded-full transform -translate-x-32 translate-y-32 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
                <FaComments className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let&apos;s Connect and
                <span className="block text-[theme(color.brand.blue)]">
                  Build Together
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Connect with our QA experts for software testing consultation, support, or partnerships. Achieve quality excellence with our automation, manual, and performance testing services.

              </p>
            </div>

            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Contact Options
              </h3>
              <div className="space-y-3">
                {quickContactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {method.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-green-800">
                    We&apos;re Online Now!
                  </div>
                  <div className="text-green-600 text-sm">
                    Average response time: 2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 2
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="relative">
                    <FaExclamationTriangle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="asap">ASAP</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[theme(color.brand.blue)] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy.
                  We&apos;ll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
