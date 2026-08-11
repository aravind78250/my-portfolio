import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown
} from "react-icons/fa";

import profileImage from "../assets/profile.jpeg";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Aravindhkumar <span>P</span>
          </h1>

          <h2>
            Aspiring Software Developer
          </h2>

          <p className="hero-description">
            I build scalable applications and RESTful APIs
            using Python, FastAPI, React, and SQL. I enjoy
            solving real-world problems and continuously
            learning new technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/aravind78250"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aravindh--kumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>


        {/* RIGHT SIDE */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
        >

          <div className="hero-photo-glow"></div>

          <div className="hero-image-container">

            <img
              src={profileImage}
              alt="Aravindhkumar"
              className="hero-image"
            />

          </div>

        </motion.div>

      </motion.div>


      {/* SCROLL DOWN */}
      <motion.a
        href="#about"
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.5
        }}
      >
        <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Hero;