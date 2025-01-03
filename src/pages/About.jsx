import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaUserTie, FaCertificate } from 'react-icons/fa';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <div className="w-full">
          {/* Hero Section */}
          <section className="relative pt-[80px] bg-[#2a2943] overflow-hidden">
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
                  <h1 className="text-4xl sm:text-6xl font-bold text-[#00dac4] mb-6">
                      About Me
                  </h1>
                  <p className="text-xl text-white font-medium mb-4">
                      Passionate Web Developer & Tech Enthusiast
                  </p>
              </div>
          </section>

          {/* Personal Info Section */}
          <section className="py-20 bg-[#e6e6f8] relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="max-w-6xl mx-auto px-4 relative">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                          <h2 className="text-3xl font-bold text-[#2a2943] mb-6">
                              Personal Journey
                          </h2>
                          <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-[#00dac4]/10 rounded-lg flex items-center justify-center">
                                      <FaUserTie className="text-2xl text-[#00dac4]" />
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-semibold text-[#2a2943]">
                                          Charles Manuel Diestro
                                      </h3>
                                      <p className="text-gray-600">
                                          Full Stack Web Developer
                                      </p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-[#c66690]/10 rounded-lg flex items-center justify-center">
                                      <FaMapMarkerAlt className="text-2xl text-[#c66690]" />
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-semibold text-[#2a2943]">
                                          Location
                                      </h3>
                                      <p className="text-gray-600">
                                          Cogon, Panay, Capiz, Philippines
                                      </p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-[#56b4ed]/10 rounded-lg flex items-center justify-center">
                                      <FaGraduationCap className="text-2xl text-[#56b4ed]" />
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-semibold text-[#2a2943]">
                                          Education
                                      </h3>
                                      <p className="text-gray-600">
                                          BS Information Technology
                                      </p>
                                      <p className="text-gray-500">
                                          Filamer Christian University
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="relative">
                          <div className="bg-white rounded-lg p-8 shadow-xl relative z-10">
                              <h3 className="text-2xl font-bold text-[#2a2943] mb-6">
                                  Professional Summary
                              </h3>
                              <p className="text-gray-600 mb-4">
                                  As a fourth-year BSIT student, I've developed
                                  a strong foundation in both front-end and
                                  back-end development. My journey in web
                                  development has been driven by a passion for
                                  creating intuitive and efficient digital
                                  solutions.
                              </p>
                              <p className="text-gray-600">
                                  I specialize in modern web technologies and
                                  frameworks, constantly staying updated with
                                  the latest industry trends and best practices.
                              </p>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-full h-full bg-[#00dac4]/10 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Skills & Expertise Section */}
          <section className="py-20 bg-[#2a2943] relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="max-w-6xl mx-auto px-4 relative">
                  <h2 className="text-3xl font-bold text-center text-white mb-12">
                      Skills & Expertise
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Frontend Development */}
                      <div className="bg-white rounded-lg p-6 shadow-xl">
                          <div className="w-12 h-12 bg-[#00dac4]/10 rounded-lg flex items-center justify-center mb-4">
                              <FaLaptopCode className="text-2xl text-[#00dac4]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-4">
                              Frontend Development
                          </h3>
                          <ul className="space-y-2 text-gray-600">
                              <li>• HTML5 & CSS3</li>
                              <li>• JavaScript (ES6+)</li>
                              <li>• React.js</li>
                              <li>• Tailwind CSS</li>
                              <li>• Bootstrap</li>
                              <li>• Responsive Design</li>
                          </ul>
                      </div>

                      {/* Backend Development */}
                      <div className="bg-white rounded-lg p-6 shadow-xl">
                          <div className="w-12 h-12 bg-[#c66690]/10 rounded-lg flex items-center justify-center mb-4">
                              <FaLaptopCode className="text-2xl text-[#c66690]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-4">
                              Backend Development
                          </h3>
                          <ul className="space-y-2 text-gray-600">
                              <li>• PHP</li>
                              <li>• Laravel Framework</li>
                              <li>• RESTful APIs</li>
                              <li>• MySQL</li>
                              <li>• Database Design</li>
                              <li>• Server Management</li>
                          </ul>
                      </div>

                      {/* Additional Skills */}
                      <div className="bg-white rounded-lg p-6 shadow-xl">
                          <div className="w-12 h-12 bg-[#56b4ed]/10 rounded-lg flex items-center justify-center mb-4">
                              <FaCertificate className="text-2xl text-[#56b4ed]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-4">
                              Additional Skills
                          </h3>
                          <ul className="space-y-2 text-gray-600">
                              <li>• Version Control (Git)</li>
                              <li>• UI/UX Design Principles</li>
                              <li>• Problem Solving</li>
                              <li>• Team Collaboration</li>
                              <li>• Project Management</li>
                              <li>• Technical Documentation</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

          {/* Education & Goals Section */}
          <section className="py-20 bg-[#e6e6f8] relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12">
                      {/* Education Timeline */}
                      <div>
                          <h2 className="text-3xl font-bold text-[#2a2943] mb-8">
                              Education
                          </h2>
                          <div className="space-y-8">
                              <div className="relative pl-8 border-l-2 border-[#00dac4]">
                                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#00dac4] rounded-full"></div>
                                  <h3 className="text-xl font-semibold text-[#2a2943]">
                                      BS Information Technology
                                  </h3>
                                  <p className="text-[#00dac4]">
                                      2021 - Present
                                  </p>
                                  <p className="text-gray-600">
                                      Filamer Christian University
                                  </p>
                                  <p className="text-gray-500 mt-2">
                                      Focusing on web development and software
                                      engineering principles.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Future Goals */}
                      <div>
                          <h2 className="text-3xl font-bold text-[#2a2943] mb-8">
                              Future Goals
                          </h2>
                          <div className="bg-white rounded-lg p-6 shadow-xl">
                              <ul className="space-y-4 text-gray-600">
                                  <li className="flex items-start gap-3">
                                      <div className="w-6 h-6 bg-[#00dac4]/10 rounded-full flex items-center justify-center mt-1">
                                          <div className="w-2 h-2 bg-[#00dac4] rounded-full"></div>
                                      </div>
                                      <p>
                                          Master advanced web development
                                          frameworks and technologies
                                      </p>
                                  </li>
                                  <li className="flex items-start gap-3">
                                      <div className="w-6 h-6 bg-[#c66690]/10 rounded-full flex items-center justify-center mt-1">
                                          <div className="w-2 h-2 bg-[#c66690] rounded-full"></div>
                                      </div>
                                      <p>
                                          Contribute to open-source projects and
                                          the developer community
                                      </p>
                                  </li>
                                  <li className="flex items-start gap-3">
                                      <div className="w-6 h-6 bg-[#56b4ed]/10 rounded-full flex items-center justify-center mt-1">
                                          <div className="w-2 h-2 bg-[#56b4ed] rounded-full"></div>
                                      </div>
                                      <p>
                                          Develop innovative web solutions that
                                          make a positive impact
                                      </p>
                                  </li>
                                  <li className="flex items-start gap-3">
                                      <div className="w-6 h-6 bg-[#00dac4]/10 rounded-full flex items-center justify-center mt-1">
                                          <div className="w-2 h-2 bg-[#00dac4] rounded-full"></div>
                                      </div>
                                      <p>
                                          Continue learning and staying updated
                                          with industry trends
                                      </p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <style jsx>{`
              .animate-on-scroll {
                  transform: translateY(50px);
                  opacity: 0;
                  transition: all 0.7s ease-out;
              }

              .show-section {
                  transform: translateY(0) !important;
                  opacity: 1 !important;
              }
          `}</style>
      </div>
  );
};

export default About; 