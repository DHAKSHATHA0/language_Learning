import "../../styles/global.css";
import { useState, useEffect } from 'react';
import { getLanguageContent } from '../../data/lessonContent';

// Star celebration component
function StarCelebration({ active }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (active) {
      // Create multiple stars
      const newStars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1.5,
        size: 20 + Math.random() * 30
      }));
      setStars(newStars);
      
      // Clear stars after animation
      setTimeout(() => setStars([]), 3500);
    }
  }, [active]);

  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'fixed',
            left: `${star.left}%`,
            top: '-30px',
            fontSize: `${star.size}px`,
            zIndex: 2000,
            animation: `starFall ${star.duration}s linear forwards`,
            animationDelay: `${star.delay}s`,
            pointerEvents: 'none'
          }}
        >
          ⭐
        </div>
      ))}
      <style>{`
        @keyframes starFall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

function StoriesLesson({ onBack, language, onComplete, onNavigate, onSyncCourses, registeredCourses, setRegisteredCourses }) {
  const content = getLanguageContent(language);
  const stories = content.stories;

  const [selectedStory, setSelectedStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showStarCelebration, setShowStarCelebration] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw && language) {
        const list = JSON.parse(raw);
        const c = list.find(x => x.name === language);
        if (c) {
          setProgress(c.progress || 0);
          if (c.completedLessons && c.completedLessons.includes('stories')) {
            setLessonCompleted(true);
          }
        }
      }
    } catch (e) {}
  }, [language]);

  const completeLesson = () => {
    if (!lessonCompleted) {
      setLessonCompleted(true);
      setProgress(100);
      
      // Trigger star celebration
      setShowStarCelebration(true);
      
      // Update localStorage with stars and badge
      try {
        const raw = localStorage.getItem('registeredCourses');
        if (raw) {
          const list = JSON.parse(raw);
          const course = list.find(x => x.name === language);
          if (course) {
            course.progress = 100;
            if (!course.completedLessons) course.completedLessons = [];
            if (!course.completedLessons.includes('stories')) {
              course.completedLessons.push('stories');
            }
            
            // Award 5 stars and badge on course completion
            course.stars = 5;
            course.badge = '🏆';
            course.completed = true;
            
            console.log('✅ Course completed! Stars and badge awarded:', course);
            localStorage.setItem('registeredCourses', JSON.stringify(list));
            
            // Sync updated course data to backend
            if (onSyncCourses) {
              onSyncCourses(list);
            }
          }
        }
      } catch (e) {
        console.error('Error updating localStorage:', e);
      }
      
      setShowCompletionModal(true);
      
      // Call onComplete to trigger state refresh in parent
      setTimeout(() => {
        onComplete && onComplete();
        
        // Auto-navigate after completion (Stories is final lesson, go back to MyCourses)
        setTimeout(() => {
          if (typeof onNavigate === 'function') {
            onNavigate('mycourses');
          }
        }, 1500);
      }, 500);
    } else {
      alert('ℹ️ Stories lesson already completed');
    }
  };

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  return (
    <div className="animate-in" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px' }}>
      
      {/* Star Celebration Animation */}
      <StarCelebration active={showStarCelebration} />

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
              You successfully completed the Stories lesson and finished the entire course!
            </p>
            <p style={{ fontSize: '16px', color: '#667eea', fontWeight: 'bold', marginBottom: '30px' }}>
              Progress: 100% Complete 🏆
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
                background: 'linear-gradient(135deg, #E8B4D4 0%, #6B3A6F 100%)',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <label style={{ fontWeight: 700, color: '#6B3A6F' }}>Course Progress: {progress}%</label>
            {lessonCompleted && <span style={{ color: '#6B3A6F', fontWeight: 'bold' }}>✓ Stories Completed</span>}
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

export default StoriesLesson;