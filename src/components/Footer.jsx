import { Github, Linkedin, Mail, Heart, Sword, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Shield size={24} />
              <span>Alisha Taylor</span>
            </div>
            <p className="footer-tagline">
              Software Ranger • Code Adventurer • Digital Craftsman
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/atayl16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alisha-t-098785180/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:inspirebyexample0@gmail.com">
                    <Mail size={16} />
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Location</h4>
              <div className="footer-location">
                <p>Open to Remote Worldwide (US citizen, US/UK time zone–friendly preferred)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Alisha Taylor. All rights reserved.
            </p>
            <p className="footer-message">
              Crafted with <Heart size={14} className="heart-icon" /> and a touch of magic
            </p>
          </div>

          <div className="footer-adventure">
            <Sword size={16} />
            <span>Ready for the next coding adventure!</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--primary);
          color: var(--secondary);
          padding: var(--spacing-xxl) 0 var(--spacing-lg);
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, var(--highlight), var(--highlight));
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-xxl);
          margin-bottom: var(--spacing-xl);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--highlight);
        }

        .footer-tagline {
          font-style: italic;
          color: var(--light-green);
          font-size: 0.95rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-xl);
        }

        .footer-section h4 {
          color: var(--highlight);
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: var(--spacing-sm);
        }

        .footer-section a {
          color: var(--secondary);
          text-decoration: none;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .footer-section a:hover {
          color: var(--highlight);
          transform: translateX(2px);
        }

        .footer-section p {
          color: var(--light-green);
          margin-bottom: var(--spacing-xs);
          font-size: 0.9rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-lg);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-copyright p {
          margin-bottom: var(--spacing-xs);
          font-size: 0.9rem;
          color: var(--light-green);
        }

        .footer-message {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--highlight) !important;
        }

        .heart-icon {
          animation: heartbeat 2s infinite;
        }

        @keyframes heartbeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.1);
          }
        }

        .footer-adventure {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--highlight);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            text-align: center;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .footer-bottom {
            flex-direction: column;
            gap: var(--spacing-md);
            text-align: center;
          }

          .footer-section a {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 
