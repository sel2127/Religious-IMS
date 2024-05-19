import React, { useState } from 'react';
import '../assets/styles/main.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../app/api/apiSlice'; 
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, cssTransition } from 'react-toastify';
axios.defaults.withCredentials = true;

const Register = () => {
  const [firstnameReg, setFirstnameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [phonenumberReg, setPhoneNumberReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (
      !firstnameReg ||
      !lastnameReg ||
      !emailReg ||
      !phonenumberReg ||
      !passwordReg ||
      !confirmPasswordReg
    ) {
      setError('Please fill in all fields.');
      return false;
    }

    if (!emailRegex.test(emailReg)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!phoneRegex.test(phonenumberReg)) {
      setError('Please enter a valid phone number.');
      return false;
    }

    if (passwordReg.length < 8) {
      setError('Password should be at least 8 characters long.');
      return false;
    }

    if (passwordReg !== confirmPasswordReg) {
      setError('Passwords do not match.');
      return false;
    }

    setError('');
    return true;
  };

  const registration = () => {
    if (validateForm()) {
      dispatch(registerUser({ firstName: firstnameReg, lastName: lastnameReg, email: emailReg, phone: phonenumberReg, password: passwordReg }))
        .then(() => {
          toast.success('Registration successful', {
            autoClose: 3000
          });
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
          toast.error('Registration failed', {
            autoClose: 3000
          });
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
        position="top-right"
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
          <input type="text" onChange={(e) => { setFirstnameReg(e.target.value); }} placeholder='የመጀመሪያ ስም' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
          <input type="text" onChange={(e) => { setLastnameReg(e.target.value); }} placeholder='የአባት ስም' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
          <input type="tel" onChange={(e) => { setPhoneNumberReg(e.target.value); }} placeholder='ስልክ ቁጥር' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
          <input type="email" onChange={(e) => { setEmailReg(e.target.value); }} placeholder='ኢሜል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
          <input type="password" onChange={(e) => { setPasswordReg(e.target.value); }} placeholder='ይለፍ ቃል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
          <input type='password' onChange={(e) => { setConfirmPasswordReg(e.target.value); }} placeholder='ይለፍ ቃል አረጋግጥ' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
          {error && <p className='text-red-500'>{error}</p>}
          <div className='mr-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
          </div>
          <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
            <button onClick={registration} className="w-full mx-auto text-base font-bold text-white">
              ተመዝገብ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
