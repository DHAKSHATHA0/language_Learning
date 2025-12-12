import { useState } from 'react';
import '../styles/global.css';

function Landing({ onNavigate }) {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (key) => {
    setActiveFeature((prev) => (prev === key ? null : key));
  };

  return (
    <div className="landing-root">
      <main className="hero">
        <div className="container animate-in" style={{ textAlign: 'center', maxWidth: '920px' }}>
          <h1 className="hero-title">WELCOME TO NINJAHUB</h1>
          <h1 className="hero-sub">Learn Languages Easily!</h1>
          <p className="hero-sub">Join millions learning new languages with fun, interactive lessons — anywhere, anytime.</p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('signup')}>Get Started</button>
          </div>

          <div className="features" style={{ marginTop: '36px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleFeature('lessons')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFeature('lessons'); }}
              className={`feature-box ${activeFeature === 'lessons' ? 'active' : ''} ${activeFeature && activeFeature !== 'lessons' ? 'dim' : ''}`}
            >
              <div className="feature-emoji">📚</div>
              <p>Fun Lessons</p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleFeature('badges')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFeature('badges'); }}
              className={`feature-box ${activeFeature === 'badges' ? 'active' : ''} ${activeFeature && activeFeature !== 'badges' ? 'dim' : ''}`}
            >
              <div className="feature-emoji">🏆</div>
              <p>Earn Badges</p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleFeature('progress')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFeature('progress'); }}
              className={`feature-box ${activeFeature === 'progress' ? 'active' : ''} ${activeFeature && activeFeature !== 'progress' ? 'dim' : ''}`}
            >
              <div className="feature-emoji">🎯</div>
              <p>Track Progress</p>
            </div>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}

export default Landing;
