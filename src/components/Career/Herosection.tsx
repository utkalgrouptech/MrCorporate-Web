import { sl, slider1,sm } from '@/src/assets/home';
import React from 'react';

const posts = [
  {
    date: 'June 09, 2020',
    title: 'How Facility Management work?',
    author: 'Ashutosh Bag',
    categories: 'Facility',
    summary: 'Facility management (FM) refers to the practice of coordinating and overseeing the various services and functions necessary to ensure that a building or facility operates efficiently, safely, and effectively. It involves managing the physical environment of a building (or multiple buildings) and all the systems, equipment, and services within it. ',
    image: slider1, // Placeholder image for now
  },
  {
    date: 'June 09, 2020',
    title: 'How Effective the Security Management is?',
    author: 'Subhashree Khillar',
    categories: 'Security',
    summary: 'The effectiveness of security management in a facility or organization depends on several factors, including the strategies, systems, personnel, and technologies in place. Effective security management ensures the protection of assets, people, and information, while also mitigating risks and responding to potential threats promptly and efficiently.',
    image: sm, // Placeholder image for now
  },
  {
    date: 'June 09, 2020',
    title: 'What is Payroll Management?',
    author: 'Puja Singh',
    categories: 'Health, Agriculture',
    summary: 'Payroll management refers to the process of managing the compensation of employees within an organization. It involves calculating and distributing employees salaries or wages, ensuring compliance with legal requirements, and maintaining accurate records. Payroll management is essential for any business, as it directly impacts employee satisfaction, company finances, and regulatory compliance.',
    image: sl, // Placeholder image for now
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-[#ee7623] to-[#282461]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={post.image.src}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <div className="absolute top-4 right-4 text-gray-500 text-sm">
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>By {post.author}</span>
                <span>{post.categories}</span>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 block text-center font-semibold"
              >
                Read More +
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            First
          </button>
          <span className="text-gray-700 font-semibold">Page 1 of 2</span>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
