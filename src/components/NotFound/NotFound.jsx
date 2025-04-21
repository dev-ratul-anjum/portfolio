import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSad, setIsSad] = useState(false);
  const [counter, setCounter] = useState(100);

  // Track mouse position for eye movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto redirect countdown
  useEffect(() => {
    if (counter <= 0) {
      navigate('/');
      return;
    }
    
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [counter, navigate]);

  // Calculate eye rotation based on mouse position
  const getEyeStyle = (eyeX) => {
    if (typeof window === 'undefined') return {}; // SSR check
    
    const eyeElement = document.querySelector(`[cx="${eyeX}"]`);
    if (!eyeElement) return {};
    
    const eyeRect = eyeElement.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    const angle = Math.atan2(
      mousePosition.y - eyeCenterY,
      mousePosition.x - eyeCenterX
    );
    
    const distance = Math.min(
      3,
      Math.sqrt(
        Math.pow(mousePosition.x - eyeCenterX, 2) +
        Math.pow(mousePosition.y - eyeCenterY, 2)
      ) / 50
    );
    
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`
    };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="not-found section" id="not-found">
      <div className="container">
        <motion.div 
          className={`not-found-content ${isSad ? 'is-sad' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onMouseEnter={() => setIsSad(true)}
          onMouseLeave={() => setIsSad(false)}
        >
          <div className="not-found-glitch-container">
            <motion.div 
              className="not-found-code glitch"
              data-text="404"
              variants={itemVariants}
            >
              404
            </motion.div>
          </div>
          
          <motion.h1 
            className="not-found-title"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            className="not-found-message"
            variants={itemVariants}
          >
            The page you're looking for doesn't exist or has been moved.
            <br />Redirecting to home in <span className="countdown">{counter}</span> seconds.
          </motion.p>
          
          <motion.div
            className="not-found-actions"
            variants={itemVariants}
          >
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              <span className="btn-text">Back to Home</span>
              <span className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
            </button>
          </motion.div>
          
          <motion.div 
            className="not-found-illustration"
            variants={itemVariants}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="not-found-svg">
              <circle cx="100" cy="100" r="80" className="not-found-circle" />
              <path 
                d={isSad ? "M65,110 Q100,90 135,110 M65,90 L135,90" : "M65,90 L135,90 M65,110 L135,110"} 
                className="not-found-face"
              />
              <g className="not-found-left-eye">
                <circle cx="75" cy="70" r="10" className="not-found-eye" />
                <circle cx="75" cy="70" r="5" fill="var(--bg-secondary)" style={getEyeStyle(75)} />
              </g>
              <g className="not-found-right-eye">
                <circle cx="125" cy="70" r="10" className="not-found-eye" />
                <circle cx="125" cy="70" r="5" fill="var(--bg-secondary)" style={getEyeStyle(125)} />
              </g>
            </svg>
          </motion.div>
          
          <div className="not-found-particles">
            {[...Array(10)].map((_, index) => (
              <div 
                key={index} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound; 