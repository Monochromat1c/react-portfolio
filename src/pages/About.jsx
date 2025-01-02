const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-primary to-tertiary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="text-xl mt-10">
          <p className="mb-4">
            Hello! I'm Charles Manuel Diestro, an aspiring web developer currently in my fourth and final year of pursuing a Bachelor of Science in Information Technology at Filamer Christian University.
          </p>

          <p className="mb-4">
            Based in Cogon, Panay, Capiz, Philippines, I'm passionate about creating web applications that are both functional and aesthetically pleasing. My journey in web development has equipped me with a diverse skill set that includes:
          </p>

          <div className="grid md:grid-cols-2 gap-8 px-12 sm:px-0 py-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">Frontend Development</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>HTML5 & CSS3</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">Backend Development</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>PHP</li>
                <li>Laravel Framework</li>
                <li>C#</li>
                <li>MySQL Database</li>
              </ul>
            </div>
          </div>

          <p className="mb-4">
            I'm constantly learning and staying up-to-date with the latest web development technologies and best practices. My goal is to contribute to meaningful projects that make a positive impact on users' lives.
          </p>

          <p>
            When I'm not coding, I enjoy exploring new technologies and contributing to the developer community. I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 