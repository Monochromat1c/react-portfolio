import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, href: '#home', text: 'Home' },
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
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#2a2943]/95 fixed z-50 backdrop-blur-sm">
      <div className="flex items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="text-[#00dac4]">CD</span>
        </a>
        <span className="ml-2 text-sm text-gray-200">Charles Diestro</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, href, text }) => (
          <li key={id}>
            <a
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="px-4 cursor-pointer capitalize text-gray-200 hover:text-[#00dac4] transition-colors"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden hover:text-[#00dac4] transition-colors"
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
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#2a2943]/98 backdrop-blur-lg">
          {links.map(({ id, href, text }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
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
      )}
    </nav>
  );
};

export default Navbar; 