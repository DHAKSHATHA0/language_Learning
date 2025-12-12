import '../styles/global.css';

const coursesList = [
  { name: 'English', flag: '🇬🇧', color: '#667eea' },
  { name: 'Hindi', flag: '🇮🇳', color: '#f093fb' },
  { name: 'French', flag: '🇫🇷', color: '#11998e' },
  { name: 'Korean', flag: '🇰🇷', color: '#764ba2' },
  { name: 'Japanese', flag: '🇯🇵', color: '#f5576c' },
  { name: 'Spanish', flag: '🇪🇸', color: '#38ef7d' }
];

function RegisterCourse({ onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['language'].value;
    const flag = form.elements['flag'].value || '🌐';
    const found = coursesList.find(c => c.name === name);
    const color = found ? found.color : '#667eea';
    onRegister({ name, flag, color });
  };

  return (
    <div className="animate-in">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>Register for a Course</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Fill the form to register a new language course. Registered courses will appear in your Profile.</p>

        <form onSubmit={handleSubmit} className="card">
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700 }}>Language</label>
          <select name="language" required style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
            {coursesList.map(c => (<option key={c.name} value={c.name}>{c.name}</option>))}
          </select>

          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700 }}>Flag (optional)</label>
          <input name="flag" placeholder="e.g. 🇮🇳" style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '12px' }} />

          <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
            <button type="submit" className="btn btn-primary">Register Course</button>
            <button type="button" className="btn" onClick={() => window.history.back()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCourse;
