'use client';

import React, { useState } from 'react';
import { Building2, CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';

const SoftwareTestingGuideCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      company: 'Microsoft Azure',
      industry: 'Cloud Computing',
      challenge: 'Scaling automated testing for global cloud infrastructure with 99.9% uptime requirements',
      solution: 'Implemented comprehensive test automation framework with continuous integration and performance monitoring',
      results: [
        '40% reduction in deployment time',
        '60% decrease in production bugs',
        '99.95% uptime achievement',
        '$2.3M annual cost savings'
      ],
      technologies: ['Selenium', 'Jenkins', 'Docker', 'Azure DevOps'],
      duration: '8 months',
      teamSize: '12 engineers'
    },
    {
      company: 'Netflix',
      industry: 'Streaming Media',
      challenge: 'Ensuring seamless video streaming experience across 190+ countries with diverse network conditions',
      solution: 'Developed chaos engineering practices and comprehensive performance testing strategies',
      results: [
        '35% improvement in streaming quality',
        '50% reduction in buffering issues',
        '25% increase in user satisfaction',
        '99.97% service availability'
      ],
      technologies: ['Chaos Monkey', 'JMeter', 'Gatling', 'AWS'],
      duration: '12 months',
      teamSize: '18 engineers'
    },
    {
      company: 'JPMorgan Chase',
      industry: 'Financial Services',
      challenge: 'Implementing robust security testing for mobile banking applications with regulatory compliance',
      solution: 'Established comprehensive security testing framework with automated vulnerability scanning',
      results: [
        '90% reduction in security vulnerabilities',
        '100% regulatory compliance achievement',
        '45% faster security audit process',
        'Zero security incidents post-implementation'
      ],
      technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'Veracode'],
      duration: '10 months',
      teamSize: '15 engineers'
    },
    {
      company: 'Tesla',
      industry: 'Automotive',
      challenge: 'Testing autonomous driving software with safety-critical requirements and real-world scenarios',
      solution: 'Created simulation-based testing environment with machine learning validation frameworks',
      results: [
        '70% increase in test coverage',
        '80% reduction in testing time',
        '99.99% safety validation accuracy',
        '30% faster software deployment'
      ],
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'ROS'],
      duration: '15 months',
      teamSize: '25 engineers'
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Projects Completed', description: 'Successful testing implementations' },
    { metric: '95%', label: 'Client Satisfaction', description: 'Average satisfaction rating' },
    { metric: '$50M+', label: 'Cost Savings', description: 'Total client savings achieved' },
    { metric: '99.9%', label: 'Success Rate', description: 'Project completion rate' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real-World <span className='text-brand-blue'>Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how industry leaders have transformed their software quality through our comprehensive testing methodologies and achieved measurable business results.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCase === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{caseStudies[activeCase].company}</h3>
                  <p className="text-gray-600">{caseStudies[activeCase].industry}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].challenge}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {caseStudies[activeCase].duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {caseStudies[activeCase].teamSize}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
              <div className="space-y-3 mb-6">
                {caseStudies[activeCase].results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudies[activeCase].technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">Impact:</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Achieved significant improvements in quality, performance, and cost efficiency through strategic testing implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 mb-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Track Record</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Proven results across industries with measurable impact on business outcomes and software quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {successMetrics.map((item, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg font-semibold mb-1">{item.label}</div>
                <div className="text-blue-100 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their software quality through our proven testing methodologies.
            </p>
            <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideCaseStudies;

