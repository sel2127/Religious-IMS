import React ,{ useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext } from "react";
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
import Dona from './pages/dona';

import DonationChoice from './pages/DonationChoice';
import ContactUs from "./pages/ContactUs";
import Admin from './admin/Admin';
import "./assets/styles/main.css";
import EventUpload from './components/EventUpload';
import ProfilePage from './pages/ProfilePage';
import Abnet from './pages/AbnetPage';
import FeedbackPage from './pages/FeedbackPage';
import FeedbackForm from './components/FeedbackForm';
import EditProfile from './components/profile/EditProfile';
import ChangePassword from './components/profile/ChangePassword';
import ViewMoreProfile from './components/profile/ViewMoreProfile';

import OTPInput from "./Auth/OTPInput";
import Reset from "./Auth/Reset";



export const RecoveryContext = createContext();

function App() {
  const isPathInAdmin = window.location.pathname.startsWith('/admin');
  const shouldApplyPadding = !isPathInAdmin;  
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();
  const [setPage] = useState();

  return (
    <RecoveryContext.Provider
    value={{ otp, setOTP, setEmail, email , setPage }}
  >
    <Router>
      <div className={shouldApplyPadding ? "app-container" : ""}>
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
        <Route path="/upload" element={<Upload />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/member_register" element={<MemberRegisterationPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/member" element={<MemberRegisterationPage />} />
        {/* <Route path="/abnet" element={<AbnetPage />} /> */}
        <Route path="/donate/d" element={<DonationCause />} />
        <Route path="/donate/c" element={<DonationChoice />} />
        <Route path="/upload" element={<EventUpload />} />
        {/* <Route path="/feedback" element={<FeedbackPage/>}/> */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/feedbackform' element={<FeedbackForm/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/viewmoreprofile' element={<ViewMoreProfile/>}/>
        <Route path='/otpinput' element={ <OTPInput />}/>
        <Route path='/reset' element={ <Reset />}/>
      </Routes>
      <Footer/>
      </div>
      
    </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
