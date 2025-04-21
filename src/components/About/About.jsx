import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/profile.jpg" alt="Ratul Anjum" />
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>
              I started my learning journey in 2023, beginning with web development fundamentals - HTML, CSS, and JavaScript. 
              As my passion for creating web applications grew, I expanded my knowledge to include modern frameworks and libraries like 
              React, Node.js and Express.js.
            </p>
            <p>
              For over a year, I have been working as a MERN stack developer, with a strong focus on building scalable, performant, and user-friendly web applications. 
              My expertise encompasses front-end development using React.js, as well as back-end development leveraging Node.js, Express, and MongoDB.
            </p>
            <p>
              Besides web development, I'm passionate about learning new technologies and exploring ways to improve user experiences through 
              intuitive design and optimized performance. I believe in writing clean, maintainable code and following best practices to ensure 
              that applications are robust and scalable.
            </p>
            <p>
              I'm currently pursuing opportunities to work on challenging projects that allow me to further enhance my skills and contribute 
              to creating innovative solutions that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 