// src/components/ServicesSection.jsx
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
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Facility <span className="text-orange-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional facility management services tailored to your business needs
          </p>
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold shadow-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}