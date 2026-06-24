import { useState, useEffect } from 'react';
import myPhoto from './assets/myphoto.png';

// Pure Inline SVG Icon Components (Guarantees zero dependency issues and perfect builds)
const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Mail = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowUpRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Menu = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const X = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Code2 = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const Database = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const Terminal = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const Layers = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const Sparkles = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z" opacity="0.5" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" opacity="0.5" />
  </svg>
);

const Globe = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ArrowUp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const Cpu = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 15h3" />
    <path d="M1 9h3" />
    <path d="M1 15h3" />
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Monitor scrolling to shrink navbar and track active sections
  useEffect(() => {
    const handleScroll = () => {
      // Navbar shrink logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glowing Blobs */}
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>
      <div className="glow-blob glow-blob-3"></div>

      {/* Sleek Floating Glassmorphic Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-icon">M</span>
          <span className="logo-text">Mahela Damsara</span>
        </a>

        {/* Desktop/Mobile Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Action/Socials */}
        <div className="nav-socials">
          <a href="https://github.com/mahedd123" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mahela-damsara-126195311" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:mahela.damsara.7@gmail.com" className="social-icon" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* Hamburger Menu Controls */}
        <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section (ACREE Style Centered Portrait with Overlay Typography) */}
      <header className="hero-section" id="home">
        <div className="hero-bg-portrait">
          <div className="hero-image-wrapper">
            <img src={myPhoto} alt="Mahela Damsara B&W Portrait" className="hero-portrait-img" />
            <div className="hero-image-overlay"></div>
          </div>
        </div>

        <div className="hero-content-overlay">
          <div className="hero-title-group">
            <h1 className="hero-huge-text">Hello</h1>
            <div className="hero-subtext-group">
              <span className="hero-dash"></span>
              <span className="hero-tagline">this is me being creative.</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="scroll-indicator" aria-label="Scroll Down">
          <span className="scroll-text">View Work</span>
          <div className="scroll-line-container">
            <div className="scroll-line-active"></div>
          </div>
        </a>
      </header>

      {/* About Section */}
      <section className="section" id="about">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-number">01 / ABOUT</span>
            <h2 className="section-title">Who I am</h2>
          </div>
          <span className="section-desc-accent">Crafting data-driven & creative digital solutions.</span>
        </div>

        <div className="about-grid">
          <div className="about-intro-col">
            <h3>
              I’m <span>Mahela Damsara</span>, an IT Undergraduate at SLIIT, aspiring Data Scientist, and Creative Designer.
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Bridging the gap between analytic engineering and aesthetics, I build clean interactive designs backed by robust backend logic.
            </p>
            <a href="#contact" className="about-cta-btn">
              Let's Collaborate <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="about-details-col">
            <p>
              My coding journey focuses on building applications that make a difference. From designing detailed data ingestion workflows to constructing user interfaces, I love exploring how technology, details, and modern designs intersect.
            </p>
            <p>
              I am dedicated to continuous learning, exploring the latest frameworks, database paradigms, and analytic models to always stay ahead.
            </p>

            <div className="about-specs-grid">
              <div className="spec-item">
                <span className="spec-label">Education</span>
                <span className="spec-value">SLIIT (IT Undergraduate)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Core Focus</span>
                <span className="spec-value">Data Science & Web Dev</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Located In</span>
                <span className="spec-value">Colombo, Sri Lanka</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Design Ethos</span>
                <span className="spec-value">Premium Minimalist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-number">02 / EXPERTISE</span>
            <h2 className="section-title">My Tech Stack</h2>
          </div>
          <span className="section-desc-accent">Leveraging modern platforms to build scalable applications.</span>
        </div>

        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Code2 size={20} /></div>
              <span className="skill-level">Advanced</span>
            </div>
            <h3 className="skill-name">Java & Spring Boot</h3>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Layers size={20} /></div>
              <span className="skill-level">Advanced</span>
            </div>
            <h3 className="skill-name">React.js</h3>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Database size={20} /></div>
              <span className="skill-level">Intermediate</span>
            </div>
            <h3 className="skill-name">MongoDB & MySQL</h3>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Terminal size={20} /></div>
              <span className="skill-level">Intermediate</span>
            </div>
            <h3 className="skill-name">Data Science (Python)</h3>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Globe size={20} /></div>
              <span className="skill-level">Advanced</span>
            </div>
            <h3 className="skill-name">HTML, CSS, JS</h3>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon-placeholder"><Cpu size={20} /></div>
              <span className="skill-level">Advanced</span>
            </div>
            <h3 className="skill-name">Git & REST APIs</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-number">03 / CASE STUDIES</span>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <span className="section-desc-accent">A handpicked selection of digital products and systems.</span>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-thumbnail">
              <div className="project-img-placeholder">
                <Terminal size={32} style={{ marginBottom: '10px' }} />
                <span>Full-Stack Support System</span>
              </div>
              <div className="project-tags">
                <span className="project-tag">Spring Boot</span>
                <span className="project-tag">React</span>
                <span className="project-tag">MongoDB</span>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">
                Smart Campus Ticket System
                <ArrowUpRight size={18} className="project-link-icon" />
              </h3>
              <p className="project-desc">
                A highly-responsive full-stack supporting support management system built for educational environments. Resolves issues, authenticates securely, and provides interactive ticket tracking.
              </p>
              <div className="project-footer">
                <span className="project-tech">Spring Boot, React, MongoDB, MySQL</span>
                <a href="https://github.com/mahedd123" className="project-action-link" target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <div className="project-thumbnail">
              <div className="project-img-placeholder">
                <Layers size={32} style={{ marginBottom: '10px' }} />
                <span>Enterprise Java WebApp</span>
              </div>
              <div className="project-tags">
                <span className="project-tag">Java EE</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">Bootstrap</span>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">
                Wedding Event Management System
                <ArrowUpRight size={18} className="project-link-icon" />
              </h3>
              <p className="project-desc">
                A comprehensive planning and invoice system enabling couples to build dynamic wedding packages, schedule activities, track client records, and finalize transaction logs seamlessly.
              </p>
              <div className="project-footer">
                <span className="project-tech">Java, Servlet, MySQL, CSS</span>
                <a href="https://github.com/mahedd123" className="project-action-link" target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item">
            <div className="project-thumbnail">
              <div className="project-img-placeholder">
                <Sparkles size={32} style={{ marginBottom: '10px' }} />
                <span>Creative Interactive Design</span>
              </div>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Vite</span>
                <span className="project-tag">Vanilla CSS</span>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">
                Creative Portfolio Website
                <ArrowUpRight size={18} className="project-link-icon" />
              </h3>
              <p className="project-desc">
                A premium, dark minimalist portfolio crafted specifically to highlight modern, high-contrast photography and typography, custom scroll physics, and sleek glassmorphism design trends.
              </p>
              <div className="project-footer">
                <span className="project-tech">React, CSS, SVG-Icons</span>
                <a href="https://github.com/mahedd123" className="project-action-link" target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-number">04 / CONNECT</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <span className="section-desc-accent">Let's create something extraordinary together.</span>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <p className="contact-lead">
              Have an exciting project, full-time opportunity, or want to discuss analytics? <span>Let's talk.</span>
            </p>

            <div className="contact-details-list">
              {/* Detail 1 */}
              <div className="contact-detail-card">
                <div className="contact-icon-box"><Mail size={20} /></div>
                <div className="contact-detail-content">
                  <span className="contact-label">Email</span>
                  <a href="mailto:mahela.damsara.7@gmail.com" className="contact-value">mahela.damsara.7@gmail.com</a>
                </div>
              </div>

              {/* Detail 2 */}
              <div className="contact-detail-card">
                <div className="contact-icon-box"><Github size={20} /></div>
                <div className="contact-detail-content">
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/mahedd123" target="_blank" rel="noopener noreferrer" className="contact-value">github.com/mahedd123</a>
                </div>
              </div>

              {/* Detail 3 */}
              <div className="contact-detail-card">
                <div className="contact-icon-box"><Linkedin size={20} /></div>
                <div className="contact-detail-content">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/mahela-damsara-126195311" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/in/mahela-damsara</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" required placeholder="Hey Mahela, I'd love to chat about a new project..." />
              </div>

              <button type="submit" className="submit-btn">
                Send Message <ArrowUpRight size={16} />
              </button>

              {formSubmitted && (
                <p style={{ color: '#10b981', fontSize: '0.9rem', textAlign: 'center', marginTop: '10px' }}>
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Mahela Damsara. All rights reserved. Designed with passion.
        </p>
        <a href="#home" className="footer-back-to-top">
          Back to Top <ArrowUp size={16} />
        </a>
      </footer>
    </div>
  );
}

export default App;