import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderArr } from "@/src/utils/home";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  dotsClass: "slick-dots custom-dots",
  appendDots: (dots: any) => (
    <div className="mt-8">
      <ul className="flex justify-center space-x-2">{dots}</ul>
    </div>
  ),
  customPaging: (i: any) => (
    <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 cursor-pointer"></div>
  )
};

export default function ModernHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Slider
        {...settings}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {sliderArr.map((item, index) => (
          <div key={index} className="relative w-full lg:h-screen h-[85vh] min-h-[600px]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-linear"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="main-container px-4 sm:px-6 lg:px-8 xl:px-20">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-white/90">Premium Services</span>
                  </div>

                  {/* Title */}
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                      {item.title.split(' ').slice(0, -1).join(' ')}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {item.title.split(' ').slice(-1)}
                    </span>
                  </h1>

                  {/* Paragraph */}
                  <p
                    className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl font-light"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    {item.paragraph}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <Link href="/services">
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/25">
                        <span className="relative z-10 flex items-center">
                          Get All Services
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </Link>

                    <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center">
                        Learn More
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div
                    className="flex flex-wrap gap-8 pt-8 border-t border-white/20"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">500+</div>
                      <div className="text-sm text-white/60">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">99%</div>
                      <div className="text-sm text-white/60">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-sm text-white/60">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for dots */}
      <style jsx>{`
        :global(.custom-dots li.slick-active div) {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}