import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaTools,
  FaShieldAlt,
  FaMobile,
  FaDatabase,
  FaRocket,
  FaClock,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const CorporateQATrainingModules: React.FC = () => {
  const modules = [
    {
      category: "Foundation Modules",
      icon: <FaGraduationCap className="text-2xl text-blue-600" />,
      courses: [
        {
          title: "QA Fundamentals",
          duration: "16 hours",
          level: "Beginner",
          description:
            "Essential concepts of software testing and quality assurance principles.",
          topics: [
            "SDLC & STLC",
            "Test Planning",
            "Test Design",
            "Defect Management",
          ],
        },
        {
          title: "Manual Testing Mastery",
          duration: "24 hours",
          level: "Beginner to Intermediate",
          description:
            "Comprehensive manual testing techniques and methodologies.",
          topics: [
            "Test Case Design",
            "Exploratory Testing",
            "Usability Testing",
            "Cross-browser Testing",
          ],
        },
      ],
    },
    {
      category: "Automation Modules",
      icon: <FaLaptopCode className="text-2xl text-purple-600" />,
      courses: [
        {
          title: "Selenium WebDriver",
          duration: "32 hours",
          level: "Intermediate",
          description: "Master web automation testing with Selenium WebDriver.",
          topics: [
            "WebDriver Basics",
            "Page Object Model",
            "TestNG Framework",
            "Data-Driven Testing",
          ],
        },
        {
          title: "API Testing Automation",
          duration: "20 hours",
          level: "Intermediate",
          description: "Automated testing of REST APIs and web services.",
          topics: [
            "REST API Testing",
            "Postman",
            "RestAssured",
            "API Security Testing",
          ],
        },
      ],
    },
    {
      category: "Specialized Testing",
      icon: <FaChartLine className="text-2xl text-green-600" />,
      courses: [
        {
          title: "Performance Testing",
          duration: "28 hours",
          level: "Advanced",
          description: "Load, stress, and performance testing methodologies.",
          topics: [
            "JMeter",
            "LoadRunner",
            "Performance Monitoring",
            "Bottleneck Analysis",
          ],
        },
        {
          title: "Security Testing",
          duration: "24 hours",
          level: "Advanced",
          description:
            "Security testing principles and vulnerability assessment.",
          topics: [
            "OWASP Top 10",
            "Penetration Testing",
            "Security Tools",
            "Compliance Testing",
          ],
        },
      ],
    },
    {
      category: "Modern QA Practices",
      icon: <FaRocket className="text-2xl text-orange-600" />,
      courses: [
        {
          title: "DevOps & CI/CD",
          duration: "20 hours",
          level: "Intermediate to Advanced",
          description:
            "Integration of testing in DevOps and continuous delivery pipelines.",
          topics: ["Jenkins", "Docker", "Kubernetes", "Pipeline Testing"],
        },
        {
          title: "Agile Testing",
          duration: "16 hours",
          level: "All Levels",
          description: "Testing in Agile environments and methodologies.",
          topics: [
            "Scrum Testing",
            "BDD/TDD",
            "Sprint Testing",
            "Continuous Testing",
          ],
        },
      ],
    },
  ];

  const features = [
    {
      icon: <FaClock className="text-xl text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Choose from weekday, weekend, or custom schedules",
    },
    {
      icon: <FaUsers className="text-xl text-green-600" />,
      title: "Small Batch Size",
      description: "Maximum 15 participants for personalized attention",
    },
    {
      icon: <FaCertificate className="text-xl text-purple-600" />,
      title: "Industry Certification",
      description: "Recognized certificates upon successful completion",
    },
    {
      icon: <FaTools className="text-xl text-orange-600" />,
      title: "Hands-on Labs",
      description: "Practical exercises with real-world scenarios",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaGraduationCap />
            <span className="text-sm">Training Modules</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Learning
            <span className="text-brand-blue bg-clip-text"> Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured curriculum covers everything from QA fundamentals to
            advanced testing techniques, ensuring your team gains comprehensive
            expertise.
          </p>
        </div>

        {/* Training Modules */}
        <div className="space-y-12 mb-16">
          {modules.map((module, moduleIndex) => (
            <div
              key={moduleIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {module.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {module.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h4>
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaClock className="text-xs" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Key Topics:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center space-x-2 text-xs text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Custom Training Program?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our training experts will work with you to create a customized
              curriculum that meets your team's specific needs and skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold  transition-colors">
                  Discuss Your Needs
                </button>
              </Link>
              {/* <Link href="#">
                <button className="border border-gray-300 cursor-pointer text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Sample Curriculum
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingModules;
