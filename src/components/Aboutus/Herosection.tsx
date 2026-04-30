import React from "react";
import { featuresData } from "@/src/utils/home"; 
import {aboutusnew } from "@/src/assets/home";

const Herosection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-tr from-[#ee7623] to-[#282461]">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-orange-500 font-semibold">We Are MRCORPORATE</p>
            <h2 className="text-4xl font-bold mb-4">About our Company</h2>
            <p className="text-white mb-4 text-justify">
            MR Corporate Facilities Services is a leading independent provider
              of integrated facilities management solutions across India. With
              over 15 years of proven expertise, we have earned a strong
              reputation for delivering high-quality services to prominent
              regional players and global multinational organizations.
            </p>
            <p className="text-white text-justify">
             Since our inception in 2009, we have continuously expanded our
              diverse client base by offering customized solutions across
              industries. Our experienced teams specialize in delivering single,
              bundled, and total facilities management services tailored to
              organizations of all sizes and sectors.

              We bring deep domain expertise in managing critical
              infrastructure, including ports and airports, ensuring seamless
              operations with a strong emphasis on safety, technological
              integration, and operational efficiency.

              At MR Corporate, we go beyond conventional facilities
              management—we create exceptional environments where people thrive.
              Our hospitality-driven approach blends operational excellence with
              the finesse, responsiveness, and attention to detail that define
              world-class service standards.

              By leveraging intelligent technologies and data-driven insights,
              we enable healthier, more sustainable, and productive
              environments. Our focus on maximizing ROI ensures optimized asset
              lifecycles, enhanced occupant well-being, and measurable
              contributions toward your business performance and ESG objectives.
            </p>
   <div className="mt-6">
              <h2 className="text-3xl font-bold text-white mb-3">
                OUR VISION
              </h2>

              <p className="text-white text-justify">
                To be the most trusted and innovative partner in integrated
                facilities management, transforming the built environment across
                India into sustainable, high-performing spaces where businesses
                and people thrive.
              </p>
            </div>
            
            <div className="mt-6">
              <p className="text-4xl font-bold mb-4">OUR MISSION</p>
              <h1 className="text-white text-justify">To be the leading integrated facilities management service
                provider across PAN India, by adopting technology and
                innovation, which satisfies the needs and exceeds the
                expectations of our clients, business partners, and other
                stakeholders.</h1>
              <p className="text-white text-justify">Maximizing the lifecycle of our clients assets.</p>
                <p className="text-white text-justify">Ensuring the highest standards of safety and efficiency in critical infrastructure.</p>
                  <p className="text-white text-justify">Enhancing occupant well-being through a hospitality-led service approach.</p>
             <p className="text-white text-justify">Driving measurable ESG outcomes for a more sustainable future.</p>
            </div>
          </div>
          <div className="sticky top-24 self-start">
            <img
              src={aboutusnew.src}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
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
