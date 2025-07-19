"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaCode,
  FaShieldAlt,
  FaMobile,
  FaRocket,
  FaFilter,
  FaExternalLinkAlt,
  FaHeart,
  FaFire,
  FaStar,
} from "react-icons/fa";

const CareersOpenPositions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const departments = [
    { value: "all", label: "All Departments", count: 8 },
    { value: "automation", label: "Test Automation", count: 3 },
    { value: "manual", label: "Manual Testing", count: 2 },
    { value: "performance", label: "Performance Testing", count: 1 },
    { value: "security", label: "Security Testing", count: 1 },
    { value: "mobile", label: "Mobile Testing", count: 1 },
  ];

  const locations = [
    { value: "all", label: "All Locations", count: 8 },
    { value: "remote", label: "Remote", count: 5 },
    { value: "new-york", label: "New York, NY", count: 2 },
    { value: "london", label: "London, UK", count: 1 },
  ];

  const positions = [
    {
      id: 1,
      title: "Senior Test Automation Engineer",
      department: "automation",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$90,000 - $130,000",
      description:
        "Lead automation testing initiatives using Selenium, Cypress, and modern testing frameworks. Design and implement comprehensive test automation strategies for web and mobile applications.",
      skills: [
        "Selenium WebDriver",
        "Cypress",
        "JavaScript/TypeScript",
        "CI/CD Pipelines",
        "API Testing",
      ],
      badges: ["Urgent", "Featured"],
      icon: FaCode,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "QA Test Engineer",
      department: "manual",
      location: "New York, NY",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$70,000 - $95,000",
      description:
        "Execute comprehensive manual testing across web and mobile applications. Collaborate with development teams to ensure quality deliverables and user satisfaction.",
      skills: [
        "Manual Testing",
        "Test Case Design",
        "Bug Tracking",
        "Agile Methodology",
        "User Experience",
      ],
      badges: [],
      icon: FaUsers,
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Performance Testing Specialist",
      department: "performance",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$85,000 - $120,000",
      description:
        "Design and execute performance testing strategies using JMeter, LoadRunner, and cloud-based testing tools. Analyze system performance and provide optimization recommendations.",
      skills: [
        "JMeter",
        "LoadRunner",
        "Performance Analysis",
        "Cloud Platforms",
        "Monitoring Tools",
      ],
      badges: ["Featured"],
      icon: FaRocket,
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 4,
      title: "Mobile QA Engineer",
      department: "mobile",
      location: "London, UK",
      type: "Full-time",
      experience: "3+ years",
      salary: "£55,000 - £75,000",
      description:
        "Specialize in mobile application testing across iOS and Android platforms. Ensure optimal user experience on mobile devices with comprehensive testing strategies.",
      skills: [
        "iOS Testing",
        "Android Testing",
        "Appium",
        "Mobile Automation",
        "Device Testing",
      ],
      badges: ["Urgent"],
      icon: FaMobile,
      color: "from-pink-500 to-pink-700",
    },
    {
      id: 5,
      title: "Security Testing Engineer",
      department: "security",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$95,000 - $140,000",
      description:
        "Conduct security assessments and penetration testing. Identify vulnerabilities and ensure application security compliance with industry standards.",
      skills: [
        "Penetration Testing",
        "OWASP",
        "Security Scanning",
        "Vulnerability Assessment",
        "Compliance",
      ],
      badges: ["Featured"],
      icon: FaShieldAlt,
      color: "from-red-500 to-red-700",
    },
    {
      id: 6,
      title: "Junior QA Analyst",
      department: "manual",
      location: "Remote",
      type: "Full-time",
      experience: "0-2 years",
      salary: "$50,000 - $65,000",
      description:
        "Entry-level position for new graduates. Learn testing fundamentals while contributing to real projects with mentorship support from senior team members.",
      skills: [
        "Basic Testing",
        "Attention to Detail",
        "Learning Mindset",
        "Communication",
        "Problem Solving",
      ],
      badges: [],
      icon: FaUsers,
      color: "from-teal-500 to-teal-700",
    },
    {
      id: 7,
      title: "Lead QA Engineer",
      department: "automation",
      location: "New York, NY",
      type: "Full-time",
      experience: "7+ years",
      salary: "$120,000 - $160,000",
      description:
        "Lead a team of QA engineers and drive quality initiatives across multiple projects. Mentor junior team members and establish testing best practices.",
      skills: [
        "Team Leadership",
        "Test Strategy",
        "Mentoring",
        "Process Improvement",
        "Stakeholder Management",
      ],
      badges: ["Featured", "Leadership"],
      icon: FaStar,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "API Testing Specialist",
      department: "automation",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$75,000 - $105,000",
      description:
        "Focus on API testing and backend service validation. Develop automated API test suites and ensure service reliability and performance.",
      skills: [
        "API Testing",
        "REST/GraphQL",
        "Postman",
        "Newman",
        "Database Testing",
      ],
      badges: [],
      icon: FaCode,
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  const filteredPositions = positions.filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesDepartment =
      selectedDepartment === "all" ||
      position.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "all" ||
      position.location.toLowerCase().replace(/[^a-z]/g, "") ===
        selectedLocation.replace("-", "");

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Urgent":
        return "bg-red-100 text-red-700 border-red-200";
      case "Featured":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Leadership":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaUsers className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Open Positions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block text-[theme(color.brand.blue)]">
              QA Role
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore exciting opportunities to grow your career in software
            testing. We're looking for passionate professionals to join our
            world-class QA team.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Positions
              </label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, skills, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label} ({dept.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label} ({loc.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold">{filteredPositions.length}</span>{" "}
              positions
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("all");
                setSelectedLocation("all");
              }}
              className="text-sm text-[theme(color.brand.blue)] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredPositions.map((position) => (
            <div
              key={position.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left Side - Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <position.icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {position.title}
                          </h3>
                          {position.badges.map((badge, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs font-semibold rounded-full border ${getBadgeStyle(
                                badge
                              )}`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock className="w-3 h-3" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaUsers className="w-3 h-3" />
                            <span>{position.experience}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaDollarSign className="w-3 h-3" />
                            <span>{position.salary}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {position.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {position.skills.slice(0, 4).map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {position.skills.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                              +{position.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                    <button
                      className={`bg-gradient-to-r ${position.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      Apply Now
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                    <button className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      View Details
                    </button>
                    <button className="text-gray-500 hover:text-red-500 transition-colors flex items-center justify-center gap-2 py-2">
                      <FaHeart className="w-4 h-4" />
                      <span className="text-sm">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPositions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No positions found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or check back later for new
              opportunities.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("all");
                setSelectedLocation("all");
              }}
              className="bg-[theme(color.brand.blue)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Don't See Your Role */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white text-center">
          <FaFire className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">
            Don't See Your Perfect Role?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent! Send us your resume and
            tell us about your QA expertise. We'll reach out when a position
            matches your skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit General Application
            </button>
            <button className="bg-white bg-opacity-20 text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Set Job Alerts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersOpenPositions;
