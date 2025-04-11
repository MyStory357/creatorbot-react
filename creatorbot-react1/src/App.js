import React, { useState } from 'react';

const App = () => {
  const [phase, setPhase] = useState(null);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <strong>CreatorBot Navigation</strong><br />
        {[...Array(9)].map((_, i) => (
          <button key={i} onClick={() => setPhase(i + 1)} style={{ marginRight: '0.5rem' }}>
            Phase {i + 1}
          </button>
        ))}
      </nav>
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', background: '#fff' }}>
        {phase ? (
          <>
            <h2>Phase {phase}</h2>
            <p>This is the interactive interface for Phase {phase}.</p>
            <button onClick={() => setPhase(null)}>Complete Phase {phase}</button>
          </>
        ) : (
          <>
            <h2>Welcome to CreatorBot</h2>
            <p>Select a phase to begin.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;