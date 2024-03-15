import React from 'react'
import '../styles/main.css';
import Breadcrumb from '../common/Breadcrumb';

const Register = () => {
  return (
    <div>

      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
    
        <input type="text" placeholder='ስም' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" placeholder='ኢሜል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" placeholder='ይለፍ ቃል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" placeholder='ይለፍ ቃል አረጋግጥ' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <div className='mr-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
            <a href="/login">አካውንት አለዎት?</a></div>            
        <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button className="w-full mx-auto text-base font-bold text-white">
                  ተመዝገብ
                </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Register
