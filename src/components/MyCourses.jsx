import '../styles/global.css';
import logoImg from '../assets/logo.jpeg';

function MyCourses({ registeredCourses = [], onSelectLesson, onSelectLanguage, onNavigate }) {
  // Ensure registeredCourses is always an array
  const courses = Array.isArray(registeredCourses) ? registeredCourses : [];
  
  // Debug logging
  console.log('[MyCourses] Rendering with courses:', courses);

  // Calculate days remaining
  const getDaysRemaining = (course) => {
    if (!course.deadline) return null;
    const deadline = new Date(course.deadline);
    const today = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil((deadline - today) / msPerDay);
    return daysLeft;
  };

  // Get deadline warning color
  const getDeadlineColor = (daysRemaining) => {
    if (daysRemaining === null) return '#666';
    if (daysRemaining <= 0) return '#f44336';
    if (daysRemaining <= 5) return '#ff9800';
    if (daysRemaining <= 10) return '#ffc107';
    return '#4caf50';
  };

  // Check if a lesson is completed
  const isLessonCompleted = (course, lessonName) => {
    return course?.completedLessons && course.completedLessons.includes(lessonName);
  };

  // Check if a lesson is accessible based on progression
  const canAccessLesson = (course, lessonName) => {
    const completedLessons = course?.completedLessons || [];
    
    // Letters is always accessible
    if (lessonName === 'letters') return true;
    
    // Words requires letters to be completed
    if (lessonName === 'words') return completedLessons.includes('letters');
    
    // Quiz requires words to be completed
    if (lessonName === 'quiz') return completedLessons.includes('words');
    
    // Stories requires quiz to be completed
    if (lessonName === 'stories') return completedLessons.includes('quiz');
    
    return false;
  };

  // Get button state styling
  const getButtonStyle = (course, lessonName) => {
    const isCompleted = isLessonCompleted(course, lessonName);
    const isAccessible = canAccessLesson(course, lessonName);
    
    if (isCompleted || isAccessible) {
      return {
        background: '#6B3A6F',
        color: 'white',
        opacity: 1,
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      };
    } else {
      return {
        background: '#E8B4D4',
        color: '#6B3A6F',
        opacity: 0.6,
        cursor: 'not-allowed'
      };
    }
  };

  const getLockIcon = (course, lessonName) => {
    const isCompleted = isLessonCompleted(course, lessonName);
    const isAccessible = canAccessLesson(course, lessonName);
    
    if (isCompleted) return '✓';
    if (!isAccessible) return '🔒';
    return '';
  };
  
  return (
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <div style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '45px', color: '#233' }}>📚 My Courses</h2>

        {courses.length === 0 && (
          <div style={{ textAlign: 'center', padding: 30 }}>
            <p style={{fontSize: '22px', color: '#233', marginBottom: '8px'}}>You have not registered for any courses yet.</p>
            <button className="btn btn-primary" onClick={() => onNavigate && onNavigate('register')}>
              Get Started
            </button>
          </div>
        )}

        {courses.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {courses.map((course, idx) => {
              // Ensure course object has required properties
              const courseName = course?.name || `Course ${idx + 1}`;
              const courseProgress = Math.max(0, Math.min(100, course?.progress || 0));
              const daysLeft = getDaysRemaining(course);
              const stars = course?.stars || 0;
              const badge = course?.badge || null;
              
              console.log('[MyCourses] Rendering course:', { courseName, courseProgress });
              
              return (
                <div key={`${courseName}-${idx}`} className="card" style={{ background: course?.completed ? '#F6D2E7' : 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      background: course?.color || '#667eea',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}>
                      <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: 0 }}>{courseName}</h3>
                      <p style={{ color: '#666', marginTop: '6px', marginBottom: '4px' }}>Your registered course</p>
                      {daysLeft !== null && (
                        <p style={{ 
                          color: getDeadlineColor(daysLeft), 
                          marginTop: '4px', 
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          ⏰ {daysLeft} days left
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ marginTop: '12px' }}>
                    <div style={{ height: 10, background: '#E8B4D4', borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
                      <div style={{ width: `${courseProgress}%`, height: '100%', background: 'linear-gradient(135deg, #6B3A6F 0%, #A8D8EA 100%)' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ color: '#6B3A6F', fontSize: 13, fontWeight: '600' }}>{courseProgress}% complete</div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {stars > 0 && <span style={{ fontSize: '16px' }}>{'⭐'.repeat(Math.min(stars, 5))}</span>}
                        {badge && <span style={{ fontSize: '16px' }}>🏆</span>}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap' }}>
                    <button 
                      className="btn"
                      style={getButtonStyle(course, 'letters')}
                      onClick={() => { 
                        if (canAccessLesson(course, 'letters')) {
                          console.log('[MyCourses] Navigating to letters for:', courseName);
                          onSelectLanguage && onSelectLanguage(courseName); 
                          onSelectLesson && onSelectLesson('letters');
                        }
                      }}
                      disabled={!canAccessLesson(course, 'letters')}
                    >
                      🔤 Letters {getLockIcon(course, 'letters')}
                    </button>
                    <button 
                      className="btn"
                      style={getButtonStyle(course, 'words')}
                      onClick={() => {
                        if (canAccessLesson(course, 'words')) {
                          console.log('[MyCourses] Navigating to words for:', courseName);
                          onSelectLanguage && onSelectLanguage(courseName); 
                          onSelectLesson && onSelectLesson('words');
                        }
                      }}
                      disabled={!canAccessLesson(course, 'words')}
                      title={!canAccessLesson(course, 'words') ? 'Complete Letters lesson first' : ''}
                    >
                      📝 Words {getLockIcon(course, 'words')}
                    </button>
                    <button 
                      className="btn"
                      style={getButtonStyle(course, 'quiz')}
                      onClick={() => {
                        if (canAccessLesson(course, 'quiz')) {
                          console.log('[MyCourses] Navigating to quiz for:', courseName);
                          onSelectLanguage && onSelectLanguage(courseName); 
                          onSelectLesson && onSelectLesson('quiz');
                        }
                      }}
                      disabled={!canAccessLesson(course, 'quiz')}
                      title={!canAccessLesson(course, 'quiz') ? 'Complete Words lesson first' : ''}
                    >
                      ❓ Quiz {getLockIcon(course, 'quiz')}
                    </button>
                    <button 
                      className="btn"
                      style={getButtonStyle(course, 'stories')}
                      onClick={() => {
                        if (canAccessLesson(course, 'stories')) {
                          console.log('[MyCourses] Navigating to stories for:', courseName);
                          onSelectLanguage && onSelectLanguage(courseName); 
                          onSelectLesson && onSelectLesson('stories');
                        }
                      }}
                      disabled={!canAccessLesson(course, 'stories')}
                      title={!canAccessLesson(course, 'stories') ? 'Complete Quiz lesson first' : ''}
                    >
                      📖 Stories {getLockIcon(course, 'stories')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCourses;