import { Briefcase, Sparkles, Sword, Shield, Users, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 'dailykos',
      company: 'Daily Kos',
      role: 'Software Engineer II',
      guild: 'The Grassroots Guild',
      period: '2022–2025',
      icon: Sword,
      description: 'Joined a team powering one of the internet\'s most vibrant progressive communities. Built and maintained Rails + React applications processing millions in donations and reaching millions of users.',
      quests: [
        'Donation platforms that handled high-traffic campaigns',
        'Payment integrations with ActBlue, Stripe, and PayPal',
        'Infrastructure monitoring with Grafana and Datadog',
        'End-to-end testing with RSpec, Jest, and Ghost Inspector',
      ],
    },
    {
      id: 'mytime',
      company: 'MyTime',
      role: 'Director of Operations',
      guild: 'The Startup Brigade',
      period: '2014–2021',
      icon: Shield,
      description: 'Led operations for a growing SaaS platform, but the real magic happened when I started coding. Built internal Rails tools that automated hours of tedious work — QA account generation, demo setups, and onboarding workflows.',
      quests: [
        'Internal automation tools (Rails)',
        'Cross-functional team leadership',
        'Customer success and retention strategies',
        'Process documentation and knowledge sharing',
      ],
      highlight: 'Where the Software Ranger was born',
    },
  ];

  const timeline = [
    { year: '2025', label: 'Building in public, seeking the next meaningful quest' },
    { year: '2022–2025', label: 'Software Engineer II at Daily Kos (Rails + React at scale)' },
    { year: '2014–2021', label: 'Director of Operations → accidental coder at MyTime' },
    { year: '2014', label: 'Entered the tech realm, ready to learn everything' },
  ];

  return (
    <section id="experience" className="section experience" aria-label="Experience" style={{
      '--section-bg': '#f6f3ee',
      '--section-bg2': '#f5f9f7'
    }}>
      <div className="container">
        <div className="section-header">
          <h2>Guild Chronicles</h2>
          <p>Every adventurer has their origin story — here's where my journey has taken me</p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" />
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Sparkles size={16} />
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="experience-grid">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div key={exp.id} className="experience-card card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Icon size={28} />
                  </div>
                  <div className="experience-title">
                    <h3>{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                    <p className="experience-guild">{exp.guild}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                {exp.highlight && (
                  <div className="experience-highlight">
                    <Sparkles size={16} />
                    <span>{exp.highlight}</span>
                  </div>
                )}

                <div className="experience-quests">
                  <h4>Key Quests:</h4>
                  <ul>
                    {exp.quests.map((quest, index) => (
                      <li key={index}>{quest}</li>
                    ))}
                  </ul>
                </div>
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
        .experience {
          position: relative;
        }

        /* Timeline Styles */
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: var(--spacing-xxl) auto;
          padding: var(--spacing-xl) 0;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--primary-gold), var(--sage));
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          padding-left: var(--spacing-md);
        }

        .timeline-marker {
          position: absolute;
          left: 0;
          top: 4px;
          width: 42px;
          height: 42px;
          background: var(--primary-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          box-shadow: 0 4px 12px rgba(183, 167, 122, 0.3);
          z-index: 2;
        }

        .timeline-content {
          flex: 1;
          padding-top: 8px;
          padding-left: var(--spacing-xl);
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary);
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .timeline-label {
          font-size: 1.1rem;
          color: var(--text);
          line-height: 1.6;
          margin: 0;
        }

        /* Experience Grid */
        .experience-grid {
          display: grid;
          gap: var(--spacing-xxl);
          margin-top: var(--spacing-xxl);
        }

        .experience-card {
          padding: var(--spacing-xxl);
          transition: var(--transition-medium);
        }

        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(80, 60, 20, 0.18);
        }

        .experience-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .experience-icon {
          background: var(--primary);
          color: var(--white);
          padding: var(--spacing-md);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-light);
        }

        .experience-title {
          flex: 1;
          min-width: 200px;
        }

        .experience-title h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--primary);
          font-size: 1.8rem;
        }

        .experience-role {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--secondary);
          margin: 0 0 var(--spacing-xs) 0;
        }

        .experience-guild {
          font-size: 1rem;
          font-style: italic;
          color: var(--primary-gold);
          margin: 0;
        }

        .experience-period {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          padding: var(--spacing-xs) var(--spacing-md);
          background: var(--sage);
          border-radius: var(--border-radius);
          white-space: nowrap;
        }

        .experience-description {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: var(--spacing-lg);
        }

        .experience-highlight {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          background: linear-gradient(135deg, rgba(183, 167, 122, 0.1), rgba(201, 184, 142, 0.1));
          border-left: 3px solid var(--primary-gold);
          border-radius: 8px;
          margin-bottom: var(--spacing-lg);
          font-style: italic;
          color: var(--primary);
          font-weight: 500;
        }

        .experience-quests h4 {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: var(--spacing-md);
          font-weight: 600;
        }

        .experience-quests ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .experience-quests li {
          position: relative;
          padding-left: 1.5em;
          margin-bottom: var(--spacing-sm);
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text);
        }

        .experience-quests li:before {
          content: "⚔️";
          position: absolute;
          left: 0;
          top: 0;
        }

        @media (max-width: 768px) {
          .timeline-container {
            padding-left: var(--spacing-md);
          }

          .timeline-line {
            left: 10px;
          }

          .timeline-marker {
            width: 36px;
            height: 36px;
            left: -8px;
          }

          .timeline-content {
            padding-left: var(--spacing-lg);
          }

          .timeline-year {
            font-size: 1.1rem;
          }

          .timeline-label {
            font-size: 1rem;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-period {
            align-self: flex-start;
          }

          .experience-title h3 {
            font-size: 1.5rem;
          }

          .experience-description {
            font-size: 1rem;
          }

          .experience-quests li {
            font-size: 1rem;
          }
        }

        .card::before, .card::after {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Experience;

