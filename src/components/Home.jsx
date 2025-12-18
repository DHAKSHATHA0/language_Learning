import '../styles/global.css';
import logoImg from '../assets/logo.jpeg';
import Footer from './Footer';

const languages = [
  { name: 'English', color: '#667eea', pronunciation: 'English' },
  { name: 'Hindi', color: '#f093fb', pronunciation: 'Hindi (हिंदी)' },
  { name: 'French', color: '#11998e', pronunciation: 'Français' },
  { name: 'Korean', color: '#764ba2', pronunciation: '한국어' },
  { name: 'Japanese', color: '#f5576c', pronunciation: '日本語' },
  { name: 'Spanish', color: '#38ef7d', pronunciation: 'Español' },
  { name: 'German', color: '#4facfe', pronunciation: 'Deutsch' },
  { name: 'Italian', color: '#43e97b', pronunciation: 'Italiano' },
  { name: 'Portuguese', color: '#38f9d7', pronunciation: 'Português' },
  { name: 'Chinese', color: '#fa709a', pronunciation: '中文' }
];

function Home({ onNavigate, onSelectLanguage }) {
  return (
    <div className="animate-in" style={{ padding: '40px 20px', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', color: '#233', marginBottom: '8px' }}>Welcome to NinjaHub</h1>
        <p style={{ color: '#555', marginBottom: '22px', fontSize: '18px' }}>Start learning languages with curated, interactive lessons.</p>
        <button className="btn btn-primary" onClick={() => onNavigate('register')}>Get Started</button>

        <h2 style={{ marginTop: '40px', marginBottom: '18px', fontSize: '28px' }}>Popular Courses</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '18px', paddingBottom: '20px' }}>
          {languages.map(lang => (
            <div key={lang.name} className="card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => { onSelectLanguage(lang.name); onNavigate('register'); }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: lang.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                margin: '0 auto 10px'
              }}>
                <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ margin: '10px 0' }}>{lang.name}</h3>
              <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>{lang.pronunciation}</p>
              <p style={{ color: '#666', marginBottom: '12px' }}>Beginner to advanced</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>Explore</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;