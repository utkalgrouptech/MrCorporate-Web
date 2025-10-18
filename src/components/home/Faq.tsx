// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { faqArr } from '@/src/utils/home';
import { faq_img } from '@/src/assets/home';

export default function FAQSection() {
  const [isOpen, setIsOpen] = useState<number | null>(0);

  const handleClick = (i: number) => {
    setIsOpen(isOpen === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our facility management services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqArr.map((item, index) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer bg-white"
                  onClick={() => handleClick(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ArrowDropDownIcon
                    className={`transform transition-transform duration-300 ${
                      isOpen === index ? 'rotate-180 text-orange-600' : 'text-gray-400'
                    }`}
                  />
                </div>
                <Collapse in={isOpen === index} timeout="auto" unmountOnExit>
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>

          {/* FAQ Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={faq_img.src}
                alt="Facility Management"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}