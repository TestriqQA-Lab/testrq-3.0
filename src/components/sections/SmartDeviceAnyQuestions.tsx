"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

const SmartDeviceAnyQuestions: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Connect Your Smart Devices?
        </h2>
        <p className="text-xl text-green-100 mb-8 leading-relaxed">
          Get started with comprehensive smart device testing services. Our experts are ready to help 
          ensure your connected devices are reliable, secure, and deliver exceptional user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
            <FaPhone className="w-8 h-8 mx-auto mb-4 text-green-200" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-green-100 text-sm">Speak directly with our smart device testing experts</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
            <FaEnvelope className="w-8 h-8 mx-auto mb-4 text-green-200" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-green-100 text-sm">Get detailed information about our services</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
            <FaComments className="w-8 h-8 mx-auto mb-4 text-green-200" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-green-100 text-sm">Chat with our team for immediate assistance</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Your Project
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceAnyQuestions;

