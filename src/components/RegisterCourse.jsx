import { useState } from 'react';
import { userAPI } from '../api/client';
import '../styles/global.css';

const coursesList = [
  { name: 'English', emoji: '🗣️', color: '#667eea' },
  { name: 'Hindi', emoji: '🗣️', color: '#f093fb' },
  { name: 'French', emoji: '🗣️', color: '#11998e' },
  { name: 'Korean', emoji: '🗣️', color: '#764ba2' },
  { name: 'Japanese', emoji: '🗣️', color: '#f5576c' },
  { name: 'Spanish', emoji: '🗣️', color: '#38ef7d' },
  { name: 'German', emoji: '🗣️', color: '#4facfe' },
  { name: 'Italian', emoji: '🗣️', color: '#43e97b' },
  { name: 'Portuguese', emoji: '🗣️', color: '#38f9d7' },
  { name: 'Chinese', emoji: '🗣️', color: '#fa709a' },
  { name: 'Tamil', emoji: '🗣️', color: '#ff9a9e' },
  { name: 'Telugu', emoji: '🗣️', color: '#fecfef' },
  { name: 'Arabic', emoji: '🗣️', color: '#fad0c4' },
  { name: 'Russian', emoji: '🗣️', color: '#a1c4fd' },
  { name: 'Turkish', emoji: '🗣️', color: '#d4fc79' },
  { name: 'Thai', emoji: '🗣️', color: '#96e6a1' }
];

function RegisterCourse({ onRegister, selectedLanguage, onNavigate }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [daysToComplete, setDaysToComplete] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!daysToComplete || parseInt(daysToComplete) <= 0) {
      setError('Please enter a valid number of days to complete this course');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    const form = e.target;
    const name = form.elements['language'].value;
    const found = coursesList.find(c => c.name === name);
    const color = found ? found.color : '#66d0eaff';
    
    // Check if course is already registered in localStorage
    try {
      const registeredCoursesRaw = localStorage.getItem('registeredCourses');
      if (registeredCoursesRaw) {
        const registeredCourses = JSON.parse(registeredCoursesRaw);
        if (registeredCourses.some(c => c.name === name)) {
          setError('You have already registered this course!');
          setIsSubmitting(false);
          return;
        }
      }
    } catch (e) {
      console.warn('Could not check registered courses:', e);
    }
    
    // Calculate deadline
    const startDate = new Date();
    const deadline = new Date(startDate.getTime() + parseInt(daysToComplete) * 24 * 60 * 60 * 1000);
    const daysRemaining = parseInt(daysToComplete);

    const courseData = { 
      name, 
      color,
      daysToComplete: parseInt(daysToComplete),
      startDate: startDate.toISOString(),
      deadline: deadline.toISOString(),
      daysRemaining: daysRemaining,
      completed: false,
      stars: 0,
      badge: null,
      progress: 0,
      completedLessons: []
    };
    
    try {
      // Allow registration without login - store in localStorage
      const token = localStorage.getItem('token');
      
      if (token) {
        // If logged in, register with backend using API client - pass only name and color
        try {
          await userAPI.registerCourse(name, color);
        } catch (apiError) {
          console.warn('Backend registration failed:', apiError);
          // Continue with local registration anyway
        }
      }
      
      // Always update localStorage
      try {
        const registeredCoursesRaw = localStorage.getItem('registeredCourses');
        const registeredCourses = registeredCoursesRaw ? JSON.parse(registeredCoursesRaw) : [];
        registeredCourses.push(courseData);
        localStorage.setItem('registeredCourses', JSON.stringify(registeredCourses));
      } catch (storageError) {
        console.error('Failed to save to localStorage:', storageError);
      }
      
      setSuccess('Course registered successfully! You have ' + daysToComplete + ' days to complete it.');
      onRegister(courseData);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setDaysToComplete('');
      }, 1500);
    } catch (error) {
      console.error('Registration error:', error);
      
      let errorMessage = 'Failed to register course';
      if (error.message === 'Failed to fetch') {
        errorMessage = 'Unable to connect to server. Please try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>Register for a Course</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Fill the form to register a new language course. Registered courses will appear in your Profile.</p>

        <form onSubmit={handleSubmit} className="card">
          {error && (
            <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#fee', border: '1px solid #fcc', borderRadius: '8px', color: '#c33' }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#efe', border: '1px solid #cfc', borderRadius: '8px', color: '#3c3' }}>
              {success}
            </div>
          )}

          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700 }}>Language</label>
          <select name="language" required style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '16px' }} defaultValue={selectedLanguage || ''}>
            <option value="">Select a language</option>
            {coursesList.map(c => (<option key={c.name} value={c.name}>{c.name}</option>))}
          </select>

          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700 }}>Days to Complete This Course</label>
          <input 
            type="number" 
            value={daysToComplete}
            onChange={(e) => setDaysToComplete(e.target.value)}
            placeholder="e.g. 30" 
            min="1"
            max="365"
            required
            style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '12px' }} 
          />
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>⏰ You'll be reminded as your deadline approaches. Complete the course to earn ⭐ stars and 🏆 badges!</p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register Course'}
            </button>
            <button type="button" className="btn" onClick={() => onNavigate && onNavigate('home')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCourse;
