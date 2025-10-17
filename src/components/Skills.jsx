import { Code, Database, TestTube, Wrench, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Mastery',
      icon: Globe,
      description: 'Crafting beautiful and responsive user interfaces',
      skills: [
        { name: 'React', note: 'Built dynamic SPAs and dashboards' },
        { name: 'JavaScript', note: 'Core of my daily development' },
        { name: 'HTML/CSS', note: 'Clean, accessible layouts' },
        { name: 'TypeScript', note: 'Safer, scalable frontend code' },
        { name: 'Vite', note: 'Fast modern dev experience' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Sorcery',
      icon: Code,
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Ruby on Rails', note: 'My magical weapon of choice' },
        { name: 'Ruby', note: 'Elegant, expressive, battle-tested' },
        { name: 'REST APIs', note: 'Designed and consumed many' },
        { name: 'GraphQL', note: 'Integrated into complex systems' },
        { name: 'Node.js', note: 'Used for lightweight tooling' },
      ],
    },
    {
      id: 'database',
      title: 'Database Wizardry',
      icon: Database,
      description: 'Managing and optimizing data storage solutions',
      skills: [
        { name: 'PostgreSQL', note: 'My go-to for relational data' },
        { name: 'MongoDB', note: 'Used for NoSQL where appropriate' },
        { name: 'ActiveRecord', note: 'Confident querying and migrations' },
      ],
    },
    {
      id: 'testing',
      title: 'Testing Alchemy',
      icon: TestTube,
      description: 'Ensuring code quality through comprehensive testing',
      skills: [
        { name: 'RSpec', note: 'Test-driven Rails development' },
        { name: 'Jest', note: 'Unit tests for React components' },
        { name: 'Cypress', note: 'End-to-end confidence' },
      ],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: Wrench,
      description: 'Mastering the tools of the trade',
      skills: [
        { name: 'Git/GitHub', note: 'Version control for every quest' },
        { name: 'Sidekiq', note: 'Background jobs, reliably delivered' },
        { name: 'Active Admin', note: 'Admin magic for Rails apps' },
        { name: 'CI/CD', note: 'Automated testing and deployment' },
      ],
    },
    {
      id: 'deployment',
      title: 'Deployment Magic',
      icon: Zap,
      description: 'Bringing applications to life in production',
      skills: [
        { name: 'Netlify', note: 'Fast, modern static hosting' },
        { name: 'Heroku', note: 'Effortless Rails deployments' },
        { name: 'AWS', note: 'Cloud infrastructure for scale' },
        { name: 'GitHub Pages', note: 'Simple static site publishing' },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills" aria-label="Skills" style={{
      '--section-bg': '#f5f9f7',
      '--section-bg2': '#f6f3ee'
    }}>
      <div className="container">
        <div className="section-header">
          <h2>Spell Book</h2>
          <p>My arsenal of technical skills and magical abilities</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="skill-category card">
                <div className="category-header">
                  <div className="category-icon">
                    <Icon size={28} />
                  </div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                <ul className="skills-list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-note"> – {skill.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
      <div className="section-divider">
        <svg viewBox="0 0 700 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24 Q 80 0 160 24 Q 240 48 320 24 Q 350 12 380 24 Q 460 48 540 24 Q 620 0 680 24" stroke="#b7a77a" strokeWidth="4" fill="none"/>
          <path d="M20 24 Q 80 40 160 24 Q 240 8 320 24 Q 350 36 380 24 Q 460 8 540 24 Q 620 40 680 24" stroke="#355e3b" strokeWidth="2.5" fill="none"/>
          <ellipse cx="350" cy="24" rx="10" ry="6" stroke="#b7a77a" strokeWidth="2" fill="none"/>
          <ellipse cx="350" cy="24" rx="5" ry="3" stroke="#355e3b" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <style>{`
        .skills {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xxl);
        }

        .skill-category {
          padding: var(--spacing-xl);
          border: 2px solid transparent;
          transition: var(--transition-medium);
        }

        .skill-category:hover {
          border-color: var(--primary-gold);
          transform: translateY(-5px);
        }

        .category-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .category-icon {
          background: var(--forest-green);
          color: var(--white);
          padding: var(--spacing-md);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-info h3 {
          margin-bottom: var(--spacing-sm);
          color: var(--forest-green);
        }

        .category-info p {
          color: var(--dark-gray);
          font-size: 0.95rem;
          margin: 0;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-md);
          margin-bottom: 0;
          padding-left: 1.2em;
        }

        .skill-item {
          display: list-item;
          list-style: disc inside;
          color: var(--text);
          font-size: 1.08rem;
          line-height: 1.6;
        }

        .skill-name {
          font-weight: 600;
          color: var(--forest-green);
        }

        .skill-note {
          color: var(--secondary);
          font-style: italic;
        }


        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-md);
          }

        }

        .card::before, .card::after {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Skills; 
