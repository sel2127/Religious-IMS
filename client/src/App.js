import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Header from './components/Header'
import Breadcrumb from './common/Breadcrumb';
import Footer from './common/Footer'
import FeedbackPage from './pages/FeedbackPage';
import AbnetPage from './pages/AbnetPage';
<<<<<<< HEAD
import Upload from './components/EventUpload';
import Donation from './pages/Donation';
import MemberRegisterationPage from './pages/MemberRegisterationPage';
import Notify from './pages/Notify';
import EventUpload from './components/EventUpload';
=======
import FeedbackForm from './components/FeedbackForm';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './components/profile/EditProfile';
import ChangePassowrd from './components/profile/ChangePassword';
>>>>>>> origin/maste



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
<<<<<<< HEAD
        <Route path="/notify" element={<Notify />} />
        <Route path="/upload" element={<EventUpload />} />
=======
        <Route path='/feedback' element={<FeedbackPage/>}/>
        <Route path='/abnet' element={<AbnetPage/>}/>
        <Route path='/feedbackform' element={<FeedbackForm/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/changepassword' element={<ChangePassowrd/>}/>


>>>>>>> origin/maste

      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
