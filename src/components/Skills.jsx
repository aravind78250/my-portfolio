import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiJsonwebtokens
} from "react-icons/si";

import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython />,
      category: "Backend"
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      category: "Backend"
    },
    {
      name: "REST APIs",
      icon: <FaCode />,
      category: "Backend"
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      category: "Backend"
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      category: "Database"
    },
    {
      name: "React.js",
      icon: <FaReact />,
      category: "Frontend"
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Frontend"
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      category: "Frontend"
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "Frontend"
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Tools"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Tools"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <p>What I Work With</p>

          <h2>
            My <span>Skills</span>
          </h2>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;