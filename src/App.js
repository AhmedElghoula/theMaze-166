import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';
import './App.css'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Loading Animation</h1>
      </header>
      <main>
        <div className='test'> {loading ? <LoadingAnimation /> : <HomePage />}</div>
       
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to Our Company!</h2>
      <p>We provide Industry 4.0 solutions and AI/IoT services.</p>
    
    </div>
  );
}

export default App;
