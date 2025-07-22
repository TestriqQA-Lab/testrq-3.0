"use client";

import React from "react";

const ExploratoryReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Discover Hidden Issues?
        </h2>
        <p className="text-xl text-green-100 mb-8 leading-relaxed">
          Join 500+ companies who trust our exploratory testing expertise. Get started with systematic 
          exploration today and uncover critical issues before your users do.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Exploration
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryReadyToEnsureQuality;

