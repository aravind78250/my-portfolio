import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Get In <span>Touch</span></h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's work together</h3>

            <p>
              I'm always interested in discussing software development,
              projects, and new opportunities. Feel free to reach out.
            </p>

            <div className="contact-details">

              <a href="mailto:aravindhkumar22811@gmail.com">
                <FaEnvelope />
                <span>
                  <small>Email</small>
                  aravindhkumar22811@gmail.com
                </span>
              </a>

              <a href="tel:8838249493">
                <FaPhone />
                <span>
                  <small>Phone</small>
                  8838249493
                </span>
              </a>

              <div className="contact-detail">
                <FaMapMarkerAlt />
                <span>
                  <small>Location</small>
                  Chennai, India
                </span>
              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/aravind78250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/aravindh--kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;