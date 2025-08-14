"use client";
import React, { useState } from "react";
import {
  Code,
  Database,
  BarChart3,
  Brain,
  Cloud,
  Zap,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import {
  FaTools,
  FaPython,
  FaRProject,
  FaDatabase,
  FaJsSquare,
  FaCloud,
  FaSearchPlus,
  FaBrain,
  FaServer,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const DataAnalysisToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <FaTools className="h-6 w-6" />,
      description:
        "Core programming languages for data analysis and machine learning",
      tools: [
        {
          name: "Python",
          description: "Versatile language with rich data science libraries",
          level: "Beginner to Advanced",
          popularity: "95%",
          icon: <FaPython className="h-6 w-6" />,
        },
        {
          name: "R",
          description: "Statistical computing and graphics language",
          level: "Intermediate",
          popularity: "85%",
          icon: <FaRProject className="h-6 w-6" />,
        },
        {
          name: "SQL",
          description: "Database querying and data manipulation",
          level: "Beginner",
          popularity: "98%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "Scala",
          description: "Big data processing with Apache Spark",
          level: "Advanced",
          popularity: "70%",
          icon: <FaJsSquare className="h-6 w-6" />,
        },
        {
          name: "Julia",
          description: "High-performance scientific computing",
          level: "Advanced",
          popularity: "65%",
          icon: <FaCogs className="h-6 w-6" />,
        },
        {
          name: "SAS",
          description: "Enterprise statistical analysis software",
          level: "Intermediate",
          popularity: "75%",
          icon: <FaServer className="h-6 w-6" />,
        },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      description: "Data storage and management solutions for analytics",
      tools: [
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database",
          level: "Intermediate",
          popularity: "88%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "MongoDB",
          description: "NoSQL document database for flexible data",
          level: "Intermediate",
          popularity: "82%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "Apache Cassandra",
          description: "Distributed NoSQL database for big data",
          level: "Advanced",
          popularity: "70%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "Redis",
          description: "In-memory data structure store",
          level: "Intermediate",
          popularity: "78%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "Elasticsearch",
          description: "Search and analytics engine",
          level: "Intermediate",
          popularity: "75%",
          icon: <FaSearchPlus className="h-6 w-6" />,
        },
        {
          name: "Amazon Redshift",
          description: "Cloud data warehouse solution",
          level: "Intermediate",
          popularity: "80%",
          icon: <FaCloud className="h-6 w-6" />,
        },
      ],
    },
    {
      id: "visualization",
      title: "Data Visualization",
      icon: <BarChart3 className="h-6 w-6" />,
      description:
        "Tools for creating compelling data visualizations and dashboards",
      tools: [
        {
          name: "Tableau",
          description: "Leading business intelligence platform",
          level: "Beginner to Advanced",
          popularity: "92%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "Power BI",
          description: "Microsoft business analytics solution",
          level: "Beginner",
          popularity: "88%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "D3.js",
          description: "JavaScript library for custom visualizations",
          level: "Advanced",
          popularity: "75%",
          icon: <FaJsSquare className="h-6 w-6" />,
        },
        {
          name: "Plotly",
          description: "Interactive graphing library",
          level: "Intermediate",
          popularity: "80%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "Looker",
          description: "Modern business intelligence platform",
          level: "Intermediate",
          popularity: "72%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "QlikView",
          description: "Associative analytics platform",
          level: "Intermediate",
          popularity: "70%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
      ],
    },
    {
      id: "ml-ai",
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      description:
        "Advanced machine learning and artificial intelligence frameworks",
      tools: [
        {
          name: "TensorFlow",
          description: "Open-source machine learning framework",
          level: "Intermediate to Advanced",
          popularity: "90%",
          icon: <FaBrain className="h-6 w-6" />,
        },
        {
          name: "PyTorch",
          description: "Dynamic neural network framework",
          level: "Intermediate to Advanced",
          popularity: "85%",
          icon: <FaBrain className="h-6 w-6" />,
        },
        {
          name: "Scikit-learn",
          description: "Python machine learning library",
          level: "Beginner to Intermediate",
          popularity: "95%",
          icon: <FaPython className="h-6 w-6" />,
        },
        {
          name: "Apache Spark MLlib",
          description: "Scalable machine learning library",
          level: "Advanced",
          popularity: "75%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "H2O.ai",
          description: "Open-source machine learning platform",
          level: "Intermediate",
          popularity: "70%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "XGBoost",
          description: "Gradient boosting framework",
          level: "Intermediate",
          popularity: "82%",
          icon: <FaBrain className="h-6 w-6" />,
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      description: "Cloud-based analytics and data processing platforms",
      tools: [
        {
          name: "AWS Analytics",
          description: "Amazon Web Services analytics suite",
          level: "Intermediate",
          popularity: "88%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Google Cloud AI",
          description: "Google Cloud machine learning services",
          level: "Intermediate",
          popularity: "82%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Azure Machine Learning",
          description: "Microsoft cloud ML platform",
          level: "Intermediate",
          popularity: "80%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Databricks",
          description: "Unified analytics platform",
          level: "Advanced",
          popularity: "78%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Snowflake",
          description: "Cloud data warehouse platform",
          level: "Intermediate",
          popularity: "85%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Apache Airflow",
          description: "Workflow orchestration platform",
          level: "Advanced",
          popularity: "75%",
          icon: <FaCloud className="h-6 w-6" />,
        },
      ],
    },
    {
      id: "bigdata",
      title: "Big Data Processing",
      icon: <Zap className="h-6 w-6" />,
      description: "Tools for processing and analyzing large-scale datasets",
      tools: [
        {
          name: "Apache Spark",
          description: "Unified analytics engine for big data",
          level: "Advanced",
          popularity: "88%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Apache Hadoop",
          description: "Distributed storage and processing",
          level: "Advanced",
          popularity: "80%",
          icon: <FaServer className="h-6 w-6" />,
        },
        {
          name: "Apache Kafka",
          description: "Distributed streaming platform",
          level: "Advanced",
          popularity: "82%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Apache Flink",
          description: "Stream processing framework",
          level: "Advanced",
          popularity: "70%",
          icon: <FaServer className="h-6 w-6" />,
        },
        {
          name: "Dask",
          description: "Parallel computing library for Python",
          level: "Intermediate",
          popularity: "72%",
          icon: <FaPython className="h-6 w-6" />,
        },
        {
          name: "Apache Storm",
          description: "Real-time computation system",
          level: "Advanced",
          popularity: "65%",
          icon: <FaCloud className="h-6 w-6" />,
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Advanced Analytics{" "}
            <span className="text-brand-blue">Tools & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge data analysis tools and analytical frameworks
            to unlock the full potential of your data. Our expertise spans the
            entire data analytics technology stack, including statistical
            modeling, machine learning model building, and natural language
            processing to drive data-driven recommendations and business
            intelligence.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {toolCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span className="ml-2 hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {toolCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600">
                {toolCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolCategories[activeCategory].tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-5 mb-3">
                    <div className="text-brand-blue">{tool.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Complexity Level:</span>
                      <span className="font-medium text-gray-700">
                        {tool.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Industry Adoption:</span>
                      <span className="font-medium text-green-600">
                        {tool.popularity}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: tool.popularity }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Integration */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {toolCategories[activeCategory].title} Integration Capabilities
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Enterprise Integration",
                "Cloud Deployment",
                "API Connectivity",
                "Real-time Processing",
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-3"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack Architecture */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Complete Analytics Technology Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Data Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Robust data storage, processing, and management infrastructure
                for all data types.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Analytics Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced machine learning, statistical analysis, and predictive
                modeling capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Presentation Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Interactive dashboards, reports, and visualization tools for
                actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-brand-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-6">
            Our Technology Implementation Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Assessment</h4>
              <p className="text-blue-100 text-sm">
                Evaluate current infrastructure and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Architecture</h4>
              <p className="text-blue-100 text-sm">
                Design optimal technology stack and architecture
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Implementation</h4>
              <p className="text-blue-100 text-sm">
                Deploy and integrate analytics solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Optimization</h4>
              <p className="text-blue-100 text-sm">
                Continuous monitoring and performance tuning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisToolsFramework;
