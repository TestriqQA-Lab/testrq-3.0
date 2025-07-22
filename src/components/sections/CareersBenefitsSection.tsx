"use client";

import React from "react";
import {
  FaHeart,
  FaDollarSign,
  FaBalanceScale,
  FaGraduationCap,
  FaShieldAlt,
  FaPiggyBank,
  FaUmbrella,
  FaCalendarAlt,
  FaLaptop,
  FaGamepad,
  FaCoffee,
  FaPlane,
  FaUsers,
  FaHome,
  FaClock,
  FaBook,
} from "react-icons/fa";

const CareersBenefitsSection: React.FC = () => {
  const benefitCategories = [
    {
      title: "Health & Wellness",
      icon: FaHeart,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      benefits: [
        {
          icon: FaShieldAlt,
          title: "Premium Health Insurance",
          description:
            "100% company-paid health, dental, and vision insurance for you and your family",
        },
        {
          icon: FaUmbrella,
          title: "Mental Health Support",
          description:
            "Access to mental health resources, counseling services, and wellness apps",
        },
        {
          icon: FaHeart,
          title: "Wellness Stipend",
          description:
            "$1,200 annual wellness budget for gym memberships, fitness equipment, or health services",
        },
      ],
    },
    {
      title: "Financial Benefits",
      icon: FaDollarSign,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      benefits: [
        {
          icon: FaPiggyBank,
          title: "401(k) Matching",
          description:
            "6% company match on 401(k) contributions with immediate vesting",
        },
        {
          icon: FaDollarSign,
          title: "Performance Bonuses",
          description:
            "Quarterly performance bonuses and annual profit-sharing opportunities",
        },
        {
          icon: FaPlane,
          title: "Stock Options",
          description:
            "Equity participation in company growth with competitive stock option packages",
        },
      ],
    },
    {
      title: "Work-Life Balance",
      icon: FaBalanceScale,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      benefits: [
        {
          icon: FaCalendarAlt,
          title: "Unlimited PTO",
          description:
            "Take the time you need to recharge with our unlimited paid time off policy",
        },
        {
          icon: FaHome,
          title: "Remote-First Culture",
          description:
            "Work from anywhere with flexible schedules and modern collaboration tools",
        },
        {
          icon: FaClock,
          title: "Flexible Hours",
          description:
            "Choose your working hours that fit your lifestyle and peak productivity times",
        },
      ],
    },
    {
      title: "Growth & Development",
      icon: FaGraduationCap,
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
      benefits: [
        {
          icon: FaBook,
          title: "Learning Budget",
          description:
            "$5,000 annual budget for conferences, courses, certifications, and books",
        },
        {
          icon: FaUsers,
          title: "Mentorship Program",
          description:
            "Structured mentorship and career development programs with senior engineers",
        },
        {
          icon: FaGraduationCap,
          title: "Conference Attendance",
          description:
            "Attend top industry conferences with full expenses covered and presentation opportunities",
        },
      ],
    },
  ];

  const additionalPerks = [
    {
      icon: FaLaptop,
      title: "Top-Tier Equipment",
      description:
        "MacBook Pro, external monitors, and any tools you need to be productive",
    },
    {
      icon: FaCoffee,
      title: "Office Perks",
      description:
        "Fully stocked kitchen, premium coffee, snacks, and catered team lunches",
    },
    {
      icon: FaGamepad,
      title: "Team Building",
      description:
        "Regular team events, game nights, hackathons, and annual company retreats",
    },
    {
      icon: FaPlane,
      title: "Travel Opportunities",
      description:
        "Client visits, team meetups, and opportunities to work from different locations",
    },
  ];

  const companyStats = [
    {
      value: "98%",
      label: "Employee Satisfaction",
      description: "Based on annual surveys",
    },
    {
      value: "4.8/5",
      label: "Glassdoor Rating",
      description: "Employee reviews",
    },
    {
      value: "2.1 years",
      label: "Average Tenure",
      description: "Above industry average",
    },
    {
      value: "95%",
      label: "Retention Rate",
      description: "Employees stay and grow",
    },
  ];

  return (
    <section className="py-16 bg-white px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaHeart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Benefits & Perks
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Benefits
            <span className="block text-[theme(color.brand.blue)]">
              That Matter
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in taking care of our team members with competitive
            benefits, meaningful perks, and a supportive work environment that
            helps you thrive.
          </p>
        </div>

        {/* Benefits Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {benefitCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${category.bgColor} rounded-3xl p-8 border-2 border-opacity-20 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Perks */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Perks
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond the essentials, we offer unique perks that make working at
              Testriq special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPerks.map((perk, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {perk.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Our Team Loves Working Here
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our benefits aren&apos;t just competitive—they&apos;re designed around what
              our team actually values.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our benefits stack up against industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Industry Standard
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Basic health insurance</li>
                <li>2-3% 401k match</li>
                <li>2-3 weeks PTO</li>
                <li>Limited learning budget</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Most Competitors
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Good health coverage</li>
                <li>4-5% 401k match</li>
                <li>3-4 weeks PTO</li>
                <li>Some learning support</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Testriq</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Premium health + family</li>
                <li>6% 401k match</li>
                <li>Unlimited PTO</li>
                <li>$5K learning budget</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[theme(color.brand.blue)] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBenefitsSection;
