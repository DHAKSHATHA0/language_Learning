import '../styles/global.css';
import { useState } from 'react';
import LettersLesson from './Lessons/LetterLesson.jsx';
import WordsLesson from './Lessons/WordsLesson.jsx';
import QuizLesson from './Lessons/QuizLesson.jsx';
import StoriesLesson from './Lessons/StoriesLesson.jsx';

function Explore({ selectedLanguage, onSelectLanguage, onStartLearning }) {
  const languages = [
    { name: 'Spanish', flag: '🇪🇸', learners: '50M+', difficulty: 'Easy', color: '#ffffffff' },
    { name: 'French', flag: '🇫🇷', learners: '30M+', difficulty: 'Medium', color: '#ffffffff' },
    { name: 'German', flag: '🇩🇪', learners: '20M+', difficulty: 'Hard', color: '#ffffffff' },
    { name: 'Italian', flag: '🇮🇹', learners: '15M+', difficulty: 'Easy', color: '#ffffffff' },
    { name: 'Portuguese', flag: '🇵🇹', learners: '12M+', difficulty: 'Easy', color: '#ffffffff' },
    { name: 'Japanese', flag: '🇯🇵', learners: '25M+', difficulty: 'Hard', color: '#ffffffff' },
    { name: 'Chinese', flag: '🇨🇳', learners: '35M+', difficulty: 'Hard', color: '#ffffffff' },
    { name: 'Korean', flag: '🇰🇷', learners: '18M+', difficulty: 'Medium', color: '#ffffffff' },
    { name: 'Tamil', flag: '🇮🇳', learners: '10M+', difficulty: 'Easy', color: '#ffffffff' },
    { name: 'Telugu', flag: '🇮🇳', learners: '9M+', difficulty: 'Easy', color: '#ffffffff' },
    { name: 'Arabic', flag: '🇸🇦', learners: '40M+', difficulty: 'Hard', color: '#ffffffff' }
  ];

  const [selected, setSelected] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const onCardClick = (lang) => {
    setSelected(lang);
    onSelectLanguage && onSelectLanguage(lang.name);
    setActiveField(null);
  };

  const handleStartField = (field) => {
    setActiveField(field);
  };

  const handleInternalBack = () => {
    if (activeField) setActiveField(null);
    else setSelected(null);
  };

  // Render language grid centered
  if (!selected) {
    return (
      <div className="explore-root">
        <div className="animate-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '20px' }}> Explore Languages</h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="explore-list" style={{ display: 'grid', width: '100%', maxWidth: '1000px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {languages.map((lang, index) => (
                <div key={index} className="explore-card" style={{ 
                  background: 'white',
                  color: '#223033',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  textAlign: 'center',
                  borderRadius: '16px',
                  padding: '18px',
                  boxShadow: '0 8px 24px rgba(8,19,28,0.08)',
                  borderTop: `6px solid ${lang.color}`
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => onCardClick(lang)}
                >
                  <div style={{ fontSize: '42px', marginBottom: '10px' }}>{lang.flag}</div>
                  <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{lang.name}</h3>
                  <p style={{ color: '#6b7176', margin: 0 }}>{lang.learners} • {lang.difficulty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Language detail view with left panel and content area
  return (
    <div className="explore-root">
      <div className="animate-in" style={{ display: 'flex', gap: '20px', padding: '20px', alignItems: 'flex-start' }}>
        <div className="explore-left-panel" style={{ minWidth: '260px' }}>
          <div className="card" style={{ padding: '12px' }}>
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>{selected.flag}</div>
            <h3 style={{ margin: 0 }}>{selected.name}</h3>
            <p style={{ color: '#666', marginTop: '6px' }}>Choose a section</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              <button className={`btn ${activeField === 'letters' ? 'btn-primary' : ''}`} onClick={() => handleStartField('letters')}>🔤 Letters</button>
              <button className={`btn ${activeField === 'words' ? 'btn-success' : ''}`} onClick={() => handleStartField('words')}>📝 Words</button>
              <button className={`btn ${activeField === 'quiz' ? 'btn-warning' : ''}`} onClick={() => handleStartField('quiz')}>❓ Quiz</button>
              <button className={`btn ${activeField === 'stories' ? '' : ''}`} onClick={() => handleStartField('stories')}>📖 Stories</button>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {/* Per request: show nothing here until a section is clicked */}
          {activeField === 'letters' && (
            <LettersLesson onBack={() => setActiveField(null)} language={selected.name} />
          )}
          {activeField === 'words' && (
            <WordsLesson onBack={() => setActiveField(null)} language={selected.name} />
          )}
          {activeField === 'quiz' && (
            <QuizLesson onBack={() => setActiveField(null)} language={selected.name} />
          )}
          {activeField === 'stories' && (
            <StoriesLesson onBack={() => setActiveField(null)} language={selected.name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;