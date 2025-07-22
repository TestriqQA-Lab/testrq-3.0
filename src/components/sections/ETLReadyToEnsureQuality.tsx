"use client";

import React from "react";

const ETLReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Ensure ETL Data Quality?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join 300+ companies who trust our ETL testing services. Get started with a comprehensive 
          data pipeline assessment today and ensure your ETL processes are reliable, accurate, and performant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start ETL Assessment
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLReadyToEnsureQuality;

