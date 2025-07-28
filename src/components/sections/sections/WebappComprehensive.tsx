// components/data/testingServices.ts
import { JSX } from "react";
import {
  FaCode,
  FaTachometerAlt,
  FaShieldAlt,
  FaUsers,
  FaPlug,
  FaServer,
  FaBug,
  FaCogs,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export type TestingCard = {
  title: string;
  description: string;
  points: string[];
  icon: JSX.Element;
  color: string;
};

const testingServices: TestingCard[] = [
  {
    title: "Functional Testing",
    description:
      "Comprehensive testing of all web application features, user workflows, and business logic to ensure everything works as intended.",
    points: [
      "User Interface Testing",
      "API Testing",
      "Database Testing",
      "Cross-browser Compatibility",
    ],
    icon: <FaCode className="text-blue-600 text-2xl" />,
    color: "blue",
  },
  {
    title: "Performance Testing",
    description:
      "Evaluate your web application's speed, scalability, and stability under various load conditions and user scenarios.",
    points: [
      "Load Testing",
      "Stress Testing",
      "Volume Testing",
      "Scalability Analysis",
    ],
    icon: <FaTachometerAlt className="text-green-600 text-2xl" />,
    color: "green",
  },
  {
    title: "Security Testing",
    description:
      "Identify vulnerabilities and security flaws to protect your web application from potential threats and data breaches.",
    points: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Authentication Testing",
      "Data Protection",
    ],
    icon: <FaShieldAlt className="text-red-500 text-2xl" />,
    color: "red",
  },
  {
    title: "Usability Testing",
    description:
      "Ensure your web application provides an intuitive and engaging user experience across all user personas and devices.",
    points: [
      "User Experience Testing",
      "Accessibility Testing",
      "Navigation Testing",
      "Content Testing",
    ],
    icon: <FaUsers className="text-purple-600 text-2xl" />,
    color: "purple",
  },
  {
    title: "Integration Testing",
    description:
      "Check the communication and data flow between different modules and third-party services of your web app.",
    points: [
      "Service Testing",
      "Dependency Checks",
      "Interface Validation",
      "Error Handling",
    ],
    icon: <FaPlug className="text-indigo-500 text-2xl" />,
    color: "indigo",
  },
  {
    title: "Backend Testing",
    description:
      "Test server-side logic, database operations, and data integrity to ensure robust backend functionality.",
    points: [
      "Database Validation",
      "API Response Testing",
      "Logic Testing",
      "Performance Monitoring",
    ],
    icon: <FaServer className="text-yellow-600 text-2xl" />,
    color: "yellow",
  },
  {
    title: "Regression Testing",
    description:
      "Verify that recent code changes haven’t adversely affected existing functionalities of the web app.",
    points: [
      "Automation Scripts",
      "Bug Retesting",
      "Feature Verification",
      "Change Impact",
    ],
    icon: <FaBug className="text-pink-600 text-2xl" />,
    color: "pink",
  },
  {
    title: "Configuration Testing",
    description:
      "Test application behavior on different system configurations, environments, and browser versions.",
    points: [
      "Device Testing",
      "OS Compatibility",
      "Environment Variables",
      "Multi-browser Testing",
    ],
    icon: <FaCogs className="text-teal-600 text-2xl" />,
    color: "teal",
  },
];

export default function TestingServicesSection() {
  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] font-medium text-sm px-4 py-2 rounded-full mb-4">
          Our Web App Testing Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Comprehensive Testing Solutions for{" "}
          <span className="text-[theme(color.brand.blue)]">
            Modern Web Applications
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          From functional validation to performance optimization, our expert
          team delivers end-to-end testing services that ensure your web
          applications meet the highest quality standards.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {testingServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 text-left transition hover:shadow-xl hover:-translate-y-1 duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              className={`text-sm font-medium text-${service.color}-600 hover:underline flex items-center gap-1`}
            >
              Learn More <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
