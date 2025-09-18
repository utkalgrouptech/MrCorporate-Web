import { contactArr } from '@/src/utils/contact';
import React from 'react';

export default function Herosection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#ee7623] to-[#282461]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold text-white mb-12">
          Contact Us Anytime
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contactArr.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Decorative Background Circle */}
              <div className="absolute -top-8 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-full text-white text-3xl ${item.bgcolor}`}
                >
                  {item.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="mt-10 text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              {/* Content */}
              <p className="text-gray-600 text-center">{item.cont}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
