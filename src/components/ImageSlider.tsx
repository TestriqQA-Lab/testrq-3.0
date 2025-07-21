'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../../public/launchfastqa-1.svg';
import image2 from '../../public/Group-computers.svg';
import image3 from '../../public/Robot-AI.svg';


const images = [
  { src: image1, alt: 'Launch Fast QA', text: 'Text 1' },
  { src: image2, alt: 'Group Computers', text: 'Text 2' },
  { src: image3, alt: 'Robot AI', text: 'Text 3' },
];

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // 3.5 seconds for a dynamic yet comfortable pace


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[700px] mx-auto h-[450px] overflow-hidden">
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(0) scale(0.85) rotateY(15deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }
        @keyframes slideOut {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
          100% {
            opacity: 0;
            transform: translateX(-70%) scale(0.85) rotateY(-15deg);
          }
        }
        .slide-enter {
          animation: slideIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        .slide-exit {
          animation: slideOut 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>

      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-3 right-15 md:left-3 w-full h-full ${
              index === currentIdx ? 'slide-enter' : 'slide-exit hidden'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
            //   fill
              style={{ objectFit: 'cover' }}
              className="mx-15"
              priority={index === 0} // Prioritize first image for faster loading
            />

            {/* <Link href={'#'} className='flex justify-center text-2xl text-[theme(color.brand.blue)] ' >{image.text}</Link> */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;