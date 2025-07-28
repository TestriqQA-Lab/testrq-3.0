import React from 'react';
import { FaFileAlt, FaRocket, FaUsers, FaCheckCircle, FaPhone, FaEnvelope, FaCalendarAlt, FaCog } from 'react-icons/fa';

const QADocumentationReadyToEnsureQuality = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white rounded-full translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
            <FaRocket className="mr-2" />
            Ready to Transform Your QA Documentation?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ensure Quality with Professional 
            <span className="block text-yellow-300">QA Documentation Services</span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join 500+ organizations that have transformed their testing processes with our comprehensive 
            QA documentation solutions. Start your journey to better quality today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FaCalendarAlt className="mr-3" />
              Schedule Free Consultation
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              <FaFileAlt className="mr-3" />
              Download Documentation Guide
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Start */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <FaRocket className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quick Start Package</h3>
            <p className="text-lg opacity-90 mb-6">
              Get started immediately with our standardized documentation templates and rapid deployment process.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Pre-built templates library</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>1-week implementation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Team training included</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>30-day support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Start Quick Package
            </button>
          </div>

          {/* Custom Solution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <FaCog className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Solution</h3>
            <p className="text-lg opacity-90 mb-6">
              Tailored documentation solutions designed specifically for your organization's unique requirements.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Customized templates</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Compliance integration</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Process optimization</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Ongoing maintenance</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Discuss Custom Needs
            </button>
          </div>

          {/* Enterprise Solution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <FaUsers className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
            <p className="text-lg opacity-90 mb-6">
              Comprehensive enterprise-grade documentation solutions with dedicated support and advanced features.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Dedicated team assignment</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Multi-project support</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-300" />
                <span>24/7 priority support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Explore Enterprise
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to transform your QA documentation? Our experts are standing by to help you 
              choose the right solution for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Call Us</h4>
              <p className="opacity-90 mb-4">Speak directly with our QA documentation experts</p>
              <a href="tel:+1-555-0123" className="text-yellow-300 hover:text-yellow-200 font-medium">
                +1 (555) 012-3456
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email Us</h4>
              <p className="opacity-90 mb-4">Get detailed information about our services</p>
              <a href="mailto:qa-docs@testriq.com" className="text-yellow-300 hover:text-yellow-200 font-medium">
                qa-docs@testriq.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Schedule Meeting</h4>
              <p className="opacity-90 mb-4">Book a free consultation at your convenience</p>
              <a href="#" className="text-yellow-300 hover:text-yellow-200 font-medium">
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white bg-opacity-20 rounded-full px-8 py-4">
              <FaCheckCircle className="text-green-300 text-xl" />
              <span className="text-lg font-medium">Free consultation • No commitment • Expert guidance</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Elements */}
        <div className="mt-16 text-center text-white">
          <p className="text-lg opacity-75 mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm">ISO 9001 Certified</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-sm">ISTQB Professionals</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-sm">GDPR Compliant</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-sm">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationReadyToEnsureQuality;

