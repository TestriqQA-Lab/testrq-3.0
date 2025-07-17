import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";

const TeamLeadershipSection = () => {
  const leaders = [
    {
      name: "Sandeep Maske",
      position: "Founder & CEO",
      experience: "20+ Years",
      specialization: "QA Strategy & Leadership",
      bio: "Sandeep Maske, Founder & CEO of TESTRIQ QA LAB & Cinute Digital, drives unparalleled excellence in software testing, empowering diverse industries with QA expertise.",
      achievements: [
        "Founded Testriq in 2010",
        "Scaled company to 50+ employees",
        "ISTQB Advanced Level Certified",
        "Speaker at 20+ industry conferences"
      ],
      linkedin: "https://www.linkedin.com/in/sandeep-maske-qa/",
      img : <Image
              src="/sandeep-maske-img.webp"
              alt="Sandeep Maske"
              width={350}
              height={250}
              className="object-cover rounded-full"
            />
    },
    {
      name: "Santosh Kakade",
      position: "VP Operations",
      experience: "17+ Years",
      specialization: "QA & Digital Solutions",
      bio: "Santosh Kakade, With 17+ years in QA & digital solutions, lead TESTRIQ QA Lab & Cinute Digital, delivering top-tier testing services and upskilling professionals in tech.",
      achievements: [
        "Led 100+ automation projects",
        "Expert in Selenium, Cypress, Playwright",
        "DevOps and CI/CD specialist",
        "Published 15+ technical articles"
      ],
      linkedin: "https://www.linkedin.com/in/santoshkakade/",
      img : <Image
              src="/Santosh_Kakade.webp"
              alt="Santosh_Kakade"
              width={350}
              height={250}
              className="object-cover rounded-full"
            />
    },
    {
      name: "Goutam_Mishra",
      position: "Head of QA and BD",
      experience: "20+ Years",
      specialization: "Software Testing & Business Development",
      bio: "Goutam Mishra, With 20+ years in tech, excel in QA, testing, and project management, mentoring QA professionals while ensuring top-tier software quality across platforms.",
      achievements: [
        "Designed QA processes for 200+ projects",
        "ISTQB Expert Level Certified",
        "Reduced bug leakage by 95%",
        "Mentored 30+ junior testers"
      ],
      linkedin: "https://www.linkedin.com/in/goutam-mishra-96194117/",
      img : <Image
              src="/Goutam_Mishra.webp"
              alt="Goutam_Mishra"
              width={350}
              height={250}
              className="object-cover rounded-full"
            />
    },
    {
      name: "Rohan Maske",
      position: "VP - Marketing",
      experience: "8+ Years",
      specialization: "Expertise in BD and QA testing",
      bio: "A results-driven leader with 8+ years of expertise in BD, QA testing, HR, data analysis, talent acquisition & performance marketing, excelling in strategy, resource optimization, and innovation to drive efficiency.",
      achievements: [
        "Designed QA processes for 200+ projects",
        "ISTQB Expert Level Certified",
        "Reduced bug leakage by 95%",
        "Mentored 30+ junior testers"
      ],
      linkedin: "https://www.linkedin.com/in/rohan-maske/",
      img : <Image
              src="/Rohan_Maske.webp"
              alt="Rohan_Maske"
              width={350}
              height={250}
              className="object-cover rounded-full"
            />
    },
    {
      name: "Aatish Jadhav",
      position: "Senior Manager - Strategic Growth",
      experience: "16+ Years",
      specialization: "Strategic Innovation Alignment",
      bio: "Senior Manager at TESTRIQ QA Lab with 16 years of industry experience. Driving strategic growth, aligning projects with innovation & quality, and empowering teams through Agile excellence.",
      achievements: [
        "Designed QA processes for 200+ projects",
        "ISTQB Expert Level Certified",
        "Reduced bug leakage by 95%",
        "Mentored 30+ junior testers"
      ],
      linkedin: "https://www.linkedin.com/in/aatishjadhav/",
      img : <Image
              src="/Aatish_Jadhav.webp"
              alt="Aatish_Jadhav"
              width={350}
              height={250}
              className="object-cover rounded-full"
            />
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Leadership Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[theme(color.brand.blue)]">Leaders</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our leadership team combines decades of experience with a forward-thinking approach
            to quality assurance, driving innovation and excellence across all our services.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}>
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <div className="text-xl text-[theme(color.brand.blue)] font-semibold mb-2">
                      {leader.position}
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {leader.experience}
                      </span>
                      <span className="text-sm">{leader.specialization}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <Link href={leader.linkedin} className="flex justify-center w-25 bg-sky-100 p-2 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer" ><FaLinkedin size={30}/></Link>
                </div>

                {/* Leader Visual */}
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    
                      <div className="text-center text-black">
                        <div className="w-80 h-100 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                          {leader.img}
                        </div>
                        <div className="text-2xl font-semibold">{leader.name}</div>
                        <div className="text-md opacity-90">{leader.position}</div>
                      </div>
                  

                    {/* Floating Badge */}
                    <div className="absolute top-10 right-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{leader.experience.split('+')[0]}+</div>
                        <div className="text-xs text-gray-100">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership <span className="text-[theme(color.brand.blue)]">Philosophy</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We believe in leading by example, fostering innovation, and creating an environment
              where every team member can thrive and contribute to our collective success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description: "We empower our team members to take ownership, make decisions, and drive innovation in their areas of expertise.",
              },
              {
                title: "Transparency",
                description: "Open communication and transparent processes ensure everyone is aligned with our goals and values.",
              },
              {
                title: "Growth",
                description: "We invest in continuous learning and development, helping our team members reach their full potential.",
              },
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeadershipSection;

