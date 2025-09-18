import { breadcrumb_img } from '@/src/assets/About'
import React from 'react'

export default function Breadcrumb() {
  return (
    <section className='w-full h-full relative'>
          <div className='w-full h-full flex flex-col justify-center absolute top-0 bottom-0 right-0 left-0 gap-4 bg-blue-900 bg-opacity-50'>
            <h1 className='text-white text-5xl ml-20 font-bold capitalize'>OUR SERVICE</h1>
            <p className='text-white text-xl ml-20 font-bold capitalize'>Home {`>`} Our Service</p>
          </div>
            <img src={breadcrumb_img.src} alt="" className='w-full h-full'/>
        </section>
  )
}