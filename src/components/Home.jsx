import React from "react";
import { TypeAnimation } from "react-type-animation";
import bgImg from "../assets/bg.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg text-center max-w-2xl w-full">
        <TypeAnimation
          sequence={[
            "Hi, I’m Arun Saini 👋",
            2000,
            "Full Stack Developer 💻",
            2000,
            "React | Node | MongoDB 🚀",
            2000,
          ]}
          wrapper="h1"
          className="text-3xl md:text-5xl font-bold mb-6"
          repeat={Infinity}
        />

        <p className="text-base md:text-lg mb-6">
          I craft modern, responsive, and high-performance web apps using the
          MERN stack. Passionate about building beautiful user experiences.
        </p>

        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Home;
