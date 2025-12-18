import "../../styles/global.css";
import { useState, useEffect } from 'react';
import { getLanguageContent } from '../../data/lessonContent';

function WordsLesson({ onBack, language, onComplete, onSelectLesson }) {
  const content = getLanguageContent(language);
  const words = content.words;

  const [showTranslation, setShowTranslation] = useState({});
  const [progress, setProgress] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.8;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw && language) {
        const list = JSON.parse(raw);
        const c = list.find(x => x.name === language);
        if (c) {
          setProgress(c.progress || 0);
          if (c.completedLessons && c.completedLessons.includes('words')) {
            setLessonCompleted(true);
          }
        }
      }
    } catch (e) {}
  }, [language]);

  const completeLesson = () => {
    if (!lessonCompleted) {
      setLessonCompleted(true);
      setProgress(50);
      
      // Update localStorage
      try {
        const raw = localStorage.getItem('registeredCourses');
        if (raw) {
          const list = JSON.parse(raw);
          const course = list.find(x => x.name === language);
          if (course) {
            course.progress = 50;
            if (!course.completedLessons) course.completedLessons = [];
            if (!course.completedLessons.includes('words')) {
              course.completedLessons.push('words');
            }
            localStorage.setItem('registeredCourses', JSON.stringify(list));
          }
        }
      } catch (e) {
        console.error('Error updating localStorage:', e);
      }
      
      setShowCompletionModal(true);
      onComplete && onComplete();
      
      // Auto-navigate to Quiz lesson after completion
      setTimeout(() => {
        if (typeof onSelectLesson === 'function') {
          onSelectLesson('quiz');
        }
      }, 1500);
    } else {
      alert('ℹ️ Words lesson already completed');
    }
  };

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  return (
    <div className="animate-in" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px' }}>
      
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>

      {showCompletionModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#F6D2E7',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '500px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{ color: '#6B3A6F', marginBottom: '20px', fontSize: '28px' }}>
              🎉 Congratulations!
            </h2>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
              You successfully completed the Words lesson and can proceed to the next lesson!
            </p>
            <p style={{ fontSize: '16px', color: '#398f8e', fontWeight: 'bold', marginBottom: '30px' }}>
              Progress: 50% Complete
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleCloseModal}
              style={{ padding: '12px 30px', fontSize: '16px' }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      
      <div className="card" style={{ background: '#F6D2E7' }}>
        <h2 style={{ fontSize: '32px', color: '#398f8e', marginBottom: '20px' }}>📝 Learn Words{language ? ` — ${language}` : ''}</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Click on cards to see translations!</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setShowTranslation({...showTranslation, [index]: !showTranslation[index]});
                speakWord(item.word);
              }}
              className="card"
              style={{
                cursor: 'pointer',
                background: showTranslation[index] ? 'linear-gradient(135deg, #E8B4D4 0%, #6B3A6F 100%)' : 'white',
                color: showTranslation[index] ? 'white' : '#333',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                transform: showTranslation[index] ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.emoji}</div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{item.word}</h3>
              {showTranslation[index] && (
                <>
                  <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '8px' }}><strong>{item.translation}</strong></p>
                  {item.englishMeaning && <p style={{ fontSize: '14px', opacity: 0.85, marginBottom: '6px' }}>{item.englishMeaning}</p>}
                  {item.englishPronunciation && <p style={{ fontSize: '13px', opacity: 0.8, fontStyle: 'italic' }}>Pronunciation: {item.englishPronunciation}</p>}
                </>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <label style={{ fontWeight: 700, color: '#6B3A6F' }}>Course Progress: {progress}%</label>
            {lessonCompleted && <span style={{ color: '#6B3A6F', fontWeight: 'bold' }}>✓ Words Completed</span>}
          </div>
          <div style={{ height: 12, background: '#E8B4D4', borderRadius: 8, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(135deg, #6B3A6F 0%, #A8D8EA 100%)', transition: 'width 0.5s ease' }} />
          </div>
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button 
              className={lessonCompleted ? "btn btn-success" : "btn btn-primary"} 
              onClick={completeLesson}
              disabled={!language}
            >
              {lessonCompleted ? '✓ Completed' : 'Complete Lesson'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordsLesson;
