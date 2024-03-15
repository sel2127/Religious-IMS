import React from 'react'
import '../styles/main.css';
import Breadcrumb from '../common/Breadcrumb';


const Login = () => {
  return (
    <div>
      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
       
        <input type="text" placeholder='ኢሜል' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <input type="text" placeholder='ይለፍ ቃል' className=' mt-6 w-full h-10 px-6 border border-gray-300  rounded-full' />
        <div className='w-full flex items-center mt-6'>
            <div className='w-1/2 flex'>
                <input type="checkbox" name="" id="remember" className='cursor-pointer hover:text-[#79a6d2]' />
                <span className='ml-2 cursor-pointer hover:text-[#79a6d2]'>አስታውሰኝ</span>
            </div>
            <div className='w-1/2 flex items-center justify-end underline decoration-dotted cursor-pointer hover:text-[#79a6d2]'>
                <a href="/forgot">የይለፍ ቃል ረሳሁ</a></div>            
        </div>
        <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button className="w-full mx-auto text-base font-bold text-white">
                  ግባ
                </button>
              </div>
    <div className='mt-6 underline decoration-dotted font-semibold cursor-pointer hover:text-[#79a6d2]'><a href="/register">አዲስ አካውንት ለመክፈት</a></div>

        </div>
      </div>
    </div>
  )
}

export default Login
