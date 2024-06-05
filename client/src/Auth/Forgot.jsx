import React from 'react'
import '../assets/styles/main.css';
import Breadcrumb from '../common/Breadcrumb';

const Forgot = () => {
  return (
    <div>

      <div className='mx-auto border border-gray-300 lg:w-1/2 md:w-1/2 sm:w-full mt-10 rounded rounded-3xl text-gray-600'>
        <div className='flex flex-col items-center justify-center lg:px-20 md:px-10 sm:px-6 py-10'>
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
    </div>
  )
}

export default Forgot
