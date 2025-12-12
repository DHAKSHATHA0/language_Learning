import "../../styles/global.css";

import { useState, useEffect } from 'react';
function StoriesLesson({ onBack, language, onComplete }) {
  const stories = [
    {
      title: 'The Little Cat',
      emoji: '🐱',
      content: 'Once upon a time, there was a little cat named Mittens. Mittens loved to play with yarn and chase butterflies in the garden. Every day was a new adventure! One sunny morning, Mittens discovered a colorful butterfly and followed it all day long.',
      level: 'Beginner'
    },
    {
      title: 'A Trip to the Market',
      emoji: '🏪',
      content: 'Maria went to the market to buy fresh fruits. She bought apples, oranges, and bananas. The market was colorful and full of friendly people. She also met her friend Carlos who was selling vegetables.',
      level: 'Beginner'
    },
    {
      title: 'The Magic Book',
      emoji: '📚',
      content: 'In a small library, there was a magic book that could transport readers to different worlds. Every page was a new adventure waiting to be discovered. Children loved reading this special book.',
      level: 'Intermediate'
    },
    {
      title: 'The Friendly Dog',
      emoji: '🐕',
      content: 'There was a friendly dog named Max who lived in a small town. Max loved to help everyone. He would fetch the newspaper for Mr. Johnson and play with the children after school.',
      level: 'Beginner'
    }
  ];

  const [selectedStory, setSelectedStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const [savedMsg, setSavedMsg] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw && language) {
        const list = JSON.parse(raw);
        const c = list.find(x => x.name === language);
        if (c) setProgress(c.progress || 0);
      }
    } catch (e) {}
  }, [language]);

  return (
    <div className="animate-in">

      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>
      
      <div className="card">
        <h2 style={{ fontSize: '32px', color: '#ffffffff', marginBottom: '20px' }}>📖 Read Stories{language ? ` — ${language}` : ''}</h2>
        <p style={{ color: '#315054ff', marginBottom: '30px' }}>Practice reading with fun stories!</p>
        
        {selectedStory === null ? (
          <div style={{ display: 'grid', gap: '20px' }}>
            {stories.map((story, index) => (
              <div
                key={index}
                onClick={() => setSelectedStory(index)}
                className="card"
                style={{
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #378994ff 0%, #b6f3ffff 100%)',
                  color: 'white',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>{story.emoji}</div>
                    <div>
                      <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>{story.title}</h3>
                      <span style={{ 
                        background: 'rgba(255, 255, 255, 0.3)', 
                        padding: '5px 15px', 
                        borderRadius: '15px',
                        fontSize: '14px'
                      }}>
                        {story.level}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '24px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              className="btn btn-primary" 
              onClick={() => setSelectedStory(null)}
              style={{ marginBottom: '20px' }}
            >
              ← Back to Stories
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                {stories[selectedStory].emoji}
              </div>
              <h3 style={{ fontSize: '28px', color: '#333', marginBottom: '10px' }}>
                {stories[selectedStory].title}
              </h3>
              <span style={{ 
                background: 'linear-gradient(135deg, #315054ff 0%, #315054ff 100%)',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {stories[selectedStory].level}
              </span>
            </div>
            <p style={{ 
              fontSize: '20px', 
              lineHeight: '1.8', 
              color: '#333',
              background: '#f9f9f9',
              padding: '30px',
              borderRadius: '15px'
            }}>
              {stories[selectedStory].content}
            </p>
          </div>
        )}
        <div style={{ marginTop: 20 }}>
          <label style={{ fontWeight: 700 }}>Course Progress: {progress}%</label>
          <input type="range" min="0" max="100" value={progress} onChange={(e)=>setProgress(Number(e.target.value))} style={{ width: '100%', marginTop: 8 }} />
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button className="btn btn-primary" onClick={() => { onComplete && onComplete(progress); setSavedMsg('Saved'); setTimeout(()=>setSavedMsg(''),1200); }}>Save Progress</button>
            <button className="btn" onClick={() => { setProgress(0); onComplete && onComplete(0); }}>Reset</button>
            <div style={{ marginLeft: 'auto', color: '#666', alignSelf: 'center' }}>{savedMsg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesLesson;