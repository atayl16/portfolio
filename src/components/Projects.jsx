import { ExternalLink, Github, Users, Shield, Gamepad2 } from 'lucide-react';
import familyMessagingImg from '../assets/images/family-messaging.png';
import siegeClanImg from '../assets/images/siege-clan.png';
import islam4kidsImg from '../assets/images/islam4kids.png';

const Projects = () => {
  const projects = [
    {
      id: 'family-messaging',
      title: 'Family Messaging App',
      subtitle: 'Secure Real-time Communication',
      description: 'A private messaging platform built with React frontend and Rails API backend. Features real-time chat, secure access controls, and family-friendly interface. Live demo is private for family use. Demo available by request.',
      tech: ['React', 'Ruby on Rails', 'WebSocket', 'PostgreSQL', 'Netlify'],
      image: familyMessagingImg,
      github: 'https://github.com/atayl16/family-messaging',
      live: 'mailto:inspirebyexample0@gmail.com?subject=Request%20for%20Family%20Messaging%20App%20Demo',
      icon: Users,
      status: 'Live',
      category: 'Full Stack'
    },
    {
      id: 'siege-clan',
      title: 'Siege Clan Tracker',
      subtitle: 'OSRS Game Clan Tracker',
      description: 'Originally built in Rails, now being rebuilt in React + Supabase. Tracks clan activities, member statistics, and game achievements for Old School RuneScape players.',
      tech: ['React', 'Supabase', 'TypeScript', 'Vite', 'Netlify'],
      image: siegeClanImg,
      github: 'https://github.com/atayl16/siege-clan-tracker',
      live: 'https://siege-clan.com',
      icon: Gamepad2,
      status: 'Live',
      category: 'Full Stack'
    },
    {
      id: 'islam4kids',
      title: 'Islam4Kids Games',
      subtitle: 'Educational Islamic Games',
      description: 'React app with educational Islamic games designed for nonprofit use. Features interactive learning modules, progress tracking, and child-friendly interface.',
      tech: ['React', 'JavaScript', 'CSS3', 'Local Storage', 'Responsive Design'],
      image: islam4kidsImg,
      github: 'https://github.com/atayl16/islam4kids-games',
      live: 'https://islam4kids.netlify.app/',
      icon: Shield,
      status: 'Live',
      category: 'Frontend'
    }
  ];

  return (
    <section id="projects" className="section projects" style={{
      '--section-bg': '#f6f3ee',
      '--section-bg2': '#e8efea'
    }}>
      <div className="container">
        <div className="section-header">
          <h2>Adventure Log</h2>
          <p>Epic quests and digital conquests from my coding journey</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="project-card card" role="article">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="project-header">
                  <div className="project-icon">
                    <Icon size={24} />
                  </div>
                  <div className="project-meta">
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target={project.id === 'family-messaging' ? undefined : '_blank'}
                      rel={project.id === 'family-messaging' ? undefined : 'noopener noreferrer'}
                      className="btn"
                    >
                      <ExternalLink size={16} />
                      {project.id === 'family-messaging' ? 'Demo Request' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-divider">
        <svg viewBox="0 0 700 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24 Q 80 0 160 24 Q 240 48 320 24 Q 350 12 380 24 Q 460 48 540 24 Q 620 0 680 24" stroke="#b7a77a" stroke-width="4" fill="none"/>
          <path d="M20 24 Q 80 40 160 24 Q 240 8 320 24 Q 350 36 380 24 Q 460 8 540 24 Q 620 40 680 24" stroke="#355e3b" stroke-width="2.5" fill="none"/>
          <ellipse cx="350" cy="24" rx="10" ry="6" stroke="#b7a77a" stroke-width="2" fill="none"/>
          <ellipse cx="350" cy="24" rx="5" ry="3" stroke="#355e3b" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
      <style>{`
        .projects {
          /* Remove background styling, now handled by .section */
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }

        .section-header h2 {
          margin-bottom: var(--spacing-md);
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--dark-gray);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
        }
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 2px solid transparent;
          transition: var(--transition-medium), box-shadow 0.3s;
          position: relative;
          overflow: hidden;
          background: var(--parchment);
          box-shadow: 0 2px 8px rgba(60, 80, 60, 0.06);
        }

        .project-card:hover, .project-card:focus-within {
          border-color: var(--primary-gold);
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 0 36px 8px rgba(183, 167, 122, 0.45);
          z-index: 2;
          animation: shimmer 1.2s linear infinite;
        }

        @keyframes shimmer {
          0% {
            box-shadow: 0 0 24px 4px rgba(183, 167, 122, 0.35);
          }
          50% {
            box-shadow: 0 0 36px 8px rgba(183, 167, 122, 0.55);
          }
          100% {
            box-shadow: 0 0 24px 4px rgba(183, 167, 122, 0.35);
          }
        }

        @media (min-width: 900px) {
          .project-card:not(:last-child) {
            box-shadow: 0 2px 8px rgba(60, 80, 60, 0.06), 8px 0 12px -8px rgba(60,80,60,0.07);
          }
        }

        .project-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 12px 12px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: var(--transition-medium);
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          gap: var(--spacing-md);
        }

        .project-icon {
          background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
          color: var(--forest-green);
          padding: 0.35em;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px 2px rgba(183, 167, 122, 0.25);
          font-size: 1em;
          border: 2px solid var(--forest-green);
          margin-right: var(--spacing-md);
          margin-top: 0;
          min-width: 1.6em;
          min-height: 1.6em;
        }

        .project-icon svg {
          color: var(--forest-green) !important;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          align-items: flex-end;
        }

        .project-status {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.25em 0.7em;
          border-radius: 1em;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 0.5em;
          display: flex;
          align-items: center;
          min-height: 1.6em;
        }

        .project-status.live {
          background: #d4edda;
          color: #155724;
        }

        .project-status.in-development {
          background: #fff3cd;
          color: #856404;
        }

        .project-status.internal-tool {
          background: #d1ecf1;
          color: #0c5460;
        }

        .project-category {
          font-size: 0.8rem;
          color: var(--earth-brown);
          font-weight: 500;
        }

        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .project-title {
          font-size: 1.6rem;
          margin-bottom: var(--spacing-xs);
          color: var(--forest-green);
          font-weight: 700;
        }

        .project-subtitle {
          font-size: 1rem;
          color: var(--primary-gold);
          font-weight: 500;
          margin-bottom: var(--spacing-md);
          font-style: italic;
          opacity: 0.85;
        }

        .project-description {
          color: var(--dark-gray);
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
          flex: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-md);
        }

        .tech-tag {
          background: var(--parchment);
          color: #355e3b;
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--sage);
          box-shadow: 0 1px 3px rgba(60, 80, 60, 0.1);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.3em;
        }

        .tech-tag::before {
          content: "\\2728";
          font-size: 1.1em;
          color: #ffe066;
          margin-right: 0.25em;
          text-shadow: 0 0 4px #e6d8a3, 0 0 2px #fffbe6;
        }

        .tech-tag:hover {
          background: var(--sage);
          color: var(--primary);
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(60, 80, 60, 0.15);
        }

        .project-actions {
          display: flex;
          gap: var(--spacing-sm);
          margin-top: auto;
          flex-wrap: wrap;
        }

        .project-actions .btn {
          flex: 1 1 120px;
          min-width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xs);
          font-size: 0.95rem;
          padding: var(--spacing-sm) var(--spacing-md);
          white-space: nowrap;
          outline: none;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .project-actions .btn:focus {
          border-color: var(--primary-gold);
          box-shadow: 0 0 0 3px rgba(183, 167, 122, 0.35);
          outline: 2px solid var(--primary-gold);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            margin-bottom: var(--spacing-lg);
          }

          .project-actions {
            flex-direction: column;
            gap: var(--spacing-xs);
          }
        }

        @media (max-width: 600px) {
          .project-header {
            gap: var(--spacing-sm);
          }
          .project-icon {
            padding: 0.35em;
            font-size: 1em;
            min-width: 1.6em;
            min-height: 1.6em;
            margin-right: var(--spacing-sm);
          }
          .project-status {
            font-size: 0.85rem;
            padding: 0.25em 0.7em;
            border-radius: 1em;
            min-height: 1.6em;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects; 
