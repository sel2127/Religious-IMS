import React , { useState } from 'react'
import '../assets/styles/main.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

const [emailLogin, setEmailLogin] = useState('');
const [passwordLogin, setPasswordLogin] = useState('');
const [error, setError] = useState('');


const navigate = useNavigate();

const validateForm = () => {
    // Regular expression pattern to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailLogin || !passwordLogin) {
      setError('Please enter both email and password.');
      return false;
    }

    if (!emailRegex.test(emailLogin)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (passwordLogin.length < 8) {
      setError('Password should be at least 8 characters long.');
      return false;
    }

    setError('');
    return true;
};

const loginn = () => {
  if (validateForm()) {
  axios.post("http://localhost:5000/api/login", {
    email: emailLogin,
    password: passwordLogin
  })
    .then((response) => {
      console.log(response);
      navigate('/'); // Redirect to the home
    })
    .catch((error) => {
      console.error(error);
      // Handle the login error if needed
    });
  }
};


  return (
    <div>
      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
       
        <input type="email"  onChange = {(e) => { setEmailLogin(e.target.value);}}
         placeholder='ኢሜል' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="password"   onChange = {(e) => { setPasswordLogin(e.target.value);}}
        placeholder='ይለፍ ቃል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        {error && <p className='text-red-500'>{error}</p>}
        <div className='w-full flex items-center mt-6'>
            <div className='w-1/2 flex'>
                <input type="checkbox" name="" id="remember" className='cursor-pointer hover:text-[#79a6d2]' />
                <span className='ml-2 cursor-pointer hover:text-[#79a6d2]'>አስታውሰኝ</span>
            </div>
            <div className='w-1/2 flex items-center justify-end underline decoration-dotted cursor-pointer hover:text-[#79a6d2]'>
                <a href="/forgot">የይለፍ ቃል ረሳሁ</a></div>            
        </div>
        <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button  onClick={loginn} className="w-full mx-auto text-base font-bold text-white">
                  ግባ
                </button>
              </div>
    <div className='mt-6 underline decoration-dotted font-semibold cursor-pointer hover:text-[#79a6d2]'><a href="/register">አዲስ አካውንት ለመክፈት</a></div>

        </div>
      </div>
    </div>
  )
}

export default Login;

