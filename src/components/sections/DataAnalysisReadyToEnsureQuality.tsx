import React from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
  FaChartLine,
  FaChartBar,
  FaBrain
} from 'react-icons/fa';


const DataAnalysisReadyToEnsureQuality = () => {
  const benefits = [
    'Advanced machine learning and AI capabilities',
    'Real-time analytics and automated insights',
    'Expert data scientists and analysts',
    'Scalable cloud-based infrastructure',
    'Industry-specific domain expertise',
    'Comprehensive data security and compliance'
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'Chief Data Officer at Salesforce',
      content: 'Testriq\'s analytics team transformed our customer insights strategy. The predictive models increased our sales conversion by 40%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'VP Analytics at Spotify',
      content: 'Outstanding data visualization and real-time analytics implementation. The dashboards provide actionable insights that drive our business decisions.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Analytics Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Model Accuracy' }
  ];

  const serviceHighlights = [
    {
      icon: <FaChartBar className="h-6 w-6 text-purple-600" />,
      title: 'Descriptive Analytics',
      description: 'Understand what happened with comprehensive reporting and visualization'
    },
    {
      icon: <FaBrain className="h-6 w-6 text-blue-600" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends with machine learning and statistical models'
    },
    {
      icon: <FaChartBar className="h-6 w-6 text-green-600" />,
      title: 'Prescriptive Analytics',
      description: 'Get actionable recommendations for optimal business decisions'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Ready to Unlock</span> Your Data&apos;s Potential?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your raw data into strategic business advantages with our comprehensive analytics services. Join industry leaders who trust us with their most critical data initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Our Analytics Services?
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {serviceHighlights.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    {service.icon}
                    <h4 className="text-lg font-semibold text-gray-900 ml-3">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-9">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Action Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChartBar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Analytics Journey
              </h3>
              <p className="text-gray-600">
                Get a free consultation and data assessment
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Free Data Assessment</span>
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Custom Analytics Strategy</span>
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Expert Consultation</span>
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">ROI Projection</span>
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
              Get Free Consultation
              <FaArrowRight className="ml-2 h-5 w-5" />
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              No commitment required • Free assessment included
            </p>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <  FaUsers
 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Analytics Value Proposition
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don&apos;t just provide data analysis - we deliver strategic insights that drive measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaAward className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">
                Certified data scientists with deep industry expertise and proven track records.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Measurable ROI</h4>
              <p className="text-gray-600 text-sm">
                Average 300-500% ROI within the first year through data-driven optimizations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBrain className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI</h4>
              <p className="text-gray-600 text-sm">
                Cutting-edge machine learning and AI technologies for superior insights.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Business with Data Analytics
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Don&apos;t let your data remain untapped. Join the data-driven revolution and unlock insights that will propel your business to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisReadyToEnsureQuality;

