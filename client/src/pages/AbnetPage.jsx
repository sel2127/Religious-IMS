import React from "react";
import abi from "../assets/Images/abi.jpg";
import likawuntizra from "../assets/Images/likawuntizra.jpg";

function AbnetPage() {
  return (
    <div>
      <div className="lg:w-full">
        <div className=" p-5 ">
          <h1 className="text-3xl text-dark-blue font-bold mb-4 text-center justify-center mt-5">
            የአብነት ትምህርት ምንድን ነው?
          </h1>
          <p className=" mr-10 ">
            የአብነት ትምህርት ማለት በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዉስጥ ቅድሚያ ከሚሰጣቸው እና ስለ
            ሃይማኖታዊ ትምህርቶች እዉቀት የምናገኝበት ትልቁና ዋናው መንገድ ነው፡፡
          </p>
        </div>
       <div className="relative">
        <img
          src={abi}
          alt="Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col mt-10 ml-10 ">
          <h1 className="text-black text-2xl md:text-4xl lg:text-6xl mt-10">በአብነት ትምህርት ቤቱ የሚሰጡ ትምህርቶች</h1>
          <div className="mt-10 hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4">
            <div className="ml-10 ">
              <h1>zema bet</h1>
              <p className="text-black text-lg md:text-xl lg:text-2xl">
                <ul > 
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
            <h1>zema bet</h1>

              <p className="text-black text-lg md:text-xl lg:text-2xl">
              <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
            <h1>zema bet</h1>

              <p className="text-black text-lg md:text-xl lg:text-2xl">
              <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
            <h1>zema bet</h1>

              <p className=" text-black  text-lg md:text-xl lg:text-2xl"><ul>
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
      <div className="grid grid-cols-1 sm:hidden mt-4">
        <div className="text-black text-lg md:text-xl lg:text-2xl"><ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul></div>
        <div className="text-black text-lg md:text-xl lg:text-2xl">
          <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
                </div>
      </div>



      {/* <div className="relative">
        <img
          src={abi}
          alt="Image"
          className="object-cover w-full h-full ml-10 mt-5 px-5 mr-10"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:w-full">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl">bet</h1>
          <div className="hidden  sm:grid sm:grid-cols-2  lg:grid-cols-5 gap-8mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <p className="text-white text-lg md:text-xl lg:text-2xl">
                <ul className='list-disc'>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
              <p className="text-white text-lg md:text-xl lg:text-2xl">
              <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
              <p className="text-white text-lg md:text-xl lg:text-2xl">
              <ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul>
              </p>
            </div>
            <div>
              <p className="text-white text-lg md:text-xl lg:text-2xl"><ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul></p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="grid grid-cols-1 sm:hidden mt-4">
        <div className="text-white text-lg md:text-xl lg:text-2xl"><ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul></div>
        <div className="text-white text-lg md:text-xl lg:text-2xl"><ul>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li>
                  <li>lists</li> 
                  <li>lists</li>
                </ul></div>
        <div className="text-white text-lg md:text-xl lg:text-2xl">Column 3</div>
        <div className="text-white text-lg md:text-xl lg:text-2xl">Column 4</div>
      </div> */}
        <div>
          <h1 className="text-3xl font-bold text-center mt-10">የጉባዔ ቤቱ መምህራን</h1>
        </div>

        <div className='bg-gray-100 mt-10'>
      <div className='flex flex-col   lg:flex-row'>
      <div className='lg:w-1/2 p-4 sm:w-3/4'>
          <div className='h-96 flex items-center justify-center overflow-hidden'>
            <img src={likawuntizra} alt="Image" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="lg:w-1/2 p-4 lg:mt-40 sm:mt-10 ml-10 md:w-3/4">
              <h1 className="text-3xl text-dark-blue mb-4 ">
                ሊቀ ሊቃዉንት መምህር ዕዝራ ሀዲስ
              </h1>
              <p className="">የ4ቱ ጉባያት መምህር</p>
            </div>
       

      </div>
      </div>
        <div className="mt-10">
          <div className="bg-gray-100 flex flex-cols">
            <div className="lg:w-1/2 p-4 lg:mt-40 sm:mt-10 ml-10 md:w-3/4">
              <h1 className="text-3xl text-dark-blue mb-4 ">
                ሊቀ ሊቃዉንት መምህር ዕዝራ ሀዲስ
              </h1>
              <p className="">የ4ቱ ጉባያት መምህር</p>
            </div>

            <div className="lg:w-1/2 p-4 sm:w-3/4">
              <div className="h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={likawuntizra}
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
      <div className='flex flex-col   lg:flex-row'>
      <div className='lg:w-1/2 p-4 sm:w-3/4'>
          <div className='h-96 flex items-center justify-center overflow-hidden'>
            <img src={likawuntizra} alt="Image" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="lg:w-1/2 p-4 lg:mt-40 sm:mt-10 ml-10 md:w-3/4">
              <h1 className="text-3xl text-dark-blue mb-4 ">
                ሊቀ ሊቃዉንት መምህር ዕዝራ ሀዲስ
              </h1>
              <p className="">የ4ቱ ጉባያት መምህር</p>
            </div>
       

      </div>
      </div>
       <div>
        <div className=" p-5 "> 
          <p className=" mr-10 ">
            የአብነት ትምህርት ማለት በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዉስጥ ቅድሚያ ከሚሰጣቸው እና ስለ
            ሃይማኖታዊ ትምህርቶች እዉቀት የምናገኝበት ትልቁና ዋናው መንገድ ነው፡፡
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AbnetPage;
