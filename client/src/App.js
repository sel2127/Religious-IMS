import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './Auth/Login';
import Register from './Auth/Register';
import Event from './pages/Event';
import Forgot from './Auth/Forgot';
import Footer from './common/Footer';
import FeedbackPage from './pages/FeedbackPage';
import AbnetPage from './pages/AbnetPage';
import Upload from './admin/EventUpload';
import Donation from './pages/Donation';
import MemberRegisterationPage from './pages/MemberRegisterationPage';
import Notify from './pages/Notify';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import MemberRegisterationPage from './pages/MemberRegisterationPage';
import DonationCause from './pages/DonationCause';
import DonationChoice from './pages/DonationChoice';
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <Router>
      <Header/>
      <Breadcrumb/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/church" element={<ChurchPage />} />
        <Route path="/sunday" element={<SundaySchool />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/member_register" element={<MemberRegisterationPage />} />
        <Route path="/contact" element={<ContactUs />} />


        <Route path="/donate/d" element={<DonationCause />} />
        <Route path="/donate/c" element={<DonationChoice />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
