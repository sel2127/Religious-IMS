import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; 
import SundaySchool from './pages/SundaySchool'; 
import LandingPage from './pages/LandingPage'; 
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
// <<<<<<< HEAD
import Notify from './pages/Notify';
// =======
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer'

// >>>>>>> 73fc12d4381e13dae38c79ba376d07649197f6e2


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
        <Route path="/notify" element={<Notify />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
