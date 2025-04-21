import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section
      const sections = ['home', 'services', 'about', 'skills', 'projects', 'contact'];
      const currentPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
      if (isSidebarOpen) setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            {'{'}
            <span>ratulAnjum</span>
            {'}'}
          </div>

          <nav className="nav-menu">
            <a 
              onClick={() => scrollToSection('home')} 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('services')} 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('skills')} 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Get in Touch
            </a>
          </nav>

          <div className="header-right">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="resume-btn" >
                RESUME
              </button>
            </a>
            
            <button className="nav-toggle" onClick={() => setIsSidebarOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button className="sidebar-close" onClick={() => setIsSidebarOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <nav className="sidebar-nav">
          <a 
            onClick={() => scrollToSection('home')} 
            className={`sidebar-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('services')} 
            className={`sidebar-link ${activeSection === 'services' ? 'active' : ''}`}
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className={`sidebar-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('skills')} 
            className={`sidebar-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className={`sidebar-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className={`sidebar-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Get in Touch
          </a>
        </nav>
        <div className="sidebar-social">
          <a href="mailto:ratulanjum.dev@gmail.com" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="https://github.com/dev-ratul-anjum" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/ratulanjum.dev" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/dev-ratul-anjum" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://t.me/ratulanjum" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.306 6.68c.262.76 1.134 1.166 1.92.83l2.313-.987a1.5 1.5 0 0 0 .732-.732l3.456-8.172a1.5 1.5 0 0 0-.053-1.331l-1.06-1.76a.75.75 0 0 1 .277-1.054l3.432-2.053a2.25 2.25 0 0 0 .173-3.494z"></path>
              <path d="M9 16V8l7 4-7 4z"></path>
            </svg>
          </a>
        </div>
        <div className="sidebar-footer">
          <p>Coded by Ratul Anjum</p>
        </div>
      </div>
    </>
  );
};

export default Header; 