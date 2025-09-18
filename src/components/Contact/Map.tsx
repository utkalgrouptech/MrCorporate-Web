import React from 'react'

export default function Map() {
  return (
    <section className='w-full h-[70vh] main-container p-6 my-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.9488586684915!2d85.82384800033974!3d20.29794216863871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0bca259%3A0x40a41333187f97c!2sGandhi%20Institute%20of%20Excellent%20Technocrats%2C%20GIET%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1738151701390!5m2!1sen!2sin" className='w-full h-full'  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}


