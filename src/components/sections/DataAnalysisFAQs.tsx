'use client';

import React, { useState } from 'react';
import {
  FaChevronRight,
  FaChartBar,
  FaBrain,
  FaDatabase,
  FaCheckCircle,
} from 'react-icons/fa';

const DataAnalysisFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: <FaChartBar className="h-5 w-5" />,
      faqs: [
        {
          question: 'What is data analysis and why is it important for businesses?',
          answer: 'Data analysis is the process of examining, cleaning, transforming, and modeling data to discover useful information and support decision-making. It\'s crucial for businesses because it helps identify trends, optimize operations, understand customer behavior, reduce costs, and gain competitive advantages. In today\'s data-driven world, organizations that effectively leverage data analysis outperform their competitors by 5-6% in productivity and profitability.'
        },
        {
          question: 'What types of data analysis services do you offer?',
          answer: 'We offer comprehensive data analysis services including descriptive analytics (what happened), diagnostic analytics (why it happened), predictive analytics (what will happen), and prescriptive analytics (what should we do). Our services cover business intelligence, data visualization, statistical analysis, machine learning, customer analytics, financial analysis, and operational analytics across various industries.'
        },
        {
          question: 'How do you ensure data security and privacy?',
          answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data transmission, access controls, and compliance with regulations like GDPR, HIPAA, and SOX. Our team follows strict data governance protocols, uses secure cloud infrastructure, and maintains detailed audit trails. We also sign comprehensive NDAs and data processing agreements to protect your sensitive information.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve diverse industries including finance, healthcare, retail, e-commerce, manufacturing, technology, telecommunications, energy, and government. Our team has deep domain expertise and understands industry-specific challenges, regulations, and KPIs. We tailor our analytics solutions to meet the unique requirements and compliance standards of each industry.'
        }
      ]
    },
    {
      category: 'Technical Capabilities',
      icon: <FaBrain className="h-5 w-5" />,
      faqs: [
        {
          question: 'What tools and technologies do you use for data analysis?',
          answer: 'We use a comprehensive technology stack including Python, R, SQL, Tableau, Power BI, Apache Spark, TensorFlow, PyTorch, AWS, Google Cloud, Azure, Snowflake, and many others. Our tool selection depends on your specific requirements, existing infrastructure, and project goals. We stay current with the latest technologies and best practices in data science and analytics.'
        },
        {
          question: 'Can you work with our existing data infrastructure?',
          answer: 'Yes, we\'re experienced in integrating with various data infrastructures including on-premises databases, cloud platforms, data warehouses, data lakes, and hybrid environments. We can connect to your existing systems, APIs, and data sources while ensuring minimal disruption to your operations. Our team handles data migration, integration, and optimization as needed.'
        },
        {
          question: 'Do you provide real-time analytics capabilities?',
          answer: 'Absolutely. We implement real-time analytics solutions using streaming technologies like Apache Kafka, Apache Flink, and cloud-based streaming services. Our real-time analytics capabilities include live dashboards, automated alerts, streaming data processing, and instant decision support systems. This enables you to respond quickly to changing business conditions and opportunities.'
        },
        {
          question: 'How do you handle big data and scalability?',
          answer: 'We use distributed computing frameworks like Apache Spark, Hadoop, and cloud-based big data services to handle large-scale data processing. Our solutions are designed for horizontal scaling, can process petabytes of data, and leverage cloud auto-scaling capabilities. We optimize performance through data partitioning, caching, and parallel processing techniques.'
        }
      ]
    },
    {
      category: 'Project Management',
      icon: <FaDatabase className="h-5 w-5" />,
      faqs: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on scope and complexity. Simple analytics projects typically take 4-8 weeks, while comprehensive data science initiatives may require 3-6 months. We follow agile methodologies with regular milestones and deliverables. During the initial consultation, we provide detailed project timelines with clear phases, dependencies, and expected outcomes.'
        },
        {
          question: 'How do you measure project success?',
          answer: 'We establish clear success metrics at project inception, including business KPIs, technical performance indicators, and ROI measurements. Success is measured through improved decision-making speed, cost savings, revenue increases, operational efficiency gains, and user adoption rates. We provide regular progress reports and post-implementation reviews to ensure sustained value delivery.'
        },
        {
          question: 'Do you provide training and knowledge transfer?',
          answer: 'Yes, we believe in empowering your team with analytics capabilities. We provide comprehensive training programs, documentation, best practices guides, and hands-on workshops. Our knowledge transfer includes technical training on tools and models, business training on interpreting results, and ongoing support to ensure your team can maintain and extend the solutions independently.'
        },
        {
          question: 'What ongoing support do you provide?',
          answer: 'We offer various support models including 24/7 monitoring, regular model maintenance, performance optimization, system updates, and troubleshooting. Our support services include model retraining, data pipeline monitoring, dashboard maintenance, user support, and continuous improvement recommendations. We tailor support packages to match your specific needs and budget.'
        }
      ]
    },
    {
      category: 'Business Value',
      icon: <FaCheckCircle className="h-5 w-5" />,
      faqs: [
        {
          question: 'What ROI can we expect from data analysis projects?',
          answer: 'ROI varies by industry and use case, but our clients typically see 300-500% ROI within the first year. Common benefits include 15-30% cost reductions, 20-40% efficiency improvements, 10-25% revenue increases, and significant risk mitigation. We work with you to establish baseline metrics and track measurable improvements throughout the project lifecycle.'
        },
        {
          question: 'How quickly can we see results?',
          answer: 'Initial insights and quick wins are often delivered within 2-4 weeks through exploratory data analysis and basic reporting. More sophisticated predictive models and automated systems typically show results within 2-3 months. We prioritize high-impact, low-effort opportunities early in the project to demonstrate immediate value while building toward long-term strategic goals.'
        },
        {
          question: 'Can you help with regulatory compliance and reporting?',
          answer: 'Yes, we have extensive experience with regulatory requirements across industries. We help ensure compliance with regulations like SOX, GDPR, HIPAA, Basel III, and others. Our solutions include automated compliance reporting, audit trails, data lineage tracking, and risk assessment frameworks. We work closely with your compliance teams to meet all regulatory requirements.'
        },
        {
          question: 'How do you ensure data quality and accuracy?',
          answer: 'We implement comprehensive data quality frameworks including data profiling, validation rules, anomaly detection, and automated quality monitoring. Our process includes data cleansing, standardization, deduplication, and enrichment. We establish data governance protocols, implement quality scorecards, and provide ongoing monitoring to ensure sustained data accuracy and reliability.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Frequently</span> Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our data analysis services, methodologies, technologies, and business value propositions.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-4">
                <div className="flex items-center text-white">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-2"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <FaChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <FaChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 pl-2">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Need More Information?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChartBar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h4>
              <p className="text-gray-600 text-sm">
                Explore detailed case studies and success stories from our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBrain className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">
                Schedule a free consultation to discuss your specific requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Resources</h4>
              <p className="text-gray-600 text-sm">
                Access our technical documentation and best practices guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisFAQs;

