"use client";

import React from "react";
import { 
  FaRocket, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingCart,
  FaArrowRight
} from "react-icons/fa";

const EcommerceContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Our E-Commerce Experts",
      description: "Speak directly with our e-commerce testing specialists",
      action: "Call Now: +1 (555) 123-4567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaEnvelope,
      title: "Email for Detailed Inquiry",
      description: "Send us your requirements for a comprehensive proposal",
      action: "ecommerce@testriq.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FaCalendarAlt,
      title: "Schedule Strategy Session",
      description: "Book a free consultation to discuss your testing needs",
      action: "Schedule Free Consultation",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const benefits = [
    "Free e-commerce platform assessment",
    "Custom testing strategy development",
    "ROI projections and timeline",
    "Platform-specific recommendations",
    "Dedicated project manager",
    "24/7 support during critical periods"
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-brand-blue to-sky-600 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-blue bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <FaShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Ready to Optimize Your
            <span className="block">E-Commerce Platform?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards higher conversions, better user experience, and increased revenue. 
            Our e-commerce testing experts are ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Choose Your Preferred Contact Method</h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-brand-blue mb-2">{method.title}</h4>
                    <p className="text-sky-600 text-sm mb-4 leading-relaxed">{method.description}</p>
                    <button className="text-sky-600 font-semibold hover:underline flex items-center gap-2 group">
                      {method.action}
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Urgency Note */}
            <div className="bg-orange-500 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-30">
              <div className="flex items-center gap-3 mb-3">
                <FaRocket className="w-5 h-5 text-orange-300" />
                <h4 className="font-semibold text-white">Peak Season Coming?</h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for Black Friday, holiday sales, or major product launches? 
                Contact us at least 6-8 weeks in advance to ensure your platform is ready.
              </p>
            </div>
          </div>

          {/* Right Column - What You Get */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get When You Contact Us</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Contact Form</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[theme(color.brand.blue)] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[theme(color.brand.blue)] focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[theme(color.brand.blue)] focus:outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[theme(color.brand.blue)] focus:outline-none transition-colors">
                  <option value="">Select Your Platform</option>
                  <option value="shopify">Shopify</option>
                  <option value="woocommerce">WooCommerce</option>
                  <option value="magento">Magento</option>
                  <option value="bigcommerce">BigCommerce</option>
                  <option value="custom">Custom Platform</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Tell us about your testing needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[theme(color.brand.blue)] focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[theme(color.brand.blue)] text-white py-3 px-6 rounded-xl font-semibold hover:bg-opacity-90 hover:scale-97 transition-all flex items-center justify-center gap-2"
                >
                  <FaRocket className="w-4 h-4" />
                  Get Free E-Commerce Assessment
                </button>
              </form>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Response within 2 hours during business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">Join 500+ Successful E-Commerce Businesses</h3>
            <p className="text-brand-blue mb-6">
              Don&apos;t let technical issues hold back your e-commerce success. Start optimizing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-br from-brand-blue to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all shadow-lg">
                Start Free Assessment
              </button>
              <button className="bg-white bg-opacity-20 text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-98 transition-all ring-2 ring-brand-blue border-opacity-30">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceContactSection;

