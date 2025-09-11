import React from 'react';
import Image from 'next/image';

const images = [
  { link: '/Ace-learning-1_IMG.svg', title: 'Ace Learning Logo' },
  { link: '/attom-1_IMG.svg', title: 'Attom Logo' },
  { link: '/awl-sundry-1_IMG.svg', title: 'AWL Sundry Logo' },
  { link: '/brightCOIN_IMG.svg', title: 'Bright Coin Logo' },
  { link: '/mom-1-1_IMG.svg', title: 'MOM Logo' },
  { link: '/realtyTrac_IMG.svg', title: 'RealtyTrac Logo' },
  { link: '/tire-agent-1_IMG.svg', title: 'Tire Agent Logo' },
  { link: '/soci-2-1_IMG.svg', title: 'Soci Logo' },
];


const ImageMarquee = () => {
  return (
    <section className="relative w-full flex overflow-x-hidden py-4">
      <div className="animate-marquee whitespace-nowrap">
        <span className=" text-4xl">
          {images.map((src, index) => (
            <Image
            title={src.title}
              key={index}
              src={src.link}
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
            title={src.title}
              key={index}
              src={src.link}
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
