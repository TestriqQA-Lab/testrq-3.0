"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaUserMd,
  FaShieldAlt,
  FaGavel,
  FaHeartbeat,
  FaCheckCircle,
  FaClock,
  FaAward,
  FaUser,
  FaBuilding,
  FaComments,
  FaRocket,
} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const HealthcareContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    healthcareOrganization: "",
    healthcareSoftwareType: "",
    testingRequirements: "",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [healthcareOrganizationError, setHealthcareOrganizationError] = useState<string | null>(null);
  const [healthcareSoftwareTypeError, setHealthcareSoftwareTypeError] = useState<string | null>(null);
  const [testingRequirementsError, setTestingRequirementsError] = useState<string | null>(null);
  const [projectDetailsError, setProjectDetailsError] = useState<string | null>(null);

  const validatePhoneNumber = (phone: string | undefined) => {
    if (!phone) {
      setPhoneError("Business Phone is required.");
      return false;
    }
    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Invalid phone number format.");
      return false;
    }

    const digits = phone.replace(/\D/g, "");

    if (/^(\d)\1+$/.test(digits)) {
      setPhoneError("Phone number cannot consist of repeating digits.");
      return false;
    }

    const isSequential = (num: string) => {
      for (let i = 0; i < num.length - 2; i++) {
        const n1 = parseInt(num[i]);
        const n2 = parseInt(num[i + 1]);
        const n3 = parseInt(num[i + 2]);
        if ((n2 === n1 + 1 && n3 === n2 + 1) || (n2 === n1 - 1 && n3 === n2 - 1)) {
          return true;
        }
      }
      return false;
    };
    if (isSequential(digits)) {
      setPhoneError("Phone number cannot consist of sequential digits.");
      return false;
    }

    if (/^0+$/.test(digits)) {
      setPhoneError("Phone number cannot be all zeros.");
      return false;
    }

    setPhoneError(null);
    return true;
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("Business Email is required.");
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validateFullName = (name: string) => {
    if (!name) {
      setFullNameError("Full Name is required.");
      return false;
    }
    if (name.trim().length < 3) {
      setFullNameError("Full Name must be at least 3 characters.");
      return false;
    }
    setFullNameError(null);
    return true;
  };

  const validateHealthcareOrganization = (organization: string) => {
    if (!organization) {
      setHealthcareOrganizationError("Healthcare Organization is required.");
      return false;
    }
    setHealthcareOrganizationError(null);
    return true;
  };

  const validateHealthcareSoftwareType = (softwareType: string) => {
    if (!softwareType) {
      setHealthcareSoftwareTypeError("Please select healthcare software type.");
      return false;
    }
    setHealthcareSoftwareTypeError(null);
    return true;
  };

  const validateTestingRequirements = (requirements: string) => {
    if (!requirements) {
      setTestingRequirementsError("Please select testing requirements.");
      return false;
    }
    setTestingRequirementsError(null);
    return true;
  };

  const validateProjectDetails = (details: string) => {
    if (!details) {
      setProjectDetailsError("Project details are required.");
      return false;
    }
    if (details.trim().length < 10) {
      setProjectDetailsError("Project details must be at least 10 characters.");
      return false;
    }
    setProjectDetailsError(null);
    return true;
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

    if (name === "fullName") validateFullName(value);
    if (name === "businessEmail") validateEmail(value);
    if (name === "healthcareOrganization") validateHealthcareOrganization(value);
    if (name === "healthcareSoftwareType") validateHealthcareSoftwareType(value);
    if (name === "testingRequirements") validateTestingRequirements(value);
    if (name === "projectDetails") validateProjectDetails(value);
  };

  const handlePhoneChange = (phone: string | undefined) => {
    setFormData((prev) => ({
      ...prev,
      businessPhone: phone || "",
    }));
    validatePhoneNumber(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPhoneValid = validatePhoneNumber(formData.businessPhone);
    const isEmailValid = validateEmail(formData.businessEmail);
    const isFullNameValid = validateFullName(formData.fullName);
    const isHealthcareOrganizationValid = validateHealthcareOrganization(formData.healthcareOrganization);
    const isHealthcareSoftwareTypeValid = validateHealthcareSoftwareType(formData.healthcareSoftwareType);
    const isTestingRequirementsValid = validateTestingRequirements(formData.testingRequirements);
    const isProjectDetailsValid = validateProjectDetails(formData.projectDetails);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isHealthcareOrganizationValid &&
      isHealthcareSoftwareTypeValid &&
      isTestingRequirementsValid &&
      isProjectDetailsValid
    ) {
      setIsLoading(true);
      try {
        const dataToSend = {
          fullName: formData.fullName,
          businessEmail: formData.businessEmail,
          businessPhone: formData.businessPhone,
          healthcareOrganization: formData.healthcareOrganization,
          healthcareSoftwareType: formData.healthcareSoftwareType,
          testingRequirements: formData.testingRequirements,
          projectDetails: formData.projectDetails,
          source: "Healthcare Testing Services Page",
        };

        const response = await fetch("/api/healthcareContact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          setIsSubmitted(true);
          document.getElementById("healthcare-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => setIsSubmitted(false), 5000);

          setFormData({
            fullName: "",
            businessEmail: "",
            businessPhone: "",
            healthcareOrganization: "",
            healthcareSoftwareType: "",
            testingRequirements: "",
            projectDetails: "",
          });
        } else {
          const errorData = await response.json();
          console.error("Form submission failed:", errorData.error);
          alert("Form submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error. Please check your connection and try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form has errors.");
    }
  };

  const contactOptions = [
    {
      icon: FaPhone,
      title: "Speak with Healthcare Experts",
      description: "Direct consultation with our healthcare compliance specialists",
      text: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaEnvelope,
      title: "Request Detailed Proposal",
      description: "Get a comprehensive proposal for your healthcare testing needs",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Healthcare Strategy Session",
      description: "Book a free consultation to discuss compliance requirements",
      text: "Schedule Free Consultation",
      action: "/contact-us#calendly-section",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const expertiseAreas = [
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance",
      description: "Complete HIPAA Security Rule and Privacy Rule validation",
    },
    {
      icon: FaGavel,
      title: "FDA Validation",
      description: "Medical device software validation and regulatory support",
    },
    {
      icon: FaHeartbeat,
      title: "Clinical Systems",
      description: "EHR, EMR, and clinical workflow testing expertise",
    },
    {
      icon: FaUserMd,
      title: "Telemedicine",
      description: "Telehealth platform testing and compliance validation",
    },
  ];

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "Healthcare Specialists",
      description: "Dedicated team with deep healthcare domain expertise",
    },
    {
      icon: FaCheckCircle,
      title: "100% Compliance Rate",
      description: "Perfect track record of achieving regulatory compliance",
    },
    {
      icon: FaClock,
      title: "Faster Approvals",
      description: "50% faster regulatory approval through expert testing",
    },
  ];

  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6">
            <FaHeartbeat className="w-4 h-4" />
            <span className="text-sm font-medium">Healthcare Excellence</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Ready to Ensure Your
            <span className="block text-blue-600">Healthcare Software Compliance?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards HIPAA compliance, FDA validation, and enhanced patient safety. 
            Our healthcare testing experts are ready to help you navigate complex regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Choose Your Preferred Contact Method
            </h3>

            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.action}
                onClick={(e) => {
                  if (option.title === "Healthcare Strategy Session") {
                    e.preventDefault();
                    scrollToCalendly();
                  }
                }}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2 group">
                      {option.text}
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Expertise Areas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Healthcare Expertise
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <area.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{area.title}</h4>
                      <p className="text-gray-600 text-xs">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Healthcare Organizations Choose Us
              </h3>

              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <reason.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{reason.title}</h4>
                      <p className="text-gray-600 text-xs">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="healthcare-form-section" className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Healthcare Testing Assessment Form
              </h4>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && <p className="text-red-500 text-xs mt-1">{fullNameError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Phone *
                    </label>
                    <div className="relative">
                      <PhoneInput
                        international
                        value={formData.businessPhone}
                        onChange={handlePhoneChange}
                        onBlur={() => validatePhoneNumber(formData.businessPhone)}
                        className={`w-full phone-input-container ${phoneError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter phone number"
                        inputClassName="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Healthcare Organization *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="healthcareOrganization"
                        value={formData.healthcareOrganization}
                        onChange={handleInputChange}
                        onBlur={() => validateHealthcareOrganization(formData.healthcareOrganization)}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ${healthcareOrganizationError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Healthcare Organization Name"
                      />
                    </div>
                    {healthcareOrganizationError && <p className="text-red-500 text-xs mt-1">{healthcareOrganizationError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Healthcare Software Type *
                    </label>
                    <div className="relative">
                      <FaHeartbeat className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      <select
                        name="healthcareSoftwareType"
                        value={formData.healthcareSoftwareType}
                        onChange={handleInputChange}
                        onBlur={() => validateHealthcareSoftwareType(formData.healthcareSoftwareType)}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 appearance-none ${healthcareSoftwareTypeError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select Healthcare Software Type</option>
                        <option value="ehr-emr">EHR/EMR Systems</option>
                        <option value="telemedicine">Telemedicine Platform</option>
                        <option value="medical-device">Medical Device Software</option>
                        <option value="patient-portal">Patient Portal</option>
                        <option value="clinical-trial">Clinical Trial Management</option>
                        <option value="pharmacy">Pharmacy Management</option>
                        <option value="laboratory">Laboratory Information System</option>
                        <option value="radiology">Radiology Information System</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {healthcareSoftwareTypeError && <p className="text-red-500 text-xs mt-1">{healthcareSoftwareTypeError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Testing Requirements *
                    </label>
                    <div className="relative">
                      <FaShieldAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      <select
                        name="testingRequirements"
                        value={formData.testingRequirements}
                        onChange={handleInputChange}
                        onBlur={() => validateTestingRequirements(formData.testingRequirements)}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 appearance-none ${testingRequirementsError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select Testing Requirements</option>
                        <option value="hipaa-compliance">HIPAA Compliance Testing</option>
                        <option value="fda-validation">FDA Validation</option>
                        <option value="security-testing">Security Testing</option>
                        <option value="performance-testing">Performance Testing</option>
                        <option value="interoperability">Interoperability Testing</option>
                        <option value="accessibility">Accessibility Testing</option>
                        <option value="functional-testing">Functional Testing</option>
                        <option value="comprehensive">Comprehensive Testing</option>
                      </select>
                    </div>
                    {testingRequirementsError && <p className="text-red-500 text-xs mt-1">{testingRequirementsError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        onBlur={() => validateProjectDetails(formData.projectDetails)}
                        required
                        rows={4}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 resize-none ${projectDetailsError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Tell us about your healthcare testing project, compliance requirements, timeline, and any specific concerns..."
                      />
                    </div>
                    {projectDetailsError && <p className="text-red-500 text-xs mt-1">{projectDetailsError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-98 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="w-4 h-4" />
                        Get Healthcare Testing Assessment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                Healthcare compliance experts • Response within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareContactSection;