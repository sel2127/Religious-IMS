import React, { useState } from 'react'
import '../assets/styles/main.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../app/reducers/authReducer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [phoneLogin, setPhoneLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    // Regular expression pattern to match email format

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Regular expression for 10-digit phone number

    if (!phoneLogin || !passwordLogin) {
      setError("Please enter both phone number and password.");
      return false;
    }

    if (!phoneRegex.test(phoneLogin)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    if (passwordLogin.length < 8) {
      setError("Password should be at least 8 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  const dispatch = useDispatch();
  const loginn = () => {
    axios.defaults.withCredentials = true;
    // Add the token to the request headers for subsequent requests
    //  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    if (validateForm()) {
      axios.post('http://localhost:5000/user/login', {
        phone: phoneLogin,
        password: passwordLogin
      })
        .then((response) => {
          console.log(response);
          dispatch(setUserLoggedIn(true)); // Dispatch action to update login status
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
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600">
        <div className="flex flex-col items-center justify-center px-20 py-10">
          <input
            type="tel"
            onChange={(e) => {
              setPhoneLogin(e.target.value);
            }}
            placeholder="ስልክ ቁጥር"
            className=" mt-10 w-full h-10 px-6 border border-gray-300  rounded-full"
          />
          <div className="relative w-full ">
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPasswordLogin(e.target.value)}
              placeholder='ይለፍ ቃል'
              className='mt-6 w-full h-10 px-6 border border-gray-300 rounded-full pr-12'
            />
            <span 
              className='absolute top-10 right-5 cursor-pointer '
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="w-full flex items-center mt-6">
            <div className="w-1/2 flex">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="cursor-pointer hover:text-[#79a6d2]"
              />
              <span className="ml-2 cursor-pointer hover:text-[#79a6d2]">
                አስታውሰኝ
              </span>
            </div>
            <div className="w-1/2 flex items-center justify-end underline decoration-dotted cursor-pointer hover:text-[#79a6d2]">
              <a href="/forgot">የይለፍ ቃል ረሳሁ</a>
            </div>
          </div>
          <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
            <button onClick={loginn} className="w-full mx-auto text-base font-bold text-white">
              ግባ
            </button>
          </div>
          <div className='mt-6 underline decoration-dotted font-semibold cursor-pointer hover:text-[#79a6d2]'><a href="/register">አዲስ አካውንት ለመክፈት</a></div>

        </div>
      </div>
    </div>
  );
};

export default Login;