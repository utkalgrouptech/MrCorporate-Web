import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { faqArr } from '@/src/utils/home';
import { faq_img } from '@/src/assets/home';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setIsOpen(isOpen === i ? null : i);
    setActiveIndex(i);
  };

  return (
    <section className="bg-gradient-to-br from-[#ee7623] to-[#282461] py-12 md:py-16 lg:py-20">
      <div className="main-container mx-auto flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-white font-bold text-lg md:text-2xl capitalize mb-2">| FAQ |</h1>
          <h4 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
            Frequently Asked Questions
          </h4>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full">
          {/* FAQ Items */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6">
            {faqArr.map((item, index) => (
              <div
                key={item.id}
                className={`w-full p-4 md:p-6 rounded-xl bg-white bg-opacity-50 backdrop-blur-lg shadow-lg transform transition-all duration-300 ${
                  isOpen === index ? 'scale-105 shadow-xl' : ''
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-blue-950 text-lg md:text-xl font-semibold">
                    {item.question}
                  </h2>
                  <ArrowDropDownIcon
                    className={`transform transition-transform duration-300 ${
                      isOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <Collapse in={isOpen === index} timeout="auto" unmountOnExit>
                  <p className="text-blue-950 text-sm md:text-base mt-2">
                    {item.answer}
                  </p>
                </Collapse>
              </div>
            ))}
          </div>

          {/* FAQ Image */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-themeColor rounded-tl-lg z-10"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-2 border-black rounded-br-lg z-0"></div>
            <img
              src={faq_img.src}
              alt="FAQ"
              className="w-full h-auto object-cover shadow-2xl rounded-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
