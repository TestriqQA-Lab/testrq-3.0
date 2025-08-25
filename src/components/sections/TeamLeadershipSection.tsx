import React from "react";
import { FaLinkedin, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
        "Speaker at 20+ industry conferences",
      ],
      linkedin: "https://www.linkedin.com/in/sandeepmaske",
      img: (
        <Image
          src="/sandeep-maske-img.webp"
          alt="Sandeep Maske"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
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
        "Published 15+ technical articles",
      ],
      linkedin: "https://www.linkedin.com/in/santoshkakade/",
      img: (
        <Image
          src="/Santosh_Kakade.webp"
          alt="Santosh_Kakade"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
    },
    {
      name: "Goutam Mishra",
      position: "Head of QA and BD",
      experience: "20+ Years",
      specialization: "Software Testing & BD ",
      bio: "Goutam Mishra, With 20+ years in tech, excel in QA, testing, and project management, mentoring QA professionals while ensuring top-tier software quality across platforms.",
      achievements: [
        "Designed QA processes for 200+ projects",
        "ISTQB Expert Level Certified",
        "Reduced bug leakage by 95%",
        "Mentored 30+ junior testers",
      ],
      linkedin: "https://www.linkedin.com/in/goutam-mishra-96194117/",
      img: (
        <Image
          src="/Goutam_Mishra.webp"
          alt="Goutam_Mishra"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
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
        "Mentored 30+ junior testers",
      ],
      linkedin: "https://www.linkedin.com/in/rohan-maske/",
      img: (
        <Image
          src="/Rohan_Maske.webp"
          alt="Rohan_Maske"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
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
        "Mentored 30+ junior testers",
      ],
      linkedin: "https://www.linkedin.com/in/aatishjadhav/",
      img: (
        <Image
          src="/Aatish_Jadhav.webp"
          alt="Aatish_Jadhav"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
    },
  ];

  const cdplLeaders = [
    {
      name: "Shoeb Shaikh",
      position: "Head - Learning and Development",
      experience: "14+ Years",
      specialization: "Software Testing and Data Science Expert",
      bio: "Shoeb Shaikh is a seasoned Software Testing and Data Science Expert and a Mentor with over 14 years of experience in the field. Specialist in designing and managing processes, and leading high-performing teams to deliver impactful results.",
      achievements: [
        "Designed & Delivered 50+ QA and Data Science training programs",
        "Trained 1000+ professionals in QA and Data Science",
        "ISTQB Certified Test Manager (Selenium, Pytest, API, DBMS)",
        "Led L&D initiatives in academic and corporate environments"
      ],
      linkedin: "https://www.linkedin.com/in/ishaikhshoeb/",
      img: (
        <Image
          src="/ShoebShaikh.webp"
          alt="ShoebShaikh"
          width={350}
          height={250}
          className="object-cover rounded-full"
        />
      ),
    },
    {
      name: "Ashish Shetty",
      position: "Business Intelligence & Data Analytics Specialist | L&D Expert",
      experience: "11+ Years",
      specialization: "Business Intelligence and learning and development professional",
      bio: "Ashish Shetty is a seasoned Business Intelligence and learning and development professional with over 11 years of experience empowering students and professionals to unlock career success through data-driven skills. Specializing in Power BI, Tableau, and Prompt Engineering, Ashish is known for delivering practical, high-impact workshops and training programs across academic and corporate sectors.",
      achievements: [
        "Trained 7,000+ students & professionals in BI, ML, and Analytics",
        "Delivered 50+ workshops and national-level programs",
        "Keynote speaker at leading conferences and UGC events",
        "Designed industry-certified training and faculty development courses",
        "Advanced Data Science & Machine Learning certified"
      ],
      linkedin: "https://www.linkedin.com/in/profashishshetty/",
      img: <Image
        src="/AshishShetty.png"
        alt="ShoebShaikh"
        width={550}
        height={450}
        className="object-cover rounded-full"
      />
    }
  ]

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaUserTie />
            <span className="text-sm">
              Leadership Team
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-[theme(color.brand.blue)]">Leaders</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our leadership team brings decades of quality assurance and business
            development experience across global enterprises, driving digital
            transformation and testing innovation.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`lg bg-white rounded-2xl p-4 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-xl text-[theme(color.brand.blue)] font-semibold mb-2">
                      {leader.position}
                    </div>
                    <div className="flex flex-row items-center gap-3 text-gray-600">
                      <p className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                        {leader.experience}
                      </p>
                      <p className="text-sm">{leader.specialization}</p>
                    </div>
                  </div>

                  {/* Leader Visual */}
                  <div
                    className={`flex lg:hidden justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="relative">
                      <div className="text-center text-black">
                        <div className="w-50 h-50 md:w-80 md:h-90 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                          {leader.img}
                        </div>
                        <div className="text-xl font-semibold hidden lg:block">
                          {leader.name}
                        </div>
                        <div className="text-md opacity-90 hidden lg:block">
                          {leader.position}
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-0 -right-2 md:top-5 md:right-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {leader.experience.split("+")[0]}+
                          </div>
                          <div className="text-xs text-gray-100">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6 mb-6">
                    {leader.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
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
                  <Link
                    href={leader.linkedin}
                    className="flex justify-center w-25 bg-sky-100 p-2 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer"
                  >
                    <FaLinkedin size={30} />
                  </Link>
                </div>

                {/* Leader Visual */}
                <div
                  className={`hidden lg:flex justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                >
                  <div className="relative">
                    <div className="text-center text-black py-0">
                      <div className="w-60 h-60 md:w-80 md:h-100 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                        {leader.img}
                      </div>
                      <div className="text-xl font-semibold hidden lg:block">
                        {leader.name}
                      </div>
                      <div className="text-md opacity-90 hidden lg:block">
                        {leader.position}
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-10 right-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {leader.experience.split("+")[0]}+
                        </div>
                        <div className="text-xs text-gray-100">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CDPL-Leaders Learning and Development */}
        <div className="space-y-12 my-16">
          <h2 className="text-3xl md:text-5xl text-center font-semibold">
            <span className="text-brand-blue">Learning and Development</span>{" "}
            <span className="block leading-16">
              Wing with <span className="text-[#FF8B00]">CDPL</span>
            </span>
          </h2>

          {cdplLeaders.map((leader, index) => (
            <div
              key={index}
              className={`lg bg-white rounded-2xl p-4 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
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

                  {/* Leader Visual */}
                  <div
                    className={`flex lg:hidden justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="relative">
                      <div className="text-center text-black">
                        <div className="w-50 h-50 md:w-80 md:h-90 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                          {leader.img}
                        </div>
                        <div className="text-xl font-semibold hidden lg:block">
                          {leader.name}
                        </div>
                        <div className="text-md opacity-90 hidden lg:block">
                          {leader.position}
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-0 -right-2 md:top-5 md:right-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {leader.experience.split("+")[0]}+
                          </div>
                          <div className="text-xs text-gray-100">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6 mb-6">
                    {leader.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
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
                  <Link
                    href={leader.linkedin}
                    className="flex justify-center w-25 bg-sky-100 p-2 rounded-xl text-sky-700 hover:scale-110 hover:bg-sky-200 duration-300 ease-in-out cursor-pointer"
                  >
                    <FaLinkedin size={30} />
                  </Link>
                </div>

                {/* Leader Visual */}
                <div
                  className={`hidden lg:flex justify-center px-0 ${index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                >
                  <div className="relative">
                    <div className="text-center text-black py-0">
                      <div className="w-60 h-60 md:w-90 md:h-100 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                        {leader.img}
                      </div>
                      <div className="text-xl font-semibold hidden lg:block">
                        {leader.name}
                      </div>
                      <div className="text-md opacity-90 hidden lg:block">
                        {leader.position}
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-10 right-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {leader.experience.split("+")[0]}+
                        </div>
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
              Our Leadership{" "}
              <span className="text-[theme(color.brand.blue)]">Philosophy</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              At Testriq, we lead by example and foster innovation in software
              testing, building a QA team culture where every member thrives and
              drives collective success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description:
                  "We empower our team members to take ownership, make decisions, and drive innovation in their areas of expertise.",
              },
              {
                title: "Transparency",
                description:
                  "Open communication and transparent processes ensure everyone is aligned with our goals and values.",
              },
              {
                title: "Growth",
                description:
                  "We invest in continuous learning and development, helping our team members reach their full potential.",
              },
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h4>
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
