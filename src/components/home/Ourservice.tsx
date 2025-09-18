import { steps } from '@/src/utils/about';
import React from 'react';

export default function Worksection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-orange-400 to-indigo-900">
      <div className="main-container mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
          | How We Work |
        </h1>
        <h4 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12 leading-tight">
          Our Working Process
        </h4>

        {/* Steps Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col items-center justify-between bg-white shadow-xl rounded-2xl p-6 md:p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
            >
              {/* Step Number */}
              <div
                className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full ${step.bgColor} text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
              >
                {`0${step.id}`}
              </div>
              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-900 mb-2 md:mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
