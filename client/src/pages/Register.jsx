import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.css';
import Breadcrumb from "../components/Breadcrumb"


const Register = () => {
  return (
    <div>
        <Header />
        <Breadcrumb />
      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center px-20 py-10'>
        {/* <svg viewBox="0 0 24 24" className='w-16 h-16' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9.5C9.5 8.11875 10.6188 7 12 7C13.3813 7 14.5 8.11875 14.5 9.5C14.5 10.8813 13.3813 12 12 12C10.6188 12 9.5 10.8813 9.5 9.5ZM12 8.25C12.6875 8.25 13.25 8.8125 13.25 9.5C13.25 10.1875 12.6875 10.75 12 10.75C11.3125 10.75 10.75 10.1875 10.75 9.5C10.75 8.8125 11.3125 8.25 12 8.25Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.25C10.3313 13.25 7 14.0875 7 15.75V17H17V15.75C17 14.0875 13.6688 13.25 12 13.25ZM12 14.5C13.6875 14.5 15.625 15.3063 15.75 15.75H8.25C8.39375 15.3 10.3188 14.5 12 14.5Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#000000"></path> </g></svg> */}
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
      <Footer />      
    </div>
  )
}

export default Register