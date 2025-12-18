import '../styles/global.css';
import { useState, useEffect } from 'react';
import Footer from './Footer';

function Settings({ userData = {}, settingsView, onUpdate, onNavigate, registeredCourses = [] }) {
  const [view, setView] = useState(settingsView || 'profile'); // 'profile' | 'badges' | 'about'
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    if (settingsView) setView(settingsView);
  }, [settingsView]);

  useEffect(() => {
    // Get all courses with badges from registeredCourses (not just completed ones)
    if (Array.isArray(registeredCourses)) {
      const withBadges = registeredCourses.filter(c => c.badge);
      setCompletedCourses(withBadges);
    }
  }, [registeredCourses]);

  const validate = () => {
    if (!name || name.trim().length < 2) return 'Name must be at least 2 characters.';
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (!re.test(email)) return 'Please enter a valid email address.';
    if (password && password.length < 6) return 'Password must be 6+ characters.';
    return null;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setMessage({ type: 'error', text: err }); return; }
    onUpdate && onUpdate({ name: name.trim(), email: email.trim() });
    if (password) {
      try { localStorage.setItem('pwd_placeholder', btoa(password)); } catch (e) {}
    }
    setMessage({ type: 'success', text: 'Settings saved.' });
    setPassword('');
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <div style={{ width: '100%', maxWidth: 760, padding: 20 }}>
          <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '20px', textAlign: 'center' }}>⚙️ Settings</h2>

        <div style={{ maxWidth: 900 }}>
          {view === 'profile' && (
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ marginTop: 0 }}>Profile Details</h3>
              <button className="btn" onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit'}</button>
            </div>

            {!isEditing ? (
              <div>
                <p><strong>Name:</strong> {userData.name || '—'}</p>
                <p><strong>Email:</strong> {userData.email || '—'}</p>
                <p style={{ color: '#666', marginTop: 12 }}>Use the Edit button to update your details.</p>
              </div>
            ) : (
              <div>
                {message && (
                  <div style={{ marginBottom: 12, color: message.type === 'error' ? '#c0392b' : '#1e8449' }}>{message.text}</div>
                )}
                <form onSubmit={handleSave}>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 700 }}>Name</label>
                  <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} />

                  <label style={{ display: 'block', marginTop: 12, marginBottom: 8, fontWeight: 700 }}>Email</label>
                  <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />

                  <label style={{ display: 'block', marginTop: 12, marginBottom: 8, fontWeight: 700 }}>Password (optional)</label>
                  <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />

                  <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn" onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {view === 'badges' && (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>🏆 Badges & Achievements</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Completed courses and earned badges:</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
              {completedCourses.length > 0 ? (
                completedCourses.map((course, idx) => (
                  <div key={idx} style={{ 
                    textAlign: 'center',
                    padding: '16px',
                    background: '#f9f9f9',
                    borderRadius: '12px',
                    border: '2px solid #6B3A6F'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
                    <h4 style={{ margin: '8px 0', color: '#333' }}>{course.name}</h4>
                    <div style={{ fontSize: '16px', marginBottom: '4px' }}>{'⭐'.repeat(course.stars || 0)}</div>
                    <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Completed</p>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
                  <p style={{ color: '#999' }}>No badges earned yet. Complete courses to earn 🏆 badges!</p>
                </div>
              )}
            </div>
            
            <p style={{ color: '#999', fontSize: '14px', marginTop: '20px' }}>💡 Complete all lessons in a course within the deadline to earn ⭐ stars and unlock 🏆 badges!</p>
          </div>
        )}

        {view === 'about' && (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>About this website</h3>
            <p style={{ color: '#666' }}>This is a demo language learning app. Settings and progress are stored locally in your browser for demonstration.</p>
          </div>
        )}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
