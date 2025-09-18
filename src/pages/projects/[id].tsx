import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { projectsData } from "../../utils/career/jobdata";
import MainLayout from "@/src/layouts/MainLayout";

type GalleryImage = {
  src: string;
};

type Project = {
  id: string;
  title: string;
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
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Project Not Found</h1>
        <p className="mt-4 text-gray-600">The requested project does not exist.</p>
      </div>
    );
  }

  return (
    <MainLayout>
    <section className="py-20 bg-gradient-to-br from-[#ee7623] to-[#282461]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        {/* Left Image Section */}
        <div className="w-full lg:w-2/5 space-y-6">
          <div className="space-y-4">
            {project.galleryImages.map((galleryImage, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={galleryImage.src}
                  alt={`${project.title} Gallery Image ${index + 1}`}
                  width={500}
                  height={280}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-3/5 space-y-8">
          <h1 className="text-5xl font-semibold text-gray-800">{project.title}</h1>

          {/* Project Briefing */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-indigo-600">Project Briefing</h2>
            <p className="text-gray-600 mt-4">{project.briefing}</p>
          </div>

          {/* Project Details */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-indigo-600">Project Details</h2>
            <p className="text-gray-600 mt-4">{project.details}</p>
          </div>

          {/* Project Description */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-indigo-600">Project Description</h2>
            <p className="text-gray-600 mt-4">{project.additionalDetails}</p>
          </div>
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
