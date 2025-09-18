import React from "react";
import Link from "next/link";
import { serviceArr } from "@/src/utils/service";

export const Herosection = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[#ee7623] to-[#282461] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 main-container mb-4 py-14">
      {serviceArr.map((item, index) => (
        <div key={index} className="w-full bg-white border border-gray-200 rounded-lg  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] !transition-all !duration-500 !ease-in-out hover:-translate-y-3">
          <Link href="#">
            <div className="w-full h-64 relative group overflow-hidden rounded-t-lg">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-50 !transition-all !duration-500 !ease-in-out"></div>
            <img className=" w-full h-full object-cover cursor-pointer" src={item.img.src}  />
            </div>
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 cursor-pointer">
                {item.title}
              </h5>
            </Link>
            <p className="mb-4 font-normal text-gray-700">
              {item.desc}
            </p>
            <Link href="#" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800">
              Read more
              <svg
                className="rtl:rotate-180 w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              > 
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

