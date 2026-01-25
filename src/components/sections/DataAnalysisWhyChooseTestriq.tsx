import React from 'react';
import { BarChart3, TrendingUp, CheckCircle, Brain } from 'lucide-react';
import { FaAward } from 'react-icons/fa';
import Link from 'next/link';

const DataAnalysisWhyChooseTestriq = () => {
  const advantages = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Prescriptive Intelligence',
      description: 'We go beyond descriptive reports to provide actionable strategies that grow small businesses and optimize global firms.',
      metrics: 'ISO 8000-1:2022 Aligned'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: 'Python & R Mastery',
      description: 'Our certified scientists use Python (Pandas, Scikit-learn) and R to build advanced statistical models and predictive frameworks.',
      metrics: 'Certified Data Scientists'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Zettabyte Scalability',
      description: 'We handle enterprise-scale datasets without performance reduction, utilizing Spark, Snowflake, and AWS Redshift.',
      metrics: 'No infrastructure caps'
    }
  ];

  const complianceStandards = [
    {
      standard: "ISO 8000-1:2022",
      application: "The global benchmark for data quality and industrial data management."
    },
    {
      standard: "GDPR & CCPA",
      application: "Strict protocols for PII (Personally Identifiable Information) in both Structured vs. Unstructured Data."
    },
    {
      standard: "SOC2 Type II",
      application: "Ensuring enterprise-grade security for private data assets during the ETL process."
    },
    {
      standard: "ISO/IEC 25102",
      application: "Defining the quality model for data in a computer system, crucial for predictive analytics services."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Why Choose Testriq</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Global Data Analytics <span className='text-brand-blue'>Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testriq delivers technical depth and prescriptive insights through field-tested frameworks and senior architects with over 10 years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {advantage.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{advantage.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>
              <div className="bg-white rounded-lg p-3 border-l-4 border-brand-blue">
                <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">{advantage.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Standards Table */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Standards & Compliance</h3>
            <p className="text-gray-600">Operating across US, UK, EU, and Asia requiring high security standards.</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-xl">
            <table className="w-full text-left bg-white">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider">Standard</th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider">Strategic Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {complianceStandards.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">{item.standard}</td>
                    <td className="px-8 py-6 text-gray-600 leading-relaxed text-sm">{item.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Sets Us Apart
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Prescriptive intelligence focused on actionable growth',
              'Custom Python/R machine learning models with high fidelity',
              'Real-time analytics for e-commerce and retail optimization',
              'Zettabyte-scale cloud infrastructure on AWS/Snowflake',
              'ISO 8000-1:2022 aligned data quality protocols',
              'Certified senior data scientists with 10+ years experience',
              'Seamless integration with existing business silos via ETL',
              'Rigorous statistical validation and Information Gain audits'
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

