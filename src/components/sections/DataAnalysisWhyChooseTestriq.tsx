import React from 'react';
import { Award, Users, BarChart3, TrendingUp, Shield, Zap, CheckCircle, Star, Brain } from 'lucide-react';
import { FaAward } from 'react-icons/fa';

const DataAnalysisWhyChooseTestriq = () => {
  const advantages = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Analytics Expertise',
      description: 'Our team of certified data scientists and analysts brings 10+ years of experience in advanced analytics, machine learning, and statistical modeling.',
      metrics: '50+ Data Scientists & Analysts'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: 'Comprehensive Tool Mastery',
      description: 'Proficiency across all major analytics platforms including Python, R, SQL, Tableau, Power BI, and cloud-based analytics solutions.',
      metrics: '25+ Analytics Tools & Platforms'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Proven Business Impact',
      description: 'Delivered measurable business value with average ROI of 4.2x and helped clients achieve significant performance improvements.',
      metrics: '4.2x Average ROI Delivered'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Industry Specialization',
      description: 'Deep domain expertise across multiple industries including finance, healthcare, retail, manufacturing, and technology sectors.',
      metrics: '15+ Industry Verticals'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security protocols and compliance with GDPR, HIPAA, SOX, and other regulatory requirements for data protection.',
      metrics: '99.9% Data Security Standard'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Rapid Deployment',
      description: 'Accelerated project delivery with agile methodologies and pre-built frameworks that reduce time-to-insight by up to 60%.',
      metrics: '60% Faster Time-to-Insight'
    }
  ];

  const testimonials = [
    {
      content: 'Testriq\'s data analytics team transformed our risk assessment models, resulting in a 35% improvement in fraud detection accuracy through advanced predictive analytics and machine learning model building.',
      rating: 5
    },
    {
      content: 'The predictive analytics models developed by Testriq helped us optimize our supply chain operations, enabling data-driven decisions and reducing costs by $2.3M annually.',
      rating: 5
    },
    {
      content: 'Outstanding data visualization and dashboard development using cutting-edge data analysis tools. The insights have been crucial for our strategic decisions and business performance improvement.',
      rating: 5
    }
  ];

  const certifications = [
    'AWS Certified Data Analytics',
    'Google Cloud Professional Data Engineer',
    'Microsoft Azure Data Scientist Associate',
    'Tableau Desktop Certified Professional',
    'SAS Certified Advanced Analytics Professional',
    'IBM Data Science Professional Certificate'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Testriq for <span className='text-brand-blue'>Data Analytics</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with industry-leading data analysis experts who transform complex datasets into strategic business advantages through proven analytical frameworks, advanced data analysis tools, and cutting-edge technologies like machine learning model building and natural language processing.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {advantage.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{advantage.title}</h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                <span className="text-sm font-semibold text-blue-600">{advantage.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 mb-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our data analytics solutions have delivered measurable business impact across Fortune 500 companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Professional Certifications & Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Sets Us Apart
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'End-to-end analytics solutions from data collection to insights',
              'Custom machine learning models tailored to your business needs',
              'Real-time analytics and automated reporting capabilities',
              'Scalable cloud-based infrastructure and deployment',
              'Comprehensive data governance and security protocols',
              'Ongoing support and model maintenance services',
              'Integration with existing business systems and workflows',
              'Training and knowledge transfer for internal teams'
            ].map((differentiator, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{differentiator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisWhyChooseTestriq;

