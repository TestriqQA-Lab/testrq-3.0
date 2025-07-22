"use client";

import React from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaWifi,
  FaMicrochip,
  FaCloud,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaAward,
} from "react-icons/fa";

const IoTContactSection: React.FC = () => {
  const contactOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule Consultation",
      description: "Book a free 30-minute consultation with our IoT testing experts",
      action: "Schedule Now",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaPhone,
      title: "Speak with Expert",
      description: "Get immediate answers from our IoT testing specialists",
      action: "Call Now",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaEnvelope,
      title: "Request Proposal",
      description: "Get a detailed proposal and quote for your IoT testing needs",
      action: "Get Quote",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const expertiseAreas = [
    {
      icon: FaMicrochip,
      title: "Device Testing",
      description: "Hardware, firmware, and embedded system validation"
    },
    {
      icon: FaWifi,
      title: "Connectivity Testing",
      description: "Protocol validation, network resilience, and edge cases"
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "End-to-end testing with AWS IoT, Azure IoT, Google Cloud IoT"
    },
    {
      icon: FaShieldAlt,
      title: "Security Testing",
      description: "Penetration testing, vulnerability assessment, compliance"
    }
  ];

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "IoT Specialists",
      description: "Dedicated team with deep IoT ecosystem expertise"
    },
    {
      icon: FaCheckCircle,
      title: "99.9% Success Rate",
      description: "Proven track record of successful IoT deployments"
    },
    {
      icon: FaClock,
      title: "Faster Deployments",
      description: "50% faster time to market through comprehensive testing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Secure Your
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 bg-clip-text text-transparent">
              IoT Ecosystem?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our IoT testing experts to discuss your project needs, 
            get a custom quote, and start your journey to a successful IoT deployment.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactOptions.map((option, index) => (
            <div key={index} className={`${option.bgColor} rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
              <button className={`bg-gradient-to-r ${option.color} text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto group`}>
                {option.action}
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free IoT Testing Assessment</h3>
              <p className="text-gray-600">Fill out this form and our IoT testing experts will contact you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                  placeholder="john.doe@iotcompany.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all"
                  placeholder="IoT Solutions Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">IoT Solution Type *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all">
                  <option value="">Select IoT Solution Type</option>
                  <option value="smart-home">Smart Home Devices</option>
                  <option value="industrial">Industrial IoT (IIoT)</option>
                  <option value="healthcare">Healthcare IoT</option>
                  <option value="automotive">Connected Vehicles</option>
                  <option value="smart-city">Smart City Infrastructure</option>
                  <option value="wearables">Wearables & Fitness</option>
                  <option value="agriculture">Smart Agriculture</option>
                  <option value="retail">Retail IoT</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Testing Requirements</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Device & Hardware Testing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Connectivity & Protocol Testing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Security & Vulnerability Testing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Cloud Integration Testing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Performance & Scalability Testing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]" />
                    <span className="ml-2 text-gray-700">Compliance & Certification</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your IoT solution, number of devices, protocols used, timeline, and any specific testing challenges you&apos;re facing..."
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Get Free Assessment
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Expertise Areas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our IoT Testing Expertise</h3>
              <div className="space-y-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Testriq for IoT Testing?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{reason.title}</h4>
                      <p className="text-blue-100 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">IoT Hotline</div>
                    <div className="text-gray-600">+1 (555) 123-IoT1</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">IoT Team</div>
                    <div className="text-gray-600">iot@testriq.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaClock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Start Your IoT Success Story Today</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join 1000+ companies who trust Testriq for comprehensive IoT testing 
              and successful connected device deployments across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                Download IoT Testing Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTContactSection;

