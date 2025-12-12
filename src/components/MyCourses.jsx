import '../styles/global.css';

function MyCourses({ registeredCourses = [], onSelectLesson, onSelectLanguage, onNavigate }) {
  return (
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '45px', color: '#233' }}>📚 My Courses</h2>

        {registeredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: 30 }}>
            <p style={{fontSize: '22px', color: '#233', marginBottom: '8px'}}>You have not registered for any courses yet.</p>
            <button className="btn btn-primary" onClick={() => onNavigate && onNavigate('register')}>Get Started</button>
          </div>
        )}

        {registeredCourses.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {registeredCourses.map((course, idx) => (
              <div key={course.name + idx} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '42px' }}>{course.flag}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0 }}>{course.name}</h3>
                    <p style={{ color: '#666', marginTop: '6px' }}>Your registered course</p>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  <div style={{ height: 10, background: '#eee', borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
                    <div style={{ width: `${course.progress || 0}%`, height: '100%', background: course.color || 'var(--accent)' }} />
                  </div>
                  <div style={{ color: '#666', fontSize: 13 }}>{course.progress || 0}% complete</div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => { onSelectLanguage && onSelectLanguage(course.name); onSelectLesson('letters'); }}>
                    🔤 Letters
                  </button>
                  <button className="btn btn-success" onClick={() => { onSelectLanguage && onSelectLanguage(course.name); onSelectLesson('words'); }}>
                    📝 Words
                  </button>
                  <button className="btn btn-warning" onClick={() => { onSelectLanguage && onSelectLanguage(course.name); onSelectLesson('quiz'); }}>
                    ❓ Quiz
                  </button>
                  <button className="btn" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white' }} onClick={() => { onSelectLanguage && onSelectLanguage(course.name); onSelectLesson('stories'); }}>
                    📖 Stories
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCourses;