"use client";

import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaTrophy,
  FaHeart,
  FaGlobe,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const CareersValuesSection: React.FC = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and methodologies to stay ahead in the QA landscape.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork and knowledge sharing to achieve exceptional results.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in everything we do, from code to client relationships.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: FaTrophy,
      title: "Continuous Growth",
      description:
        "We invest in our team's development through learning opportunities and career advancement.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: FaHeart,
      title: "People-Centric",
      description:
        "We prioritize work-life balance and create an environment where everyone can thrive.",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description:
        "We work on projects that make a difference worldwide, improving software quality globally.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  const achievements = [
    {
      icon: FaRocket,
      title: "Industry Recognition",
      description: "Winner of 'Best QA Team' award 2024",
      stat: "Award Winner",
    },
    {
      icon: FaUsers,
      title: "Employee Satisfaction",
      description: "95% employee satisfaction rate",
      stat: "95%",
    },
    {
      icon: FaHandshake,
      title: "Learning Investment",
      description: "$5,000 annual learning budget per employee",
      stat: "$5K",
    },
  ];

  return (
    <section className="py-16 bg-white px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaHeart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Our Values</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Drives Us
            <span className="block text-[theme(color.brand.blue)]">
              Every Day
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core values shape our culture, guide our decisions, and define
            how we work together to create exceptional software testing
            solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group ${value.bgColor} ${value.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div
                  className={`w-full h-full bg-gradient-to-bl ${value.color} rounded-full transform translate-x-16 -translate-y-16`}
                ></div>
              </div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Top Talent Chooses Testriq
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We&apos;re not just another tech company. We&apos;re a place where careers
              flourish and innovation thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-100 bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-[theme(color.brand.blue)]" />
                </div>

                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {achievement.stat}
                </div>
                <h4 className="text-lg font-semibold text-[theme(color.brand.blue)] mb-2">
                  {achievement.title}
                </h4>
                <p className="text-[theme(color.brand.blue)] text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Join Our Team Today
            </button>
          </div>
        </div>

        {/* Culture Highlights */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Culture Built on
              <span className="block text-[theme(color.brand.blue)]">
                Mutual Respect
              </span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaUsers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Remote-First Approach
                  </h4>
                  <p className="text-gray-600">
                    Work from anywhere while staying connected with our global
                    team through modern collaboration tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaLightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Learning & Development
                  </h4>
                  <p className="text-gray-600">
                    Continuous learning opportunities with conference
                    attendance, online courses, and internal knowledge sharing
                    sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaHeart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Work-Life Balance
                  </h4>
                  <p className="text-gray-600">
                    Flexible schedules, unlimited PTO, and a genuine commitment
                    to your personal well-being and family time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Team Diversity
              </h4>
              <p className="text-gray-600">
                Our global team represents the best talent from around the world
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  12+
                </div>
                <div className="text-sm text-gray-600">Time Zones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  45%
                </div>
                <div className="text-sm text-gray-600">Women in Tech</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  8+
                </div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersValuesSection;
