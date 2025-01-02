const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "StepStyle",
      description: "A modern landing page for a shoe store, featuring a clean and responsive design.",
      tech: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      link: "#", // Add your project link here
      image: "/stepstyle-preview.jpg" // Add your project screenshot here
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-primary to-tertiary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech, link, image }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 