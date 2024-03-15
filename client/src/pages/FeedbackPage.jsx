import React from 'react'
import data from '../components/feedback'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumb from '../common/Breadcrumb';
const FeedbackPage = () => {
  return (

    <div className="w-full m-auto ">
      {/* <Breadcrumb /> */}
      <div className="grid grid-cols-3 gap-8 mt-8">
        {data.map((data) => (
          <div className='h-auto bg-gray-300  text-black rounded-xl'>
            <div className=' rounded-t-xl flex justify-start items-center ml-1'>
              <img src={data.img} alt='' className='h-32 w-32 rounded-full mt-4 ml-1 ' />
              <div className='ml-2'>
                <p className='text-xl font-semibold'>{data.name}</p>
                <p className='text-xl font-semibold'>{data.time}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">

              <p>{data.review}</p>
              <button className=' text-white  bg-indigo-500  text-lg px-6 py-1 rounded-xl'>Read more</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default FeedbackPage;