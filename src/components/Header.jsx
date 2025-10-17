import { useState } from 'react';
import { Menu, X, Home, Briefcase, Flame, BookOpen, Mail } from 'lucide-react';

const Header = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Flame },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h3>Alisha Taylor</h3>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="nav-menu mobile">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <style>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--primary-gold);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: var(--shadow-light);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-md) 0;
        }

        .nav-brand h3 {
          margin: 0;
          color: var(--forest-green);
          font-size: 1.5rem;
        }

        .nav-subtitle {
          font-size: 0.9rem;
          color: var(--primary-gold);
          font-style: italic;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: var(--spacing-lg);
          margin: 0;
          padding: 0;
        }

        .nav-menu.desktop {
          display: flex;
        }

        .nav-menu.mobile {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--white);
          border-top: 1px solid var(--light-gray);
          box-shadow: var(--shadow-medium);
          padding: var(--spacing-md);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          background: none;
          border: none;
          color: var(--dark-gray);
          font-family: var(--font-secondary);
          font-size: 1rem;
          cursor: pointer;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 20px;
          transition: var(--transition-medium);
          text-decoration: none;
        }

        .nav-link:hover,
        .nav-link.active {
          background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
          color: var(--white);
          transform: translateY(-1px);
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--forest-green);
          cursor: pointer;
          padding: var(--spacing-sm);
          border-radius: 5px;
          transition: var(--transition-fast);
        }

        .nav-toggle:hover {
          background: var(--light-gray);
        }

        @media (max-width: 768px) {
          .nav-menu.desktop {
            display: none;
          }

          .nav-menu.mobile {
            display: flex;
          }

          .nav-toggle {
            display: block;
          }

          .nav-link {
            justify-content: flex-start;
            width: 100%;
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </header>
  );
};

export default Header; 
