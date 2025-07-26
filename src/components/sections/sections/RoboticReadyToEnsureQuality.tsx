"use client";

import React from "react";

const RoboticReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Ensure <span className="text-brand-blue">Robotic Quality</span>?
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join 200+ companies who trust our robotic testing services. Get started with a 
          comprehensive robotic system assessment today and ensure your robots are reliable, 
          safe, and performant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Start Robotic Assessment
          </button>
          <button className="border border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoboticReadyToEnsureQuality;

