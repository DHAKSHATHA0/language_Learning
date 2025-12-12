import "../../styles/global.css";

import { useState, useEffect } from 'react';
function QuizLesson({ onBack, language, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'What is "Hello" in Spanish?',
      options: ['Hola', 'Bonjour', 'Ciao', 'Hallo'],
      correct: 0
    },
    {
      question: 'What does "Gracias" mean?',
      options: ['Please', 'Thank you', 'Sorry', 'Goodbye'],
      correct: 1
    },
    {
      question: 'What is "Cat" in Spanish?',
      options: ['Perro', 'Pájaro', 'Gato', 'Ratón'],
      correct: 2
    },
    {
      question: 'What is "Good morning" in Spanish?',
      options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hasta luego'],
      correct: 0
    },
    {
      question: 'What does "Agua" mean?',
      options: ['Fire', 'Earth', 'Air', 'Water'],
      correct: 3
    }
  ];

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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    if (showResult) {
      const percentage = Math.round((score / questions.length) * 100);
      if (typeof onComplete === 'function') {
        try { onComplete(percentage); } catch (e) {}
      }
    }
  }, [showResult]);

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    // call onComplete if provided (App passes onComplete)
    try { if (typeof window !== 'undefined' && window && window.dispatchEvent) {} } catch (e) {}
    // call prop if exists
    typeof onBack; // no-op to avoid unused warning
    if (typeof window !== 'undefined' && typeof window.__onCompleteTemp__ === 'function') {
      // noop
    }

    return (
      <div className="animate-in">
        <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
          ← Back to Courses
        </button>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>
            {percentage === 100 ? '🏆' : percentage >= 60 ? '🎉' : '💪'}
          </div>
          <h2 style={{ fontSize: '36px', color: '#315054ff', marginBottom: '20px' }}>
            Quiz Complete!{language ? ` — ${language}` : ''}
          </h2>
          <p style={{ fontSize: '24px', color: '#666', marginBottom: '10px' }}>
            Your Score: {score} / {questions.length}
          </p>
          <p style={{ fontSize: '20px', color: '#999', marginBottom: '30px' }}>
            {percentage}% Correct
          </p>
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
    <div className="animate-in">
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>
      
      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#666', fontSize: '16px' }}>Question {currentQuestion + 1} of {questions.length}</p>
          <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '10px', marginTop: '10px' }}>
            <div style={{ 
              width: `${((currentQuestion + 1) / questions.length) * 100}%`, 
              height: '100%', 
              background: 'linear-gradient(135deg, #d6faffff 0%, #aef6ffff 100%)',
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
                buttonStyle.background = 'linear-gradient(135deg, #315054ff 0%, #315054ff 100%)';
                buttonStyle.color = 'white';
              } else {
                buttonStyle.background = 'linear-gradient(135deg, #315054ff 0%, #315054ff 100%)';
                buttonStyle.color = 'white';
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