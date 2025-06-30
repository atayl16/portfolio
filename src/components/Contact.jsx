import { Mail, Linkedin, Github, MapPin, Send, Heart } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleEmailClick = e => {
    // ... existing code ...
  };

  const handleLinkedInClick = e => {
    // ... existing code ...
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'inspirebyexample0@gmail.com',
      link: 'mailto:inspirebyexample0@gmail.com',
      description: 'Direct communication for opportunities',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/alisha-t-098785180',
      link: 'https://www.linkedin.com/in/alisha-t-098785180/',
      description: 'Professional network and updates',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/atayl16',
      link: 'https://github.com/atayl16',
      description: 'Code repositories and contributions',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'US citizen (open to remote worldwide, US/UK time zone–friendly preferred)',
      link: null,
      description: '',
    },
  ];

  return (
    <section id="contact" className="section contact" style={{
      '--section-bg': '#f6f3ee',
      '--section-bg2': '#f5f9f7'
    }}>
      <div className="container">
        <div className="section-header">
          <h2>Let's Connect</h2>
          <p className="contact-intro-text">
            Interested in working together or have an opportunity? Reach out via
            email, LinkedIn, or GitHub below!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info centered-contact">
            <div className="contact-intro">
              <h3>Let's Build Something Amazing</h3>
              <p>
                I'm actively seeking remote opportunities in productivity tools, 
                ethical tech, open-source, and meaningful projects. I hope to find 
                purpose in my work while avoiding roles involving NSFW content, 
                gambling, insurance, or lending/interest.
              </p>
              <div className="contact-preferences">
                <h4>What I'm Looking For:</h4>
                <ul>
                  <li>🌍 Open source projects</li>
                  <li>💚 Mission-driven organizations</li>
                  <li>🏠 Remote-first opportunities</li>
                  <div className="salary-range">
                    💰 $100k–$130k USD (flexible for mission-driven teams)
                  </div>
                  <li>⏰ US/UK time zone–friendly preferred</li>
                </ul>
              </div>
            </div>

            <div className="contact-methods">
              {contactMethods.map(method => (
                <div className="method" key={method.title}>
                  <div className="method-icon">
                    {method.icon && <method.icon />}
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="method-link"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-value">{method.value}</span>
                    )}
                    <p>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        .contact-content {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
        }
        .centered-contact {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-methods {
          margin-top: var(--spacing-xl);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
          width: 100%;
        }
        .method {
          display: flex;
          gap: var(--spacing-lg);
          padding: var(--spacing-xl);
          background: var(--parchment);
          border-radius: var(--border-radius);
          border: 2px solid var(--sage);
          transition: var(--transition-medium);
          box-shadow: var(--shadow-light);
        }
        .method:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
          border-color: var(--primary);
        }
        .method-icon {
          background: var(--forest-green);
          color: var(--white);
          padding: var(--spacing-md);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          box-shadow: var(--shadow-light);
        }
        .method-content {
          flex: 1;
        }
        .method-content h4 {
          margin-bottom: var(--spacing-sm);
          color: var(--primary);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .method-link,
        .method-value {
          display: block;
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          margin-bottom: var(--spacing-xs);
          font-size: 1rem;
          transition: var(--transition-fast);
        }
        .method-link:hover {
          color: var(--secondary);
          text-decoration: underline;
        }
        .method-content p {
          font-size: 0.9rem;
          color: var(--text);
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .contact-methods {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
