"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUsers,
  FaBuilding,
  FaRoute,
} from "react-icons/fa";

const ContactOfficeSection: React.FC = () => {
  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Testing Street, Suite 456",
      fullAddress: "New York, NY 10001",
      phone: "+1 (555) 012-3456",
      email: "ny@testriq.com",
      timezone: "EST (UTC-5)",
      hours: "Mon-Fri: 9 AM - 6 PM",
      teamSize: "25+ experts",
      specialties: ["Web Testing", "Mobile Testing", "Automation"],
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Quality Lane, Floor 3",
      fullAddress: "London, UK SW1A 1AA",
      phone: "+44 20 7123 4567",
      email: "london@testriq.com",
      timezone: "GMT (UTC+0)",
      hours: "Mon-Fri: 9 AM - 5 PM",
      teamSize: "15+ experts",
      specialties: ["Security Testing", "Performance", "API Testing"],
    },
    {
      city: "Remote",
      country: "Global",
      address: "Distributed Team",
      fullAddress: "Available Worldwide",
      phone: "+1 (555) 012-3456",
      email: "remote@testriq.com",
      timezone: "Multiple Zones",
      hours: "24/7 Coverage",
      teamSize: "30+ experts",
      specialties: ["All Testing Services", "Global Support", "Flexible Hours"],
    },
  ];

  const globalStats = [
    {
      icon: FaGlobe,
      label: "Countries Served",
      value: "25+",
      description: "Global reach",
    },
    {
      icon: FaUsers,
      label: "Team Members",
      value: "70+",
      description: "QA experts",
    },
    {
      icon: FaClock,
      label: "Time Zones",
      value: "12+",
      description: "Coverage",
    },
    {
      icon: FaBuilding,
      label: "Office Locations",
      value: "3",
      description: "Physical + Remote",
    },
  ];

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
            Global Presence,
            <span className="block text-[theme(color.brand.blue)]">
              Local Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With offices across major time zones and a distributed remote team,
            we&apos;re positioned to provide round-the-clock support for your QA
            needs.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {office.city}
                    </h3>
                    <p className="text-gray-600 text-sm">{office.country}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaBuilding className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-sm">{office.address}</p>
                      <p className="text-gray-500 text-xs">
                        {office.fullAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-gray-700 text-sm hover:text-[theme(color.brand.blue)] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-700 text-sm hover:text-[theme(color.brand.blue)] transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaClock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-sm">{office.hours}</p>
                      <p className="text-gray-500 text-xs">{office.timezone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUsers className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{office.teamSize}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {office.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[theme(color.brand.blue)] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Contact Office
                  </button>
                  <button className="flex-1 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[theme(color.brand.blue)] hover:text-white transition-all duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 pb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h3>
            <p className="text-gray-600 mb-6">
              Our strategically located offices ensure we can provide timely
              support across different regions and time zones.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-t border-gray-100 p-12 text-center">
            <FaRoute className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Interactive Map Integration
            </h4>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              An interactive map showing all our office locations would be
              embedded here. This could include Google Maps integration with
              custom markers for each office.
            </p>
            <div className="text-left max-w-md mx-auto space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>New York Office - Main Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>London Office - European Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Remote Team - Global Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            No matter where you&apos;re located, our global team is ready to support
            your QA needs. Choose the contact method that works best for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Meeting
            </button>
            <button className="bg-white bg-opacity-20 text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOfficeSection;
