"use client";

import React from "react";
import { 
  FaRocket, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaArrowRight,
  FaUsers,
  FaBuilding,
  FaUniversity
} from "react-icons/fa";

const ElearningContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Speak with E-Learning Experts",
      description: "Direct consultation with our educational technology specialists",
      action: "Call Now: +1 (555) 123-4567",
      color: "from-blue-500 to-cyan-600",
      availability: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: FaEnvelope,
      title: "Detailed Platform Assessment",
      description: "Send us your requirements for comprehensive analysis",
      action: "elearning@testriq.com",
      color: "from-green-500 to-emerald-600",
      availability: "Response within 4 hours"
    },
    {
      icon: FaCalendarAlt,
      title: "Educational Strategy Session",
      description: "Book a free consultation to discuss your testing needs",
      action: "Schedule Free Consultation",
      color: "from-purple-500 to-indigo-600",
      availability: "30-60 minute sessions"
    }
  ];

  const benefits = [
    "Free e-learning platform assessment",
    "Educational technology expertise",
    "Accessibility compliance guidance",
    "Performance optimization strategy",
    "Integration testing recommendations",
    "Scalability planning and roadmap"
  ];

  const clientTypes = [
    {
      icon: FaUniversity,
      title: "Higher Education",
      description: "Universities, colleges, and online degree programs",
      examples: ["LMS optimization", "Student portal testing", "Research platform validation"]
    },
    {
      icon: FaBuilding,
      title: "Corporate Training",
      description: "Employee development and skill enhancement",
      examples: ["Training platform testing", "Compliance system validation", "Performance tracking"]
    },
    {
      icon: FaUsers,
      title: "K-12 Education",
      description: "School districts and educational institutions",
      examples: ["Student information systems", "Parent portals", "Classroom management tools"]
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-brand-blue to-sky-600 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-brand-blue bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <FaGraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Transform Your E-Learning</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your
            <span className="block">E-Learning Platform?</span>
          </h2>
          
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Take the first step towards better learning outcomes, higher engagement, and improved accessibility. 
            Our e-learning testing experts are ready to help you create exceptional educational experiences.
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
                    <p className="text-sky-700 text-sm mb-3 leading-relaxed">{method.description}</p>
                    <button className="text-sky-700 font-semibold hover:underline flex items-center gap-2 group mb-2">
                      {method.action}
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <p className="text-sky-400 text-xs">{method.availability}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Urgency Note */}
            <div className="bg-orange-500 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-30">
              <div className="flex items-center gap-3 mb-3">
                <FaRocket className="w-5 h-5 text-orange-300" />
                <h4 className="font-semibold text-white">New Semester Starting Soon?</h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for new academic year or training program launch? Contact us at least 8-10 weeks 
                in advance to ensure your platform is optimized and ready for peak usage periods.
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
              <h4 className="font-semibold text-gray-900 mb-4">Quick E-Learning Assessment Form</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Institution/Organization"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors">
                  <option value="">Select Your Platform Type</option>
                  <option value="moodle">Moodle</option>
                  <option value="canvas">Canvas</option>
                  <option value="blackboard">Blackboard</option>
                  <option value="google-classroom">Google Classroom</option>
                  <option value="custom">Custom LMS</option>
                  <option value="corporate">Corporate Training Platform</option>
                  <option value="other">Other</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors">
                  <option value="">Number of Users</option>
                  <option value="small">Under 1,000 users</option>
                  <option value="medium">1,000 - 10,000 users</option>
                  <option value="large">10,000 - 50,000 users</option>
                  <option value="enterprise">50,000+ users</option>
                </select>
                <textarea
                  placeholder="Tell us about your e-learning testing needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-blue to-sky-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-98 transition-all duration-200 ease-in-out flex items-center justify-center gap-2"
                >
                  <FaRocket className="w-4 h-4" />
                  Get Free E-Learning Assessment
                </button>
              </form>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Educational technology experts • Response within 2 hours during business hours</p>
            </div>
          </div>
        </div>

        {/* Client Types */}
        <div className="mt-16">
          <div className="text-center mb-12 text-white">
            <h3 className="text-2xl font-bold mb-4">We Serve All Educational Sectors</h3>
            <p>Specialized expertise for different types of educational organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <type.icon className="w-8 h-8 text-brand-blue" />
                  <h4 className="text-lg font-bold text-sky-600">{type.title}</h4>
                </div>
                <p className="text-brand-blue text-sm mb-4 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 text-brand-blue backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Join 250+ Educational Institutions</h3>
            <p className="mb-6">
              Don&apos;t let technical issues hinder learning outcomes. Start optimizing your e-learning platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-brand-blue to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg">
                Start Free Assessment
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-lg ring-1 hover:ring-2 hover:text-sky-700 hover:scale-98 hover:bg-opacity-30 transition-all duration-200 ease-in-out">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningContactSection;

