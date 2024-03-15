import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './Auth/Login'
import Register from './Auth/Register'
import Event from './pages/Event'
import Forgot from './Auth/Forgot'
import Header from './common/Header'
import Footer from './common/Footer'
import FeedbackPage from './pages/FeedbackPage';
import AbnetPage from './pages/AbnetPage';
import Upload from './admin/EventUploadPage';
import Donation from './pages/Donation';
import MemberRegisterationPage from './pages/MemberRegisterationPage';


import Notify from './pages/Notify';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/church" element={<ChurchPage />} />
        <Route path="/sunday" element={<SundaySchool />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path='/feedback' element={<FeedbackPage/>}/>
        <Route path='/abnet' element={<AbnetPage/>}/>
        <Route path="/event" element={<Event />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/member_register" element={<MemberRegisterationPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
