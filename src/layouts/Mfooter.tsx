import React from 'react';
import { footer_logo } from '../assets/footer';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about-us", label: "About Us" },
      { href: "/career", label: "Career" },
      { href: "/team", label: "Our Team" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Important",
    links: [
      { href: "/contact", label: "Our Process" },
      { href: "/contact", label: "Appointment" },
      { href: "/contact", label: "FAQ" },
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Terms & Conditions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/contact", label: "Why Choose Us" },
      { href: "/contact", label: "Pricing Plan" },
      { href: "/contact", label: "News & Articles" },
      { href: "/contact", label: "Login" },
      { href: "/contact", label: "Subscribe" },
    ],
  },
  {
    title: "Official Info",
    info: [
      {
        icon: <LocationOnIcon className='text-orange-500' />,
        text: "Head Office: HIG-42, Ekamra Vihar, Jayadev Vihar, Bhubaneswar, Odisha 751015",
      },
      {
        icon: <MailOutlineIcon className='text-orange-500' />,
        text: "Email: info@mrcorporate.in",
      },
      {
        icon: <CallIcon className='text-orange-500' />,
        text: "Phone: +91 8260500785",
      },
    ],
  },
];

export default function Mfooter() {
  return (
    <footer className="bg-gradient-to-br from-[#ee7623] to-[#282461] py-20 relative mb-4">
      {/* Subscription Banner */}
      <div className="absolute inset-x-0 -top-14 flex justify-center w-full">
  <div className="bg-orange-500 text-white rounded-full shadow-lg w-full max-w-4xl py-6 px-8 flex items-center justify-between flex-wrap lg:flex-nowrap">
    <span className="text-lg font-semibold mr-4 mb-4 lg:mb-0">Subscribe for Exclusive Updates!</span>
    <div className="relative flex-grow w-full lg:w-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 border border-gray-300 rounded-full outline-none w-full"
      />
      <button className="absolute right-0 top-0 bottom-0 bg-orange-600 text-white rounded-full px-4 hover:bg-orange-700 transition-colors mt-2 lg:mt-0">
        Subscribe
      </button>
    </div>
  </div>
</div>
      
      {/* Footer Content */}
      <div className="relative mt-24 mx-auto px-4 max-w-screen-xl flex flex-col lg:flex-row">
        {/* Logo and Contact */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0 text-center lg:text-left">
          <img src={footer_logo.src} alt="Logo" className="h-12 w-auto mb-4 mx-auto lg:mx-0" />
          <p className='text-white mb-4'>One Stop Solutions For All Your Facility Management Needs</p>
          <p className='text-white mb-4'>Email us at: <a href="mailto:info@mrcorporate.in" className="text-blue-500 hover:underline">info@mrcorporate.in</a></p>
          <div className='flex justify-center lg:justify-start items-center mb-4'>
            <p className='text-white mr-3'>Follow us:</p>
            <div className='flex gap-4'>
              <Link href="https://www.facebook.com/profile.php?id=61564734578439"><FacebookRoundedIcon className='text-white hover:text-gray-900' /></Link>
              <Link href="https://twitter.com"><TwitterIcon className='text-white hover:text-gray-900' /></Link>
              <Link href="https://pinterest.com"><PinterestIcon className='text-white hover:text-gray-900' /></Link>
              <Link href="https://linkedin.com"><LinkedInIcon className='text-white hover:text-gray-900' /></Link>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="w-full lg:w-3/4 flex flex-wrap justify-between">
          {footerLinks.map((section, index) => (
            <div key={index} className="w-full lg:w-1/4 mb-10 lg:mb-0">
              <h3 className="text-white mb-4 font-bold capitalize">{section.title}</h3>
              {section.links ? (
                section.links.map((link, idx) => (
                  <p key={idx} className='mb-2'>
                    <Link href={link.href} className="text-white hover:text-gray-600">{link.label}</Link>
                  </p>
                ))
              ) : (
                section.info.map((infoItem, idx) => (
                  <div key={idx} className="flex items-start mb-4">
                    {infoItem.icon}
                    <p className="text-white ml-2">{infoItem.text}</p>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
