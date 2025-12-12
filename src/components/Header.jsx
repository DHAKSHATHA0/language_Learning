import React from 'react';
import logoImg from '../assets/logo.jpeg';
import '../styles/global.css';

function Header({ page, onNavigate, onBack, registeredCourses = [], onNavigateProgress, onSettingsNavigate, onLogout }) {
  // Determine which buttons to show based on current page
  const renderRightButtons = () => {
    // For landing page show Login and Sign Up
    if (page === 'landing') {
      return (
        <>
          <button className="btn btn-link" onClick={() => onNavigate('login')}>Login</button>
          <button className="btn btn-primary" onClick={() => onNavigate('signup')}>Sign Up</button>
        </>
      );
    }
    // For login page show only Sign Up (opposite action)
    if (page === 'login') {
      return (
        <>
          <button className="btn btn-link" onClick={() => onNavigate('signup')}>Sign Up</button>
        </>
      );
    }

    // For signup page show only Login
    if (page === 'signup') {
      return (
        <>
          <button className="btn btn-link" onClick={() => onNavigate('login')}>Login</button>
        </>
      );
    }

    // For home/explore show Home, Explore, My Courses and Settings (no Progress)
    if (page === 'home' || page === 'explore') {
      return (
        <>
          <button className="btn btn-outline" onClick={() => onNavigate('home')}>Home</button>
          <button className="btn btn-outline" onClick={() => onNavigate('explore')}>Explore</button>
          <button className="btn btn-outline" onClick={() => onNavigate('mycourses')}>My Courses</button>
          <button className="btn btn-outline" onClick={() => onNavigate('settings')}>Settings</button>
        </>
      );
    }

    // For My Courses page show Progress here
    if (page === 'mycourses') {
      return (
        <>
          <button className="btn btn-outline" onClick={() => onNavigate('home')}>Home</button>
          <button className="btn btn-outline" onClick={() => onNavigate('explore')}>Explore</button>
          <button className="btn btn-outline" onClick={() => onNavigate('settings')}>Settings</button>
          <button className="btn btn-outline" onClick={() => onNavigateProgress && onNavigateProgress() }>
            Progress {registeredCourses && registeredCourses.length > 0 ? `(${Math.round((registeredCourses.reduce((s,c)=>s+(c.progress||0),0))/(registeredCourses.length||1))}%)` : ''}
          </button>
        </>
      );
    }

    // Settings page: show Profile, About and Logout buttons (these act as the settings sub-menu)
    if (page === 'settings') {
      return (
        <>
          <button className="btn btn-outline" onClick={() => onSettingsNavigate && onSettingsNavigate('profile')}>Profile</button>
          <button className="btn btn-outline" onClick={() => onSettingsNavigate && onSettingsNavigate('about')}>About</button>
          <button className="btn btn-outline" onClick={() => onLogout && onLogout()}>Logout</button>
        </>
      );
    }

    // Other pages: show core nav + settings
    return (
      <>
        <button className="btn btn-outline" onClick={() => onNavigate('home')}>Home</button>
        <button className="btn btn-outline" onClick={() => onNavigate('explore')}>Explore</button>
        <button className="btn btn-outline" onClick={() => onNavigate('mycourses')}>My Courses</button>
        <button className="btn btn-outline" onClick={() => onNavigate('settings')}>Settings</button>
      </>
    );
  };

  return (
    <header className="site-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Back arrow - unobtrusive */}
        <button className="back-btn" onClick={() => onBack && onBack()} aria-label="Back">◀</button>

        <button className="logo-btn" onClick={() => onNavigate('landing')} aria-label="Home">
          <div className="logo-inner">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </div>
        </button>
      </div>

      <div className="auth-buttons">
        {renderRightButtons()}
      </div>
    </header>
  );
}

export default Header;
