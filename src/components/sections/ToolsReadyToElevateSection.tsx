import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const ToolsReadyToElevateSection = () => {
  const ctaOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule Consultation",
      description: "Book a free 30-minute consultation to discuss your testing needs",
      action: "Book Now",
      highlight: true
    },
    {
      icon: FaPhone,
      title: "Speak with Expert",
      description: "Talk directly with our testing specialists",
      action: "Call Now",
      highlight: false
    },
    {
      icon: FaEnvelope,
      title: "Get Custom Quote",
      description: "Receive a tailored proposal for your project",
      action: "Request Quote",
      highlight: false
    }
  ];

  const benefits = [
    "Access to 50+ premium testing tools",
    "Expert guidance on tool selection",
    "Custom framework development",
    "24/7 technical support",
    "Training and knowledge transfer",
    "Continuous tool optimization"
  ];

  const successMetrics = [
    { value: "500+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" },
    { value: "75%", label: "Faster Testing" },
    { value: "60%", label: "Cost Reduction" }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-8 py-16 xl:px-24 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-700 text-blue-100 text-sm px-4 py-2 rounded-full mb-6">
            Ready to Get Started?
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Elevate Your Testing with{" "}
            <span className="text-blue-300">Advanced Tools</span>
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Transform your software quality assurance with our comprehensive suite of testing tools and frameworks. 
            Join hundreds of companies that trust us with their critical testing needs.
          </p>

          {/* Primary CTA Button */}
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-3 mb-12">
            Start Your Testing Journey
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  option.highlight
                    ? "bg-white text-gray-900 shadow-2xl"
                    : "bg-blue-800 bg-opacity-50 backdrop-blur-sm border border-blue-700"
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  option.highlight 
                    ? "bg-blue-100 text-blue-600" 
                    : "bg-blue-700 text-white"
                }`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  option.highlight ? "text-gray-900" : "text-white"
                }`}>
                  {option.title}
                </h3>
                
                <p className={`mb-6 ${
                  option.highlight ? "text-gray-600" : "text-blue-100"
                }`}>
                  {option.description}
                </p>
                
                <button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  option.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-900 hover:bg-blue-50"
                }`}>
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              What You Get with Our Testing Tools
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Comprehensive testing solutions designed to accelerate your development 
              and ensure the highest quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Proven Results
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {metric.value}
                </div>
                <p className="text-blue-100 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-8 inline-block">
            <h4 className="text-xl font-bold text-white mb-4">
              Ready to Transform Your Testing?
            </h4>
            <p className="text-blue-100 mb-6 max-w-md">
              Join the ranks of successful companies using our advanced testing tools and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsReadyToElevateSection;

