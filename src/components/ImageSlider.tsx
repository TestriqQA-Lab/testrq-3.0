'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../../public/launchfastqa-1.svg';
import image2 from '../../public/Group-computers.svg';
import image3 from '../../public/Robot-AI.svg';


const images = [
  { src: image1, alt: 'Launch Fast QA', text: 'LaunchFast QA Start-Up Specials' },
  { src: image2, alt: 'Group Computers', text: 'Web and Mobile Applications' },
  { src: image3, alt: 'Robot AI', text: 'AI and ML Applications' },
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
    <div className="relative w-full max-w-[700px] mx-auto h-[500px] overflow-hidden">
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
      <div className="w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center text-center w-full h-full ${
              index === currentIdx ? 'slide-enter' : 'slide-exit hidden'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
            //   fill
              style={{ objectFit: 'cover' }}
              priority={index === 0} // Prioritize first image for faster loading
            />

            <p className=' my-5 text-3xl font-semibold bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 bg-clip-text text-transparent' >{image.text}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;