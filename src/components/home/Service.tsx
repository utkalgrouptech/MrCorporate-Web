import { service_img } from '@/src/assets/home';
import { cardArr } from '@/src/utils/home';
import React from 'react';
import Slider from 'react-slick';
import ServiceCard from '../card/ServiceCard';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000, // Smooth transition
  autoplaySpeed: 5000, // Adjust autoplay speed to match transition speed
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // For medium screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // For small screens
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Service() {
  return (
    <section
      className="w-full py-16 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${service_img.src})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        {/* Section Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold capitalize bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
            Our Services
          </h1>
          <h4 className="text-[#ee7623] text-2xl md:text-5xl font-extrabold capitalize mt-2 tracking-wide shadow-xl">
            Corporate Services
          </h4>
        </div>

        {/* Service Cards Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {cardArr.map((item) => (
              <div key={item.id} className="px-4">
                <ServiceCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
