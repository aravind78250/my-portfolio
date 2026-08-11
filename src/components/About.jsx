import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-text">
            <h3>I'm an Aspiring Software Developer</h3>

            <p>
              I have a strong interest in software development, backend
              development, APIs, databases, and full-stack integration.
              I enjoy building practical applications and solving
              real-world problems through technology.
            </p>

            <p>
              My technical experience includes Python, REST APIs, FastAPI,
              JWT, MySQL, React.js, JavaScript, HTML, and CSS.
            </p>
          </div>

          <div className="education">
            <h3>
              <FaGraduationCap /> Education
            </h3>

            <div className="education-card">
              <span>2023 – 2025</span>

              <h4>Master of Computer Applications</h4>

              <p>SRM University, Chennai</p>

              <strong>CGPA: 8.18</strong>
            </div>

            <div className="education-card">
              <span>2020 – 2023</span>

              <h4>Bachelor of Computer Science</h4>

              <p>SRM University, Chennai</p>

              <strong>CGPA: 8.19</strong>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;