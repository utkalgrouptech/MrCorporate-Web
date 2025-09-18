import React from 'react';
import { useRouter } from 'next/router';
import { sectionsData, SectionData } from '../utils/section/sectiondata'; 
import { breadcrumb_img } from '../assets/About';
import MainLayout from '../layouts/MainLayout';
import { CheckCircleOutline } from '@mui/icons-material';

const SectionPage: React.FC = () => {
    const router = useRouter();
    const { section } = router.query;

    // Validate section
    if (!section || typeof section !== 'string') {
        return <p className="text-center text-red-600 font-bold mt-20">Invalid section</p>;
    }

    // Convert path to match sectionsData keys
    const formattedSection = (section as string).replace(/ /g, '-');
    const sectionData: SectionData | undefined = sectionsData[formattedSection];

    if (!sectionData) {
        return <p className="text-center text-red-600 font-bold mt-20">Section not found</p>;
    }

    // Split the services from the details content
    const services = sectionData.details
        .split('\n')
        .map((service: string) => service.replace(/^\s*-?\s*/, ''))
        .filter(Boolean);

    return (
        <MainLayout>
            {/* Breadcrumb Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-900 overflow-hidden">
                <img 
                    src={breadcrumb_img.src} 
                    alt="Breadcrumb" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 blur-sm" 
                />
                <div className="relative text-center text-white z-10">
                    <h1 className="text-6xl font-extrabold leading-tight mb-4 capitalize animate-fadeInDown">
                        {sectionData.title}
                    </h1>
                    <p className="text-2xl font-light animate-fadeInUp">
                        {sectionData.breadcrumb}
                    </p>
                </div>
            </section>

            {/* Combined Content Section */}
            <section className="relative mt-10 mb-20 p-10 bg-white rounded-xl shadow-2xl mx-auto max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out py-12 space-y-12">
                <div className="text-gray-900 text-lg leading-relaxed mb-6">
                    {sectionData.content}
                </div>

                {/* Dynamic Services Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-gray-50 py-12 px-6">
                    {/* Left Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={sectionData.image.src}
                            alt="Service Image"
                            className="rounded-lg shadow-lg object-cover max-h-[400px]"
                        />
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6 py-14 mb-10">
                        <h2 className="text-3xl font-bold text-indigo-900">
                            Our Services <span className="text-orange-500">Include:</span>
                        </h2>
                        <ul className="space-y-4">
                            {services.map((service: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                                <li key={index} className="flex items-center gap-4 text-lg">
                                    <CheckCircleOutline className="text-indigo-600" />
                                    <span className="text-gray-800">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default SectionPage;
