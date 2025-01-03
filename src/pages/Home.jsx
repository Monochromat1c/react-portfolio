import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiPhp, SiLaravel, SiJavascript, SiBootstrap, SiGithub, SiMysql, SiReact, SiSass } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMapMarkerAlt, FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';
import Footer from '../components/Footer';

const Home = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 className="text-4xl text-[#c66690]" />, progress: 85 },
    { name: 'CSS', icon: <SiCss3 className="text-4xl text-[#56b4ed]" />, progress: 80 },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-[#00dac4]" />, progress: 65 },
    { name: 'React', icon: <SiReact className="text-4xl text-[#61dafb]" />, progress: 75 },
    { name: 'PHP', icon: <SiPhp className="text-4xl text-[#c66690]" />, progress: 75 },
    { name: 'Laravel', icon: <SiLaravel className="text-4xl text-[#c66690]" />, progress: 70 },
    { name: 'Sass', icon: <SiSass className="text-4xl text-[#cc6699]" />, progress: 70 },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-4xl text-[#56b4ed]" />, progress: 80 },
    { name: 'GitHub', icon: <SiGithub className="text-4xl text-[#2a2943]" />, progress: 75 },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-[#56b4ed]" />, progress: 75 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    variableWidth: false,
    centerMode: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
      <section className="relative min-h-screen bg-[#2a2943] overflow-hidden">
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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#2a2943]/10">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Charles Manuel Diestro
          </h1>
          <p className="text-2xl text-[#00dac4] font-medium mb-8 drop-shadow-lg">
            Web Developer & BSIT Student
          </p>
          <p className="text-lg text-white mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            Passionate about creating elegant and functional web solutions.
            Currently focused on full-stack development with expertise in modern
            web technologies and frameworks.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Monochromat1c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00dac4] hover:bg-[#00dac4]/90 text-[#2a2943] font-medium px-8 py-4 rounded-md flex items-center gap-2 transition-colors shadow-lg"
            >
              <FaGithub size={24} />
              GitHub
            </a>
            <a
              href="/contact"
              className="border-2 border-[#00dac4] text-[#00dac4] hover:bg-[#00dac4] hover:text-[#2a2943] font-medium px-8 py-4 rounded-md transition-colors shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <svg 
            className="w-8 h-8 text-[#00dac4] mx-auto bottom-16 relative"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#e6e6f8] relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00dac4]/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#c66690]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#56b4ed]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-[#2a2943]/[0.03] bg-[length:30px_30px]"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-[#00dac4]/20 rounded-lg animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-[#c66690]/20 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-2 border-[#56b4ed]/20 rotate-45 animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2a2943]">About Me</h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <img
                src="/images/self-portrait/self.jpg"
                alt="Charles Manuel Diestro"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#00dac4]"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-[#2a2943]">Charles Manuel Diestro</h3>
              <p className="text-[#c66690] font-medium mb-4 text-center">Web Developer</p>
              <p className="text-gray-600 mb-4 text-center max-w-2xl mx-auto">
                I am a fourth-year BSIT student at Filamer Christian University,
                passionate about creating elegant and functional web solutions.
                My journey in web development has equipped me with both
                technical skills and creative problem-solving abilities.
              </p>
              <div className="relative pl-4 mb-6">
                <FaQuoteLeft className="absolute left-0 top-0 text-[#c66690] text-xl" />
                <p className="text-gray-600 italic pl-6">
                  "Aspiring to create meaningful digital experiences through
                  innovative web development."
                </p>
              </div>
              <div className="text-gray-600 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="text-[#c66690]" />
                  <p>Cogon, Panay, Capiz, 5801, Philippines</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaGraduationCap className="text-[#c66690]" />
                  <p>BSIT - Filamer Christian University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-[#2a2943]">Technical Skills</h3>
            <div className="skills-carousel">
              <Slider {...sliderSettings}>
                {[...skills, ...skills].map((skill, index) => (
                  <div key={index} className="px-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-b-4 border-b-[#00dac4] border-gray-100 h-40 flex flex-col items-center justify-center">
                      {skill.icon}
                      <h4 className="mt-4 font-medium text-[#2a2943]">{skill.name}</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div 
                          className="bg-[#00dac4] h-2.5 rounded-full" 
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#2a2943] animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Projects</h2>
          <p className="text-center text-[#00dac4] mb-12">
            Showcasing my latest web development work
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/stepstyle-project/homepage.png"
                alt="StepStyle Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#2a2943]">StepStyle</h3>
                <p className="text-gray-600 mb-4">
                  A modern and responsive landing page for a shoe store,
                  featuring a clean design and smooth user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00dac4]/10 text-[#00dac4] rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-[#56b4ed]/10 text-[#56b4ed] rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-[#c66690]/10 text-[#c66690] rounded-full text-sm">JavaScript</span>
                </div>
                <a
                  href="https://step-style-eight.vercel.app/"
                  className="text-[#00dac4] hover:text-[#00dac4]/80 font-medium flex items-center gap-2"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-5xl text-[#00dac4] mb-4">+</div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2943]">More Projects Coming Soon</h3>
              <p className="text-gray-600">Stay tuned for future developments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2a2943]">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Let's connect and discuss how we can work together.
          </p>
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00dac4]/10 rounded-full flex items-center justify-center text-[#00dac4]">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">Location</p>
                  <p className="text-gray-600">Cogon, Panay, Capiz, 5801, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#56b4ed]/10 rounded-full flex items-center justify-center text-[#56b4ed]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">Email</p>
                  <a href="mailto:charlesdiestro6@gmail.com" className="text-[#2f7971] hover:text-[#00dac4]">
                    charlesdiestro6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#c66690]/10 rounded-full flex items-center justify-center text-[#c66690]">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">GitHub</p>
                  <a 
                    href="https://github.com/Monochromat1c"
                    className="text-[#2f7971] hover:text-[#00dac4]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Monochromat1c
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-block bg-[#00dac4] hover:bg-[#00dac4]/90 text-white font-medium px-8 py-3 rounded-md transition-colors"
              >
                Send Me a Message
              </Link>
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

export default Home;