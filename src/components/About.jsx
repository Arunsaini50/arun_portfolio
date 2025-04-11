import React from "react";
import { FaUserGraduate, FaLaptopCode, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">About Me</h2>

        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl space-y-6">
          <p className="text-lg leading-relaxed">
            👋 Hi, I'm <span className="font-semibold text-blue-400">Arun Saini</span>, a passionate Full Stack Developer focused on building responsive and user-friendly web applications using the MERN stack. I love turning ideas into real-world products with beautiful UI and clean code.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaUserGraduate size={36} className="text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold mb-1">Education</h3>
              <p>B.Tech in Computer Science<br />Kanpur institute of technology, 2024</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaLaptopCode size={36} className="text-green-400 mb-3" />
              <h3 className="text-xl font-semibold mb-1">Tech Stack</h3>
              <p>MERN (MongoDB, Express, React, Node.js), Tailwind CSS, Git, REST APIs</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaAward size={36} className="text-red-400 mb-3" />
              <h3 className="text-xl font-semibold mb-1">Goals</h3>
              <p>To build scalable full-stack apps, contribute to open source, and join a dynamic dev team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
