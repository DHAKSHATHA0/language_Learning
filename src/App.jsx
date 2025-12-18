import { useState } from "react";
import { userAPI } from './api/client';

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
      const raw = localStorage.getItem('user');
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

  // Sync all course data to backend
  const syncCoursesToBackend = async (courses) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await userAPI.syncCourses(courses);
    } catch (err) {
      console.error('Error syncing courses to backend:', err);
    }
  };

  const updateCourseProgress = async (courseName, lessonType) => {
    // Refresh from localStorage first to get any updates (like stars/badges)
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw) {
        const courses = JSON.parse(raw);
        setRegisteredCourses(courses);
      }
    } catch (e) {
      console.error('Error refreshing courses:', e);
    }

    // Calculate progress based on completed lessons
    // Each lesson is worth 25%: Letters, Words, Quiz, Stories
    setRegisteredCourses((prev) => {
      const course = prev.find(c => c.name === courseName);
      if (!course) return prev;

      // Initialize completedLessons if not exists
      if (!course.completedLessons) {
        course.completedLessons = [];
      }

      // Add lesson if not already completed
      if (!course.completedLessons.includes(lessonType)) {
        course.completedLessons.push(lessonType);
      }

      // Calculate new progress (25% per lesson)
      const newProgress = Math.min(course.completedLessons.length * 25, 100);

      const next = prev.map(c => 
        c.name === courseName 
          ? { 
              ...c, 
              progress: newProgress, 
              completedLessons: course.completedLessons,
              // Preserve stars and badge if they exist
              stars: c.stars || 0,
              badge: c.badge || null,
              completed: c.completed || false
            } 
          : c
      );

      // Save to localStorage
      try { 
        localStorage.setItem('registeredCourses', JSON.stringify(next)); 
      } catch (e) {}

      // Sync all data to backend
      syncCoursesToBackend(next);

      return next;
    });
  };

  const updateUserData = (newData) => {
    setUserData((prev) => {
      const merged = { ...prev, ...newData };
      try { localStorage.setItem('user', JSON.stringify(merged)); } catch (e) {}
      return merged;
    });
  };

  const fetchUserCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // If no token, try to restore from localStorage
        try {
          const raw = localStorage.getItem('registeredCourses');
          const courses = raw ? JSON.parse(raw) : [];
          setRegisteredCourses(courses);
        } catch (e) {}
        return;
      }

      const user = await userAPI.getProfile();
      
      // Get local courses (with all badge data)
      let localCourses = [];
      try {
        const raw = localStorage.getItem('registeredCourses');
        localCourses = raw ? JSON.parse(raw) : [];
      } catch (e) {}
      
      // Merge backend courses with local courses
      let mergedCourses = [];
      
      // If backend has courses, use them as primary source
      if (user.registeredCourses && Array.isArray(user.registeredCourses)) {
        mergedCourses = user.registeredCourses.map(backendCourse => {
          // Find matching local course to preserve all local data (badges, stars, progress)
          const localCourse = localCourses.find(c => c.name === backendCourse.name);
          if (localCourse) {
            // Merge backend and local data, prioritizing local data for badges and stars
            return {
              ...backendCourse,
              ...localCourse,
              // Ensure badges and stars are preserved
              badge: localCourse.badge || backendCourse.badge,
              stars: localCourse.stars || backendCourse.stars,
              progress: Math.max(localCourse.progress || 0, backendCourse.progress || 0),
              completedLessons: localCourse.completedLessons || backendCourse.completedLessons
            };
          }
          return backendCourse;
        });
        
        // Add any local courses that aren't in backend (offline additions)
        localCourses.forEach(localCourse => {
          if (!mergedCourses.find(c => c.name === localCourse.name)) {
            mergedCourses.push(localCourse);
          }
        });
      } else {
        // If backend has no courses, use local courses
        mergedCourses = [...localCourses];
      }
      
      setRegisteredCourses(mergedCourses);
      try { localStorage.setItem('registeredCourses', JSON.stringify(mergedCourses)); } catch (e) {}
    } catch (error) {
      console.error('Error fetching user courses:', error);
      // On error, restore from localStorage
      try {
        const raw = localStorage.getItem('registeredCourses');
        const courses = raw ? JSON.parse(raw) : [];
        setRegisteredCourses(courses);
      } catch (e) {}
    }
  };

  const handleLogin = (user) => {
    setUserData(user);
    // Fetch and restore user's courses from backend
    fetchUserCourses();
  };

  const handleSignup = (user) => {
    setUserData(user);
    // Fetch user courses after signup
    fetchUserCourses();
  };

  const logout = () => {
    try { 
      localStorage.removeItem('user'); 
      localStorage.removeItem('token'); 
      // Keep registeredCourses in localStorage temporarily for offline access
      // It will be overwritten on next login with backend data
    } catch (e) {}
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
      {page === "login" && <Login onNavigate={handleNavigate} onLogin={handleLogin} />}
      {page === "signup" && <Signup onNavigate={handleNavigate} onSignup={handleSignup} />}
      {page === "home" && <Home onNavigate={handleNavigate} onSelectLanguage={selectLanguage} />}
      {page === "register" && <RegisterCourse selectedLanguage={selectedLanguage} onRegister={(c) => { registerCourse(c); setPage('home'); }} />}
      {page === "explore" && <Explore selectedLanguage={selectedLanguage} onSelectLanguage={selectLanguage} onNavigate={handleNavigate} />}
      {page === 'profile' && <Profile userData={userData} registeredCourses={registeredCourses} onSelectLesson={(lesson) => setPage(lesson)} onSelectLanguage={selectLanguage} onNavigate={handleNavigate} />}
      {page === 'mycourses' && <MyCourses registeredCourses={registeredCourses} onSelectLesson={(lesson) => setPage(lesson)} onSelectLanguage={selectLanguage} onNavigate={handleNavigate} />}

      {page === 'progress' && <Progress registeredCourses={registeredCourses} />}
      {page === 'settings' && <Settings userData={userData} settingsView={settingsView} onUpdate={updateUserData} onNavigate={handleNavigate} registeredCourses={registeredCourses} />}

      {page === "letters" && <LetterLesson onBack={() => setPage("mycourses")} language={selectedLanguage} onComplete={() => updateCourseProgress(selectedLanguage, 'letters')} onSelectLesson={(lesson) => setPage(lesson)} />}
      {page === "words" && <WordsLesson onBack={() => setPage("mycourses")} language={selectedLanguage} onComplete={() => updateCourseProgress(selectedLanguage, 'words')} onSelectLesson={(lesson) => setPage(lesson)} />}
      {page === "quiz" && <QuizLesson onBack={() => setPage("mycourses")} language={selectedLanguage} onComplete={() => updateCourseProgress(selectedLanguage, 'quiz')} onSelectLesson={(lesson) => setPage(lesson)} />}
      {page === "stories" && <StoriesLesson onBack={() => setPage("mycourses")} language={selectedLanguage} onComplete={() => updateCourseProgress(selectedLanguage, 'stories')} onSelectLesson={(lesson) => setPage(lesson)} onNavigate={handleNavigate} onSyncCourses={syncCoursesToBackend} registeredCourses={registeredCourses} setRegisteredCourses={setRegisteredCourses} />}
    </div>
  );
}

export default App;
