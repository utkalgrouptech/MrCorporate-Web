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
    title: "Services",
    links: [
      { href: "/services", label: "Facility Management" },
      { href: "/services", label: "Maintenance" },
      { href: "/services", label: "Security Services" },
      { href: "/services", label: "Cleaning Services" },
      { href: "/services", label: "Technical Support" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/why-choose-us", label: "Why Choose Us" },
      { href: "/pricing", label: "Pricing Plan" },
      { href: "/blog", label: "News & Articles" },
      { href: "/login", label: "Client Portal" },
      { href: "/contact", label: "Get Quote" },
    ],
  },
  {
    title: "Contact Info",
    info: [
      {
<<<<<<< HEAD
        icon: <LocationOnIcon className='text-blue-600' />,
        text: "Head Office: Plot No- K5/475,Fourth Floor,Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.",
=======
        icon: <LocationOnIcon className='text-orange-500' />,
        text: "Head Office: Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.",
>>>>>>> 8795af2d38582bb14b7797a2b6e0d4bb1410899d
      },
      {
        icon: <MailOutlineIcon className='text-blue-600' />,
        text: "Email: info@mrcorporate.in",
      },
      {
        icon: <CallIcon className='text-blue-600' />,
        text: "Phone: +91 8260500785",
      },
    ],
  },
];

export default function Mfooter() {
  return (
    <footer className="bg-amber-50 py-20 relative border-t border-amber-200">
      {/* Subscription Banner */}
      <div className="absolute inset-x-0 -top-8 flex justify-center w-full px-4">
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg w-full max-w-4xl py-6 px-8 flex flex-col lg:flex-row items-center justify-between border border-gray-200">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-gray-600">Get the latest facility management insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              />
            </div>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold whitespace-nowrap shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="mt-24 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="xl:col-span-2">
            <div className="mb-6">
              <img src={footer_logo.src} alt="MR Corporate Logo" className="h-12 w-auto mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                One Stop Solutions For All Your Facility Management Needs. 
                Professional, reliable, and comprehensive facility services 
                tailored to your business requirements.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MailOutlineIcon className="text-blue-600 mr-3" />
                <a 
                  href="mailto:info@mrcorporate.in" 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  info@mrcorporate.in
                </a>
              </div>
              <div className="flex items-center">
                <CallIcon className="text-blue-600 mr-3" />
                <a 
                  href="tel:+918260500785" 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  +91 8260500785
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-gray-700 font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <Link 
                  href="https://www.facebook.com/profile.php?id=61564734578439"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                >
                  <FacebookRoundedIcon className='text-blue-600 hover:text-blue-700' />
                </Link>
                <Link 
                  href="https://twitter.com"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                >
                  <TwitterIcon className='text-blue-500 hover:text-blue-600' />
                </Link>
                <Link 
                  href="https://pinterest.com"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                >
                  <PinterestIcon className='text-red-600 hover:text-red-700' />
                </Link>
                <Link 
                  href="https://linkedin.com"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                >
                  <LinkedInIcon className='text-blue-700 hover:text-blue-800' />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="xl:col-span-1">
              <h3 className="text-gray-900 font-bold text-lg mb-6 pb-2 border-b border-amber-200">
                {section.title}
              </h3>
              {section.links ? (
                <div className="space-y-3">
                  {section.links.map((link, idx) => (
                    <div key={idx}>
                      <Link 
                        href={link.href} 
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 block py-1"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {section.info.map((infoItem, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        {infoItem.icon}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {infoItem.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 lg:mb-0">
              © {new Date().getFullYear()} MR Corporate Facilities Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}