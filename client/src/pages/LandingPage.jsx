import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Event1 from "../Images/event1.jpg";
import Event2 from "../Images/event2.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="px-20">
        <Header />
        <Slider />
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">የቅርብ ቀን መርሃግብራት</h1>
          {/* <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#a8a8a8" stroke="#a8a8a8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#a8a8a8" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 34.8333,26.9167L 37.2083,12.6667L 38.7917,12.6667L 41.1667,26.9167L 34.8333,26.9167 Z M 42.75,37.2083L 55.4167,49.875L 53.0416,51.4583L 38,35.625L 22.9583,51.4583L 20.5833,49.875L 33.25,37.2083L 33.25,32.0625L 34.8333,32.0625L 34.8333,28.1042L 41.1667,28.1042L 41.1667,32.0625L 42.75,32.0625L 42.75,37.2083 Z M 38,39.5833L 50.6667,52.25L 50.6667,60.1667L 41.1667,60.1667L 41.1667,53.8333C 41.1667,52.0844 39.7489,50.6667 38,50.6667C 36.2511,50.6667 34.8333,52.0844 34.8333,53.8333L 34.8333,60.1667L 25.3333,60.1667L 25.3333,52.25L 38,39.5833 Z "></path> </g></svg> */}
          <p className="mt-5">በደብራችን በቅርብ ግዜ የተከናወኑ መርሃግብራትን እዚህ ያገኛሉ</p>
        </div>
        <div>
          <div className="mt-10 bg-gray-100 flex">
            <div className="w-1/4 flex flex-col items-center justify-center">
              <p className="text-sm">ህዳር 10 2016</p>
              <p className="text-sm">ሐሙስ 4:30</p>
            </div>
            <div className="w-2/4 flex flex-col justify-center">
              <p className="text-lg">ወጥመድ ተሰበረ፥ እኛም አመለጥን (መዝ 88፥12)</p>
              <p className="text-sm">ስብከት በብጹዕ ወቅዱስ አቡነ ናትናኤል</p>
              <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-6 h-10 flex items-center">
                <button className="w-full mx-auto text-lg font-bold text-white">
                  እይ
                </button>
              </div>
            </div>
            <div className="w-1/4 p-5 flex items-center justify-center">
              <img src={Event1} alt="first event" className="w-2/3" />
            </div>
          </div>
          <div className="mt-10 bg-gray-100 flex">
            <div className="w-1/4 flex flex-col items-center justify-center">
              <p className="text-sm">መጋቢት 27 2016</p>
              <p className="text-sm">ሰኞ 3:30</p>
            </div>
            <div className="w-2/4 flex flex-col justify-center">
              <p className="text-lg">
                የመድኃኔዓለም በዓለ ንግስ አከባበር በደብራችን ደብረ መድኃኒት መድኃኔዓለም ቤተክርስቲያን
              </p>
              <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-6 h-10 flex items-center">
                <button className="w-full mx-auto text-lg font-bold text-white">
                  እይ
                </button>
              </div>
            </div>
            <div className="w-1/4 p-5 flex items-center justify-center">
              <img src={Event2} alt="first event" className="w-2/3" />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-4">
          <div className="">asd</div>
          <div>asd</div>
          <div>asda</div>
          <div>asd</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
