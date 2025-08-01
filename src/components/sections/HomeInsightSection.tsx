import Link from "next/link";
import React from "react";

const HomeInsightSection = () => {
  const heading = {
    title: "Latest Insights & Best Practices",
    info: "Stay updated with the latest trends, best practices, and insights from our testing experts.",
  };

  // Split the title into parts to style "Software Testing" in blue
  // Split the title to style "Insights" and "Practices" in blue
  const renderTitle = () => {
    // Replace "Insights" and "Practices" with spans that have blue styling
    const formattedTitle = heading.title
      .replace(
        "Insights",
        '<span class="text-[theme(color.brand.blue)]">Insights</span>'
      )
      .replace(
        "Practices",
        '<span class="text-[theme(color.brand.blue)]">Practices</span>'
      );

    // Use dangerouslySetInnerHTML to render the HTML string
    return <span dangerouslySetInnerHTML={{ __html: formattedTitle }} />;
  };

  const cardData = [
    {
      about: "AI Testing",
      title: "AI-Powered Testing: The Future is Here",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      detail:
        "Discover how artificial intelligence is revolutionizing software testing and quality assurance processes.",
      href: "#",
    },
    {
      about: "Security",
      title: "Security Testing Best Practices for 2024",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      detail:
        "Essential security testing strategies to protect your applications from evolving cyber threats.",
      href: "#",
    },
    {
      about: "Performance",
      title: "Performance Testing for Modern Web Apps",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      detail:
        "Comprehensive guide to performance testing strategies for today's complex web applications.",
      href: "#",
    },
  ];
  return (
    // Main section container
    <section className="flex flex-col w-full mx-auto md:px-8 px-8 xl:px-24 py-10 gap-y-15">
      {/* Heading section */}
      <div className="flex flex-col gap-y-5 text-center">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="text-lg text-gray-500 mx-auto max-w-2xl">
          {heading.info}
        </p>
      </div>

      {/* Card grid layout */}
      {/* Each card contains an icon, title, and detail text */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {cardData.map((card) => {
          return (
            <div
              key={card.title}
              className="flex flex-col justify-start items-start ring-sky-200 ring-1 rounded-lg p-5 md:p-5 h-72 lg:h-68 gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl hover:-translate-y-2"
            >
              <p className="text-xs text-blue-400 p-1.5 py-1 rounded-2xl bg-sky-100">
                {card.about}
              </p>
              <div className="flex text-sm text-gray-500 space-x-3">
                <p>{card.date}</p> <span>.</span> <p>{card.readTime}</p>
              </div>
              <h2 className="text-xl">{card.title}</h2>
              <p className="text-gray-500 text-sm">{card.detail}</p>
              <Link
                href={card.href}
                className="text-sm text-[theme(color.brand.blue)]"
              >
                Read More <span>&#8594;</span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Link href="/blogs">
          <button className="flex justify-center items-center p-2 ring-sky-300 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white w-50 rounded-lg">
            View All Articles &nbsp;<span className="text-2xl">&#8594;</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeInsightSection;
