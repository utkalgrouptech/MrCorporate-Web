import { useState } from "react";
import { cjobData } from "@/src/utils/career/jobdata"; // Import job data
import { breadcrumb_img } from "@/src/assets/About"; // Import the breadcrumb image

export default function CareerOpportunities() {
  // State to handle toggling dropdowns
  const [openJobs, setOpenJobs] = useState<number[]>([]);

  const toggleJob = (index: number) => {
    setOpenJobs((prevOpenJobs) =>
      prevOpenJobs.includes(index)
        ? prevOpenJobs.filter((i) => i !== index)
        : [...prevOpenJobs, index]
    );
  };

  const getButtonClass = (isOpen: boolean) => {
    return isOpen
      ? "bg-orange-500 text-white"
      : "bg-white text-gray-800 hover:bg-orange-400";
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={breadcrumb_img.src}
          alt="Breadcrumb Background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 py-8 bg-gradient-to-t from-black to-transparent">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold capitalize mb-2 md:mb-4">
            Career Opportunities
          </h1>
          <p className="text-white text-lg md:text-xl font-medium capitalize">
            Home . Career Opportunities
          </p>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 bg-gradient-to-br from-[#ee7623] to-[#282461]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Career Opportunities at MrCorporate
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            At MrCorporate, we offer career opportunities in many Facility services. Our services include:
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-6">
          {cjobData.map((job, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                className={`flex justify-between items-center text-xl font-semibold w-full text-left ${getButtonClass(
                  openJobs.includes(index)
                )}`}
                onClick={() => toggleJob(index)}
              >
                {job.title}
                <svg
                  className={`w-5 h-5 transform ${
                    openJobs.includes(index) ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openJobs.includes(index) && (
                <div className="text-gray-600 mt-4">
                  <p>{job.description}</p>
                  {job.details.length > 0 && (
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                      {job.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {job.additionalInfo && <p>{job.additionalInfo}</p>}
                  <a href="#apply" className="text-orange-500 hover:underline">
                    Apply for this Job
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
