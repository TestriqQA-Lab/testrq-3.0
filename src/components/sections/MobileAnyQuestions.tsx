"use client";

import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope, FaCalendarAlt, FaComments } from "react-icons/fa";

const MobileAnyQuestions: React.FC = () => {
  return (
    <section className="text-white bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-800  py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-500 bg-opacity-30 text-white text-sm px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Have Any Questions About Mobile Testing?
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              Our mobile testing experts are ready to help you understand how our comprehensive 
              testing services can ensure your app&apos;s success on both iOS and Android platforms. 
              Get personalized answers to your specific mobile app requirements.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <FaPhone className="w-5 h-5" />,
                  title: "Mobile Testing Hotline",
                  description: "Speak with our mobile experts directly",
                  contact: "+1 (555) 123-MOBILE",
                  action: "Call Now"
                },
                {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  title: "Mobile Testing Email",
                  description: "Get detailed mobile testing information",
                  contact: "mobile-testing@testriq.com",
                  action: "Send Email"
                },
                {
                  icon: <FaCalendarAlt className="w-5 h-5" />,
                  title: "Mobile App Consultation",
                  description: "Book a free 30-minute mobile testing consultation",
                  contact: "Available Mon-Fri, 9 AM - 6 PM EST",
                  action: "Book Meeting"
                }
              ].map((option, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600 bg-opacity-30 rounded-lg flex items-center justify-center text-blue-50">
                    {option.icon}
                  </div>
                  <div className="flex-1 text-sky-600">
                    <h3 className="font-semibold mb-1">{option.title}</h3>
                    <p className="text-sm mb-2">{option.description}</p>
                    <p className="text-sm font-medium">{option.contact}</p>
                  </div>
                  <button className="text-sky-600 text-sm font-semibold hover:text-sky-800 hover:scale-105 transition-all duration-300 ease-in-out">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "< 1hr", label: "Response Time" },
                { number: "1000+", label: "Apps Tested" },
                { number: "99.5%", label: "App Store Success" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center mb-8">
              <FaComments className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-sky-600 mb-2">Mobile Testing Contact Form</h3>
              <p className="text-sky-600">Get a response within 1 hour</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-600 text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sky-600 text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sky-600 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label className="block text-sky-600 text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sky-600 text-sm font-medium mb-2">
                  Mobile Platform
                </label>
                <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent">
                  <option value="" className="text-gray-900">Select platform</option>
                  <option value="ios" className="text-gray-900">iOS</option>
                  <option value="android" className="text-gray-900">Android</option>
                  <option value="cross-platform" className="text-gray-900">Cross-Platform</option>
                  <option value="both" className="text-gray-900">Both iOS & Android</option>
                </select>
              </div>

              <div>
                <label className="block text-sky-600 text-sm font-medium mb-2">
                  App Category
                </label>
                <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent">
                  <option value="" className="text-gray-900">Select category</option>
                  <option value="ecommerce" className="text-gray-900">E-commerce</option>
                  <option value="social" className="text-gray-900">Social Media</option>
                  <option value="gaming" className="text-gray-900">Gaming</option>
                  <option value="healthcare" className="text-gray-900">Healthcare</option>
                  <option value="fintech" className="text-gray-900">Fintech</option>
                  <option value="enterprise" className="text-gray-900">Enterprise</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sky-600 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-sky-600 border-opacity-30 rounded-lg text-sky-600 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                  placeholder="Tell us about your mobile app testing requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-800 hover:scale-95 transition-all duration-300 ease-in-out"
              >
                <span>Send Message</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sky-600 text-sm">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-sky-800 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-white border-opacity-20">
          <h3 className="text-xl font-bold text-white mb-4">
            Ready to Launch Your Mobile App with Confidence?
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful mobile apps that trust Testriq for comprehensive mobile testing. 
            Get started today with a free consultation and mobile app assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Start Free Mobile Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors">
              View Mobile Testing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAnyQuestions;

