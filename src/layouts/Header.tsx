import React from 'react';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { main_logo } from '../assets/navbar';
import { navArr } from '../utils/navbar';

const Header: React.FC = () => {
    const router = useRouter();

    return (
        <section className="w-full bg-red-200 z-50">
            <div className="main-container flex items-center justify-between h-16 px-4 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={main_logo.src} alt="Main Logo" className="w-auto h-10 sm:h-12 object-cover" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 cursor-pointer">
                    {navArr.map((item) => (
                        <div
                            key={item.id}
                            className="relative group"
                            onClick={() => router.push(`${item.path}`)}
                        >
                            <h2 className="capitalize text-sm sm:text-md lg:text-lg font-bold text-[#282461] hover:text-[#ee7623] transition duration-300 flex items-center gap-1">
                                {item.title}
                                {item.subMenu && <ArrowDropDownIcon />}
                            </h2>
                            {item.subMenu && (
                                <div className="absolute top-full left-0 w-48 sm:w-60 bg-white shadow-md hidden group-hover:block transition-all duration-500 ease-in-out z-50 cursor-pointer">
                                    {item.subMenu.map((subItem) => (
                                        <div
                                            key={subItem.id}
                                            className="capitalize text-xs sm:text-sm lg:text-md font-bold text-black p-2 hover:bg-gray-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                router.push(subItem.path);
                                            }}
                                        >
                                            {subItem.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <button
                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-themeColor text-white font-bold capitalize hover:bg-[#d66a1f] transition duration-300"
                        onClick={() => router.push('/contact')}
                    >
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        className="text-[#282461]"
                        onClick={() => console.log('Toggle Mobile Menu')} // Add functionality here
                    >
                        <span className="text-xl">&#9776;</span> {/* Simple Menu Icon */}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="md:hidden bg-white shadow-md hidden"> {/* Add condition to show/hide */}
                <div className="px-4 py-6">
                    {navArr.map((item) => (
                        <div key={item.id} className="mb-4">
                            <div
                                className="capitalize text-sm font-bold text-[#282461] hover:text-[#ee7623] transition duration-300"
                                onClick={() => router.push(`${item.path}`)}
                            >
                                {item.title}
                            </div>
                            {item.subMenu && (
                                <div className="ml-4 mt-2 space-y-2">
                                    {item.subMenu.map((subItem) => (
                                        <div
                                            key={subItem.id}
                                            className="capitalize text-xs font-bold text-black hover:text-[#ee7623] transition duration-300"
                                            onClick={() => router.push(subItem.path)}
                                        >
                                            {subItem.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={() => router.push('/contact')}
                        className="w-full px-6 py-2 rounded-full bg-themeColor text-white font-bold capitalize hover:bg-[#d66a1f] transition duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
