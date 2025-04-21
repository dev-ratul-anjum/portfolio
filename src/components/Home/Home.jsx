import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="home-text">
            <motion.h1 
              className="home-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Engineer + <br />
              <span>Full-stack Developer</span>
            </motion.h1>
            <motion.p 
              className="home-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Frontend Engineer using HTML, CSS, JavaScript, Tailwind, Bootstrap and React.
              Backend using Node, Express, MongoDB.
              Can assist to build robust web, mobile, and desktop applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="home-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/profile.jpg" alt="Ratul Anjum" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 