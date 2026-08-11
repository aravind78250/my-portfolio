import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaJava
} from "react-icons/fa";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="section-heading">
          <p>My Professional Journey</p>

          <h2>
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            <motion.div
              className="experience-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="experience-header">

                <div>
                  <h3>
                    Android Developer Virtual Intern
                  </h3>

                  <h4>AICTE</h4>
                </div>

                <span className="experience-date">
                  <FaCalendarAlt />
                  May 2023 – Aug 2023
                </span>

              </div>

              <p className="experience-description">
                Gained practical experience in Android development
                and software development workflows while working
                with Java.
              </p>

              <ul className="experience-points">
                <li>
                  Developed basic Android modules using Java.
                </li>

                <li>
                  Gained practical exposure to Software Development
                  Life Cycle (SDLC).
                </li>

                <li>
                  Worked with debugging and version control workflows.
                </li>
              </ul>

              <div className="experience-tech">
                <span>
                  <FaJava />
                  Java
                </span>

                <span>SDLC</span>
                <span>Debugging</span>
                <span>Version Control</span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;