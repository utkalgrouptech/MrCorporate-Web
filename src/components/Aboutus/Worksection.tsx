import { steps } from '@/src/utils/about';
import React from 'react';

export default function Worksection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#ee7623] to-[#282461]">
      <div className="main-container mx-auto text-center px-6">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-6">
          | How We Work
        </h1>
        <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-16">
          Our Working Process
        </h4>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center justify-between bg-white shadow-xl rounded-3xl p-8 transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
            >
              <div
                className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full ${step.bgColor} text-white text-3xl md:text-4xl mb-6`}
              >
                {`0${step.id}`}
              </div>
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg md:text-xl">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
