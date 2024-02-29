import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; // Import ChurchPage
import LandingPage from './pages/LandingPage'; // Import landingpage
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<ChurchPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
