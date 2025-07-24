"use client";

import React from "react";
import { FaTachometerAlt, FaUsers, FaChartLine, FaServer, FaCloud, FaBolt } from "react-icons/fa";

const PerformanceTestingComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> Performance Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our performance testing services ensure your applications are fast, scalable, and stable under any load. 
            We identify bottlenecks, optimize system performance, and guarantee exceptional user experiences even during peak usage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Load Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaTachometerAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Load Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Simulating expected user loads to assess application behavior, response times, and resource utilization under normal conditions.
            </p>
          </div>

          {/* Stress Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stress Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Pushing the application beyond its normal operational limits to determine its breaking point and how it recovers from extreme loads.
            </p>
          </div>

          {/* Scalability Testing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaChartLine className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scalability Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Evaluating the application's ability to scale up or down to handle increasing or decreasing user demands efficiently.
            </p>
          </div>

          {/* Volume Testing */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaServer className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Assessing the application's performance with large volumes of data in the database or during extensive data processing.
            </p>
          </div>

          {/* Endurance Testing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCloud className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Endurance Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitoring application performance over an extended period to detect memory leaks, resource exhaustion, or degradation.
            </p>
          </div>

          {/* Spike Testing */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBolt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Spike Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Testing the application's behavior under sudden, sharp increases and decreases in user load to ensure stability.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Performance Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingComprehensiveSection;

