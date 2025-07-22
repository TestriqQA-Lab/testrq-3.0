"use client";

import React from "react";

const LaunchFastReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-brand-blue to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Launch Fast with Quality?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join 300+ startups who trust our LaunchFast QA services. Get started with rapid testing 
          cycles today and accelerate your time-to-market without compromising quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Rapid Testing
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastReadyToEnsureQuality;

