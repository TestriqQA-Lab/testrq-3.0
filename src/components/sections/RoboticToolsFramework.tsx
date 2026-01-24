"use client";

import Link from "next/link";
import React from "react";
import {
  FaRobot,
  FaCog,
  FaShieldAlt,
  FaCode,
  FaTools,
  FaDesktop,
  FaDatabase,
} from "react-icons/fa";

import { SiRos } from "react-icons/si";

const RoboticToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Testing Tools",
      icon: <FaTools className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Robot Framework",
          description: "Open-source automation framework for robotic testing",
          icon: <FaRobot className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "ROS Testing",
          description: "Robot Operating System testing tools",
          icon: <SiRos className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Gazebo Simulator",
          description: "3D robotic simulation and testing environment",
          icon: <FaDesktop className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "MoveIt Testing",
          description: "Motion planning framework testing tools",
          icon: <FaCog className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      title: "Frameworks",
      icon: <FaCode className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "ROS/ROS2",
          description: "Robot Operating System framework",
          icon: <SiRos className="w-5 h-5 text-green-500" />,
        },
        {
          name: "OpenRAVE",
          description: "Open Robotics Automation Virtual Environment",
          icon: <SiTrello className="w-5 h-5 text-green-500" />,
        },
        {
          name: "PyBullet",
          description: "Python robotics simulation framework",
          icon: <FaFileCode className="w-5 h-5 text-green-500" />,
        },
        {
          name: "DART",
          description: "Dynamic Animation and Robotics Toolkit",
          icon: <FaCog className="w-5 h-5 text-green-500" />,
        },
      ],
    },
    {
      title: "Safety Testing",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "ISO 10218",
          description: "Industrial robot safety standard testing",
          icon: <FaShieldAlt className="w-5 h-5 text-red-500" />,
        },
        {
          name: "ISO 13482",
          description: "Personal care robot safety testing",
          icon: <FaShieldAlt className="w-5 h-5 text-red-500" />,
        },
        {
          name: "FMEA Tools",
          description: "Failure Mode and Effects Analysis",
          icon: <FaCog className="w-5 h-5 text-red-500" />,
        },
        {
          name: "HAZOP",
          description: "Hazard and Operability Study tools",
          icon: <FaShieldAlt className="w-5 h-5 text-red-500" />,
        },
      ],
    },
    {
      title: "Performance Tools",
      icon: <FaRobot className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "Robotics Toolbox",
          description: "MATLAB/Python robotics analysis tools",
          icon: <FaDatabase className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "V-REP",
          description: "Virtual robot experimentation platform",
          icon: <FaDesktop className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Webots",
          description: "Professional robot simulation software",
          icon: <FaDesktop className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "CasADi",
          description: "Optimal control and robotics optimization",
          icon: <FaCog className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Robotic Testing{" "}
            <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge <Link href='/technology-stack'>tools and frameworks</Link> specifically designed for robotic testing to ensure comprehensive validation of your{" "}
            <Link href='blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation'>robotic systems</Link> across all performance, safety, and functionality
            metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white flex gap-5 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div>{tool.icon}</div>
                    <div className="items-start">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Integration */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Tool Integration
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We support full-cycle testing for robotics software and can
              integrate with your tools or recommend best-fit frameworks, or
              recommend the best combination for your specific robotic testing
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticToolsFramework;
