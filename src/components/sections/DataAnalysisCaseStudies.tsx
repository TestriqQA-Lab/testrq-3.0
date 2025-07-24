'use client';

import React, { useState } from 'react';
import {
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaClock,
  FaBullseye,
  FaChartBar
} from 'react-icons/fa';


const DataAnalysisCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      company: 'Amazon',
      industry: 'E-commerce',
      challenge: 'Optimizing product recommendations and inventory management across global markets with real-time demand forecasting',
      solution: 'Implemented machine learning-based recommendation engine and predictive analytics for inventory optimization',
      results: [
        '35% increase in conversion rates',
        '25% reduction in inventory costs',
        '40% improvement in customer satisfaction',
        '$2.8B additional revenue generated'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'Apache Spark'],
      duration: '14 months',
      teamSize: '22 data scientists',
      metrics: {
        dataProcessed: '50TB daily',
        modelsDeployed: '150+',
        accuracy: '94.7%'
      }
    },
    {
      company: 'Netflix',
      industry: 'Streaming Media',
      challenge: 'Personalizing content recommendations for 230M+ subscribers across diverse global markets and preferences',
      solution: 'Developed advanced collaborative filtering and deep learning models for content personalization',
      results: [
        '80% of content watched from recommendations',
        '30% reduction in churn rate',
        '45% increase in viewing time',
        '$1.2B cost savings in content acquisition'
      ],
      technologies: ['Python', 'Scala', 'Apache Kafka', 'Cassandra'],
      duration: '18 months',
      teamSize: '28 engineers',
      metrics: {
        dataProcessed: '100TB daily',
        modelsDeployed: '200+',
        accuracy: '92.3%'
      }
    },
    {
      company: 'JPMorgan Chase',
      industry: 'Financial Services',
      challenge: 'Real-time fraud detection and risk assessment for millions of daily transactions with regulatory compliance',
      solution: 'Built comprehensive fraud detection system using ensemble machine learning and real-time analytics',
      results: [
        '60% reduction in fraudulent transactions',
        '40% decrease in false positives',
        '99.9% system uptime achieved',
        '$500M annual fraud prevention'
      ],
      technologies: ['Python', 'Apache Spark', 'Kafka', 'Elasticsearch'],
      duration: '12 months',
      teamSize: '18 analysts',
      metrics: {
        dataProcessed: '10M transactions/day',
        modelsDeployed: '75+',
        accuracy: '96.8%'
      }
    },
    {
      company: 'Uber',
      industry: 'Transportation',
      challenge: 'Dynamic pricing optimization and demand prediction across 10,000+ cities with real-time market conditions',
      solution: 'Implemented surge pricing algorithms and demand forecasting models using real-time data analytics',
      results: [
        '25% increase in driver utilization',
        '30% improvement in wait times',
        '20% boost in revenue per trip',
        '95% demand prediction accuracy'
      ],
      technologies: ['Python', 'Apache Flink', 'Redis', 'PostgreSQL'],
      duration: '10 months',
      teamSize: '15 data scientists',
      metrics: {
        dataProcessed: '20TB daily',
        modelsDeployed: '120+',
        accuracy: '95.2%'
      }
    }
  ];

  const successMetrics = [
    { metric: '200+', label: 'Analytics Projects', description: 'Successfully completed implementations' },
    { metric: '98%', label: 'Client Satisfaction', description: 'Average satisfaction rating' },
    { metric: '$100M+', label: 'Value Generated', description: 'Total client value created' },
    { metric: '99.5%', label: 'Model Accuracy', description: 'Average prediction accuracy' }
  ];

  const industries = [
    { name: 'E-commerce', projects: '45+', growth: '+35%' },
    { name: 'Finance', projects: '38+', growth: '+42%' },
    { name: 'Healthcare', projects: '32+', growth: '+28%' },
    { name: 'Technology', projects: '41+', growth: '+38%' },
    { name: 'Retail', projects: '29+', growth: '+31%' },
    { name: 'Manufacturing', projects: '25+', growth: '+26%' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Data-Driven Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how industry leaders have transformed their business outcomes through our advanced analytics solutions and achieved measurable results.
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
                  ? 'bg-purple-600 text-white shadow-lg'
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
                <FaBuilding className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{caseStudies[activeCase].company}</h3>
                  <p className="text-gray-600">{caseStudies[activeCase].industry}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].challenge}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <FaClock className="h-4 w-4 mr-1" />
                  {caseStudies[activeCase].duration}
                </div>
                <div className="flex items-center">
                  <FaUsers className="h-4 w-4 mr-1" />
                  {caseStudies[activeCase].teamSize}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
              <div className="space-y-3 mb-6">
                {caseStudies[activeCase].results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudies[activeCase].technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-600">{caseStudies[activeCase].metrics.dataProcessed}</div>
                    <div className="text-xs text-gray-500">Data Processed</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">{caseStudies[activeCase].metrics.modelsDeployed}</div>
                    <div className="text-xs text-gray-500">Models Deployed</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">{caseStudies[activeCase].metrics.accuracy}</div>
                    <div className="text-xs text-gray-500">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry Expertise & Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{industry.name}</h4>
                  <FaChartBar className="h-6 w-6 text-purple-600" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{industry.projects}</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">{industry.growth}</div>
                    <div className="text-sm text-gray-500">Avg Growth</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Analytics Impact</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Proven track record of delivering measurable business value through advanced data analytics and machine learning solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {successMetrics.map((item, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg font-semibold mb-1">{item.label}</div>
                <div className="text-purple-100 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have unlocked the power of their data through our advanced analytics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
                Start Your Analytics Journey
                <FaArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisCaseStudies;

