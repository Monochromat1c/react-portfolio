import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, href: '#', text: 'Home' },
    { id: 2, href: '#about', text: 'About' },
    { id: 3, href: '#projects', text: 'Projects' },
    { id: 4, href: '#contact', text: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <div className="bg-[#2a2943]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold">
                <span className="text-[#00dac4]">CD</span>
              </a>
              <span className="ml-2 text-sm text-gray-200">Charles Diestro</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {links.map(({ id, href, text }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    className="text-gray-200 hover:text-[#00dac4] transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNav(!nav)}
              className="md:hidden text-gray-200 hover:text-[#00dac4] transition-colors focus:outline-none"
            >
              {nav ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#2a2943] transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-[#2a2943] to-[#2a2943]/95">
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {links.map(({ id, href, text }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="text-2xl text-gray-200 hover:text-[#00dac4] transition-colors"
              >
                {text}
              </a>
            ))}
          </div>
          <div className="p-4">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Monochromat1c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00dac4] hover:text-[#00dac4]/80 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-center text-sm text-gray-400">
              © 2024 Charles Manuel Diestro
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 