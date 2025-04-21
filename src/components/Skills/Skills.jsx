import { motion } from 'framer-motion';

const frontendSkills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'GSAP', 'Bootstrap', 
  'Locomotive.js', 'Tailwind CSS', 'CSS-in-JS', 'Framer Motion', 'DOM', 
  'Unit Testing', 'Performance Optimization', 'SASS', 'Responsive Design'
];

const backendSkills = [
  'Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API', 
  'Passport.js', 'JWT/OAuth', 'Payment Integration', 
  'API Design', 'Data Modeling', 'Serverless'
];

const devopsSkills = [
  'Git', 'GitHub', 'Postman', 'Render', 'Vercel', 'Netlify', 
  'Performance Testing', 'Load Testing', 'Monitoring', 'Debugging'
];

const otherSkills = [
  'Canva', 'Figma', 'PSD', 'User Research', 
  'Wireframing', 'Adaptability', 'Problem-Solving', 'Teamwork & Collaboration', 'Project Management'
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-content">
          <motion.div 
            className="skills-diagram"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="skills-title">MY SKILLS</div>
          </motion.div>

          <div className="skills-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="skills-subtitle">Frontend Development</h3>
              <div className="skill-category">
                {frontendSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="skills-subtitle">Backend Development</h3>
              <div className="skill-category">
                {backendSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="skills-subtitle">DevOps & Tools</h3>
              <div className="skill-category">
                {devopsSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="skills-subtitle">Design & Other</h3>
              <div className="skill-category">
                {otherSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 