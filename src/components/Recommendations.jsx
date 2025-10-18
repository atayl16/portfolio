import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Recommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(0);

  const recommendations = [
    {
      name: 'Allison McHenry',
      title: 'CTO, Daily Kos',
      text: 'Of all the engineers I have worked with over a nearly 30-year career, Alisha is one of the first I would call if I needed a Ruby/Rails or Javascript engineer in the future. She is proactive, thoughtful, attentive to detail, a great communicator, and a thoughtful teammate. She moved more quickly and delivered more features than teammates that had a decade more experience than she did. She is product-minded and knows how to ask the right questions to ship the right product, not just any product. She would be an asset to any organization. Please don\'t hesitate to reach out if I can provide more detail or recommend her further.'
    },
    {
      name: 'Adam Whitley',
      title: 'UI/UX Graybeard @ Microsoft',
      text: 'I\'ve managed a large number of engineers all along a wide spectrum of skill level and none of them stand out as brightly as Alisha. She has an enviable grasp on the fundamentals and a dedication to clear and concise code and communication. These attributes alone make her an essential part of any team. Beyond and above all that, she has the perfect temperament for the work. She is methodical and careful where needed and fast and innovative where appropriate. I\'ve not seen her come across a problem she couldn\'t see her way through. She knows how to research and work an issue and when it\'s time to call for assistance. She learns quickly and internalizes the information. She is consistent and reliable even under stress or difficult circumstances. Knowledge and experience can be gained, but this temperament is what separates the good engineers from the great ones and Alisha is a great engineer.'
    },
    {
      name: 'M.N.M Hall',
      title: 'Product & Configuration Specialist at MyTime',
      text: 'I have had such pleasure of working with Alisha for over 6 years and have known her for almost 9 years. she has the amazing ability to manage, create and develop as well as revolutionized new configuration options, and the way our organization has evolved, she was intricate to its growth in so many ways. Alisha is and will always be an Icon to all who know her, he tenacity and drive is near superhuman, the way she gave 110% to any and all task yet always had the best work ethic and empathy to give all the teams she had reported to her with time to answer every question from each person with a huge smile. I\'m grateful and honored to have worked with her on my team always!'
    },
    {
      name: 'Robert Grigore',
      title: 'Director of Engineering @ MyTime',
      text: 'Alisha is one of the most amazing managers I\'ve ever worked with. Being in a startup implies wearing multiple hats, but nobody does it better than her because she wants to be the best at what she does. I\'ve worked with her for over 7 years and seen her manage clients, manage different teams in the company and on top of that also developing new applications. There is nothing she can\'t do if she sets the mind on it.'
    },
    {
      name: 'Fernando Bunn',
      title: 'Senior Software Engineer at DuckDuckGo',
      text: 'Alisha is a great person to work with. She\'s super knowledgeable about everything related to our product, from development process to customer success. Every time she replies anything with "I\'m on it" you can be sure that the task will not only be done, but it will be done by someone who really cares about doing the best out of any situation. I\'m always genuinely happy to work with her in any project.'
    },
    {
      name: 'Razvan Milea',
      title: 'Experienced Technologist & IT partner',
      text: 'Alisha is one of THE GREATEST people I ever had the opportunity of working with. She is a great team player, very knowledgeable in all areas of the product, QA lead, Project Manager, Client retention and training specialist, etc. She manages everyone in the most easy and non intrusive way possible while keeping a smile on her face and putting on yours! She also is very technical and can learn just about ANYTHING in no time. There is no job title to describe here, she just seems to be able to do it all while being the most kind and generous person ever! I recommend Alisha for being a great and knowledgeable team player and a great asset to any company or team!'
    }
  ];

  const nextRecommendation = () => {
    setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentRecommendation((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const goToRecommendation = (index) => {
    setCurrentRecommendation(index);
  };

  const formatRecommendationText = (text) => {
    // Split text into sentences and create paragraphs
    const sentences = text.split('. ').filter(sentence => sentence.trim().length > 0);
    const paragraphs = [];
    let currentParagraph = [];
    
    sentences.forEach((sentence, index) => {
      currentParagraph.push(sentence + (sentence.endsWith('.') ? '' : '.'));
      
      // Create new paragraph every 2-3 sentences or at natural breaks
      if (currentParagraph.length >= 2 && (index === sentences.length - 1 || Math.random() < 0.3)) {
        paragraphs.push(currentParagraph.join(' '));
        currentParagraph = [];
      }
    });
    
    // Add any remaining sentences
    if (currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.join(' '));
    }
    
    return paragraphs;
  };

  const currentRec = recommendations[currentRecommendation];

  return (
    <section id="recommendations" className="section recommendations" aria-label="Recommendations">
      <div className="container">
        <div className="section-header">
          <h2>Fellow Adventurers</h2>
          <p className="section-subtitle">
            Quest logs from companions who have journeyed alongside me
          </p>
        </div>

        <div className="carousel-container">
          <button 
            className="carousel-button prev" 
            onClick={prevRecommendation}
            aria-label="Previous recommendation"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="recommendation-card carousel-card">
            <div className="recommendation-header">
              <div className="recommender-info">
                <h4 className="recommender-name">{currentRec.name}</h4>
                <p className="recommender-title">{currentRec.title}</p>
              </div>
            </div>
            <div className="recommendation-text">
              {formatRecommendationText(currentRec.text).map((paragraph, index) => (
                <p key={index} className="recommendation-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <button 
            className="carousel-button next" 
            onClick={nextRecommendation}
            aria-label="Next recommendation"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="carousel-dots">
          {recommendations.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentRecommendation ? 'active' : ''}`}
              onClick={() => goToRecommendation(index)}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
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
        .recommendations {
          position: relative;
          padding: var(--spacing-3xl) 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--section-header-spacing);
          position: relative;
          z-index: 1;
        }
        .section-header h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: var(--spacing-md);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text);
          opacity: 0.8;
          margin: 0;
          font-style: italic;
        }
        .carousel-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-md);
          position: relative;
          min-height: 400px;
          padding-top: 60px;
        }
        .carousel-button {
          background: var(--forest-green);
          color: var(--white);
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-medium);
          box-shadow: var(--shadow-light);
          flex-shrink: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .carousel-button.prev {
          left: 0;
        }
        .carousel-button.next {
          right: 0;
        }
        .carousel-button:hover {
          background: var(--primary);
          transform: translateY(-50%) scale(1.1);
          box-shadow: var(--shadow-medium);
        }
        .carousel-button:active {
          transform: translateY(-50%) scale(0.95);
        }
        .carousel-button:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
        .recommendation-card {
          background: var(--parchment);
          border: 2px solid var(--sage);
          border-radius: var(--border-radius);
          padding: calc(var(--spacing-xl) * 1.2);
          transition: var(--transition-medium);
          box-shadow: var(--shadow-medium);
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing-lg) * 1.2);
        }
        .carousel-card {
          flex: 1;
          max-width: 800px;
          min-height: 280px;
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-2xl);
          margin-bottom: var(--section-content-spacing);
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--sage);
          background: transparent;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
        }
        .carousel-dot:hover {
          background: var(--sage);
          transform: scale(1.2);
        }
        .carousel-dot.active {
          background: var(--secondary);
          border-color: var(--secondary);
        }
        .carousel-dot:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
        .recommendation-header {
          border-bottom: 2px solid var(--sage);
          padding-bottom: calc(var(--spacing-md) * 1.5);
        }
        .recommender-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary);
          margin: 0 0 var(--spacing-sm) 0;
        }
        .recommender-title {
          font-size: 0.95rem;
          color: var(--forest-green);
          font-weight: 600;
          margin: 0 0 var(--spacing-sm) 0;
        }
        .recommendation-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .recommendation-paragraph {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text);
          margin: 0;
          text-align: left;
        }
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          .carousel-container {
            gap: var(--spacing-sm);
            margin-top: var(--spacing-md);
            min-height: auto;
            padding-top: 0;
            padding-left: 0;
            padding-right: 0;
          }
          .carousel-button {
            display: none;
          }
          .carousel-card {
            min-height: auto;
            max-width: 100%;
          }
          .recommendation-card {
            padding: var(--spacing-lg);
            gap: var(--spacing-lg);
          }
          .recommendation-header {
            padding-bottom: var(--spacing-md);
          }
          .recommender-name {
            font-size: 1.1rem;
            margin-bottom: var(--spacing-xs);
          }
          .recommender-title {
            margin-bottom: var(--spacing-xs);
          }
          .recommendation-text {
            gap: var(--spacing-md);
          }
          .recommendation-paragraph {
            font-size: 0.95rem;
            line-height: 1.7;
          }
          .carousel-dots {
            margin-top: var(--spacing-xl);
          }
          .carousel-dot {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Recommendations;
