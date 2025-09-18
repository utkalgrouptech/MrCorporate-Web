import { breadcrumb_img } from '@/src/assets/About'
import React from 'react'

export default function Breadcrumb() {
  return (
    <section className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden'>
      <img
        src={breadcrumb_img.src}
        alt="Breadcrumb Background"
        className='absolute inset-0 w-full h-full object-cover brightness-50'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 py-8 bg-gradient-to-t from-black to-transparent'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold capitalize mb-2 md:mb-4'>
          About Us
        </h1>
        <p className='text-white text-lg md:text-xl font-medium capitalize'>
          Home . About Us
        </p>
      </div>
    </section>
  )
}
