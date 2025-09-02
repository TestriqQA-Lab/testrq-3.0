import Link from 'next/link';
import React from 'react';

const QAKnowledgeHub: React.FC = () => {
    const scrollToCategory = () => {
        document.querySelector("#blog-categories")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    
    return (
        <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center sm:text-5xl">
                    Explore Our QA Knowledge Hub
                </h2>
                <p className="text-lg text-gray-700 mb-12 text-center max-w-7xl mx-auto">
                    At Testriq, we’re dedicated to empowering software teams with expert quality assurance (QA) insights. Our QA Knowledge Hub is your go-to resource for
                    mastering software testing, whether you’re a QA engineer, developer, or business leader aiming to deliver flawless applications. From automation tools
                    like Selenium and Appium to Agile methodologies and performance testing, our blog offers the latest trends, practical tips, and real-world case studies
                    to elevate your testing strategy. With insights from industry experts, we simplify complex QA concepts into actionable advice. Dive into our curated topics
                    below to discover how Testriq can help you achieve superior software quality and streamline development.
                </p>
                {/* Optional Image - Uncomment to include */}
                {/* <img
          src="/images/qa-workflow.jpg"
          alt="Testriq QA Knowledge Hub for Software Testing Best Practices"
          className="w-full h-auto max-w-2xl mx-auto mb-8 rounded-lg shadow-md"
        /> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Automation Testing',
                            description: 'Discover tools like Selenium and Appium to streamline testing and boost efficiency.',
                            link: '/blog/category/automation-testing-services',
                        },
                        {
                            title: 'Manual Testing Best Practices',
                            description: 'Learn proven techniques to ensure comprehensive test coverage for your applications.',
                            link: '/blog/category/manual-testing',
                        },
                        {
                            title: 'Security Testing',
                            description: 'Uncover vulnerabilities with tools and techniques to ensure robust application security.',
                            link: '/blog/category/security-testing',
                        },
                        {
                            title: 'AI Application Testing',
                            description: 'Master testing strategies for AI-driven applications to ensure accuracy and reliability.',
                            link: '/blog/category/ai-application-testing',
                        },
                        {
                            title: 'Performance Testing Essentials',
                            description: 'Master tools like JMeter to optimize application speed and reliability.',
                            link: '/blog/category/performance-testing-services',
                        },
                        {
                            title: 'Testriq Case Studies',
                            description: 'Explore real-world examples of how our QA solutions drive success.',
                            link: '/case-studies',
                        },
                    ].map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                            <p className="text-gray-600 mb-4">{topic.description}</p>
                            <Link
                                href={topic.link}
                                className="text-brand-blue font-medium hover:text-blue-800 transition-colors duration-200"
                            >
                                Explore Now &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                        Start your QA journey today with expert insights and practical solutions!
                    </p>
                    <Link
                        href="/blog#blog-categories"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            scrollToCategory(); // Trigger smooth scroll
                        }}
                        className="inline-block bg-brand-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default QAKnowledgeHub;