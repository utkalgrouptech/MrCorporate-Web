// src/components/AboutCompany.jsx
import React from "react";
import { featuresData } from "@/src/utils/home"; 
import { aboutus } from "@/src/assets/home";

const AboutCompany = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              About MRCORPORATE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Facility Management <span className="text-orange-600">Solutions</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p>
                MR Corporate Facilities Services is an independent leader in delivering 
                integrated facilities management services across India. For more than 
                15 years, we have been trusted by leading multinationals and regional 
                names for excellence in service delivery.
              </p>
              <p>
                Since 2009, we have expanded our diversified clientele through comprehensive 
                service offerings. Our expert teams specialize in single, multi, or total 
                facilities management with a focus on safety, technology, and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src={aboutus.src}
                alt="About MR Corporate"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">15+ Years</div>
              <div className="text-sm">Industry Experience</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;