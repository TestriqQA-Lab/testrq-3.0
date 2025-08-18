"use client";

import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaLinkedin,
  FaWhatsapp,
  FaClock,
  FaInstagram,
  FaMapMarkerAlt,
  FaVideo,
  FaHeadset,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { InlineWidget } from "react-calendly";

const ContactMethodsSection: React.FC = () => {
  

 const selectedMeetingUrl = "https://calendly.com/sandeepmaske/30min"

  const contactMethods = [
    {
      icon: FaCalendarAlt,
      title: "Schedule a Meeting",
      description: "Book a personalized consultation with our QA experts",
      details: "Available slots: Mon-Fri, 9 AM - 6 PM IST",
      value: "Book Now",
      action: "#calendly-section",
      color: "from-purple-500 to-purple-700",
      highlight: true,
    },
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our team for immediate assistance",
      details: "(+91) 915-2929-343 • Mon-Fri, 9 AM - 6 PM IST",
      value: "Call Now",
      action: "tel:+919152929343",
      color: "from-green-500 to-green-700",
      highlight: false,
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive responses",
      details: "contact@testriq.com • Response within 2 hours",
      value: "Send Email",
      action: "mailto:contact@testriq.com",
      color: "from-blue-500 to-blue-700",
      highlight: false,
    },
    {
      icon: FaVideo,
      title: "Video Consultation",
      description: "Face-to-face meetings for complex project discussions",
      details: "30-60 min sessions • Screen sharing available",
      value: "Schedule Video Call",
      action: "#calendly-section",
      color: "from-red-500 to-red-700",
      highlight: false,
    },
    {
      icon: FaComments,
      title: "Live Chat",
      description: "Get instant answers to your testing questions",
      details: "Available Mon-Fri, 8 AM - 8 PM IST",
      value: "Start Chat",
      action: "#",
      color: "from-teal-500 to-teal-700",
      highlight: false,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Business",
      description: "Quick questions and updates via WhatsApp",
      details: "(+91) 915-2929-343 • Business hours only",
      value: "Message Us",
      action: "#",
      color: "from-green-400 to-green-600",
      highlight: false,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/testriq-qa-lab",
      color: "bg-brand-blue hover:sky-700",
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      url: "https://x.com/testriq",
      color: "bg-black hover:bg-blue-500",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "https://www.facebook.com/testriq.lab/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/testriq",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-pink-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST", available: true },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST", available: true },
    { day: "Sunday", hours: "Emergency Support Only", available: false },
  ];

  const scrollToCalendly = () => {
    document.querySelector("#calendly-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="py-20 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Preferred
            <span className="block text-[theme(color.brand.blue)] py-3">
              Communication Method
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand that every client has different preferences. That’s
            why we offer multiple ways to connect with our QA experts—whether
            for a software testing consultation, project discussion, or quality
            assurance support across automation, manual, or performance testing
            services.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group ${method.highlight
                  ? "ring-2 ring-[theme(color.brand.blue)] ring-opacity-50"
                  : ""
                }`}
            >
              {method.highlight && (
                <div className="absolute top-0 right-0 bg-[theme(color.brand.blue)] text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  Recommended
                </div>
              )}

              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">{method.details}</p>

                <a
                  href={method.action}
                  onClick={(e) => {
                    if (method.title === "Schedule a Meeting") {
                      e.preventDefault(); // Prevent default link behavior
                      scrollToCalendly(); // Trigger smooth scroll
                    }
                  }}
                  className={`cursor-pointer block text-center w-full bg-gradient-to-r ${method.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  {method.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Calendly Integration Section */}
        <div
          id="calendly-section"
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Schedule Your Meeting
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a time that works best for you—our QA experts are ready to
              discuss your software testing needs and provide personalized QA
              recommendations across automation, manual, API, and performance
              testing services.
            </p>
          </div>

          {/* Meeting Types */}
          <div className="flex justify-center gap-6 mb-8">
            <div
              className="text-center md:w-lg p-6 bg-gray-50 rounded-xl cursor-pointer ring-1 ring-brand-blue hover:bg-sky-100 hover:ring-3 hover: transition-all duration-200 ease-in-out"
              
            >
              <FaVideo className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Deep Dive Session
              </h4>
              <p className="text-sm text-gray-600 mb-2">30 minutes</p>
              <p className="text-xs text-gray-500">
                Detailed project discussion
              </p>
            </div>
          </div>

          {selectedMeetingUrl && (
            // <div>
            //   <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url={selectedMeetingUrl} ></div>
            //   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            // </div>

            <div className="calendly-container w-full h-[500px] sm:h-[600px] md:h-[700px] max-w-[1000px] mx-auto">
              <InlineWidget
                url={selectedMeetingUrl}
                styles={{
                  height: "100%",
                  width: "100%",
                }}
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* Office Hours & Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="w-6 h-6 text-[theme(color.brand.blue)]" />
              <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
            </div>

            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-semibold text-gray-900">
                      {schedule.day}
                    </div>
                    <div className="text-sm text-gray-600">
                      {schedule.hours}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${schedule.available
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {schedule.available ? "Available" : "Limited"}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">
                  Currently Online
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Our team is available to help you right now!
              </p>
            </div>
          </div>

          {/* Social Links & Additional Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />
              <h3 className="text-xl font-bold text-gray-900">
                Connect With Us
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors duration-300`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Emergency Contact
                </h4>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 mb-2">
                    <strong>Critical Issues:</strong> (+91) 915-2929-343
                  </p>
                  <p className="text-xs text-red-600">
                    Available 24/7 for production emergencies
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Mailing Address
                </h4>
                <div className="text-gray-600">
                  <p>
                    Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd,
                    Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar,
                    Maharashtra 401107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsSection;
