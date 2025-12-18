import '../styles/global.css';
import { useState } from 'react';
import logoImg from '../assets/logo.jpeg';
import { getLanguageContent } from '../data/lessonContent';

function LettersPreview({ language }) {
  const content = getLanguageContent(language);
  const letters = content.letters;
  
  // Group letters into rows of 10 for better organization
  const groupedLetters = [];
  for (let i = 0; i < letters.length; i += 10) {
    groupedLetters.push(letters.slice(i, i + 10));
  }
  
  const playSound = (letter) => {
    // In a real implementation, this would play the actual sound
    console.log(`Playing sound for: ${letter}`);
    // For demo purposes, we'll show a notification instead of alert
    const notification = document.createElement('div');
    notification.textContent = `Pronunciation: ${letter}`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#333';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
    
    // Remove after 2 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  };
  
  return (
    <div className="card" style={{ margin: '0', borderRadius: '0', height: '100%', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '15px', padding: '15px 15px 0 15px' }}>🔤 {language} Letters</h2>
      <div style={{ padding: '0 15px 15px 15px', flex: 1, overflowY: 'auto', minHeight: 'calc(100vh - 150px)' }}>
        <p style={{ color: '#666', marginBottom: '15px' }}>Click on any letter to hear its pronunciation</p>
        
        {groupedLetters.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
            {row.map((letter, letterIndex) => (
              <div
                key={`${rowIndex}-${letterIndex}`}
                onClick={() => playSound(letter)}
                style={{
                  background: '#f0f0f0',
                  color: '#333',
                  padding: '20px',
                  borderRadius: '10px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minWidth: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  userSelect: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f0f0f0'}
                onTouchStart={(e) => {
                  e.currentTarget.style.background = '#e0e0e0';
                  playSound(letter);
                }}
                onTouchEnd={(e) => e.currentTarget.style.background = '#f0f0f0'}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Explore({ selectedLanguage, onSelectLanguage, onNavigate }) {
  const languages = [
    { name: 'Spanish', learners: '50M+', difficulty: 'Easy', color: '#38ef7d', pronunciation: 'Español' },
    { name: 'French', learners: '30M+', difficulty: 'Medium', color: '#11998e', pronunciation: 'Français' },
    { name: 'German', learners: '20M+', difficulty: 'Hard', color: '#4facfe', pronunciation: 'Deutsch' },
    { name: 'Italian', learners: '15M+', difficulty: 'Easy', color: '#43e97b', pronunciation: 'Italiano' },
    { name: 'Portuguese', learners: '12M+', difficulty: 'Easy', color: '#38f9d7', pronunciation: 'Português' },
    { name: 'Japanese', learners: '25M+', difficulty: 'Hard', color: '#f5576c', pronunciation: '日本語' },
    { name: 'Chinese', learners: '35M+', difficulty: 'Hard', color: '#fa709a', pronunciation: '中文' },
    { name: 'Korean', learners: '18M+', difficulty: 'Medium', color: '#764ba2', pronunciation: '한국어' },
    { name: 'Tamil', learners: '10M+', difficulty: 'Easy', color: '#ff9a9e', pronunciation: 'தமிழ்' },
    { name: 'Telugu', learners: '9M+', difficulty: 'Easy', color: '#fecfef', pronunciation: 'తెలుగు' },
    { name: 'Arabic', learners: '40M+', difficulty: 'Hard', color: '#fad0c4', pronunciation: 'العربية' },
    { name: 'English', learners: '300M+', difficulty: 'Easy', color: '#667eea', pronunciation: 'English' },
    { name: 'Hindi', learners: '40M+', difficulty: 'Medium', color: '#f093fb', pronunciation: 'हिंदी' },
    { name: 'Russian', learners: '25M+', difficulty: 'Hard', color: '#a1c4fd', pronunciation: 'Русский' },
    { name: 'Turkish', learners: '15M+', difficulty: 'Medium', color: '#d4fc79', pronunciation: 'Türkçe' },
    { name: 'Thai', learners: '20M+', difficulty: 'Hard', color: '#96e6a1', pronunciation: 'ไทย' }
  ];

  const [selected, setSelected] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const onCardClick = (lang) => {
    setSelected(lang);
    onSelectLanguage && onSelectLanguage(lang.name);
    setActiveField(null);
  };

  const handleStartField = (field) => {
    // Check if user is registered for this course
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw) {
        const list = JSON.parse(raw);
        const isRegistered = list.find(course => course.name === selected.name);
        if (isRegistered) {
          setActiveField(field);
          return;
        }
      }
    } catch (e) {}
    
    // If not registered, redirect to register page
    onSelectLanguage && onSelectLanguage(selected.name);
    if (typeof onNavigate === 'function') {
      onNavigate('register');
    }
  };

  const handleInternalBack = () => {
    if (activeField) setActiveField(null);
    else setSelected(null);
  };

  // Render language grid centered
  if (!selected) {
    return (
      <div className="explore-root" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <div className="animate-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '20px' }}> Explore Languages</h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="explore-list" style={{ display: 'grid', width: '100%', maxWidth: '1000px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', paddingBottom: '20px' }}>
              {languages.map((lang, index) => (
                <div key={index} className="explore-card" style={{ 
                  background: 'white',
                  color: '#223033',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  textAlign: 'center',
                  borderRadius: '16px',
                  padding: '18px',
                  boxShadow: '0 8px 24px rgba(8,19,28,0.08)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => onCardClick(lang)}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    background: lang.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    margin: '0 auto 10px'
                  }}>
                    <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{lang.name}</h3>
                  <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>{lang.pronunciation}</p>
                  <p style={{ color: '#6b7176', margin: '0 0 12px 0' }}>{lang.learners} • {lang.difficulty}</p>
                  <button className="btn btn-primary" style={{ width: '100%', fontSize: '14px', padding: '8px 12px' }}>Explore</button>
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
    <div className="explore-root" style={{ maxHeight: '100vh', overflow: 'hidden', height: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      <div className="animate-in" style={{ display: 'flex', gap: '0', padding: '0', alignItems: 'stretch', height: '100%', flex: 1 }}>
        <div className="explore-left-panel" style={{ minWidth: '260px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="card" style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: selected.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: '0 auto 8px'
            }}>
              <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ margin: 0 }}>{selected.name}</h3>
            <p style={{ color: '#666', marginTop: '6px' }}>Choose a section</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', flex: 1 }}>
              <button className={`btn ${activeField === 'letters' ? 'btn-primary' : ''}`} onClick={() => handleStartField('letters')}>🔤 Letters</button>
              <button className={`btn ${activeField === 'words' ? 'btn-success' : ''}`} onClick={() => handleStartField('words')}>📝 Words</button>
              <button className={`btn ${activeField === 'quiz' ? 'btn-warning' : ''}`} onClick={() => handleStartField('quiz')}>❓ Quiz</button>
              <button className={`btn ${activeField === 'stories' ? '' : ''}`} onClick={() => handleStartField('stories')}>📖 Stories</button>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Per request: show nothing here until a section is clicked */}
          {activeField === 'letters' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <LettersPreview language={selected.name} />
            </div>
          )}
          {activeField === 'words' && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div>No access to lesson content without registration.</div>
            </div>
          )}
          {activeField === 'quiz' && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div>No access to lesson content without registration.</div>
            </div>
          )}
          {activeField === 'stories' && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div>No access to lesson content without registration.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;