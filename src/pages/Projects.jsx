import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
      {
          id: 1,
          title: "StepStyle",
          description:
              "A modern and responsive landing page for a shoe store, featuring a clean design and smooth user experience. The project showcases the latest trends in web design and responsive development.",
          tech: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
          liveLink: "https://step-style-eight.vercel.app/",
          githubLink: "https://github.com/Monochromat1c/StepStyle",
          image: "/images/stepstyle-project/homepage.png",
          features: [
              "Responsive design for all devices",
              "Modern UI/UX principles",
              "Interactive elements",
              "Optimized performance",
          ],
      },
      {
          id: 2,
          title: "Portfolio Website",
          description:
              "My personal portfolio website built with React and TailwindCSS. Features a modern design, smooth animations, and responsive layout.",
          tech: ["React", "TailwindCSS", "JavaScript", "EmailJS"],
          liveLink: "https://charles-manuel-diestro.vercel.app/",
          githubLink: "https://github.com/Monochromat1c/react-portfolio",
          image: "/images/portfolio/portfolio.png",
          features: [
              "Responsive design",
              "Dark mode support",
              "Smooth animations",
              "Contact form integration",
          ],
      },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#2a2943] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070" 
            alt="Background" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2943] via-[#2a2943]/95 to-[#2a2943]"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00dac4]/20 rounded-full filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#c66690]/20 rounded-full filter blur-xl animate-blob [animation-delay:2s]"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#56b4ed]/20 rounded-full filter blur-xl animate-blob [animation-delay:4s]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-[#00dac4] font-medium mb-4 max-w-2xl">
            Showcasing my journey through web development with projects that demonstrate my skills and passion for creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-[#e6e6f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2943] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#00dac4]/90 hover:bg-[#00dac4] p-2 rounded-full"
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#00dac4]/90 hover:bg-[#00dac4] p-2 rounded-full"
                          >
                            <FaExternalLinkAlt className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2a2943] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#2a2943] mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#00dac4]/10 text-[#00dac4] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
              <div className="text-5xl text-[#00dac4] mb-4">+</div>
              <h3 className="text-2xl font-bold mb-4 text-[#2a2943]">More Projects Coming Soon</h3>
              <p className="text-gray-600">
                I'm constantly working on new projects and exploring different technologies.
                Stay tuned for more exciting developments!
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects; 