import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const creationYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear > creationYear 
    ? `${creationYear} - ${currentYear}`
    : creationYear;

  const socialLinks = [
      {
          id: 1,
          icon: <FaGithub size={20} />,
          href: "https://github.com/Monochromat1c",
          label: "GitHub",
      },
      {
          id: 2,
          icon: <FaLinkedin size={20} />,
          href: "https://www.linkedin.com/in/charles-diestro-873802188",
          label: "LinkedIn",
      },
      {
          id: 3,
          icon: <FaEnvelope size={20} />,
          href: "mailto:charlesdiestro6@gmail.com",
          label: "Email",
      },
  ];

  return (
    <footer className="bg-[#2a2943] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300">
              A passionate full-stack developer focused on creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00dac4] transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Built With</h3>
            <p className="text-gray-300">
              React.js • Tailwind CSS • Vite
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">&copy; {yearDisplay} Charles Manuel Diestro. All rights reserved.</p>
          <p>Crafted with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
