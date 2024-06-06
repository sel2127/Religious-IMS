import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './Auth/Login';
import Register from './Auth/Register';
import Forgot from './Auth/Forgot';
import Footer from './common/Footer';
import Upload from './components/EventUpload';
import Donation from './pages/Donation';
import MemberRegisterationPage from './pages/MemberRegisterationPage';
import Notify from './pages/Notify';
import Header from './common/Header';
import DonationCause from './pages/DonationCause';
import DonationChoice from './pages/DonationChoice';
import ContactUs from "./pages/ContactUs";
import Admin from './admin/Admin';
import "./assets/styles/main.css";
import EventUpload from './components/EventUpload';
import ProfilePage from './pages/ProfilePage';
import Abnet from './pages/AbnetPage';
import FeedbackPage from './pages/FeedbackPage';
import LiveStream from './pages/LiveStream';


function App() {
  const isPathInAdmin = window.location.pathname.startsWith('/admin');
  const shouldApplyPadding = !isPathInAdmin;

  return (
    <Router>
      <div className={shouldApplyPadding ? "app-container" : ""}>
      {!isPathInAdmin && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/church" element={<ChurchPage />} />
        <Route path="/sunday" element={<SundaySchool />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/member_register" element={<MemberRegisterationPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/member" element={<MemberRegisterationPage />} />
        <Route path="/abnet" element={<Abnet/>} />
        <Route path="/donate/d" element={<DonationCause />} />
        <Route path="/donate/c" element={<DonationChoice />} />
        <Route path="/upload" element={<EventUpload />} />
        <Route path="/feedback" element={<FeedbackPage/>}/>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
      {!isPathInAdmin && <Footer />}
      </div>
    </Router>
  );
}

export default App;
