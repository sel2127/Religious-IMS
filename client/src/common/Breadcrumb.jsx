import React from 'react'
import BreadcrumbImage from '../Images/breadcrumb.jpg'

const Breadcrumb = () => {
  return (
    <div className='py-8'>
      <div className='w-full h-40'>
      {/* <img src={BreadcrumbImage} alt="breadcrumb image" className=" h-full w-full object-cover" /> */}
      <div className="bg-breadcrumb h-full w-full flex flex-col items-center justify-center">
        <div className='text-5xl font-bold text-white'>Login</div>
        <div className='text-sm font-bold text-white mt-4'>Home - Login</div>

      </div>
      </div>
      
    </div>
  )
}

export default Breadcrumb
