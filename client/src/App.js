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
import FeedbackForm from './components/FeedbackForm';



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
        <Route path='/feedbackform' element={<FeedbackForm/>}/>


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
