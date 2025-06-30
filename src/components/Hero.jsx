import { ArrowDown, Github, Linkedin, MapPin, Globe } from 'lucide-react';
import portfolioBgImg from '../assets/images/portfolio-background.jpg';
import avatarImg from '../assets/images/avatar.jpg';

const Hero = ({ setCurrentSection }) => {
  const scrollToProjects = () => {
    setCurrentSection('projects');
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section hero"
      style={{
        '--section-bg': '#f5f9f7',
        '--section-bg2': '#e8efea',
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span>Software Engineer II</span>
          </div>
          <div className="hero-title-section">
            <h1 className="hero-title">Alisha Taylor</h1>
            <div className="hero-avatar">
              <img
                src={avatarImg}
                alt="Alisha Taylor avatar"
                className="avatar-img"
                loading="lazy"
              />
            </div>
          </div>
          <span className="hero-subtitle">
            Still believes in the magic of coding
          </span>
          <p className="hero-description">
            Crafting digital adventures with 5+ years of coding expertise.
            Specializing in Ruby on Rails, React, and JavaScript. Seeking remote
            opportunities in education, open source, and mission-driven companies.
          </p>
          <div className="hero-location">
            <MapPin size={16} />
            <span>
              Open to Remote Worldwide (US citizen, US/UK time zone–friendly preferred)
            </span>
          </div>
          <div className="hero-actions">
            <a
              href="https://github.com/atayl16"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alisha-t-098785180/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <button onClick={scrollToProjects} className="btn btn-outline">
              <Globe size={18} /> View Projects
            </button>
          </div>
          <div className="quick-stats-row fade-in-up">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Tech</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <button
          onClick={scrollToProjects}
          className="scroll-button"
          aria-label="Scroll to projects section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
      <div className="section-divider">
        <svg
          viewBox="0 0 700 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 24 Q 80 0 160 24 Q 240 48 320 24 Q 350 12 380 24 Q 460 48 540 24 Q 620 0 680 24"
            stroke="#b7a77a"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M20 24 Q 80 40 160 24 Q 240 8 320 24 Q 350 36 380 24 Q 460 8 540 24 Q 620 40 680 24"
            stroke="#355e3b"
            strokeWidth="2.5"
            fill="none"
          />
          <ellipse
            cx="350"
            cy="24"
            rx="10"
            ry="6"
            stroke="#b7a77a"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="350"
            cy="24"
            rx="5"
            ry="3"
            stroke="#355e3b"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      <style>{`
        .hero {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .hero-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 80px;
          margin-right: 0;
          margin-bottom: var(--spacing-lg);
        }
        .avatar-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--accent);
          box-shadow: 0 6px 24px rgba(60, 80, 60, 0.15);
          background: var(--highlight);
          transition: box-shadow 0.3s;
        }
        .avatar-img:hover {
          box-shadow: 0 8px 32px rgba(60, 80, 60, 0.2);
        }
        .hero-text {
          flex: 1 1 0;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-title-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xs);
          justify-content: center;
        }
        .hero-badge {
          display: inline-block;
          background: var(--secondary);
          color: var(--button-text);
          padding: var(--spacing-xs) var(--spacing-md);
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-lg);
          box-shadow: var(--box-shadow);
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          margin-bottom: 0;
          color: var(--primary);
          line-height: 1.1;
        }
        .hero-subtitle {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: #4a4a3f;
          font-style: italic;
          margin-bottom: var(--spacing-md);
          line-height: 1.5;
        }
        .hero-description {
          font-family: var(--font-body);
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
          color: var(--text);
        }
        .hero-location {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--primary);
          font-weight: 500;
          margin-bottom: var(--spacing-lg);
        }
        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
          margin-bottom: var(--spacing-xl);
        }
        .btn.btn-outline {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          box-shadow: none;
          transition: var(--transition-medium);
        }
        .btn.btn-outline:hover, .btn.btn-outline:focus {
          background: var(--primary);
          color: var(--button-text);
          border-color: var(--primary);
        }
        .btn.btn-outline svg {
          margin-right: var(--spacing-xs);
        }
        .quick-stats-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: var(--highlight);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          border: 2px solid #dcdedc;
          margin-top: var(--spacing-xl);
          padding: var(--spacing-md) var(--spacing-lg);
          width: 100%;
          max-width: 600px;
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s 0.2s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1 1 0;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 700;
        }
        .stat-label {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--secondary);
        }
        .stat-divider {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, #e8efea 0%, #dcdedc 100%);
          margin: 0 24px;
          border-radius: 2px;
        }
        .hero-scroll {
          position: absolute;
          bottom: var(--spacing-xl);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        .scroll-button {
          background: var(--highlight);
          border: 2px solid var(--accent);
          color: var(--primary);
          cursor: pointer;
          padding: var(--spacing-sm);
          border-radius: 50%;
          transition: var(--transition-medium);
          box-shadow: var(--box-shadow);
        }
        .scroll-button:hover {
          background: var(--primary);
          color: var(--button-text);
        }
        @media (max-width: 1024px) {
          .hero-content {
            padding-top: 80px;
            padding-bottom: 40px;
            align-items: center;
          }
          .hero-avatar {
            margin-bottom: var(--spacing-lg);
          }
          .avatar-img {
            width: 100px;
            height: 100px;
          }
        }
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 60px;
            padding-bottom: 20px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .avatar-img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 
