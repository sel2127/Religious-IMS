import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Header from './common/Header'
import Footer from './common/Footer'
import Admin from './admin/Admin';
import Notify from './pages/Notify';


function App() {
  const isPathInAdmin = window.location.pathname.startsWith('/admin');

  return (
    <Router>
      {!isPathInAdmin && <Header />}
      {/* <Breadcrumb/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/church" element={<ChurchPage />} />
        <Route path="/sunday" element={<SundaySchool />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/admin/*" element={<Admin />} />

      </Routes>
      {!isPathInAdmin && <Footer />}
    </Router>
  );
}

export default App;
