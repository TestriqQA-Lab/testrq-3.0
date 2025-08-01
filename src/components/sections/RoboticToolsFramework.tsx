"use client";

import React from "react";
import { FaRobot, FaCog, FaShieldAlt, FaCode, FaTools } from "react-icons/fa";

const RoboticToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Testing Tools",
      icon: <FaCog className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Robot Framework",
          description: "Open-source automation framework for robotic testing"
        },
        {
          name: "ROS Testing",
          description: "Robot Operating System testing tools"
        },
        {
          name: "Gazebo Simulator",
          description: "3D robotic simulation and testing environment"
        },
        {
          name: "MoveIt Testing",
          description: "Motion planning framework testing tools"
        }
      ]
    },
    {
      title: "Frameworks",
      icon: <FaCode className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "ROS/ROS2",
          description: "Robot Operating System framework"
        },
        {
          name: "OpenRAVE",
          description: "Open Robotics Automation Virtual Environment"
        },
        {
          name: "PyBullet",
          description: "Python robotics simulation framework"
        },
        {
          name: "DART",
          description: "Dynamic Animation and Robotics Toolkit"
        }
      ]
    },
    {
      title: "Safety Testing",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "ISO 10218",
          description: "Industrial robot safety standard testing"
        },
        {
          name: "ISO 13482",
          description: "Personal care robot safety testing"
        },
        {
          name: "FMEA Tools",
          description: "Failure Mode and Effects Analysis"
        },
        {
          name: "HAZOP",
          description: "Hazard and Operability Study tools"
        }
      ]
    },
    {
      title: "Performance Tools",
      icon: <FaRobot className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "Robotics Toolbox",
          description: "MATLAB/Python robotics analysis tools"
        },
        {
          name: "V-REP",
          description: "Virtual robot experimentation platform"
        },
        {
          name: "Webots",
          description: "Professional robot simulation software"
        },
        {
          name: "CasADi",
          description: "Optimal control and robotics optimization"
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">
              Tools & Frameworks
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Robotic Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks specifically designed for robotic testing to ensure 
            comprehensive validation of your robotic systems across all performance, safety, and functionality metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Integration */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Tool Integration</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We support full-cycle testing for robotics software and can integrate with your tools or recommend best-fit frameworks, or recommend the best combination for your specific robotic testing requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticToolsFramework;

