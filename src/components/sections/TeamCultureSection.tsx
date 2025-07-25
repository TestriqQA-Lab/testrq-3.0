import React from "react";
import { FaHeart, FaGraduationCap, FaUsers, FaGlobe, FaCoffee, FaGamepad } from "react-icons/fa";

const TeamCultureSection = () => {
  const cultureValues = [
    {
      icon: FaHeart,
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional growth and personal well-being.",
      color: "bg-red-500",
    },
    {
      icon: FaGraduationCap,
      title: "Continuous Learning",
      description: "Regular training sessions, certifications, and conference attendance to stay ahead of industry trends.",
      color: "bg-blue-500",
    },
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description: "Open communication, knowledge sharing, and team collaboration are at the heart of our culture.",
      color: "bg-green-500",
    },
    {
      icon: FaGlobe,
      title: "Remote-First",
      description: "Flexible work arrangements with full remote work support and global team collaboration.",
      color: "bg-purple-500",
    },
  ];

  const benefits = [
    {
      category: "Professional Development",
      items: [
        "Annual certification budget",
        "Conference attendance support",
        "Internal training programs",
        "Mentorship opportunities",
        "Career advancement paths",
      ],
    },
    {
      category: "Work Environment",
      items: [
        "Flexible working hours",
        "Remote work options",
        "Modern tools and equipment",
        "Collaborative workspaces",
        "Quiet zones for focused work",
      ],
    },
    {
      category: "Wellness & Benefits",
      items: [
        "Health insurance coverage",
        "Mental health support",
        "Fitness membership",
        "Paid time off",
        "Parental leave",
      ],
    },
    {
      category: "Team Activities",
      items: [
        "Monthly team building events",
        "Annual company retreats",
        "Gaming tournaments",
        "Knowledge sharing sessions",
        "Celebration of achievements",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Automation Engineer",
      quote: "The learning opportunities at Testriq are incredible. I've grown more in 3 years here than in my previous 5 years elsewhere.",
      gradient: "from-blue-400 to-blue-500",
    },
    {
      name: "Priya Sharma",
      role: "Mobile Testing Lead",
      quote: "The work-life balance and supportive team environment make Testriq feel like a second family. I love coming to work every day.",
      gradient: "from-green-400 to-green-500",
    },
    {
      name: "David Kim",
      role: "Security Testing Specialist",
      quote: "The company's investment in cutting-edge tools and technologies keeps me excited about the future of testing.",
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Team Culture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[theme(color.brand.blue)]">Culture & Values</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        We&apos;ve built a culture that values growth, collaboration, and innovation. 
            Our team members are our greatest asset, and we invest in their success and well-being.
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cultureValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Employee <span className="text-[theme(color.brand.blue)]">Benefits</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We offer comprehensive benefits designed to support our team members&apos; 
              professional growth and personal well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 border-b-2 border-[theme(color.brand.blue)] pb-2">
                  {benefit.category}
                </h4>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* Fun Activities */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Beyond <span className="text-[theme(color.brand.blue)]">Work</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We believe that great work happens when people enjoy what they do and who they work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCoffee,
                title: "Coffee & Code Sessions",
                description: "Weekly informal gatherings to discuss new technologies and share knowledge over coffee.",
              },
              {
                icon: FaGamepad,
                title: "Gaming Tournaments",
                description: "Monthly gaming competitions that bring out our competitive spirit and team bonding.",
              },
              {
                icon: FaUsers,
                title: "Team Retreats",
                description: "Annual company retreats to beautiful destinations for team building and relaxation.",
              },
            ].map((activity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h4>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;

