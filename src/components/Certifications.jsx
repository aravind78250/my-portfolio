import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Python Programming",
      issuer: "Meta"
    },
    {
      title: "SQL & Relational Databases",
      issuer: "IBM"
    }
  ];

  return (
    <section
      className="certifications"
      id="certifications"
    >
      <div className="certifications-container">

        <div className="section-heading">
          <p>My Achievements</p>

          <h2>
            Certifications
          </h2>
        </div>

        <motion.div
          className="certifications-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {certifications.map((certificate, index) => (
            <motion.div
              className="certificate-card"
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <div>
                <h3>{certificate.title}</h3>

                <p>
                  Issued by {certificate.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;