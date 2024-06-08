import React, { useState } from "react";
import "../assets/styles/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerUser } from "../app/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

axios.defaults.withCredentials = true;

const Register = () => {
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("ET");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstnameReg) {
      errors.firstname = "Please enter your first name.";
    }
    if (!lastnameReg) {
      errors.lastname = "Please enter your last name.";
    }
    if (!emailReg) {
      errors.email = "Please enter your email.";
    } else if (!emailRegex.test(emailReg)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (!validatePhoneNumber(phone, countryCode)) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!passwordReg) {
      errors.password = "Please enter your password.";
    } else if (passwordReg.length < 8) {
      errors.password = "Password should be at least 8 characters long.";
    }
    if (!confirmPasswordReg) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (passwordReg !== confirmPasswordReg) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const registration = () => {
    if (validateForm()) {
      dispatch(
        registerUser({
          firstName: firstnameReg,
          lastName: lastnameReg,
          email: emailReg,
          phone: phone,
          password: passwordReg,
        })
      )
        .then(() => {
          toast.success("Registration successful", {
            autoClose: 3000,
          });
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Registration failed", {
            autoClose: 3000,
          });
        });
    }
  };

  const Fade = cssTransition({
    enter: "fade-enter",
    exit: "fade-exit",
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
      <div className='mx-auto border border-gray-300 lg:w-1/2 md:w-1/2 sm:w-full mt-10 rounded rounded-3xl text-gray-600'>
      <div className='flex flex-col items-center justify-center lg:px-20 md:px-10 sm:px-6 py-10'>
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
};

export default Register;