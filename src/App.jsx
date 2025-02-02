import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaReact,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [content, setcontent] = useState({
    username: "",
    email: "",
    message: "",
  });

  function handlechange(event) {
    let fieldName = event.target.name;
    let valuename = event.target.value;
    console.log(fieldName);
    console.log(valuename);
    setcontent((currData) => {
      currData[fieldName] = valuename;
      return { ...currData };
    });
  }

  function handleSubmit(evt) {
    console.log(content);
    evt.preventDefault();
    setcontent({
      username: "",
      email: "",
      message: "",
    });
  }
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="logo"
        >
          &lt;ShivakumarRao/&gt;
        </motion.h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hero-content"
        >
          <h1>MERN Developer</h1>
          <p>Turning ideas into interactive experiences</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>
            <a href="documents/resume.pdf" download className="btn secondary">
              <FaFileDownload /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <motion.div
            key={1}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <a href="https://delta-project-drw4.onrender.com">
              <div className="project-image project-1"></div>
            </a>

            <h3>Wanderlust {1}</h3>
            <p>Html • Css • Express.js • Node.js •MongoDB </p>
            <div className="project-links">
              <a href="https://github.com/shivakumarRA/DELTA_PROJECT">Demo</a>

              <a href="https://github.com/shivakumarRA/DELTA_PROJECT">Code</a>
            </div>
          </motion.div>

          <motion.div
            key={2}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <div className="project-image"></div>
            <h3>E-Commerce {2}</h3>
            <p>Html • Css • React.js •javaScript </p>
            <div className="project-links">
              <a href="https://github.com/shivakumarRA/MYNTRA">Demo</a>
              <a href="https://github.com/shivakumarRA/MYNTRA">Code</a>
            </div>
          </motion.div>
          {/* 
          <motion.div
            key={3}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <div className="project-image"></div>
            <h3>Project {3}</h3>
            <p>Html • Css • Express.js • Node.js •MongoDB </p>
            <div className="project-links">
              <a href="#">Demo</a>
              <a href="#">Code</a>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <h3>React</h3>
            <p>Frentend Framework</p>
          </div>
          <div className="skill-item">
            <SiJavascript className="skill-icon" />
            <h3>JavaScript</h3>
            <p>ES6+ Mastery</p>
          </div>
          <div className="skill-item">
            <SiCss3 className="skill-icon" />
            <h3>CSS3</h3>
            <p>Modern Layouts</p>
          </div>
          <div className="skill-item">
            <SiExpress className="skill-icon" />
            <h3>Express.js</h3>
            <p>Backend Framework</p>
          </div>

          <div className="skill-item">
            <SiNodedotjs className="skill-icon" />
            <h3>Node.js</h3>
            <p>Server-Side JavaScript</p>
          </div>

          <div className="skill-item">
            <SiMongodb className="skill-icon" />
            <h3>MongoDB</h3>
            <p>NoSQL Database</p>
          </div>

          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <h3>SQL</h3>
            <p>Relational Databases</p>
          </div>

          <div className="skill-item">
            <FaCode className="skill-icon" />
            <h3>Java</h3>
            <p>Object-Oriented Programming</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact" className="section">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-container">
          <div className="social-links">
            <div className="iconic-social">
              <a href="https://github.com/shivakumarRA">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivakumar-kyamaji-60bb59272/">
                <FaLinkedin />
              </a>
              <a href="mailto:Shivakumarkyamaji@gmail.com">Email</a>
            </div>

            <div className="details">
              <h3> &#9742;&nbsp;+91 6302472678</h3>
              <h3>&#9993;&nbsp;Shivakumarkyamaji@gmail.com</h3>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={content.username}
              onChange={handlechange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={content.email}
              onChange={handlechange}
            />
            <textarea
              placeholder="Message"
              rows="5"
              name="message"
              value={content.message}
              onChange={handlechange}
            ></textarea>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 ShivakumarRao. Built with React</p>
      </footer>
    </div>
  );
};

export default App;
