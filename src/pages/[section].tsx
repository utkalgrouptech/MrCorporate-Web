import React from 'react';
import { useRouter } from 'next/router';
import { sectionsData, SectionData } from '../utils/section/sectiondata';
import { breadcrumb_img } from '../assets/About';
import MainLayout from '../layouts/MainLayout';
import { CheckCircleOutline, Download, ArrowBack, Share, CalendarToday, Person, LocationOn } from '@mui/icons-material';
import {  picture12 } from '../assets/home';

const SectionPage: React.FC = () => {
    const router = useRouter();
    const { section } = router.query;

    // Validate section
    if (!section || typeof section !== 'string') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Section Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested service section could not be found.</p>
                    <button
                        onClick={() => router.push('/services')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    // Convert path to match sectionsData keys
    const formattedSection = (section as string).replace(/ /g, '-');
    const sectionData: SectionData | undefined = sectionsData[formattedSection];

    if (!sectionData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested service could not be found.</p>
                    <button
                        onClick={() => router.push('/services')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        View All Services
                    </button>
                </div>
            </div>
        );
    }

    // Split the services from the details content
    const services = sectionData.details
        .split('\n')
        .map((service: string) => service.replace(/^\s*-?\s*/, ''))
        .filter(Boolean);

    const handleDownload = (type: 'pdf' | 'doc') => {
        if (!sectionData.downloadLinks) return; // safety check

        const link = document.createElement('a');
        link.href = sectionData.downloadLinks[type];
        link.download = `${sectionData.title.toLowerCase().replace(/\s+/g, '-')}.${type}`;
        link.click();
    };


    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: sectionData.title,
                    text: sectionData.content.substring(0, 100) + '...',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <MainLayout>
            {/* Breadcrumb Section */}
            <section className="relative bg-gray-900 py-20">
                <div className="absolute inset-0">
                    <img
                        src={breadcrumb_img.src}
                        alt="Service Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
                        <button
                            onClick={() => router.push('/services')}
                            className="flex items-center space-x-1 hover:text-white transition-colors duration-300"
                        >
                            <ArrowBack className="w-4 h-4" />
                            <span>Back to Services</span>
                        </button>
                        <span>/</span>
                        <span className="text-white font-medium">{sectionData.title}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium mb-4">
                                Professional Service
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {sectionData.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                Comprehensive facility management solutions tailored to your business needs
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => handleDownload('pdf')}
                                    className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Download PDF</span>
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="flex items-center space-x-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
                                >
                                    <Share className="w-5 h-5" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl p-2 shadow-2xl">
                                <img
                                    src={sectionData.image.src}
                                    alt={sectionData.title}
                                    className="w-full h-80 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                                <div className="text-gray-600 leading-relaxed space-y-6 text-justify">
                                    {sectionData.content.split('\n\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

{formattedSection === "facility-management" && sectionData.pillars && (
    <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Core <span className="text-orange-600">Pillars</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionData.pillars.map((item, index) => (
                <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
                            {index + 1}
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)}

                            
                            {/* Services Included */}
                            <div className="mt-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {services.map((service: string, index: number) => (
                                        <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                                            <CheckCircleOutline className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

{/* Why Choose Our Integrated Model */}
{formattedSection === "facility-management" &&
  sectionData.modelPoints &&
  sectionData.modelPoints.length > 0 && (
    <div className="mt-12 bg-gray-100 rounded-2xl p-8 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why Choose Our{" "}
        <span className="text-orange-600">
          Integrated Model?
        </span>
      </h2>

      <div className="space-y-6">
        {sectionData.modelPoints.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-green-600 text-3xl font-bold">✓</div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
)}
             {formattedSection === "payroll-management" && (
  <div className="mt-14">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      HR & Payroll <span className="text-orange-600">Management</span>
    </h2>

    <div className="p-6">
      <img
        src={picture12.src}
        alt="Payroll Management"
        className="w-full max-w-lg h-auto mx-auto object-contain"
      />
    </div>
  </div>
)}           

                            {/*sanitation-service Extra Sections */}
{formattedSection === "sanitation-service" && (
  <div className="mt-14 space-y-12">

    {/* Our Approach */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Our <span className="text-orange-600">Approach</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Site Assessment & Risk Mapping",
            desc: "Identification of high-touch and high-risk zones for targeted sanitization."
          },
          {
            title: "Deep Cleaning & Disinfection",
            desc: "Thorough cleaning followed by application of hospital-grade disinfectants."
          },
          {
            title: "Surface & Air Sanitization",
            desc: "Treatment of floors, workstations, common areas, HVAC vents, and airspaces."
          },
          {
            title: "Scheduled & On-Demand Services",
            desc: "Daily, periodic, or emergency sanitization based on client requirements."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="bg-gray-100 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Why <span className="text-orange-600">Choose Us</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Trained and certified hygiene professionals",
          "Use of safe, non-toxic, and compliant disinfectants",
          "Adherence to industry safety and regulatory standards",
          "Quick response and scalable service delivery",
          "Customized solutions for different industries"
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white p-4 rounded-xl"
          >
            <span className="text-green-600 text-xl font-bold">✓</span>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Industries We Serve */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Industries We <span className="text-orange-600">Serve</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {[
          "Corporate Offices & IT Parks",
          "Manufacturing & Industrial Units",
          "Healthcare & Pharmaceuticals",
          "Educational Institutions",
          "Hospitality & Retail",
          "Government & Public Infrastructure"
        ].map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white border border-gray-200 rounded-xl text-center font-medium text-gray-800 hover:border-orange-500 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

  </div>
)}

                            
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Service Details Card */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CalendarToday className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-sm text-gray-500">Availability</p>
                                            <p className="font-medium text-gray-900">24/7 Support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Person className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-sm text-gray-500">Expert Team</p>
                                            <p className="font-medium text-gray-900">Certified Professionals</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <LocationOn className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-sm text-gray-500">Coverage</p>
                                            <p className="font-medium text-gray-900">Pan India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Download Resources */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-orange-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Download Resources</h3>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => handleDownload('pdf')}
                                        className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300 hover:border-orange-500 transition-colors duration-300"
                                    >
                                        <span className="text-gray-700 font-medium">Service Brochure</span>
                                        <Download className="w-5 h-5 text-orange-600" />
                                    </button>
                                    <button
                                        onClick={() => handleDownload('doc')}
                                        className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300 hover:border-orange-500 transition-colors duration-300"
                                    >
                                        <span className="text-gray-700 font-medium">Detailed Proposal</span>
                                        <Download className="w-5 h-5 text-orange-600" />
                                    </button>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gray-900 rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                                <p className="text-gray-300 mb-6">
                                    Contact us for a customized facility management solution
                                </p>
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold"
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Related <span className="text-orange-600">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our other professional facility management services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(sectionsData)
                            .filter(([key]) => key !== formattedSection)
                            .slice(0, 3)
                            .map(([key, service]) => (
                                <div
                                    key={key}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                                    onClick={() => router.push(`/services/${key}`)}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={service.image.src}
                                            alt={service.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-orange-600/20 transition-colors duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 line-clamp-2">
                                            {service.content.substring(0, 100)}...
                                        </p>
                                        <button
  onClick={(e) => {
    e.stopPropagation();
    router.push(`/${key}`);
  }}
  className="mt-4 text-blue-600 font-semibold flex items-center group-hover:underline"
>
  Learn More
  <svg
    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default SectionPage;
