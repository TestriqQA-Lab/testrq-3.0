"use client";

import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const ElearningPlatformsSection: React.FC = () => {
  const platforms = [
    "Moodle",
    "Canvas",
    "Blackboard",
    "Google Classroom",
    "Schoology",
    "D2L Brightspace",
    "Custom LMS",
    "Corporate Training Platforms",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-Learning{" "}
            <span className="text-brand-blue">Platform Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We test all major e-learning platforms with specialized knowledge of
            educational technology requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center ring-1 ring-brand-blue hover:ring-3 hover:shadow-lg transition-shadow"
            >
              <FaGraduationCap className="w-8 h-8 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">{platform}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact-us">
            <button className="bg-gradient-to-r from-brand-blue to-sky-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:scale-98 transition-all duration-200 ease-in-out">
              Get Platform Assessment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElearningPlatformsSection;
