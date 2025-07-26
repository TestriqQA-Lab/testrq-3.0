"use client";

import React from "react";

const SmartDeviceReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Ensure <span className="text-brand-blue">Smart Device Quality</span>?
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join 500+ companies who trust our smart device testing services. Get started with a 
          comprehensive smart device assessment today and ensure your devices are reliable, 
          secure, and performant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Start Device Assessment
          </button>
          <button className="border border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceReadyToEnsureQuality;

