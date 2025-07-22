"use client";

import React from "react";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaComments,
} from "react-icons/fa";

const DesktopAnyQuestions: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Have Any Questions About{" "}
              <span className="text-blue-600">Desktop Testing?</span>
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our desktop testing experts are ready to help you understand how
              our comprehensive testing services can ensure your application&apos;s
              success across all platforms. Get personalized answers to your
              specific requirements.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <FaPhone className="w-5 h-5 text-blue-600" />,
                  title: "Call Us Directly",
                  description: "Speak with our testing experts",
                  contact: "+1 (555) 123-4567",
                  action: "Call Now",
                },
                {
                  icon: <FaEnvelope className="w-5 h-5 text-blue-600" />,
                  title: "Email Support",
                  description: "Get detailed information via email",
                  contact: "desktop-testing@testriq.com",
                  action: "Send Email",
                },
                {
                  icon: <FaCalendarAlt className="w-5 h-5 text-blue-600" />,
                  title: "Schedule Consultation",
                  description: "Book a free 30-minute consultation",
                  contact: "Available Mon-Fri, 9 AM - 6 PM EST",
                  action: "Book Meeting",
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {option.description}
                    </p>
                    <p className="text-sm font-medium text-blue-700">
                      {option.contact}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:underline text-sm font-semibold transition">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "< 2hr", label: "Response Time" },
                { number: "500+", label: "Apps Tested" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow">
            <div className="text-center mb-8">
              <FaComments className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quick Contact Form</h3>
              <p className="text-gray-600">Get a response within 2 hours</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select application type</option>
                  <option value="enterprise">Enterprise Software</option>
                  <option value="productivity">Productivity Tools</option>
                  <option value="gaming">Gaming Application</option>
                  <option value="utility">Utility Software</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your desktop testing requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                <span>Send Message</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to Start Your Desktop Testing Project?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies that trust Testriq for comprehensive
            desktop application testing. Get started today with a free
            consultation and project assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Start Free Consultation
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopAnyQuestions;
