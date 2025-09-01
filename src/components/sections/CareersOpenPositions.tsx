"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaFire,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaUpload,
  FaFileAlt,
  FaTrash,
} from "react-icons/fa";
import { jobOpenings } from "@/app/lib/openings";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CareersOpenPositions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    experience: "",
    currentRole: "",
    location: "",
    noticePeriod: "",
    coverLetter: "",
  });
  


  const filteredPositions = jobOpenings.filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  interface Position {
    id: string;
    title: string;
    location: string;
    color: string;
  }

  const handleApplyClick = (
    position: unknown,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (typeof position === "object" && position !== null) {
      setSelectedPosition(position as Position);
      setShowApplicationModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowApplicationModal(false);
    setSelectedPosition(null);
    setResumeFile(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentCompany: "",
      experience: "",
      currentRole: "",
      location: "",
      noticePeriod: "",
      coverLetter: "",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Application submitted successfully! We'll get back to you soon.");
      setIsSubmitting(false);
      handleCloseModal();
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
    <>
      <style jsx global>{`
        .job-description {
          line-height: 1.7;
        }

        .job-description h1,
        .job-description h2,
        .job-description h3,
        .job-description h4,
        .job-description h5,
        .job-description h6 {
          font-weight: 700 !important;
          color: #1f2937 !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }

        .job-description h1 {
          font-size: 1.5rem !important;
        }

        .job-description h2 {
          font-size: 1.375rem !important;
        }

        .job-description h3 {
          font-size: 1.25rem !important;
        }

        .job-description p {
          margin-bottom: 1rem !important;
          color: #4b5563 !important;
        }

        .job-description ul,
        .job-description ol {
          margin-bottom: 1.5rem !important;
          padding-left: 1.5rem !important;
          color: #4b5563 !important;
        }

        .job-description li {
          margin-bottom: 0.5rem !important;
          color: #4b5563 !important;
        }

        .job-description strong {
          font-weight: 600 !important;
          color: #1f2937 !important;
        }

        .job-description hr {
          margin: 2rem 0 !important;
          border-color: #e5e7eb !important;
        }

        .job-description code {
          background-color: #f3f4f6 !important;
          padding: 0.125rem 0.25rem !important;
          border-radius: 0.25rem !important;
          font-size: 0.875rem !important;
          color: #1f2937 !important;
        }

        .job-description blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding-left: 1rem !important;
          margin: 1.5rem 0 !important;
          font-style: italic !important;
          color: #4b5563 !important;
        }

        .job-description table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.5rem 0 !important;
        }

        .job-description th,
        .job-description td {
          padding: 0.75rem !important;
          border: 1px solid #d1d5db !important;
          text-align: left !important;
        }

        .job-description th {
          background-color: #f9fafb !important;
          font-weight: 600 !important;
        }

        /* Ensure first element doesn't have top margin */
        .job-description > :first-child {
          margin-top: 0 !important;
        }

        /* Better spacing for consecutive elements */
        .job-description h1 + p,
        .job-description h2 + p,
        .job-description h3 + p,
        .job-description h4 + p,
        .job-description h5 + p,
        .job-description h6 + p {
          margin-top: 0.5rem !important;
        }
      `}</style>

      <section
        className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24"
        id="open-positions-section"
      >
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
              testing. We&apos;re hiring passionate QA professionals in
              automation testing, manual testing, performance testing, and
              security testing to join our world-class quality assurance team.
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

      
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold">
                  {filteredPositions.length}
                </span>{" "}
                positions
              </p>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position) => {
              const isExpanded = expandedId === position.id;
              return (
                <div
                  key={position.id}
        
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  <div onClick={() => setExpandedId(isExpanded ? null : position.id)} className="p-8 relative cursor-pointer">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Left Side - Job Info */}
                      <div className="flex-1">
                        <div className="md:flex items-start gap-4 mb-4">
                          <div
                            className={`w-12 h-12 my-2 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            {position.icon &&
                              React.createElement(position.icon, {
                                className: "w-6 h-6 text-white",
                              })}
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row items-start gap-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {position.title}
                              </h3>
                              {position.badges?.map((badge, index) => (
                                <span
                                  key={index}
                                  className={`px-2 py-1 text-xs flex flex-row font-semibold rounded-full border ${getBadgeStyle(
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
                            <div className="flex flex-wrap gap-2">
                              {position.skills
                                .slice(
                                  0,
                                  isExpanded ? position.skills.length : 4
                                )
                                .map((skill, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-xs rounded-full font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              {!isExpanded && position.skills.length > 4 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                  +{position.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expand / Collapse Arrow */}
                    <div className="absolute bottom-8 right-8">
                      {isExpanded ? (
                        <FaChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <FaChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-8 pb-12">
                      {/* Full JD rendered as Markdown with custom styles */}
                      <div className="job-description max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {position.fullDescription}
                        </ReactMarkdown>
                      </div>

                      <button
                        onClick={(e) => handleApplyClick(position, e)}
                        className={`mt-8 w-xs cursor-pointer bg-gradient-to-r ${position.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
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
              Don&apos;t See Your Perfect Role?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent! Send us your
              resume and tell us about your QA expertise. We&apos;ll reach out
              when a position matches your skills.
            </p>
          </div>
        </div>

        {showApplicationModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Modal */}
            <div className="relative bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Submit Your Application
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Applying for:{" "}
                      <span className="font-medium">
                        {selectedPosition?.title}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <form onSubmit={handleFormSubmit} className="p-6">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={selectedPosition?.title || ""}
                          readOnly
                          disabled
                          className="w-full px-4 py-3 border border-gray-300 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="City, State/Country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Professional Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Total Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-8">5-8 years</option>
                          <option value="8-10">8-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Notice Period
                        </label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select notice period</option>
                          <option value="immediate">Immediate</option>
                          <option value="15-days">15 days</option>
                          <option value="1-month">1 month</option>
                          <option value="2-months">2 months</option>
                          <option value="3-months">3 months</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Resume Upload
                    </h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      {!resumeFile ? (
                        <>
                          <FaUpload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">
                            Click to upload or drag and drop your resume
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            PDF files only. Maximum file size: 5MB
                          </p>
                          <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                            <FaUpload className="w-4 h-4 mr-2" />
                            Choose File
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </label>
                        </>
                      ) : (
                        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center">
                            <FaFileAlt className="w-5 h-5 text-green-600 mr-3" />
                            <div>
                              <p className="text-sm font-medium text-green-800">
                                {resumeFile.name}
                              </p>
                              <p className="text-xs text-green-600">
                                {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setResumeFile(null)}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r ${
                      selectedPosition?.color
                    } text-white rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-90 transform hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CareersOpenPositions;
