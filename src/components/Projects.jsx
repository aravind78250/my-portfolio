import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaDatabase,
  FaReact
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiStreamlit,
  SiJavascript,
  
} from "react-icons/si";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AI Personal Assistant Dashboard",

      description:
        "A modular AI personal assistant dashboard with secure authentication, RESTful backend services, and features for translation, chat, reminders, and notes.",

      technologies: [
        {
          name: "Python",
          icon: <FaPython />
        },
        {
          name: "FastAPI",
          icon: <SiFastapi />
        },
        {
          name: "JWT",
          icon: null
        },
        {
          name: "MySQL",
          icon: <SiMysql />
        }
      ],

      github: null,

      demo: null
    },

    {
      title: "Contract Analysis & Risk Assessment Bot",

      description:
        "A contract analysis system designed to identify legal risks in English and Hindi contracts, calculate a weighted risk score, and generate plain-language explanations and PDF reports.",

      technologies: [
        {
          name: "Python",
          icon: <FaPython />
        },
        {
          name: "Streamlit",
          icon: <SiStreamlit />
        },
        {
          name: "SQL",
          icon: <FaDatabase />
        }
      ],

      github:
        "https://github.com/aravind78250/contract-risk-analyzer",

      demo:
        "https://contract-risk-analyzer-bot.streamlit.app/"
    },

    {
      title: "Personal Portfolio",

      description:
        "A modern responsive personal portfolio website showcasing my skills, projects, education, experience, certifications, and contact information.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />
        },
        {
          name: "CSS3",
          icon: null
        }
      ],

      github:
        "https://github.com/aravind78250/my-portfolio",

      demo:
        "https://my-portfolio-gamma-lyart-24.vercel.app/"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-heading">

          <p>What I've Built</p>

          <h2>
            My <span>Projects</span>
          </h2>

        </div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">

                {project.technologies.map(
                  (tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="technology"
                    >

                      {tech.icon && (
                        <span className="technology-icon">
                          {tech.icon}
                        </span>
                      )}

                      {tech.name}

                    </span>

                  )
                )}

              </div>

              <div className="project-links">

                {/* GitHub button */}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {/* Live Demo button */}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;
