"use client";

import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaAward,
} from "react-icons/fa";

const GamingContactSection: React.FC = () => {
  const contactOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule Consultation",
      description:
        "Book a free 30-minute consultation with our Gaming testing experts",
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
        "Get immediate answers from our Gaming compliance specialists",
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
        "Get a detailed proposal and quote for your Gaming testing needs",
      detail: "contact@testriq.com",
      text: "Get Quote",
      action: "mailto:contact@testriq.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const expertiseAreas = [
    {
      icon: FaMobile,
      title: "Mobile Gaming",
      description: "iOS, Android, and cross-platform mobile game testing",
    },
    {
      icon: FaDesktop,
      title: "PC & Console",
      description: "Windows, Mac, Linux, PlayStation, Xbox, Nintendo Switch",
    },
    {
      icon: FaUsers,
      title: "Multiplayer Games",
      description: "Network testing, matchmaking, and social features",
    },
    {
      icon: FaGamepad,
      title: "All Game Genres",
      description: "Action, RPG, Strategy, Sports, VR/AR, and more",
    },
  ];

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "Gaming Specialists",
      description: "Dedicated team with deep gaming industry expertise",
    },
    {
      icon: FaCheckCircle,
      title: "99.9% Success Rate",
      description: "Proven track record of successful game launches",
    },
    {
      icon: FaClock,
      title: "Faster Launches",
      description: "40% faster time to market through efficient testing",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4" />
            <span className="text-sm">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Level Up Your
            <span className="block text-brand-blue">Game Testing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our game testing experts to discuss your gaming QA
            requirements, get a custom game testing quote, and start your
            journey toward a successful game launch with flawless gameplay,
            optimized performance, and cross-platform compatibility.
          </p>
        </div>

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

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free Gaming Testing Assessment
              </h3>
              <p className="text-gray-600">
                Fill out this form and our gaming testing experts will contact
                you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                  placeholder="john.doe@gamecompany.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company/Studio Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                  placeholder="Game Development Studio"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Game Type *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all">
                  <option value="">Select Game Type</option>
                  <option value="mobile">Mobile Game</option>
                  <option value="pc">PC Game</option>
                  <option value="console">Console Game</option>
                  <option value="vr-ar">VR/AR Game</option>
                  <option value="web">Web Game</option>
                  <option value="multiplayer">Multiplayer Game</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Platforms
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">
                      iOS (iPhone/iPad)
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">Android</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">Windows PC</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">PlayStation</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">Xbox</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                    />
                    <span className="ml-2 text-gray-700">Nintendo Switch</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your game, testing requirements, timeline, and any specific challenges you're facing..."
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Get Free Assessment
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Expertise Areas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Gaming Expertise
              </h3>
              <div className="space-y-4">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Testriq for Gaming Testing?
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{reason.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Gaming Hotline
                    </div>
                    <div className="text-gray-600">(+91) 915-2929-343</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Gaming Team
                    </div>
                    <div className="text-gray-600">contact@testriq.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaClock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Response Time
                    </div>
                    <div className="text-gray-600">Within 12 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Start Your Gaming Success Story Today
            </h3>
            <p className="mb-8 text-lg">
              Join 500+ game developers who trust Testriq for comprehensive
              gaming testing and successful game launches across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all">
                  Schedule Free Consultation
                </button>
              </Link>
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all border border-white border-opacity-30">
                Download Gaming Testing Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingContactSection;
