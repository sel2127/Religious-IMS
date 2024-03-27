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
import Upload from './components/EventUpload';
import Donation from './pages/Donation';
import MemberRegisterationPage from './pages/MemberRegisterationPage';
import Notify from './pages/Notify';
import Header from './common/Header';
import DonationCause from './pages/DonationCause';
import DonationChoice from './pages/DonationChoice';
import ContactUs from "./pages/ContactUs";
import EventUpload from './components/EventUpload';
import Breadcrumb from './common/Breadcrumb';
import FeedbackPage from './pages/FeedbackPage';
import AbnetPage from './pages/AbnetPage';
import FeedbackForm from './components/FeedbackForm';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './components/profile/EditProfile';
import ChangePassowrd from './components/profile/ChangePassword';



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
        <Route path="/notify" element={<Notify />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/member_register" element={<MemberRegisterationPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate/d" element={<DonationCause />} />
        <Route path="/donate/c" element={<DonationChoice />} />
        <Route path="/upload" element={<EventUpload />} />
        <Route path='/feedback' element={<FeedbackPage/>}/>
        <Route path='/abnet' element={<AbnetPage/>}/>
        <Route path='/feedbackform' element={<FeedbackForm/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/changepassword' element={<ChangePassowrd/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
