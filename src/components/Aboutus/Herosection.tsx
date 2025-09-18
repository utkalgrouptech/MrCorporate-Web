import React from "react";
import { featuresData } from "@/src/utils/home"; 
import { aboutus } from "@/src/assets/home";

const Herosection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-tr from-[#ee7623] to-[#282461]">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-orange-500 font-semibold">We Are MRCORPORATE</p>
            <h2 className="text-4xl font-bold mb-4">About our Company</h2>
            <p className="text-white mb-4">
              MR Corporate Facilities Services is an independent leader in
              delivering integrated facilities management services across India.
              For more than 15 years, MR Corporate has been well acknowledged
              for providing quality services to some of the biggest regional
              names, including leading multinationals.
            </p>
            <p className="text-white">
              Since 2009, the company has expanded its diversified clientele
              through its service offerings across the region. Our teams are
              experienced in delivering single, multi, or total facilities
              management services to clients of all sizes from all market
              sectors. Providing expert operation and management services for
              ports and airports, with a focus on safety, technological
              integration, and efficiency.
            </p>
            <div className="mt-6">
              <p className="text-4xl font-bold mb-4">OUR MISSION</p>
              <h1 className="text-white">To be the leading integrated facilities management service provider across PAN India, by adopting technology and innovation, which satisfies the needs and exceeds the expectations of our clients, business partners, and other stakeholders.</h1>
            </div>
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
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-50"
            >
              {/* Icon with Orange Background */}
              <div className="bg-orange-500 text-white p-4 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
