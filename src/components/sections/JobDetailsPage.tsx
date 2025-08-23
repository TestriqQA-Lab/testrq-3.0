"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaCheckCircle,
  FaBuilding,
  FaDollarSign,
  FaCalendarAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaCopy,
} from "react-icons/fa";
import { JobPosition } from "@/lib/openings";
import Markdown from "react-markdown";
import Link from "next/link";

interface JobDetailsPageProps {
  job: JobPosition;
}

// Job Application Modal Component
const JobApplicationModal: React.FC<{ job: JobPosition | null; onClose: () => void }> = ({ job, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    role: job?.title || "",
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
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            fullName: "",
            mobileNumber: "",
            emailAddress: "",
            currentLocation: "",
            noticePeriod: "",
            role: job?.title || "",
            totalYearsExperience: "",
            currentCTC: "",
            resume: null,
          });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        
        {submitStatus === 'success' ? (
          <div className="text-center py-12">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600">Thank you for applying. We will review your application and get back to you soon.</p>
          </div>
        ) : (
          <>
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
              
              {submitStatus === 'error' && (
                <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">Failed to submit application. Please try again.</p>
                </div>
              )}
              
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ job }) => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

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

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = `${job.title} at Testriq`;
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-6">
          <Link href="/careers" className="inline-flex items-center text-[theme(color.brand.blue)] hover:text-blue-700 transition-colors duration-300 mb-4">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-2xl flex items-center justify-center`}>
                  <job.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{job.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-blue-100">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="w-4 h-4" />
                      <span>Testriq</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {job.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-semibold rounded-full border ${getBadgeStyle(badge)}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
                {job.description}
              </p>
            </div>
            
            <div className="lg:w-80">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isBookmarked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <FaHeart className="w-4 h-4" />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <FaShare className="w-4 h-4" />
                      </button>
                      {showShareMenu && (
                        <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-2 z-10 min-w-[150px]">
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                          >
                            <FaLinkedin className="w-4 h-4 text-blue-600" />
                            LinkedIn
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                          >
                            <FaTwitter className="w-4 h-4 text-blue-400" />
                            Twitter
                          </button>
                          <button
                            onClick={() => handleShare('facebook')}
                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                          >
                            <FaFacebook className="w-4 h-4 text-blue-600" />
                            Facebook
                          </button>
                          <button
                            onClick={() => handleShare('copy')}
                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                          >
                            <FaCopy className="w-4 h-4 text-gray-600" />
                            Copy Link
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="w-full bg-white text-[theme(color.brand.blue)] font-semibold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 mb-4"
                >
                  Apply Now
                </button>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-blue-200" />
                    <span>Posted 2 days ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="w-4 h-4 text-blue-200" />
                    <span>15+ applicants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRocket className="w-4 h-4 text-blue-200" />
                    <span>Fast hiring process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <Markdown>{job.fullDescription}</Markdown>
              </div>
            </div>
            
            {/* Skills Required */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[theme(color.brand.blue)] bg-opacity-10 text-[theme(color.brand.blue)] text-sm rounded-full font-medium border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Job Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Department</span>
                  <span className="font-medium capitalize">{job.department}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Job Type</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{job.location}</span>
                </div>
              </div>
            </div>
            
            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Testriq</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Testriq is a leading software testing company that provides comprehensive QA services to businesses worldwide. We specialize in automation testing, manual testing, performance testing, and security testing.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaBuilding className="w-4 h-4 text-gray-400" />
                  <span>Software Testing Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4 text-gray-400" />
                  <span>50-200 employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <span>Global presence</span>
                </div>
              </div>
            </div>
            
            {/* Similar Jobs */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-3">
                {/* You can add similar jobs here */}
                <Link href="/careers" className="block p-3 border border-gray-200 rounded-lg hover:border-[theme(color.brand.blue)] transition-colors duration-300">
                  <h4 className="font-medium text-gray-900">QA Test Engineer</h4>
                  <p className="text-sm text-gray-600">Manual Testing • 2-4 years</p>
                </Link>
                <Link href="/careers" className="block p-3 border border-gray-200 rounded-lg hover:border-[theme(color.brand.blue)] transition-colors duration-300">
                  <h4 className="font-medium text-gray-900">Performance Testing Specialist</h4>
                  <p className="text-sm text-gray-600">Performance Testing • 4+ years</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplyModal && <JobApplicationModal job={job} onClose={() => setShowApplyModal(false)} />}
    </div>
  );
};

export default JobDetailsPage;


