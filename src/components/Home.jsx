import '../styles/global.css';

const languages = [
  { name: 'English', flag: '🇬🇧', color: '#667eea' },
  { name: 'Hindi', flag: '🇮🇳', color: '#f093fb' },
  { name: 'French', flag: '🇫🇷', color: '#11998e' },
  { name: 'Korean', flag: '🇰🇷', color: '#764ba2' },
  { name: 'Japanese', flag: '🇯🇵', color: '#f5576c' },
  ];

function Home({ onNavigate, onSelectLanguage }) {
  return (
    <div className="animate-in" style={{ padding: '40px 20px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', color: '#233', marginBottom: '8px' }}>Welcome to NinjaHub</h1>
        <p style={{ color: '#555', marginBottom: '22px', fontSize: '18px' }}>Start learning languages with curated, interactive lessons.</p>
        <button className="btn btn-primary" onClick={() => onNavigate('register')}>Get Started</button>

        <h2 style={{ marginTop: '40px', marginBottom: '18px', fontSize: '28px' }}>Popular Courses</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '18px' }}>
          {languages.map(lang => (
            <div key={lang.name} className="card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => { onSelectLanguage(lang.name); onNavigate('explore'); }}>
              <div style={{ fontSize: '48px' }}>{lang.flag}</div>
              <h3 style={{ margin: '10px 0' }}>{lang.name}</h3>
              <p style={{ color: '#666' }}>Beginner to advanced</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;