"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactOfficeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaMapMarkerAlt className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Our Locations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Us on the
            <span className="text-[theme(color.brand.blue)]"> Map</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our strategically located offices ensure we can provide timely
            support across different regions and time zones.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Map Placeholder */}
          <div className="border border-gray-100 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7500774953623!2d72.86865987521085!3d19.29323168195653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ece4b10029%3A0x8c6764bbc8ed8026!2sTESTRIQ%20Software%20Testing%20and%20Quality%20Assurance%20Services%20Company!5e0!3m2!1sen!2sin!4v1753344577666!5m2!1sen!2sin"
              width="1230"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOfficeSection;
