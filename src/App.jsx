import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AppRoutes from './routes/Routes';

function App() {
  // 로컬 스토리지에서 landingPageVisited 키를 확인
  const hasVisited = localStorage.getItem('landingPageVisited');
  const [showLandingPage, setShowLandingPage] = useState(!hasVisited);

  useEffect(() => {
    if (!hasVisited) {
      const timeout = setTimeout(() => {
        setShowLandingPage(false);
        //방문한 후에는 로컬 스토리지에 표시
        localStorage.setItem("landingPageVisited", 'true');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasVisited]);


  return (
    <>
      {showLandingPage ? <LandingPage /> : <AppRoutes />}
    </>
  );
}

export default App;
