import React from "react";
import { featuresData } from "@/src/utils/home"; 
import { aboutus } from "@/src/assets/home";

const AboutCompany: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-t from-[#ee7623] to-[#282461]">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-orange-500 font-semibold">We Are MRCORPORATE</p>
            <h2 className="text-4xl font-bold mb-4">About our Company</h2>
            <p className="text-red-100 mb-4">
              MR Corporate Facilities Services is an independent leader in
              delivering integrated facilities management services across India.
              For more than 15 years, MR Corporate has been well acknowledged
              for providing quality services to some of the biggest regional
              names, including leading multinationals.
            </p>
            <p className="text-amber-100">
              Since 2009, the company has expanded its diversified clientele
              through its service offerings across the region. Our teams are
              experienced in delivering single, multi, or total facilities
              management services to clients of all sizes from all market
              sectors. Providing expert operation and management services for
              ports and airports, with a focus on safety, technological
              integration, and efficiency.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutus.src} // Replace with an actual image URL
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
  {featuresData.map((feature, index) => (
    <div
      key={index}
      className="
        relative flex items-start p-6 bg-white rounded-lg shadow-lg 
        overflow-hidden group transition-all duration-500 ease-in-out"
    >
      {/* Blue Stain in the Bottom Right */}
      <div
        className="
          absolute bottom-[-100px] right-[-100px] w-[150px] h-[150px] 
          bg-[#282461] rounded-full pointer-events-none 
          transition-transform duration-500 ease-in-out transform 
          scale-100 group-hover:scale-[10]"
      ></div>

      {/* Card Background Overlay for Hover Effect */}
      <div
        className="
          absolute inset-0 bg-[#ee7623] z-0 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
      ></div>

      {/* Card Content */}
      <div className="relative z-10 flex items-start space-x-4">
        {/* Icon with Orange Background */}
        <div
          className="
            bg-orange-500 text-white p-4 rounded-full 
            flex items-center justify-center transition-transform duration-500 
            ease-in-out group-hover:scale-110"
        >
          {feature.icon}
        </div>
        <div>
          <h3
            className="
              text-lg font-bold mb-2 text-gray-800 group-hover:text-white 
              transition-colors duration-500"
          >
            {feature.title}
          </h3>
          <p
            className="
              text-gray-600 group-hover:text-white 
              transition-colors duration-500"
          >
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
