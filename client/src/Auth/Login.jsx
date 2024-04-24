import React, { useState } from 'react';
import '../assets/styles/main.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../app/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

const Login = () => {
  const [phoneLogin, setPhoneLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const phoneRegex = /^\d{10}$/;

    if (!phoneLogin || !passwordLogin) {
      setError('Please enter both phone number and password.');
      return false;
    }

    if (!phoneRegex.test(phoneLogin)) {
      setError('Please enter a valid phone number.');
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
      dispatch(loginUser(phoneLogin, passwordLogin))
        .then((response) => {
          console.log(response); // Check the response in the console
          if (response && response.message === 'Login successful') {
            toast.success(response.message);
            navigate('/');
          } else if (response && response.message) {
            toast.error(response.message);
          } else {
            toast.error('Invalid response');
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error('Login failed');
        });
    }
  };

  const Fade = cssTransition({
    enter: 'fade-enter',
    exit: 'fade-exit',
  });

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        transition={Fade}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
          <input
            type="tel"
            onChange={(e) => { setPhoneLogin(e.target.value); }}
            placeholder='ስልክ ቁጥር'
            className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full'
          />
          <input
            type="password"
            onChange={(e) => { setPasswordLogin(e.target.value); }}
            placeholder='ይለፍ ቃል'
            className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full'
          />
          {error && <p className='text-red-500'>{error}</p>}
          <div className='w-full flex items-center mt-6'>
            <div className='w-1/2 flex'>
              <input type="checkbox" name="" id="remember" className='cursor-pointer hover:text-[#79a6d2]' />
              <span className='ml-2 cursor-pointer hover:text-[#79a6d2]'>አስታውሰኝ</span>
            </div>
            <div className='w-1/2 flex items-center justify-end underline decoration-dotted cursor-pointer hover:text-[#79a6d2]'>
              <a href="/forgot">የይለፍ ቃል ረሳሁ</a>
            </div>
          </div>
          <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
            <button onClick={loginn} className="w-full mx-auto text-base font-bold text-white">
              ግባ
            </button>
          </div>
          <div className='mt-6 underline decoration-dotted font-semibold cursor-pointer hover:text-[#79a6d2]'>
            <a href="/register">አዲስ አካውንት ለመክፈት</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;