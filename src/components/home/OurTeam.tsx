import React from "react";
import { teamData } from "@/src/utils/home";
import { Phone, Email } from "@mui/icons-material";

const MeetOurTeam: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-[#ee7623] to-[#282461] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-orange-500 text-2xl font-semibold">Insights & Stories</p>
            <h2 className="text-4xl font-bold text-[#282461]">Meet Our Team</h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image.src}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-orange-500 text-sm">{member.role}</p>
              {/* Contact Icons */}
              <div className="flex space-x-4 mt-4">
                {member.phone && (
                  <a
                    href={member.phone}
                    className="text-gray-600 hover:text-orange-500"
                  >
                    <Phone />
                  </a>
                )}
                {member.email && (
                  <a
                    href={member.email}
                    className="text-gray-600 hover:text-orange-500"
                  >
                    <Email />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
