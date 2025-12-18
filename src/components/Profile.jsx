import '../styles/global.css';
import { useState } from 'react';
import MyCourses from './MyCourses.jsx';
import Footer from './Footer';

function Profile({ userData, onNavigate, registeredCourses = [], onSelectLesson, onSelectLanguage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userData.name || 'User');

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would update the backend here
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onNavigate('landing');
    }
  };

  return (
    <div className="animate-in">
      
      <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '30px' }}>👤 My Profile</h2>
      
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            color: 'white'
          }}>
            👤
          </div>
          
          {isEditing ? (
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ maxWidth: '300px', margin: '0 auto' }}
            />
          ) : (
            <h3 style={{ fontSize: '28px', color: '#333', marginBottom: '10px' }}>{name}</h3>
          )}
          
          <p style={{ color: '#666' }}>{userData.email || 'user@example.com'}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ color: '#666' }}>Member Since</span>
            <span style={{ fontWeight: 'bold', color: '#333' }}>December 2024</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ color: '#666' }}>Languages Learning</span>
            <span style={{ fontWeight: 'bold', color: '#333' }}>3</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ color: '#666' }}>Total XP</span>
            <span style={{ fontWeight: 'bold', color: '#333' }}>2,450</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0' }}>
            <span style={{ color: '#666' }}>Current Streak</span>
            <span style={{ fontWeight: 'bold', color: '#333' }}>12 Days 🔥</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {isEditing ? (
            <>
              <button className="btn btn-success" onClick={handleSave} style={{ flex: 1, minWidth: '120px' }}>
                Save Changes
              </button>
              <button className="btn btn-primary" onClick={() => setIsEditing(false)} style={{ flex: 1, minWidth: '120px' }}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => setIsEditing(true)} style={{ flex: 1, minWidth: '120px' }}>
                Edit Profile
              </button>
              <button 
                className="btn btn-warning" 
                onClick={handleLogout} 
                style={{ flex: 1, minWidth: '120px' }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Registered courses in profile */}
      <div style={{ marginTop: '30px' }}>
        {registeredCourses && registeredCourses.length > 0 ? (
          <MyCourses registeredCourses={registeredCourses} onSelectLesson={onSelectLesson} onSelectLanguage={onSelectLanguage} />
        ) : (
          <div style={{ textAlign: 'center', color: '#666' }}>
            <p>You have not registered for any courses. Go to Home → Get Started to add courses.</p>
          </div>
        )}
      </div>      <Footer />    </div>
  );
}

export default Profile;
