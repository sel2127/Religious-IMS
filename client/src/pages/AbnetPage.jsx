
import React from 'react';
import likawuntizra from "../Images/likawuntizra.jpg";
import abi from "../Images/abi.jpg";


const AbnetPage = () => {
  return (
    <div className="w-full m-auto">
     
      <div className="h-full w-full flex flex-col gap-8 mt-8 ">
      <div className=" p-5 ">
          <h1 className="text-3xl text-dark-blue font-bold mb-4 text-center justify-center mt-5">
            የአብነት ትምህርት ምንድን ነው?
          </h1>
          <p className=" mr-10 ">
            የአብነት ትምህርት ማለት በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዉስጥ ቅድሚያ ከሚሰጣቸው እና ስለ
            ሃይማኖታዊ ትምህርቶች እዉቀት የምናገኝበት ትልቁና ዋናው መንገድ ነው፡፡
          </p>
        </div>
        
          <div className=" lg:w-full h-auto  text-black rounded-xl m-auto">
            {/* <div className=" flex justify-start items-center ml-1 relative"> */}
            <div className="relative">
        <img
          src={abi}
          alt="Image"
          className="object-cover w-full h-full"
        />
        <div className=" absolute inset-0 flex flex-col ">
        <div className="  flex items-center justify-center ">
  <h1 className="mt-10  text-black text-xl md:text-xl lg:text-5xl text-center ">
    በአብነት ትምህርት ቤቱ የሚሰጡ ትምህርቶች
  </h1>
</div>
          <div className=" hidden sm:grid sm:grid-cols-8 md:grid-cols-6 lg:grid-cols-5 gap-5  mt-10 ">
            <div className="ml-20 m-auto ">
              <h1 className='text-black text-lg md:text-xl lg:text-xl lg:font-semibold'>ዜማ ቤት</h1>
              <p className="">
                <ul className='list-disc lg:text-xl ' > 
                  <li className=''>ዝማሬ</li>
                  <li>ቅዳሴ</li>
                  <li>ድጓ</li>
                  <li>lists</li> 
                  <li>lists</li>
                  <li>lists</li>
                </ul>
              </p>
            </div>
          
            <div className="ml-20 ">
            <h1 className=' text-black text-lg md:text-2xl lg:text-xl font-semibold'>ዜማ ቤት</h1>
              <p className="text-black text-lg md:text-2xl lg:text-xl">
                <ul > 
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div className='ml-20'>
            <h1 className=' text-black text-lg md:text-xl lg:text-xl font-semibold'>ዜማ ቤት</h1>

            <p className="text-black text-lg md:text-2xl lg:text-xl">
              <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div className='ml-20'>
            <h1 className=' text-black text-lg md:text-xl lg:text-xl font-semibold'>ዜማ ቤት</h1>

              <p className=" text-black  text-lg md:text-2xl lg:text-xl"><ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                  <li>lists</li>                  

                </ul></p>
            </div>
          </div>
        </div>
      </div>
         
            {/* </div> */}
           
          </div>

          <div>
          <h1 className="text-3xl font-bold text-center mt-10">የጉባዔ ቤቱ መምህራን</h1>
        </div>
        <div className='flex flex-col lg:flex-row bg-gray-300 mt-10'>
      
        <div className='lg:w-1/2 p-4 '>
          <div className='h-auto flex items-center justify-center overflow-hidden'>
          <img
                src={likawuntizra}
                alt=""
                className="w-full h-full "
              />         
               </div>
        </div>
        <div className='lg:w-1/2  m-auto ml-10 items-center justify-center'>
         
         <h1 className="text-3xl text-dark-blue mb-4  ">
               ሊቀ ሊቃዉንት መምህር ዕዝራ ሀዲስ
             </h1>
             <p className="">የ4ቱ ጉባያት መምህር</p>     
                </div>

      </div>
           <div className='flex flex-col lg:flex-row bg-gray-300 mt-10'>
        <div className='  m-auto  lg:w-1/2   items-center justify-center lg:ml-10'>
         
          <p className="text-3xl text-dark-blue mb-4 ">
                ሊቀ ጠበብት መምህር ዮፍታሄ
              </p>
              <p className="text-3xl text-dark-blue">የአቋቋም መምህር</p>  
                 
                 </div>
        <div className='lg:w-1/2 p-4'>
          <div className='h-uto flex items-center justify-center overflow-hidden'>
          <img
                src={likawuntizra}
                alt=""
                className="w-full h-full "
              />          </div>
        </div>

      </div>

          <div className='flex flex-col lg:flex-row bg-gray-300 mt-10'>
      
        <div className='lg:w-1/2 p-4'>
          <div className='h-auto flex items-center justify-center overflow-hidden'>
          <img
                src={likawuntizra}
                alt=""
                className="w-full h-full "
              />         
               </div>
        </div>
        <div className='lg:w-1/2  m-auto ml-10 items-center justify-center'>
         
         <h1 className="text-3xl text-dark-blue mb-4  ">
               ሊቀ ትጉሃን መምህር ሞገስ
             </h1>
             <p className="">የቅኔ መምህር</p>     
                </div>

      </div>
      <div className=" p-5 ">
          
          <p className=" mr-10 ">
            የአብነት ትምህርት ማለት በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዉስጥ ቅድሚያ ከሚሰጣቸው እና ስለ
            ሃይማኖታዊ ትምህርቶች እዉቀት የምናገኝበት ትልቁና ዋናው መንገድ ነው፡፡
          </p>
        </div>
      
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default AbnetPage;
