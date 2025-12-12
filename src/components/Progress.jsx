import '../styles/global.css';

function Progress({ registeredCourses = [] }) {
  const total = registeredCourses.length;
  const avg = total === 0 ? 0 : Math.round(registeredCourses.reduce((s, c) => s + (c.progress || 0), 0) / total);

  return (
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 900, padding: 18 }}>
        <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '18px', textAlign: 'center' }}>🎯 Your Progress</h2>

        <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Overall Completion</h3>
            <div style={{ height: 12, background: '#f0f0f0', borderRadius: 8, overflow: 'hidden', marginTop: 10 }}>
              <div style={{ width: `${avg}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent-strong))' }} />
            </div>
            <p style={{ marginTop: 10, color: '#666' }}>{avg}% across {total} registered course(s)</p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Quick Stats</h3>
            <p style={{ color: '#666' }}><strong>{total}</strong> registered courses</p>
            <p style={{ color: '#666' }}><strong>{registeredCourses.filter(c => (c.progress||0) >= 100).length}</strong> completed</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {registeredCourses.length === 0 && (
             <p style={{fontSize: '22px', color: '#233', marginBottom: '8px'}}>You have not registered for any courses yet.</p>
          )}

          {registeredCourses.map((c, i) => (
            <div key={c.name + i} className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 36 }}>{c.flag}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                    <div style={{ color: '#666', fontSize: 13 }}>{c.progress || 0}% complete</div>
                  </div>
                </div>

                <div style={{ width: 320, maxWidth: '40%' }}>
                  <div style={{ height: 10, background: '#eee', borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ width: `${c.progress||0}%`, height: '100%', background: c.color || 'var(--accent)' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;