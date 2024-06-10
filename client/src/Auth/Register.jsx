// import React, { useState } from "react";
// import "../assets/styles/main.css";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../app/api/apiSlice";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer, cssTransition } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";
// import { parsePhoneNumberFromString } from 'libphonenumber-js';
// import { useTranslation } from "react-i18next";

// axios.defaults.withCredentials = true;

// const Register = () => {
//   const [firstnameReg, setFirstnameReg] = useState("");
//   const [lastnameReg, setLastnameReg] = useState("");
//   const [emailReg, setEmailReg] = useState("");
//   const [phone, setPhone] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");
//   const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
//   const [error, setError] = useState("");
//   const [countryCode, setCountryCode] = useState("ET");
//   const [errors, setErrors] = useState({});


//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const validatePhoneNumber = (phone, countryCode) => {
//     const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
//     return phoneNumber && phoneNumber.isValid();
//   };

//   const validateForm = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!firstnameReg || firstnameReg <3 ||!/^[a-zA-Z\s]+$/.test(firstnameReg) ) {
//       errors.firstname = `"${t('en_f')}"`; 
//     }
//     if (!lastnameReg || lastnameReg <3 ||  !/^[a-zA-Z\s]+$/.test(lastnameReg)) {
//       errors.lastname = `"${t('en_l')}"`;
//     }
//     if (!emailReg ) {
//       errors.email = "Please enter your email.";
//     } else if (!emailRegex.test(emailReg)) {
//       errors.email = `"${t('en_e')}"`;
//     }
//     if (!phone) {
//       errors.phone = "Please enter your phone number.";
//     } else if (!validatePhoneNumber(phone, countryCode)) {
//       errors.phone =`"${t('en_p2')}"`;
//     }
//     if (!passwordReg) {
//       errors.password = "Please enter your password.";
//     } else if (passwordReg.length < 8) {
//       errors.password = `"${t('en_pa1')}"`;
//     }
//     if (!confirmPasswordReg) {
//       errors.confirmPassword = "Please confirm your password.";
//     } else if (passwordReg !== confirmPasswordReg) {
//       errors.confirmPassword = `"${t('en_pa3')}"`;
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const registration = () => {
//     if (validateForm()) {
//       dispatch(
//         registerUser({
//           firstName: firstnameReg,
//           lastName: lastnameReg,
//           email: emailReg,
//           phone: phone,
//           password: passwordReg,
//         })
//       )
//         .then(() => {
//           toast.success("Registration successful", {
//             autoClose: 3000,
//           });
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("Registration failed", {
//             autoClose: 3000,
//           });
//         });
//     }
//   };

  

//   return (
//     <div>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//       />
//       <div className='mx-auto border border-gray-300 lg:w-1/2 md:w-1/2 sm:w-full mt-10 rounded rounded-3xl text-gray-600'>
//       <div className='flex flex-col items-center justify-center lg:px-20 md:px-10 sm:px-6 py-10'>
//           <input type="text" onChange={(e) => { setFirstnameReg(e.target.value); }} placeholder={` ${t('first_name')} `} className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           <input type="text" onChange={(e) => { setLastnameReg(e.target.value); }} placeholder={` ${t('last_name')} `} className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           <input type="tel" onChange={(e) => { setPhone(e.target.value); }} placeholder={` ${t('phone_number')} `} className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           <input type="email" onChange={(e) => { setEmailReg(e.target.value); }} placeholder={` ${t('email')} `} className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           <input type="password" onChange={(e) => { setPasswordReg(e.target.value); }} placeholder={` ${t('pass')} `} className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           <input type='password' onChange={(e) => { setConfirmPasswordReg(e.target.value); }} placeholder={` ${t('con_pass')} `} className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
//           {error && <p className='text-red-500'>{error}</p>}
//           <div className='mr-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
//           </div>
//           <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
//             <button onClick={registration} className="w-full mx-auto text-base font-bold text-white">
//             {t('reg')}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import "../assets/styles/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerUser } from "../app/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstnameReg || firstnameReg <3 ||!/^[a-zA-Z\s]+$/.test(firstnameReg) ) {
      errors.firstname = `"${t('en_f')}"`; 
    }
    if (!lastnameReg || lastnameReg <3 ||  !/^[a-zA-Z\s]+$/.test(lastnameReg)) {
      errors.lastname = `"${t('en_l')}"`;
    }
    if (!emailReg ) {
      errors.email = `"${t('en_e')}"`;
    } else if (!emailRegex.test(emailReg)) {
      errors.email = `"${t('en_l')}"`;
    }
    if (!phone) {
      errors.phone = `"${t('en_p')}"`;
    } else if (!validatePhoneNumber(phone, countryCode)) {
      errors.phone = `"${t('en_p2')}"`;
    }
    if (!passwordReg) {
      errors.password =  `"${t('en_pa')}"`;
    } else if (passwordReg.length < 8) {
      errors.password = `"${t('en_pa1')}"`;
    }
    if (!confirmPasswordReg) {
      errors.confirmPassword = `"${t('en_pa2')}"`;
    } else if (passwordReg !== confirmPasswordReg) {
      errors.confirmPassword = `"${t('en_pa3')}"`;
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

  

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600">
        <div className="flex flex-col items-center justify-center px-20 py-10">
          <input
            type="text"
            onChange={(e) => setFirstnameReg(e.target.value)}
            placeholder={` ${t('first_name')} `} 
            className="mt-10 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          <input
            type="text"
            onChange={(e) => setLastnameReg(e.target.value)}
            placeholder={` ${t('last_name')} `} 
            className="mt-10 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          <PhoneInput
            country={"et"}
            value={phone}
            onChange={(phone, country) => {
              setPhone(phone);
              setCountryCode(country.countryCode);
            }}
            placeholder={` ${t('phone_number')} `}
            className="mt-10 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <input
            type="email"
            onChange={(e) => setEmailReg(e.target.value)}
            placeholder={` ${t('email')} `}
            className="mt-6 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            type="password"
            onChange={(e) => setPasswordReg(e.target.value)}
            placeholder={` ${t('pass')} `}
            className="mt-6 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <input
            type="password"
            onChange={(e) => setConfirmPasswordReg(e.target.value)}
            placeholder={` ${t('con_pass')} `}
            className="mt-6 w-full h-10 px-6 border border-gray-300 rounded-full"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-6 w-1/2 bg-dark-blue hover:bg-sky-600 border border-gray-200 rounded-full h-10 flex items-center">
            <button
              onClick={registration}
              className="w-full mx-auto text-base font-bold text-white"
            >
             {t('reg')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;