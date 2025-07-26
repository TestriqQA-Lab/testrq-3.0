"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AIReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="bg-[theme(color.brand.blue)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Ensure AI Quality?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join 150+ companies who trust our AI testing services. Get started with 
          a comprehensive AI model assessment today and ensure your intelligent 
          systems are accurate, fair, and reliable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex items-center gap-2 py-3 px-8 bg-white text-[theme(color.brand.blue)] font-semibold text-lg rounded-md hover:bg-gray-100 transition-colors duration-300">
            <span>Start AI Assessment</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
          <button className="py-3 px-8 border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIReadyToEnsureQuality;

