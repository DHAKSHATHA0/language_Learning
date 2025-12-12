import "../../styles/global.css";

import { useState, useEffect } from 'react';
function WordsLesson({ onBack, language, onComplete }) {
  const words = [
    { word: 'Apple', translation: 'Manzana', emoji: '🍎' },
    { word: 'Book', translation: 'Libro', emoji: '📚' },
    { word: 'Cat', translation: 'Gato', emoji: '🐱' },
    { word: 'Dog', translation: 'Perro', emoji: '🐕' },
    { word: 'House', translation: 'Casa', emoji: '🏠' },
    { word: 'Water', translation: 'Agua', emoji: '💧' },
    { word: 'Sun', translation: 'Sol', emoji: '☀️' },
    { word: 'Moon', translation: 'Luna', emoji: '🌙' }
  ];

  const [showTranslation, setShowTranslation] = useState({});
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
        <h2 style={{ fontSize: '32px', color: '#11998e', marginBottom: '20px' }}>📝 Learn Words{language ? ` — ${language}` : ''}</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Click on cards to see translations!</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setShowTranslation({...showTranslation, [index]: !showTranslation[index]})}
              className="card"
              style={{
                cursor: 'pointer',
                background: showTranslation[index] ? 'linear-gradient(135deg, #11998e 0%, #315054ff 100%)' : 'white',
                color: showTranslation[index] ? 'white' : '#333',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                transform: showTranslation[index] ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.emoji}</div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{item.word}</h3>
              {showTranslation[index] && (
                <p style={{ fontSize: '18px', opacity: 0.9 }}>{item.translation}</p>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <label style={{ fontWeight: 700 }}>Course Progress: {progress}%</label>
          <input type="range" min="0" max="100" value={progress} onChange={(e)=>setProgress(Number(e.target.value))} style={{ width: '100%', marginTop: 8 }} />
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button className="btn btn-primary" onClick={() => { onComplete && onComplete(progress); setSavedMsg('Saved'); setTimeout(()=>setSavedMsg(''),1400); }}>Save Progress</button>
            <button className="btn" onClick={() => { setProgress(0); onComplete && onComplete(0); }}>Reset</button>
            <div style={{ marginLeft: 'auto', color: '#666', alignSelf: 'center' }}>{savedMsg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordsLesson;
