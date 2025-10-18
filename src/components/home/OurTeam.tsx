// src/components/TeamSection.jsx
import React from "react";
import { teamData } from "@/src/utils/home";
import { Phone, Email, LinkedIn } from "@mui/icons-material";

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-orange-600">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to delivering exceptional facility management services
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image.src}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                
                {/* Contact Icons */}
                <div className="flex justify-center space-x-4">
                  {member.phone && (
                    <a
                      href={member.phone}
                      className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                    >
                      <Email className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                  >
                    <LinkedIn className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;