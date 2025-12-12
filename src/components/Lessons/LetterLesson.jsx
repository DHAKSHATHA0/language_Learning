import "../../styles/global.css";

import { useState, useEffect } from 'react';
function LettersLesson({ onBack, language, onComplete }) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  const [selectedLetter, setSelectedLetter] = useState(null);
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

  const saveProgress = () => {
    onComplete && onComplete(progress);
    setSavedMsg('Progress saved');
    setTimeout(() => setSavedMsg(''), 1800);
  };

  return (
    <div className="animate-in">
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>

      <div className="card">
        <h2 style={{ fontSize: '32px', color: '#315054ff', marginBottom: '20px' }}>🔤 Learn Letters{language ? ` — ${language}` : ''}</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Click on any letter to learn more!</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '15px' }}>
          {letters.map(letter => (
            <div
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              style={{
                background: selectedLetter === letter ? 'linear-gradient(135deg, #ddfbffff 0%, #b4f6ffff 100%)' : '#f0f0f0',
                color: selectedLetter === letter ? 'white' : '#333',
                padding: '25px',
                borderRadius: '15px',
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedLetter === letter ? '0 5px 15px #315054ff' : 'none'
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {selectedLetter && (
          <div style={{ marginTop: '30px', textAlign: 'center', padding: '20px', background: '#f9f9f9', borderRadius: '15px' }}>
            <p style={{ fontSize: '24px', color: '#315054ff', fontWeight: 'bold' }}>
              Letter: {selectedLetter}
            </p>
            <p style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>
              Pronunciation: "{selectedLetter.toLowerCase()}"
            </p>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <label style={{ fontWeight: 700 }}>Course Progress: {progress}%</label>
          <input type="range" min="0" max="100" value={progress} onChange={(e)=>setProgress(Number(e.target.value))} style={{ width: '100%', marginTop: 8 }} />
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button className="btn btn-primary" onClick={saveProgress}>Save Progress</button>
            <button className="btn" onClick={() => { setProgress(0); onComplete && onComplete(0); }}>Reset</button>
            <div style={{ marginLeft: 'auto', color: '#666', alignSelf: 'center' }}>{savedMsg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LettersLesson;