import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; // Import ChurchPage
import LandingPage from './pages/LandingPage'; // Import landingpage


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<ChurchPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
