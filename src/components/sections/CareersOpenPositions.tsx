
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaCode,
  FaShieldAlt,
  FaMobile,
  FaRocket,
  FaFilter,
  FaExternalLinkAlt,
  FaFire,
  FaStar,
} from "react-icons/fa";
import { positions, JobPosition } from "@/lib/openings"; // Import positions from the new file
import Markdown from "react-markdown";

// Modal for Job Details
const JobDetailsModal: React.FC<{ job: JobPosition | null; onClose: () => void }> = ({ job, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="w-3 h-3" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="w-3 h-3" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="w-3 h-3" />
            <span>{job.experience}</span>
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <Markdown>{job.fullDescription}</Markdown>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-xs rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal for Job Application Form
const JobApplicationModal: React.FC<{ job: JobPosition | null; onClose: () => void }> = ({ job, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    currentLocation: "",
    noticePeriod: "",
    role: job?.title || "", // Non-editable, pre-filled
    totalYearsExperience: "",
    currentCTC: "",
    resume: null as File | null,
  });

  useEffect(() => {
    if (job) {
      setFormData((prev) => ({ ...prev, role: job.title }));
    }
  }, [job]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
        setFormData((prev) => ({ ...prev, resume: file }));
      } else {
        alert("Please upload a PDF file less than 2MB.");
        setFormData((prev) => ({ ...prev, resume: null }));
        e.target.value = ""; // Clear the input
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to a backend API
    console.log("Form Data Submitted:", formData);
    alert("Application submitted successfully! (Check console for data)");
    onClose();
  };

  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for {job.title}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700 mb-2">Current Location (City)</label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">Notice Period</label>
            <input
              type="text"
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="totalYearsExperience" className="block text-sm font-medium text-gray-700 mb-2">Total Years of Experience</label>
            <input
              type="number"
              id="totalYearsExperience"
              name="totalYearsExperience"
              value={formData.totalYearsExperience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="currentCTC" className="block text-sm font-medium text-gray-700 mb-2">Current CTC? (in LPA)</label>
            <input
              type="text"
              id="currentCTC"
              name="currentCTC"
              value={formData.currentCTC}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Applying Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Upload Your Updated Resume (PDF only, max 2MB)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[theme(color.brand.blue)] file:text-white hover:file:bg-blue-700"
              required
            />
            {formData.resume && (
              <p className="text-sm text-gray-500 mt-2">Selected file: {formData.resume.name}</p>
            )}
          </div>
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CareersOpenPositions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const departments = [
    { value: "all", label: "All Departments", count: 8 },
    { value: "automation", label: "Test Automation", count: 3 },
    { value: "manual", label: "Manual Testing", count: 2 },
    { value: "performance", label: "Performance Testing", count: 1 },
    { value: "security", label: "Security Testing", count: 1 },
    { value: "mobile", label: "Mobile Testing", count: 1 },
  ];

  const locations = [
    { value: "select-mode", label: "Select-Mode", count: 15 },
    { value: "on-site", label: "On-Site", count: 5 },
    { value: "hybrid", label: "Hybrid", count: 5 },
    { value: "remote", label: "Remote", count: 5 }
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

  const handleViewDetails = (job: JobPosition) => {
    setSelectedJob(job);
    setShowDetailsModal(true);
    setShowApplyModal(false); // Ensure apply modal is closed
  };

  const handleApplyNow = (job: JobPosition) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setShowDetailsModal(false); // Ensure details modal is closed
  };

  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24" id="open-positions-section">
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
            Explore exciting opportunities to grow your career in software testing. We&apos;re hiring passionate QA professionals in automation testing, manual testing, performance testing, and security testing to join our world-class quality assurance team.

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

            {/* Work Mode Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work-Mode
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
                    <div className="md:flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 my-2 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                      onClick={() => handleViewDetails(position)}
                      className="flex-1 px-6 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleApplyNow(position)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredPositions.length === 0 && (
            <div className="text-center py-10 text-gray-600 text-lg">
              No positions found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {showDetailsModal && <JobDetailsModal job={selectedJob} onClose={() => setShowDetailsModal(false)} />}
      {showApplyModal && <JobApplicationModal job={selectedJob} onClose={() => setShowApplyModal(false)} />}
    </section>
  );
};

export default CareersOpenPositions;



