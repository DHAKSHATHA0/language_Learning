import { useState } from "react";

import Landing from "./components/Landing.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import MyCourses from "./components/MyCourses.jsx";
import RegisterCourse from "./components/RegisterCourse.jsx";
import LetterLesson from "./components/Lessons/LetterLesson.jsx";
import WordsLesson from "./components/Lessons/WordsLesson.jsx";
import QuizLesson from "./components/Lessons/QuizLesson.jsx";
import StoriesLesson from "./components/Lessons/StoriesLesson.jsx";
import Profile from "./components/Profile.jsx";
import Explore from "./components/Explore.jsx";
import Header from "./components/Header.jsx";
import Progress from "./components/Progress.jsx";
import Settings from "./components/Settings.jsx";

function App() {
  const [page, setPage] = useState("landing");
  const [history, setHistory] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    try {
      const raw = localStorage.getItem('registeredCourses');
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  });
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [userData, setUserData] = useState(() => {
    try {
      const raw = localStorage.getItem('userData');
      return raw ? JSON.parse(raw) : { name: 'User', email: '' };
    } catch (e) { return { name: 'User', email: '' }; }
  });
  const [settingsView, setSettingsView] = useState('profile');

  const handleNavigate = (p) => {
    if (p === page) return;
    // push current page to history before navigating (except landing->landing)
    setHistory((h) => {
      const next = [...h, page];
      // keep history length reasonable
      return next.slice(-50);
    });
    setPage(p);
  };

  const registerCourse = (course) => {
    setRegisteredCourses((prev) => {
      if (prev.find(c => c.name === course.name)) return prev;
      const newList = [...prev, { ...course, progress: 0 }];
      try { localStorage.setItem('registeredCourses', JSON.stringify(newList)); } catch (e) {}
      return newList;
    });
  };

  const updateCourseProgress = (courseName, progressValue) => {
    setRegisteredCourses((prev) => {
      const next = prev.map(c => c.name === courseName ? { ...c, progress: Math.max(0, Math.min(100, progressValue)) } : c);
      try { localStorage.setItem('registeredCourses', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const updateUserData = (newData) => {
    setUserData((prev) => {
      const merged = { ...prev, ...newData };
      try { localStorage.setItem('userData', JSON.stringify(merged)); } catch (e) {}
      return merged;
    });
  };

  const logout = () => {
    try { localStorage.removeItem('userData'); localStorage.removeItem('registeredCourses'); } catch (e) {}
    setUserData({ name: 'User', email: '' });
    setRegisteredCourses([]);
    setHistory([]);
    setPage('landing');
  };

  const navigateToSettingsView = (view) => {
    setSettingsView(view || 'profile');
    handleNavigate('settings');
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleBack = () => {
    setHistory((h) => {
      if (!h || h.length === 0) {
        setPage('landing');
        return [];
      }
      const newHistory = [...h];
      const prev = newHistory.pop();
      setPage(prev || 'landing');
      return newHistory;
    });
  };

  return (
    <div className="app-bg">
      <Header page={page} onNavigate={handleNavigate} onBack={handleBack} registeredCourses={registeredCourses} onNavigateProgress={() => handleNavigate('progress')} onSettingsNavigate={navigateToSettingsView} onLogout={logout} />

      {page === "landing" && <Landing onNavigate={handleNavigate} />}
      {page === "login" && <Login onNavigate={handleNavigate} onLogin={() => {}} />}
      {page === "signup" && <Signup onNavigate={handleNavigate} onSignup={() => {}} />}
      {page === "home" && <Home onNavigate={handleNavigate} onSelectLanguage={selectLanguage} />}
      {page === "register" && <RegisterCourse onRegister={(c) => { registerCourse(c); setPage('home'); }} />}
      {page === "explore" && <Explore selectedLanguage={selectedLanguage} onSelectLanguage={selectLanguage} onStartLearning={(lang) => { selectLanguage(lang); registerCourse({ name: lang, flag: '🌐', color: 'rgb(187, 233, 255)' }); setPage('letters'); }} />}
      {page === 'profile' && <Profile userData={userData} registeredCourses={registeredCourses} onSelectLesson={(lesson) => setPage(lesson)} onSelectLanguage={selectLanguage} onNavigate={handleNavigate} />}
      {page === 'mycourses' && <MyCourses registeredCourses={registeredCourses} onSelectLesson={(lesson) => setPage(lesson)} onSelectLanguage={selectLanguage} onNavigate={handleNavigate} />}

      {page === 'progress' && <Progress registeredCourses={registeredCourses} />}
      {page === 'settings' && <Settings userData={userData} settingsView={settingsView} onUpdate={updateUserData} onNavigate={handleNavigate} />}

      {page === "letters" && <LetterLesson onBack={() => setPage("home")} language={selectedLanguage} onComplete={(p) => updateCourseProgress(selectedLanguage, p)} />}
      {page === "words" && <WordsLesson onBack={() => setPage("home")} language={selectedLanguage} onComplete={(p) => updateCourseProgress(selectedLanguage, p)} />}
      {page === "quiz" && <QuizLesson onBack={() => setPage("home")} language={selectedLanguage} onComplete={(p) => updateCourseProgress(selectedLanguage, p)} />}
      {page === "stories" && <StoriesLesson onBack={() => setPage("home")} language={selectedLanguage} onComplete={(p) => updateCourseProgress(selectedLanguage, p)} />}
    </div>
  );
}

export default App;
