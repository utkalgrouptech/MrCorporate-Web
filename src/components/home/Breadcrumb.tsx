import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderArr } from "@/src/utils/home"; 
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"; // Import Link for navigation

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default function Breadcrumb() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation runs only once
    });
    AOS.refresh(); // Refresh AOS for dynamic content
  }, []);

  return (
    <section className="w-full bg-gradient-to-bl from-[#ee7623] to-[#282461] h-full overflow-hidden">
      <Slider {...settings}>
        {sliderArr.map((item, index) => (
          <div key={index} className="relative w-full lg:h-screen h-96">
            <img
              src={item.img.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
              <div
                className="main-container px-4 sm:px-6 lg:px-8 xl:px-20 text-left text-white"
                data-aos="flip-up"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-3">
                  {item.title}
                </h1>
                <p className="font-semibold md:text-lg leading-loose mb-6 w-full sm:w-2/3 md:w-1/2">
                  {item.paragraph}
                </p>

                {/* Orange Button to Navigate to Services Page */}
                <Link href="/services">
                  <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                    Get All Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
