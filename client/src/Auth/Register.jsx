import React , { useState } from 'react'
import '../assets/styles/main.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Register = () => {

  const [firstnameReg, setFirstnameReg] =useState("");
  const [lastnameReg, setLastnameReg] =useState("");
  const [emailReg, setEmailReg] =useState("");
  const [passwordReg, setPasswordReg] =useState("");

  const navigate = useNavigate();


  const registration = () => {
    axios.post("http://localhost:5000/api/register", 
    {firstname:firstnameReg ,lastname : lastnameReg , email : emailReg , password:passwordReg}).then((response)=>{console.log(response);
    }).then((response) => {
      console.log(response);
      navigate('/login'); // Redirect to the login page
    })
    .catch((error) => {
      console.error(error);
      // Handle the registration error if needed
    });
  };



  return (
    <div>

      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
    
        <input type="text" onChange = {(e) => { setFirstnameReg(e.target.value);}}
         placeholder='የመጀመሪያ ስም' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" onChange = {(e) => { setLastnameReg(e.target.value);}}
        placeholder='የአባት ስም' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" onChange = {(e) => { setEmailReg(e.target.value);}}
        placeholder='ኢሜል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" onChange = {(e) => { setPasswordReg(e.target.value);}}
        placeholder='ይለፍ ቃል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" placeholder='ይለፍ ቃል አረጋግጥ' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <div className='mr-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
            <a href="/login">አካውንት አለዎት?</a></div>            
        <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button onClick={registration} className="w-full mx-auto text-base font-bold text-white">
                  ተመዝገብ
                </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Register
