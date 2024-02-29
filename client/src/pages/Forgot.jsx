import React from 'react'
import '../styles/main.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from "../components/Breadcrumb"

const Forgot = () => {
  return (
    <div>
        <Header />
        <Breadcrumb />
      <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center p-10'>
            <input type="text" placeholder='ኢሜል' className=' mt-10 w-full h-10 px-6 border border-gray-300  rounded-full' />
            <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button className="w-full mx-auto text-base font-bold text-white">
                  ግባ
                </button>
              </div>
        <div className='mx-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
            <a href="/login">ወደመግቢያው ተመለስ</a></div>            

        </div>
      </div>
      <Footer />      
    </div>
  )
}

export default Forgot
