import React from "react";

const projects = [
  {
    title: "Chat App",
    description: "A real-time chat application built with MERN Stack and Socket.io.",
    techStack: "React, Node.js, Express, MongoDB, Socket.io",
    link: "https://github.com/Arunsaini50/chatApp",
  },
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio showcasing skills and projects.",
    techStack: "React, Tailwind CSS, Vite",
    link: "https://github.com/Arunsaini50/portfolio",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with user authentication and CRUD features.",
    techStack: "React, Node.js, MongoDB",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-60 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <p className="text-sm text-gray-300 mb-3">{project.techStack}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
