"use client";

import React from "react";

const LaunchFastAnyQuestions: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-brand-blue to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Launch Fast with Quality?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Get expert LaunchFast QA services that accelerate your time-to-market without compromising quality. 
          Contact our rapid testing specialists today for a comprehensive launch readiness assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Rapid Testing
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
        <div className="mt-8 text-blue-100">
          <p className="text-sm">
            📞 Call us: +1 (555) 123-4567 | ✉️ Email: launchfast@testriq.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastAnyQuestions;

