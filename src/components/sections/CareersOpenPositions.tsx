"use client";

import React, { useState, useRef, useEffect } from "react";
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
  FaCheckCircle,
  FaCaretDown,
} from "react-icons/fa";
import { jobOpenings, JobOpening } from "@/app/lib/openings";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const CareersOpenPositions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<JobOpening | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDomainDropdown, setShowDomainDropdown] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const domainDropdownRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null); // Ref for modal content
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    currentCTC: "",
    expectedCTC: "",
    skillsToolsFramework: "",
    domainKnowledge: [] as string[],
    experience: "",
    currentRole: "",
    location: "",
    noticePeriod: "",
  });
  
  // Phone number validation regex - industry standard for detecting fake numbers
  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, "");
    
    // Check length (10-11 digits)
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return false;
    }
    
    // Check for common fake patterns
    const fakePatterns = [
      /^0{10,11}$/, // All zeros
      /^1{10,11}$/, // All ones
      /^2{10,11}$/, // All twos
      /^3{10,11}$/, // All threes
      /^4{10,11}$/, // All fours
      /^5{10,11}$/, // All fives
      /^6{10,11}$/, // All sixes
      /^7{10,11}$/, // All sevens
      /^8{10,11}$/, // All eights
      /^9{10,11}$/, // All nines
      /^1234567890$/, // Sequential
      /^0123456789$/, // Sequential starting with 0
      /^(\d)\1{9,10}$/, // Repeating digits
    ];
    
    // Check against fake patterns
    for (const pattern of fakePatterns) {
      if (pattern.test(cleanPhone)) {
        return false;
      }
    }
    
    // Additional validation for Indian numbers (if starts with country code)
    if (cleanPhone.length === 11 && !cleanPhone.startsWith("91")) {
      return false;
    }
    
    // For 10-digit numbers, first digit should not be 0 or 1
    if (cleanPhone.length === 10 && (cleanPhone.startsWith("0") || cleanPhone.startsWith("1"))) {
      return false;
    }
    
    return true;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (domainDropdownRef.current && !domainDropdownRef.current.contains(event.target as Node)) {
        setShowDomainDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const filteredPositions = jobOpenings.filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const handleApplyClick = (
    position: JobOpening,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setSelectedPosition(position);
    setShowApplicationModal(true);
    setShowSuccessMessage(false);
  };

  const handleCloseModal = () => {
    setShowApplicationModal(false);
    setSelectedPosition(null);
    setResumeFile(null);
    setShowSuccessMessage(false);
    setPhoneError("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentCompany: "",
      currentCTC: "",
      expectedCTC: "",
      skillsToolsFramework: "",
      domainKnowledge: [],
      experience: "",
      currentRole: "",
      location: "",
      noticePeriod: "",
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
    
    // Validate phone number if provided
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid 10-11 digit phone number");
      return;
    }
    
    if (!resumeFile) {
      alert("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("currentCompany", formData.currentCompany);
      formDataToSend.append("currentCTC", formData.currentCTC);
      formDataToSend.append("expectedCTC", formData.expectedCTC);
      formDataToSend.append("skillsToolsFramework", formData.skillsToolsFramework);
      formDataToSend.append("domainKnowledge", JSON.stringify(formData.domainKnowledge));
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("currentRole", formData.currentRole);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("noticePeriod", formData.noticePeriod);
      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }
      if (selectedPosition) {
        formDataToSend.append("jobTitle", selectedPosition.title);
        formDataToSend.append("jobId", selectedPosition.id.toString());
      }

      const response = await fetch("/api/apply-job", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        // Scroll to top of modal to show success message
        if (modalContentRef.current) {
          modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
        setTimeout(() => {
          handleCloseModal();
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(`Application submission failed: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Clear phone error when user starts typing
    if (name === "phone") {
      setPhoneError("");
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDomainKnowledgeChange = (option: string) => {
    setFormData((prev) => {
      const newDomainKnowledge = prev.domainKnowledge.includes(option)
        ? prev.domainKnowledge.filter((item) => item !== option)
        : [...prev.domainKnowledge, option];
      return {
        ...prev,
        domainKnowledge: newDomainKnowledge,
      };
    });
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

  const domainKnowledgeOptions = [
    "Trading",
    "Capital Markets",
    "HR",
    "Investment",
    "Insurance",
    "BFSI",
    "Banking",
    "Ecommerce",
    "Healthcare",
    "CRM",
    "LegalTech",
    "Gaming",
    "Advertising, Media, Social Media",
    "Project Management",
    "AI",
    "Finance",
    "ELearning",
    "Hospitality, Hotel, Resturant",
    "Travel",
    "Telecom",
    "Real Estate",
    "SalesForce",
  ];

  const noticePeriodOptions = [
    "Immediate",
    "7 Days",
    "15 Days",
    "30 Days",
    "60 Days",
    "90 Days",
  ];

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

        /* Adjusted font sizes for job description headings */
        .job-description h1 {
          font-size: 1.875rem !important; /* 30px */
        }

        .job-description h2 {
          font-size: 1.5rem !important; /* 24px */
        }

        .job-description h3 {
          font-size: 1.25rem !important; /* 20px */
        }

        .job-description h4 {
          font-size: 1.125rem !important; /* 18px */
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
          list-style-type: disc; /* Ensure bullet points */
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

        .job-description > :first-child {
          margin-top: 0 !important;
        }

        .job-description h1 + p,
        .job-description h2 + p,
        .job-description h3 + p,
        .job-description h4 + p,
        .job-description h5 + p,
        .job-description h6 + p {
          margin-top: 0.5rem !important;
        }

        /* Modal scrollbar styling */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Success animation */
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message {
          animation: slideInFromTop 0.3s ease-out;
        }

        /* Centered success message overlay */
        .success-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
          border-radius: 1rem;
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
              Explore exciting opportunities to grow your <Link href="/blog/post/is-qa-a-good-career-software-tester">career in software
              testing</Link>. We&apos;re hiring passionate QA professionals in
              <Link href="/automation-testing-services"> automation testing</Link>, <Link href="/manual-testing">manual testing</Link>, <Link href="/performance-testing-services">performance testing</Link>, and
              <Link href="/security-testing"> security testing</Link> to join our world-class quality assurance team.
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
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Job Description */}
                          <div className="lg:col-span-2">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Job Description</h4>
                            <div className="job-description prose prose-gray max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {position.description}
                              </ReactMarkdown>
                            </div>
                          </div>

                          {/* Sidebar */}
                          <div className="space-y-6">
                            {/* Apply Button */}
                            <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-xl p-6 text-white">
                              <h5 className="font-semibold mb-2">Ready to Apply?</h5>
                              <p className="text-sm text-blue-100 mb-4">
                                Join our team and make an impact in quality assurance.
                              </p>
                              <button
                                onClick={(e) => handleApplyClick(position, e)}
                                className="w-full bg-white text-[theme(color.brand.blue)] font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                              >
                                Apply Now
                              </button>
                            </div>

                            {/* Job Details */}
                            <div className="bg-gray-50 rounded-xl p-6">
                              <h5 className="font-semibold text-gray-900 mb-4">
                                Job Details
                              </h5>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Location:</span>
                                  <span className="font-medium">{position.location}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Type:</span>
                                  <span className="font-medium">{position.type}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Experience:</span>
                                  <span className="font-medium">{position.experience}</span>
                                </div>
                                {position.salary && (
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Salary:</span>
                                    <span className="font-medium">{position.salary}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Skills Required */}
                            <div className="bg-gray-50 rounded-xl p-6">
                              <h5 className="font-semibold text-gray-900 mb-4">
                                Skills Required
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {position.skills.map((skill, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredPositions.length === 0 && (
              <div className="text-center py-16">
                <FaSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No positions found
                </h3>
                <p className="text-gray-600">
                  No positions found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Application Modal - Updated with better viewport handling */}
        {showApplicationModal && selectedPosition && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div ref={modalContentRef} className="bg-white rounded-2xl shadow-xl w-full max-w-4xl my-4 relative modal-content max-h-[calc(100vh-2rem)] overflow-y-auto">
              {/* Centered Success Message Overlay */}
              {showSuccessMessage && (
                <div className="success-overlay">
                  <div className="success-message bg-white rounded-xl p-8 shadow-2xl max-w-md mx-4">
                    <div className="text-center">
                      <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
                      <p className="text-gray-600 mb-4">We&apos;ll get back to you soon. This window will close automatically.</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{width: "100%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Apply for {selectedPosition.title}
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below to submit your application.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Mobile-first responsive grid - single column on mobile, multi-column on larger screens */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Column 1: Personal Info & Resume Upload */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Personal Information
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            phoneError ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="+91 9876543210 or 9876543210"
                        />
                        {phoneError && (
                          <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., New York, Remote"
                          required
                        />
                      </div>
                      {/* Resume Upload moved here */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Resume Upload *
                        </h4>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                          {!resumeFile ? (
                            <>
                              <FaUpload className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                              <p className="text-gray-600 text-sm mb-1">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 mb-3">
                                PDF, max 5MB
                              </p>
                              <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                                <FaUpload className="w-3 h-3 mr-2" />
                                Choose File
                                <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={handleFileUpload}
                                  className="hidden"
                                  required
                                />
                              </label>
                            </>
                          ) : (
                            <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="flex items-center">
                                <FaFileAlt className="w-4 h-4 text-green-600 mr-2" />
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

                    {/* Column 2: Professional Information & Skills */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Professional Information
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Total Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="0-1 years">0-1 years</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-8 years">5-8 years</option>
                          <option value="8-10 years">8-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Role
                        </label>
                        <input
                          type="text"
                          name="currentRole"
                          value={formData.currentRole}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., QA Engineer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Company
                        </label>
                        <input
                          type="text"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your current employer"
                        />
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
                          <option value="">Select Notice Period</option>
                          {noticePeriodOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current CTC (in LPA)
                        </label>
                        <input
                          type="number"
                          name="currentCTC"
                          value={formData.currentCTC}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., 8.5"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected CTC (in LPA)
                        </label>
                        <input
                          type="number"
                          name="expectedCTC"
                          value={formData.expectedCTC}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., 12.0"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Skills (Tools & Framework)
                        </label>
                        <input
                          type="text"
                          name="skillsToolsFramework"
                          value={formData.skillsToolsFramework}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., Selenium, Playwright, Jira, Agile"
                        />
                      </div>
                      {/* Domain Knowledge Multi-select with Checkboxes */}
                      <div className="relative" ref={domainDropdownRef}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Domain Knowledge
                        </label>
                        <div
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white cursor-pointer flex justify-between items-center focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          onClick={() => setShowDomainDropdown(!showDomainDropdown)}
                        >
                          <span className="text-gray-700 truncate">
                            {formData.domainKnowledge.length > 0
                              ? formData.domainKnowledge.join(", ")
                              : "Select Domain Knowledge"}
                          </span>
                          <FaCaretDown className={`w-4 h-4 text-gray-500 transform ${showDomainDropdown ? "rotate-180" : "rotate-0"} transition-transform duration-200`} />
                        </div>
                        {showDomainDropdown && (
                          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                            {domainKnowledgeOptions.map((option) => (
                              <label
                                key={option}
                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value={option}
                                  checked={formData.domainKnowledge.includes(option)}
                                  onChange={() => handleDomainKnowledgeChange(option)}
                                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || showSuccessMessage}
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CareersOpenPositions;
