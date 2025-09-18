import React from "react";
import { projectData } from "@/src/utils/home"; // Assuming projectData is imported from utils

const MeetOurTeam: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-[#ee7623] to-[#282461] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div>
            <h2 className="text-orange-500 text-2xl font-semibold text-center">
              What our Clients Say
            </h2>
            <h3 className="text-3xl font-bold text-[#282461] text-center mt-2">
              Client Testimonials
            </h3>
          </div>
        </div>

        {/* Team Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectData.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300 rounded-lg overflow-hidden"
            >
              <img
                src={member.image.src}
                alt={member.name}
                className="w-full h-40 sm:h-48 object-cover mb-4"
              />
              <h3 className="text-lg text-[#282461] font-bold">{member.name}</h3>
              <p className="text-orange-500 text-sm">{member.role}</p>
              {/* Contact Icons */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
