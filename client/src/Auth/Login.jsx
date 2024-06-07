import React, { useState } from "react";
import "../assets/styles/main.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useNavigate } from "react-router-dom";
import { setUserLoggedIn } from '../app/reducers/authReducer';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';

const Login = () => {
  const [phoneLogin, setPhoneLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("ET");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { t } = useTranslation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};

    if (!phoneLogin || !passwordLogin) {
      errors.form = "Please enter both phone number and password.";
    } 
     if (!validatePhoneNumber(phoneLogin, countryCode)) {
      errors.phone = "Please enter a valid phone number.";
    } 
     if (passwordLogin.length < 8) {
      errors.password = "Password should be at least 8 characters long.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const dispatch = useDispatch();
  
  const loginn = () => {
    axios.defaults.withCredentials = true;

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
          <PhoneInput
            country={"et"}
            value={phoneLogin}
            onChange={(phone, country) => {
              setPhoneLogin(phone);
              setCountryCode(country.countryCode);
            }}
            placeholder="ስልክ ቁጥር"
            className="mt-10 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          
          <div className="relative w-full">
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          {errors.form && <p className="text-red-500">{errors.form}</p>}
          <div className="w-full flex items-center mt-6">
            <div className="w-1/2 flex">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="cursor-pointer hover:text-[#79a6d2]"
              />
              <span className="ml-2 cursor-pointer hover:text-[#79a6d2]">
              {t('remember')}
              </span>
            </div>
            <div className="w-1/2 flex items-center justify-end underline decoration-dotted cursor-pointer hover:text-[#79a6d2]">
              <a href="/forgot">{t('forgot_p')}</a>
            </div>
          </div>
          <div className="mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
            <button
              onClick={loginn}
              className="w-full mx-auto text-base font-bold text-white"
            >
              {t('forgot_p')}
            </button>
          </div>
          <div className="mt-6 underline decoration-dotted font-semibold cursor-pointer hover:text-[#79a6d2]">
            <a href="/register">{t('new_acc')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;