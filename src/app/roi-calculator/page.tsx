"use client";

import React, { useState } from "react";
import { FaTools, FaCalculator } from "react-icons/fa";

const ROICalculatorPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(true); // Lightbox state to show the "Coming Soon" message

  const closeLightbox = () => setIsLightboxOpen(false); // Close lightbox

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full text-sm md:text-base px-6 py-3 mb-6">
            <FaCalculator className="w-4 h-4" />
            <span>ROI Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your <span className="text-brand-blue">ROI</span> Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our easy-to-use ROI calculator to see how investing in our solutions can benefit your business.
          </p>
        </div>

        {/* Coming Soon Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
              <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-6">
                The ROI calculator will be available soon. Stay tuned!
              </p>
              <button
                onClick={closeLightbox}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ROI Calculator Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-brand-blue hover:ring-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaTools className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            </div>
            <p className="text-sm text-gray-600">
              The ROI calculator is coming soon. Meanwhile, learn about how our tools and services can help you optimize your business processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorPage;
