import { img_2, img_3, img_4 } from '@/src/assets/About';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sanjit Kissan",
    title: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an amazing experience! They helped us streamline our processes and improve our product tremendously.",
    image: img_3, // Replace with actual image path
  },
  {
    id: 2,
    name: "Asutosh Bag",
    title: "Marketing Manager, GreenTech",
    testimonial: "Fantastic service and support throughout the project. They listened to our needs and delivered exactly what we wanted.",
    image: img_2, // Replace with actual image path
  },
  {
    id: 3,
    name: "Malaya Kumar Rath",
    title: "CTO, Innovate Corp",
    testimonial: "A great team to collaborate with! Their attention to detail and professionalism was evident throughout our project.",
    image:img_4 , // Replace with actual image path
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-tr from-[#ee7623] to-[#282461] py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-themeColor font-bold text-3xl md:text-4xl lg:text-5xl capitalize mb-6">
          Clients Speaks
        </h1>
        <h4 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-semibold capitalize mb-16">
          Our Testimonials
        </h4>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-xl bg-white shadow-lg hover:scale-105 transform transition-all ease-in-out hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonial.image.src}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-fit shadow-lg"
                />
              </div>
              <p className="text-xl text-blue-950 italic mb-4">{testimonial.testimonial}</p>
              <div className="text-lg font-semibold text-blue-800">{testimonial.name}</div>
              <div className="text-md text-gray-500">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
