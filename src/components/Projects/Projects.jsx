import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.',
    image: '/projects/ecommerce.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Passport.js', 'SSLCOMMERZ'],
    demoLink: 'https://techmart-bd.onrender.com',
    codeLink: 'https://github.com/dev-ratul-anjum/techmart'
  },
  {
    id: 2,
    title: 'Water Delivery Platform',
    description: 'Web platform for water delivery : registration, product selection, scheduling, and order tracking.',
    image: '/projects/water-delivery.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Passport.js', 'SSLCOMMERZ'],
    demoLink: 'https://panilagbe.onrender.com',
    codeLink: 'https://github.com/dev-ratul-anjum/panilagbe'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: '/projects/comming-soon.jpg',
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    demoLink: 'https://chatapp-demo.example.com',
    codeLink: 'https://github.com/dev-ratul-anjum/chatapp'
  },
  {
    id: 4,
    title: 'Blog & CMS',
    description: 'A content management system for creating and managing blog content with admin dashboard and analytics.',
    image: '/projects/comming-soon.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    demoLink: 'https://blog-demo.example.com',
    codeLink: 'https://github.com/dev-ratul-anjum/blog-cms'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A weather dashboard application providing current weather and forecasts with interactive maps and charts.',
    image: '/projects/comming-soon.jpg',
    tags: ['React', 'Node.js', 'Chart.js', 'API Integration', 'Geolocation'],
    demoLink: 'https://weather-demo.example.com',
    codeLink: 'https://github.com/dev-ratul-anjum/weather-app'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A portfolio website showcasing skills, projects, and professional experience with a modern design.',
    image: '/projects/portfolio.png',
    tags: ['React', 'Framer Motion', 'Responsive Design', 'CSS'],
    demoLink: 'https://ratul-anjum.github.io/tech_campus/',
    codeLink: 'https://github.com/ratul-anjum/tech_campus'
  }
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects I've Built
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I have a proven track record of building projects from the ground up. My process emphasizes thorough planning, 
          user-centric design, and robust development to create applications that meet client needs.
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                    Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 