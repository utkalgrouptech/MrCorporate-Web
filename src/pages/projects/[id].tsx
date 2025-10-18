import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "../../utils/career/jobdata";
import MainLayout from "@/src/layouts/MainLayout";
import { 
  ArrowBack, 
  Share, 
  Download, 
  CalendarToday, 
  LocationOn,
  CheckCircle,
  PlayArrow,
  Pause
} from "@mui/icons-material";

type GalleryImage = {
  src: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: { src: string };
  galleryImages: GalleryImage[];
  briefing: string;
  details: string;
  additionalDetails: string;
};

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The requested project could not be found.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Project link copied to clipboard!');
    }
  };

  const startSlideshow = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % project.galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  };

  const stopSlideshow = () => {
    setIsPlaying(false);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-1 hover:text-white transition-colors duration-300"
            >
              <ArrowBack className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>
            <span>/</span>
            <span className="text-white font-medium">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
                >
                  <Share className="w-5 h-5" />
                  <span>Share Project</span>
                </button>
                <button className="flex items-center space-x-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  <Download className="w-5 h-5" />
                  <span>Download Case Study</span>
                </button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery Section */}
              <div className="mb-12">
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-96 mb-4">
                  <Image
                    src={project.galleryImages[selectedImage].src}
                    alt={`${project.title} - Image ${selectedImage + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button 
                      onClick={isPlaying ? stopSlideshow : startSlideshow}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors duration-300"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <PlayArrow className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-4">
                  {project.galleryImages.map((galleryImage, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedImage(index);
                        setIsPlaying(false);
                      }}
                      className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={galleryImage.src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-12">
                {/* Project Briefing */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {project.briefing.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {project.details.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Advanced Technology Integration",
                      "24/7 Monitoring & Support",
                      "Eco-Friendly Solutions",
                      "Customized Service Plans",
                      "Certified Professionals",
                      "Compliance Management"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {project.additionalDetails.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CalendarToday className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">Ongoing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LocationOn className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">Pan India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">₹</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Budget Range</p>
                      <p className="font-medium text-gray-900">Custom Quote</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Included */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services Included</h3>
                <div className="space-y-3">
                  {[
                    "Facility Management",
                    "Maintenance Services",
                    "Technical Support",
                    "Quality Assurance",
                    "Client Training"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Interested in This Solution?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Get a customized proposal for your facility management needs
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold mb-3">
                  Request Proposal
                </button>
                <button className="w-full bg-transparent border border-white text-white py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>

              {/* Download Resources */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Resources</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">Case Study PDF</span>
                    <Download className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">Service Brochure</span>
                    <Download className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore more of our successful facility management projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <div 
                  key={relatedProject.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  onClick={() => window.location.href = `/projects/${relatedProject.id}`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedProject.image.src}
                      alt={relatedProject.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {relatedProject.description}
                    </p>
                    <button className="text-blue-600 font-semibold flex items-center group-hover:underline">
                      View Case Study
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
}

// Dynamic Routes
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: false };
};

// Fetch Project Data
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};