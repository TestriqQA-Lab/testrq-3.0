"use client";

import React from "react";
import { FaGraduationCap, FaUsers, FaPlay, FaShieldAlt } from "react-icons/fa";

const ElearningTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaGraduationCap,
      title: "Learning Management Testing",
      description: "Course creation, student enrollment, progress tracking, and assessment tools"
    },
    {
      icon: FaUsers,
      title: "User Experience Testing",
      description: "Student and instructor interfaces, accessibility compliance, and usability validation"
    },
    {
      icon: FaPlay,
      title: "Multimedia Content Testing",
      description: "Video streaming, interactive content, SCORM compliance, and mobile learning"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Privacy Testing",
      description: "Data protection, FERPA compliance, user authentication, and secure communications"
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-brand-blue">E-Learning Testing</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end testing solutions for every aspect of your e-learning platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg  ring-1 ring-brand-blue hover:ring-3 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElearningTestingServicesSection;

