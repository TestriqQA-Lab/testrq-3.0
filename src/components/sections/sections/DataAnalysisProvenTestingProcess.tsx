import React from 'react';
import { Database, Search, BarChart3, Brain, Target, CheckCircle, ArrowRight, Clock, TrendingUp } from 'lucide-react';

const DataAnalysisProvenTestingProcess = () => {
  const analysisSteps = [
    {
      step: '01',
      title: 'Data Discovery & Assessment',
      icon: <Search className="h-8 w-8 text-blue-600" />,
      description: 'Comprehensive evaluation of available data sources and quality assessment',
      details: [
        'Data source identification and cataloging',
        'Data quality assessment and profiling',
        'Business requirements gathering',
        'Stakeholder alignment and goal setting'
      ],
      duration: '3-5 days',
      outcome: 'Data inventory and analysis roadmap'
    },
    {
      step: '02',
      title: 'Data Collection & Integration',
      icon: <Database className="h-8 w-8 text-purple-600" />,
      description: 'Systematic data gathering and integration from multiple sources',
      details: [
        'Multi-source data extraction',
        'Data integration and consolidation',
        'Data validation and verification',
        'Secure data storage setup'
      ],
      duration: '1-2 weeks',
      outcome: 'Unified and validated dataset'
    },
    {
      step: '03',
      title: 'Data Cleaning & Preparation',
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      description: 'Transform raw data into analysis-ready format through comprehensive cleaning',
      details: [
        'Missing data handling and imputation',
        'Outlier detection and treatment',
        'Data standardization and normalization',
        'Feature engineering and selection'
      ],
      duration: '1-2 weeks',
      outcome: 'Clean, analysis-ready dataset'
    },
    {
      step: '04',
      title: 'Exploratory Data Analysis',
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      description: 'Initial data exploration to understand patterns and relationships',
      details: [
        'Statistical summary generation',
        'Data visualization and plotting',
        'Correlation and relationship analysis',
        'Initial hypothesis formation'
      ],
      duration: '1 week',
      outcome: 'Data insights and patterns identified'
    },
    {
      step: '05',
      title: 'Advanced Analytics & Modeling',
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      description: 'Apply sophisticated analytical techniques and build predictive models',
      details: [
        'Statistical modeling and analysis',
        'Machine learning model development',
        'Model validation and testing',
        'Performance optimization'
      ],
      duration: '2-3 weeks',
      outcome: 'Validated analytical models'
    },
    {
      step: '06',
      title: 'Insights & Recommendations',
      icon: <Target className="h-8 w-8 text-teal-600" />,
      description: 'Generate actionable insights and strategic recommendations',
      details: [
        'Results interpretation and analysis',
        'Business impact assessment',
        'Strategic recommendations development',
        'Implementation roadmap creation'
      ],
      duration: '1 week',
      outcome: 'Actionable business insights'
    }
  ];

  const processMetrics = [
    { label: 'Data Accuracy', value: '99.5%', description: 'Clean and validated data quality' },
    { label: 'Insight Reliability', value: '95%', description: 'Statistically significant findings' },
    { label: 'Implementation Success', value: '88%', description: 'Recommendations successfully adopted' },
    { label: 'ROI Achievement', value: '4.2x', description: 'Average return on analytics investment' }
  ];

  const qualityAssurance = [
    'Statistical significance validation',
    'Cross-validation and testing',
    'Peer review and verification',
    'Business logic validation',
    'Results reproducibility testing',
    'Stakeholder feedback integration'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proven Data Analysis Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach to data analysis ensures reliable insights and actionable recommendations through rigorous methodology and quality assurance at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-teal-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {analysisSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 rounded-full p-3 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">STEP {step.step}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                      <div className="text-sm font-medium text-blue-600">
                        {step.outcome}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg my-8 lg:my-0 relative z-10">
                  {step.step}
                </div>
                
                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quality Assurance & Validation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityAssurance.map((qa, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{qa}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Process Success Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our proven data analysis process unlock the hidden insights in your data and drive strategic business decisions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Start Your Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisProvenTestingProcess;

