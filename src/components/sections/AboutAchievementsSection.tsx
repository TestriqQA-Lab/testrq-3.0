import React from "react";
import {
  FaTrophy,
  FaCertificate,
  FaAward,
  FaStar,
  FaGlobe,
  FaUsers,
  FaMedal,
} from "react-icons/fa";

const AboutAchievementsSection = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: "Industry Recognition",
      description:
        "Recognized as a leading QA partner by multiple industry publications",
      stats: "Top 10 QA Companies",
      color: "bg-yellow-500",
    },
    {
      icon: FaCertificate,
      title: "ISTQB Certified Team",
      description: "100% of our senior testers hold ISTQB certifications",
      stats: "40+ Certifications",
      color: "bg-blue-500",
    },
    {
      icon: FaAward,
      title: "Client Excellence",
      description:
        "Consistently rated 5-star by our clients for quality and service",
      stats: "5.0/5.0 Rating",
      color: "bg-green-500",
    },
    {
      icon: FaStar,
      title: "Project Success",
      description:
        "99.8% project success rate with zero critical bugs in production",
      stats: "99.8% Success Rate",
      color: "bg-purple-500",
    },
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Successfully delivered projects across 15+ countries",
      stats: "15+ Countries",
      color: "bg-teal-500",
    },
    {
      icon: FaUsers,
      title: "Team Growth",
      description:
        "Grown from 5 to 50+ professionals while maintaining quality",
      stats: "50+ Experts",
      color: "bg-orange-500",
    },
  ];

  const certifications = [
    "ISTQB Foundation Level",
    "ISTQB Advanced Level",
    "ISTQB Expert Level",
    "Agile Testing Certification",
    "Security Testing Certification",
    "Performance Testing Certification",
    "Mobile Testing Certification",
    "API Testing Certification",
  ];

  return (
    <section className="bg-white py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaMedal />
            <span className="text-sm">Our Achievements</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Celebrating{" "}
            <span className="text-[theme(color.brand.blue)]">
              QA Excellence
            </span>{" "}
            Across Industries
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our award-winning QA team, with 40+ professional certifications and
            a 99.8% project success rate, delivers software testing services
            trusted by clients in 15+ countries. We&apos;re consistently rated 5
            stars for quality, agility, and customer satisfaction across
            fintech, healthcare, SaaS, and more.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div
                className={`w-14 h-14 ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <achievement.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {achievement.description}
              </p>
              <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                {achievement.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional{" "}
              <span className="text-[theme(color.brand.blue)]">
                Certifications
              </span>
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our QA professionals proudly hold industry-recognized
              certifications, bringing hands-on expertise in agile, automated,
              performance, and secure software testing to every project we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FaCertificate className="text-[theme(color.brand.blue)] w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAchievementsSection;
