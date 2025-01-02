const Footer = () => {
  const creationYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear > creationYear 
    ? `${creationYear} - ${currentYear}`
    : creationYear;

  return (
    <footer className="bg-[#2a2943] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {yearDisplay} Charles Manuel Diestro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
