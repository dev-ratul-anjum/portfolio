import { useState } from 'react';
import { motion } from 'framer-motion';
const FORMSPREE_FORM_ID = import.meta.env.VITE_APP_FORMSPREE_FORM_ID;
import './Contact.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    common : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const validateField = (name, value) => {
    let errorMessage = '';
    if (!value.trim()) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = 'Please enter a valid email address';
    } else if (name === 'message' && value.trim().length < 10) {
      errorMessage = 'Message should be at least 10 characters long';
    }
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    let hasErrors = false;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) hasErrors = true;
    });
    
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    if (hasErrors) {
      return;
    }

    const form = document.getElementById("contact-form-portfolio");
    const data = new FormData(e.target);

    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setIsSubmitting(true);
    
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setSubmitMessage('Your message has been sent successfully! I will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setTouched({
            name: false,
            email: false,
            subject: false,
            message: false
          });
          
          // Scroll to the contact-form div
          const contactForm = document.querySelector('.contact-form');
          if (contactForm) {
            window.scrollTo({
              top: contactForm.offsetTop - 100,
              behavior: 'smooth'
            });
          }
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus('');
            setSubmitMessage('');
          }, 5000);
        }, 1500);

      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            setErrors({common : data["errors"].map(error => error["message"]).join(", ")});
          } else {
            setErrors({common : "Oops! There was a problem submitting your form"});
          }
        })
      }
    }).catch(error => {
      setErrors({common : error.message});
    });

    
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm eager to join a collaborative team where I can contribute my skills and learn from others. 
          If you have an exciting project, let's discuss how I can be a valuable asset.
        </motion.p>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-item-content">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:ratulanjum.dev@gmail.com">ratulanjum.dev@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-item-content">
                <h4>Phone Number</h4>
                <p>
                  <a href="tel:+880-1799-742945">+880-1799-742945</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="contact-item-content">
                <h4>Social Profiles</h4>
                <div className="contact-social">
                  <a href="https://github.com/dev-ratul-anjum" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/dev-ratul-anjum" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://twitter.com/dev_ratul_anjum" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {submitStatus === 'success' && (
              <div className="form-success-message">
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}  action={FORMSPREE_FORM_ID} method="POST" id="contact-form-portfolio">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${touched.name && errors.name ? 'error' : ''}`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${touched.email && errors.email ? 'error' : ''}`}
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`form-control ${touched.subject && errors.subject ? 'error' : ''}`}
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.subject && errors.subject && <div className="error-message">{errors.subject}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${touched.message && errors.message ? 'error' : ''}`}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {touched.message && errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              <button type="submit" className="contact-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 