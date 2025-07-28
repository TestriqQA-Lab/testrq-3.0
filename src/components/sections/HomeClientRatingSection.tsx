"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dynamically import RatingStar
const RatingStar = dynamic(() => import("@/components/RatingStar"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

// Custom Hook to detect screen width
const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = () => {
      setTargetReached(window.innerWidth < width);
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);

    return () => window.removeEventListener("resize", updateTarget);
  }, [width]);

  return targetReached;
};

const ClientRatingSection = () => {
  const heading = {
    title: "What Our Clients Say?",
    info: "Trusted by global startups and enterprises, Testriq is a leading QA outsourcing partner known for ISTQB certified experts, dependable QA support, and consistent software quality across every project.",
  };

  const renderTitle = () => {
    const titleParts = heading.title.split("Clients");
    return (
      <>
        {titleParts[0]}
        <span className="text-[theme(color.brand.blue)]">Clients</span>
        {titleParts[1]}
      </>
    );
  };

  const cardData = [
    {
      Comment:
        "I highly recommend Testriq for their outstanding QA testing services provided to Canva over the past few years.",
      clientName: "Loren De Camas",
      designation: "QA Lead at Canva",
      company: "Canva",
      icon: (
        <Image
          src="/Canva_Logo.png"
          alt="Canva_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq is thorough and proficient in testing across our diverse user base. They are flexible and reliably meet deadlines.",
      clientName: "Jake Browning",
      designation: "Director of Product and Technology",
      company: "Ragnar",
      icon: (
        <Image
          src="/Ragnar_logo.webp"
          alt="Ragnar_logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq provides comprehensive testing resources and responsive support. They've played a crucial role in our business success.",
      clientName: "Ranjan Upadhyay",
      designation: "Vice President - Operations",
      company: "Digiboxx",
      icon: (
        <Image
          src="/Digiboxx-Logo.webp"
          alt="Digiboxx_logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "TESTRIQ provided clear, actionable insights that improved both performance and user experience. Their professionalism is truly appreciated.",
      clientName: "Vinay Vikram Singh",
      designation: "Director",
      company: "Kanishka Software",
      icon: (
        <Image
          src="/Kanishka_Software_Logo.webp"
          alt="Kanishka_Software_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq was a clutch QA partner, providing essential services to meet rigorous regulatory requirements with excellence.",
      clientName: "Dave Hadden",
      designation: "Founder and President, Pro-ficiency",
      company: "Pro-ficiency",
      icon: (
        <Image
          src="/Pro-ficiency_Logo.webp"
          alt="Pro-ficiency_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  });

  const getVisibleCards = () => {
    const visible: typeof cardData = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(cardData[(currentIndex + i) % cardData.length]);
    }
    return visible;
  };

  return (
    <section className="flex flex-col w-full mx-auto bg-white md:px-8 px-4 xl:px-24 py-12 gap-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        {renderTitle()}
      </h2>
      <p className="text-center text-base md:text-lg text-gray-500">
        {heading.info}
      </p>

      <div className="relative mt-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-3"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden w-full">
          <div
            className={`flex transition-transform duration-700 ease-in-out p-5`}
          >
            {getVisibleCards().map((card, index) => (
              <div
                key={index}
                className={`px-2 ${
                  isMobile ? "min-w-full" : isTablet ? "min-w-1/2" : "min-w-1/4"
                }`}
              >
                <div className="flex flex-col h-full ring-sky-200 ring-1 bg-[theme(color.background.gray)] rounded-lg p-5 gap-y-6 transition duration-300 transform hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-2">
                  {card.icon}
                  <p className="text-gray-500 italic text-sm md:text-base">
                    {card.Comment}
                  </p>
                  <div className="flex flex-col xl:justify-between mt-auto gap-1">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">
                        {card.clientName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {card.designation}
                      </p>
                      <p className="text-sm text-gray-500 font-semibold">
                        {card.company}
                      </p>
                    </div>
                    <RatingStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-3"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ClientRatingSection;
