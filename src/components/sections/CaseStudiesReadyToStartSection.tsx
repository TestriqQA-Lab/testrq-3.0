import React from "react";
import { FaArrowRight, FaCalendarAlt, FaPhone, FaEnvelope, FaCheckCircle, FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

const CaseStudiesReadyToStartSection = () => {
  const benefits = [
    {
      icon: FaRocket,
      title: "Fast Implementation",
      description: "Get started within 48 hours with our rapid onboarding process"
    },
    {
      icon: FaShieldAlt,
      title: "Risk-Free Trial",
      description: "30-day money-back guarantee on all our testing services"
    },
    {
      icon: FaUsers,
      title: "Dedicated Team",
      description: "Assigned project manager and testing experts for your success"
    }
  ];

  const nextSteps = [
    {
      step: 1,
      title: "Schedule Consultation",
      description: "Book a free 30-minute consultation to discuss your testing needs",
      action: "Book Now"
    },
    {
      step: 2,
      title: "Receive Custom Proposal",
      description: "Get a tailored testing strategy and proposal within 24 hours",
      action: "Get Proposal"
    },
    {
      step: 3,
      title: "Start Your Project",
      description: "Begin your testing journey with our expert team",
      action: "Get Started"
    }
  ];

  const contactOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule a Call",
      description: "Book a free consultation at your convenience",
      action: "Schedule Now",
      primary: true
    },
    {
      icon: FaPhone,
      title: "Call Us Directly",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      primary: false
    },
    {
      icon: FaEnvelope,
      title: "Send Us an Email",
      description: "hello@testriq.com",
      action: "Email Us",
      primary: false
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Your{" "}
            <span className="text-yellow-300">Success Story?</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied clients who have transformed their software quality with our expert testing services. 
            Let's discuss how we can help you achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
              <span>Start Your Success Story</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              View More Case Studies
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Get Started
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <button className="text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors">
                  {step.action} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Choose Your Preferred Contact Method
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className={`${
                    option.primary 
                      ? 'bg-yellow-400 text-gray-900' 
                      : 'bg-white/20 text-white'
                  } rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
                >
                  <IconComponent className={`w-8 h-8 mx-auto mb-4 ${
                    option.primary ? 'text-gray-900' : 'text-white'
                  }`} />
                  <h4 className="font-semibold mb-2">{option.title}</h4>
                  <p className={`text-sm mb-4 ${
                    option.primary ? 'text-gray-700' : 'text-blue-100'
                  }`}>
                    {option.description}
                  </p>
                  <button className={`font-semibold ${
                    option.primary 
                      ? 'text-gray-900 hover:text-gray-700' 
                      : 'text-white hover:text-blue-200'
                  } transition-colors`}>
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-white rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCheckCircle className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900">Our Guarantee</h3>
          </div>
          
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're so confident in our testing services that we offer a 30-day money-back guarantee. 
            If you're not completely satisfied with our work, we'll refund your investment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">No Long-term Contracts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6">
            Don't let software bugs and quality issues hold your business back.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesReadyToStartSection;

