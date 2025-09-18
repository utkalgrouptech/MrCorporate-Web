import React from 'react';

export default function ServiceCard({ item }: any) {
  return (
    <section
      className='
        w-full flex flex-col main-container items-start justify-start gap-6 p-6 
        rounded-lg bg-white relative overflow-hidden group 
        transition-all duration-500 ease-in-out'
    >
      {/* Blue Stain in the Bottom Right */}
      <div
        className='
          absolute bottom-[-70px] right-[-60px] w-[150px] h-[150px] bg-[#282461] rounded-full 
          pointer-events-none transition-transform duration-500 
          ease-in-out transform scale-100 group-hover:scale-[10]'
      ></div>

      {/* Card Background Overlay for Hover Effect */}
      <div
        className='
          absolute inset-0 bg-[#ee7623] z-0 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500'
      ></div>

      {/* Card Content */}
      <div className='relative z-10'>
        <img
          src={item.image.src}
          alt=""
          className='w-full h-52 rounded-lg object-cover'
        />
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          <h1
            className='
              text-2xl font-bold text-blue-950 group-hover:text-white 
              tracking-wide capitalize transition-colors duration-500'
          >
            {item.title}
          </h1>
          <p
            className='
              text-gray-600 group-hover:text-white 
              tracking-wide transition-colors duration-500'
          >
            {item.content}   
          </p>
          <button
            className='
              text-blue-950 group-hover:text-white 
              text-lg transition-colors duration-500'
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
