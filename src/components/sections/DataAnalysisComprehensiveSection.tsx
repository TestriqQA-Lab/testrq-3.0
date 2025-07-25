import React from 'react';
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaBrain,
  FaBullseye,
  FaCheckCircle,
  FaBolt
} from 'react-icons/fa';


const DataAnalysisComprehensiveSection = () => {
  const analyticsServices = [
    {
      icon: <FaChartBar className="h-8 w-8 text-blue-600" />,
      title: "Descriptive Analytics",
      description: "Transform raw data into meaningful insights through comprehensive statistical analysis, data visualization, and historical trend identification to understand what happened in your business.",
      features: ["Historical Data Analysis", "Statistical Summaries", "Data Visualization", "Trend Identification"]
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-green-600" />,
      title: "Predictive Analytics",
      description: "Leverage machine learning algorithms and statistical models to forecast future trends, predict customer behavior, and anticipate market changes for strategic decision-making.",
      features: ["Forecasting Models", "Risk Assessment", "Customer Behavior Prediction", "Market Trend Analysis"]
    },
    {
      icon: <FaBrain className="h-8 w-8 text-purple-600" />,
      title: "Prescriptive Analytics",
      description: "Go beyond predictions with actionable recommendations using advanced optimization techniques and AI-driven insights to determine the best course of action for your business.",
      features: ["Optimization Models", "Decision Support", "Scenario Analysis", "Action Recommendations"]
    },
    {
      icon: <FaChartPie className="h-8 w-8 text-orange-600" />,
      title: "Business Intelligence",
      description: "Create comprehensive dashboards and reporting systems that provide real-time insights into key performance indicators and business metrics for informed decision-making.",
      features: ["Interactive Dashboards", "KPI Monitoring", "Real-time Reporting", "Executive Summaries"]
    },
    {
      icon: <FaDatabase className="h-8 w-8 text-indigo-600" />,
      title: "Data Mining & Discovery",
      description: "Uncover hidden patterns, correlations, and insights within large datasets using advanced data mining techniques and exploratory data analysis methodologies.",
      features: ["Pattern Recognition", "Correlation Analysis", "Anomaly Detection", "Data Exploration"]
    },
    {
      icon: <FaBullseye className="h-8 w-8 text-red-600" />,
      title: "Customer Analytics",
      description: "Deep dive into customer data to understand behavior patterns, segment audiences, predict churn, and optimize customer lifetime value through advanced analytics techniques.",
      features: ["Customer Segmentation", "Churn Prediction", "Lifetime Value Analysis", "Behavioral Analytics"]
    }
  ];

  const industryApplications = [
    { industry: "E-commerce", useCase: "Sales optimization and customer behavior analysis", impact: "35% increase in conversion rates" },
    { industry: "Healthcare", useCase: "Patient outcome prediction and resource optimization", impact: "25% improvement in treatment efficiency" },
    { industry: "Finance", useCase: "Risk assessment and fraud detection", impact: "40% reduction in fraudulent transactions" },
    { industry: "Manufacturing", useCase: "Predictive maintenance and quality control", impact: "30% reduction in downtime" },
    { industry: "Retail", useCase: "Inventory optimization and demand forecasting", impact: "20% reduction in inventory costs" },
    { industry: "Marketing", useCase: "Campaign optimization and ROI analysis", impact: "50% improvement in marketing ROI" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Data Analysis Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your raw data into strategic business insights with our comprehensive analytics services. From descriptive to prescriptive analytics, we help you make data-driven decisions that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {analyticsServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  Learn More
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry Applications & Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryApplications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{app.industry}</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{app.useCase}</p>
                <div className="bg-green-100 rounded-lg p-2">
                  <span className="text-green-800 font-medium text-sm">{app.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Analytics Process */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <FaBolt className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">End-to-End Analytics Process</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our systematic approach ensures comprehensive data analysis from collection to actionable insights, delivering measurable business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-sm">Data Collection</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-sm">Data Cleaning</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-sm">Analysis & Modeling</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-sm">Insights & Recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisComprehensiveSection;

