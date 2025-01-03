import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const links = [
    { id: 1, href: '#', text: 'Home', path: '/' },
    { id: 2, href: '/about', text: 'About', path: '/about' },
    { id: 3, href: '#projects', text: 'Projects', path: '/#projects' },
    { id: 4, href: '/contact', text: 'Contact', path: '/contact' },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(location.pathname);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home';
      let maxVisibility = 0;

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      sections.forEach(sectionId => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = sectionId === 'home' ? '' : sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname]);

  const handleClick = (e, link) => {
    if (link.href.startsWith('#')) {
      e.preventDefault();
      if (isHomePage) {
        if (link.href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        window.location.href = link.path;
      }
    }
    setNav(false);
  };

  const isActive = (link) => {
    if (!isHomePage && link.href === '#') {
      return location.pathname === '/';
    }
    if (link.href === '#') {
      return isHomePage && (activeSection === '' || window.scrollY < 100);
    }
    if (link.href.startsWith('#')) {
      return isHomePage && activeSection === link.href.slice(1);
    }
    return location.pathname === link.href;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <div className="bg-[#2a2943]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-[#00dac4]">CD</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <li key={link.id}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link)}
                      className={`text-gray-200 hover:text-[#00dac4] transition-colors relative ${
                        isActive(link) ? 'text-[#00dac4]' : ''
                      }`}
                    >
                      {link.text}
                      {isActive(link) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00dac4] rounded-full"></span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-gray-200 hover:text-[#00dac4] transition-colors relative ${
                        isActive(link) ? 'text-[#00dac4]' : ''
                      }`}
                      onClick={() => setNav(false)}
                    >
                      {link.text}
                      {isActive(link) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00dac4] rounded-full"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setNav(!nav);
                  // Toggle body scroll
                  document.body.style.overflow = !nav ? 'hidden' : 'auto';
                }}
                className="text-gray-200 hover:text-[#00dac4] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {nav ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? 'translate-x-0' : '-translate-x-full'
          } md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#2a2943] backdrop-blur-sm transform transition-transform duration-300 ease-in-out flex flex-col overflow-hidden`}
        >
          <div className="flex flex-col h-full">
            <ul className="flex-1 flex flex-col items-center justify-center space-y-8">
              {links.map((link) => (
                <li key={link.id}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleClick(e, link);
                        document.body.style.overflow = 'auto';
                      }}
                      className={`text-gray-200 hover:text-[#00dac4] transition-colors text-lg relative ${
                        isActive(link) ? 'text-[#00dac4]' : ''
                      }`}
                    >
                      {link.text}
                      {isActive(link) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00dac4] rounded-full"></span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-gray-200 hover:text-[#00dac4] transition-colors text-lg relative ${
                        isActive(link) ? 'text-[#00dac4]' : ''
                      }`}
                      onClick={() => {
                        setNav(false);
                        document.body.style.overflow = 'auto';
                      }}
                    >
                      {link.text}
                      {isActive(link) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00dac4] rounded-full"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Footer */}
            <div className="p-8 mt-auto">
              <div className="flex justify-center space-x-6 mb-4">
                <a
                  href="https://github.com/Monochromat1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00dac4] hover:text-[#00dac4]/80 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="text-center text-sm text-gray-400">
                © 2024 Charles Manuel Diestro
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 