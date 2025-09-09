"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const ContactHeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    companyStage: "",
    howDidYouHear: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [companyStageError, setCompanyStageError] = useState<string | null>(
    null
  );
  const [howDidYouHearError, setHowDidYouHearError] = useState<string | null>(
    null
  );
  const [messageError, setMessageError] = useState<string | null>(null);

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

    // Check for repeating digits (e.g., 1111111111)
    if (/^(\d)\1+$/.test(digits)) {
      setPhoneError("Phone number cannot consist of repeating digits.");
      return false;
    }

    // Check for sequential digits (e.g., 1234567890)
    const isSequential = (num: string) => {
      for (let i = 0; i < num.length - 2; i++) {
        const n1 = parseInt(num[i]);
        const n2 = parseInt(num[i + 1]);
        const n3 = parseInt(num[i + 2]);
        if (
          (n2 === n1 + 1 && n3 === n2 + 1) ||
          (n2 === n1 - 1 && n3 === n2 - 1)
        ) {
          return true;
        }
      }
      return false;
    };
    if (isSequential(digits)) {
      setPhoneError("Phone number cannot consist of sequential digits.");
      return false;
    }

    // Check for all zeros
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

  const validateCompanyStage = (stage: string) => {
    if (!stage) {
      setCompanyStageError("Company Stage is required.");
      return false;
    }
    setCompanyStageError(null);
    return true;
  };

  const validateHowDidYouHear = (text: string) => {
    if (!text) {
      setHowDidYouHearError("This field is required.");
      return false;
    }
    if (text.length > 50) {
      setHowDidYouHearError("Maximum 50 characters allowed.");
      return false;
    }
    setHowDidYouHearError(null);
    return true;
  };

  const validateMessage = (message: string) => {
    if (!message) {
      setMessageError("Message is required.");
      return false;
    }
    if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      return false;
    }
    setMessageError(null);
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

    // Real-time validation
    if (name === "fullName") validateFullName(value);
    if (name === "businessEmail") validateEmail(value);
    if (name === "companyStage") validateCompanyStage(value);
    if (name === "howDidYouHear") validateHowDidYouHear(value);
    if (name === "message") validateMessage(value);
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
    const isCompanyStageValid = validateCompanyStage(formData.companyStage);
    const isHowDidYouHearValid = validateHowDidYouHear(formData.howDidYouHear);
    const isMessageValid = validateMessage(formData.message);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isCompanyStageValid &&
      isHowDidYouHearValid &&
      isMessageValid
    ) {
      setIsLoading(true); // Set loading to true when submission starts
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          setIsSubmitted(true);
          // Scroll to the top of the form section to show the success message
          document
            .getElementById("form-section")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => setIsSubmitted(false), 5000);

          // Reset form
          setFormData({
            fullName: "",
            businessEmail: "",
            businessPhone: "",
            companyStage: "",
            howDidYouHear: "",
            message: "",
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
        setIsLoading(false); // Set loading to false when submission ends
      }
    } else {
      console.log("Form has errors.");
    }
  };

  const quickContactMethods = [
    {
      icon: FaPhone,
      label: "Call Now",
      value: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "bg-green-500",
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "bg-blue-500",
    },
    {
      icon: FaCalendarAlt,
      label: "Schedule Meeting",
      value: "Book a Call",
      action: "#calendly-section",
      color: "bg-purple-500",
    },
  ];

  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="form-section"
      className="relative bg-white py-8 lg:py-16 px-8 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[theme(color.brand.blue)] to-sky-600 opacity-10 rounded-full transform translate-x-48 -translate-y-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400 to-sky-600 opacity-10 rounded-full transform -translate-x-32 translate-y-32 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <div>
              <div className="inline-flex gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
                <FaComments className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let&apos;s Connect and
                <span className="block text-[theme(color.brand.blue)]">
                  Build Together
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Connect with our QA experts for software testing consultation,
                support, or partnerships. Achieve quality excellence with our
                <Link href="/automation-testing-services"> automation</Link>, <Link href="/manual-testing">manual</Link>, and <Link href="/performance-testing-services">performance testing services</Link>.
              </p>
            </div>

            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Contact Options
              </h3>
              <div className="space-y-3">
                {quickContactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    onClick={(e) => {
                      if (method.label === "Schedule Meeting") {
                        e.preventDefault(); // Prevent default link behavior
                        scrollToCalendly(); // Trigger smooth scroll
                      }
                    }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {method.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-green-800">
                    We&apos;re Online Now!
                  </div>
                  <div className="text-green-600 text-sm">
                    Average response time: 2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Let&apos;s Talk Business
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 2
                hours.
              </p>
            </div>

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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${
                        fullNameError ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {fullNameError && (
                    <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
                  )}
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
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${
                        emailError ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@company.com"
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
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
                      className={`w-full phone-input-container ${
                        phoneError ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter phone number"
                      inputprops={{
                        className:
                          "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300",
                      }}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What stage is your company? *
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    <select
                      name="companyStage"
                      value={formData.companyStage}
                      onChange={handleInputChange}
                      onBlur={() => validateCompanyStage(formData.companyStage)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none ${
                        companyStageError ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select your company stage</option>
                      <option value="early_stage_startup">
                        Early stage startup
                      </option>
                      <option value="mid_stage_startup">
                        Mid stage startup
                      </option>
                      <option value="late_stage_startup">
                        Late stage startup
                      </option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                  {companyStageError && (
                    <p className="text-red-500 text-xs mt-1">
                      {companyStageError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear of us? (Upto 50 characters) *
                  </label>
                  <div className="relative">
                    <FaComments className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      onBlur={() =>
                        validateHowDidYouHear(formData.howDidYouHear)
                      }
                      required
                      maxLength={50}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${
                        howDidYouHearError
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Google, LinkedIn, Referral, etc."
                    />
                  </div>
                  {howDidYouHearError && (
                    <p className="text-red-500 text-xs mt-1">
                      {howDidYouHearError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => validateMessage(formData.message)}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none ${
                      messageError ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project, testing needs, or any questions you have..."
                  />
                  {messageError && (
                    <p className="text-red-500 text-xs mt-1">{messageError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[theme(color.brand.blue)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <FaPaperPlane className="mr-2" />
                  )}
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[theme(color.brand.blue)] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-[theme(color.brand.blue)] hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHeroSection;
