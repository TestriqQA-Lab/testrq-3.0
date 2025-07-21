"use client";

import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const ElearningPlatformsSection: React.FC = () => {
  const platforms = [
    "Moodle", "Canvas", "Blackboard", "Google Classroom", 
    "Schoology", "D2L Brightspace", "Custom LMS", "Corporate Training Platforms"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-Learning Platform Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We test all major e-learning platforms with specialized knowledge of educational technology requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <FaGraduationCap className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">{platform}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Get Platform Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElearningPlatformsSection;

