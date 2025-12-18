import "../../styles/global.css";
import { useState, useEffect } from 'react';
import { getLanguageContent } from '../../data/lessonContent';

// Star celebration component
function StarCelebration({ active }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (active) {
      const newStars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1.5,
        size: 20 + Math.random() * 30
      }));
      setStars(newStars);
      
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

function QuizLesson({ onBack, language, onComplete, onSelectLesson }) {
  const content = getLanguageContent(language);
  const questions = content.quiz;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
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
          if (c.completedLessons && c.completedLessons.includes('quiz')) {
            setLessonCompleted(true);
          }
        }
      }
    } catch (e) {}
  }, [language]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  useEffect(() => {
    if (showResult && !lessonCompleted) {
      const percentage = Math.round((score / questions.length) * 100);
      if (percentage >= 60) { // Pass threshold is 60%
        setLessonCompleted(true);
        setProgress(75);
        
        // Trigger star celebration
        setShowStarCelebration(true);
        
        // Update localStorage
        try {
          const raw = localStorage.getItem('registeredCourses');
          if (raw) {
            const list = JSON.parse(raw);
            const course = list.find(x => x.name === language);
            if (course) {
              course.progress = 75;
              if (!course.completedLessons) course.completedLessons = [];
              if (!course.completedLessons.includes('quiz')) {
                course.completedLessons.push('quiz');
              }
              localStorage.setItem('registeredCourses', JSON.stringify(list));
            }
          }
        } catch (e) {
          console.error('Error updating localStorage:', e);
        }
        
        setTimeout(() => {
          setShowCompletionModal(true);
          if (typeof onComplete === 'function') {
            try { onComplete(); } catch (e) {}
          }
          
          // Auto-navigate to Stories lesson after completion
          setTimeout(() => {
            if (typeof onSelectLesson === 'function') {
              onSelectLesson('stories');
            }
          }, 1500);
        }, 500);
      }
    }
  }, [showResult, score, questions.length, lessonCompleted, onComplete]);

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);

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
                You successfully completed the Quiz lesson and can proceed to the next lesson!
              </p>
              <p style={{ fontSize: '16px', color: '#6B3A6F', fontWeight: 'bold', marginBottom: '30px' }}>
                Progress: 75% Complete
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

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>
            {percentage === 100 ? '🏆' : percentage >= 60 ? '🎉' : '💪'}
          </div>
          <h2 style={{ fontSize: '36px', color: '#398f8e', marginBottom: '20px' }}>
            Quiz Complete!{language ? ` — ${language}` : ''}
          </h2>
          {lessonCompleted && percentage >= 60 && (
            <p style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
              ✓ Quiz Completed! Progress updated (+25%)
            </p>
          )}
          <p style={{ fontSize: '24px', color: '#666', marginBottom: '10px' }}>
            Your Score: {score} / {questions.length}
          </p>
          <p style={{ fontSize: '20px', color: '#999', marginBottom: '10px' }}>
            {percentage}% Correct
          </p>
          {percentage < 60 && (
            <p style={{ color: '#f44336', fontWeight: 'bold', marginBottom: '20px' }}>
              ⚠️ Need 60% or higher to complete this lesson. Try again!
            </p>
          )}
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-success" onClick={resetQuiz}>
              Try Again
            </button>
            <button className="btn btn-primary" onClick={() => { if (typeof onBack === 'function') onBack(); }}>
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
      <div className="animate-in" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px' }}>
      <StarCelebration active={showStarCelebration} />
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>
      
      <div className="card" style={{ background: '#F6D2E7' }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#666', fontSize: '16px' }}>Question {currentQuestion + 1} of {questions.length}</p>
          <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '10px', marginTop: '10px' }}>
            <div style={{ 
              width: `${((currentQuestion + 1) / questions.length) * 100}%`, 
              height: '100%', 
              background: 'linear-gradient(135deg, #ddfbffff 0%, #b4f6ffff 100%)',
              borderRadius: '10px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
        
        <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '30px' }}>
          {questions[currentQuestion].question}
        </h2>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          {questions[currentQuestion].options.map((option, index) => {
            let buttonStyle = {
              padding: '20px',
              fontSize: '18px',
              border: 'none',
              borderRadius: '15px',
              cursor: selectedAnswer !== null ? 'not-allowed' : 'pointer',
              background: '#f0f0f0',
              color: '#333',
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              textAlign: 'left'
            };

            if (selectedAnswer === index) {
              if (index === questions[currentQuestion].correct) {
                buttonStyle.background = 'linear-gradient(135deg, #E8B4D4 0%, #6B3A6F 100%)';
                buttonStyle.color = 'white';
              } else {
                buttonStyle.background = 'linear-gradient(135deg, #6B3A6F 0%, #4a2652 100%)';
                buttonStyle.color = '#E8B4D4';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                style={buttonStyle}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizLesson;