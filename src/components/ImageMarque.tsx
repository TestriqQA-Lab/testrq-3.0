import React from 'react';
import Image from 'next/image';

const images = [
  '/Ace-learning-1_IMG.svg',
  '/attom-1_IMG.svg',
  '/awl-sundry-1_IMG.svg',
  '/brightCOIN_IMG.svg',
  '/mom-1-1_IMG.svg',
  '/realtyTrac_IMG.svg',
  '/tire-agent-1_IMG.svg',
  '/soci-2-1_IMG.svg',
];

const ImageMarquee = () => {
  return (
    <section className="relative w-full flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className=" text-4xl">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Company Logo ${index + 1}`}
              className="inline-block mx-10"
              width={150}
              height={50}
            />
          ))}

        </span>
        <span className="text-4xl">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Company Logo ${index + 1}`}
              className="inline-block mx-10"
              width={150}
              height={50}
            />
          ))}

        </span>
      </div>
    </section>
  );
};

export default ImageMarquee;
