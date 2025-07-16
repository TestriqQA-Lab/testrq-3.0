'use client';

import React from 'react';
import { FaRocket } from 'react-icons/fa';

const processSteps = [
  {
    id: '01',
    title: 'Analyze & Plan',
    description:
      'Understand requirements and create comprehensive testing strategy.',
    progress: 25,
  },
  {
    id: '02',
    title: 'Execute & Test',
    description:
      'Design and execute detailed test cases with precision.',
    progress: 50,
  },
  {
    id: '03',
    title: 'Report & Optimize',
    description:
      'Provide insights and continuous improvement recommendations.',
    progress: 75,
  },
  {
    id: '04',
    title: 'Support & Deliver',
    description:
      'Ensure smooth delivery and ongoing support.',
    progress: 100,
  },
];

const HomeProcesses = () => {
  return (
    <section className="py-20 px-6 sm:px-10 md:px-20 lg:px-32 bg-white">
      {/* Top Badge + Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium text-[theme(color.brand.blue)] bg-blue-100 w-fit mx-auto mb-4">
          <span>⚡</span> Our Process
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Simple. <span className="text-[theme(color.brand.blue)]">Effective.</span> Proven.
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Our streamlined 4-step process ensures quality delivery every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl  hover:-translate-y-2"
          >
            <div>
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-500 text-white flex items-center justify-center text-sm font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
            <div className="w-full h-1 mt-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-500"
                style={{ width: `${step.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
    <div className="mt-12 w-full max-w-xl mx-auto bg-white px-4 py-6 sm:px-10 sm:py-8 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
    {/* Left Content */}
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
        {/* Icon */}
        <div className="w-10 h-10 rounded-md bg-green-500 text-white flex items-center justify-center text-sm font-bold mb-2 sm:mb-0">
        <FaRocket className="w-5 h-5" />
        </div>

        {/* Text */}
        <div className="sm:ml-4">
        <h3 className="text-gray-700 text-lg font-semibold">
            Ready to Get Started?
        </h3>
        <p className="text-gray-500 text-sm">
            Experience our proven process today.
        </p>
        </div>
    </div>

    {/* CTA Button */}
    <button className="w-full sm:w-auto bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
        Start Now
    </button>
    </div>

    </section>
  );
};

export default HomeProcesses;
