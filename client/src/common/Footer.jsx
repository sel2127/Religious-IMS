import React from "react";
import Logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-gray-300 mt-20">
        <div className="lg:flex md:flex items-center gap-10 mt-5">
          <div className="lg:w-1/4 md:w-1/4 sm:w-full flex flex-col items-center px-4">
            <img src={Logo} alt="Logo" className="w-20" />
            <p className="font-bold text-sm text-gray-500 mt-4">
              ይህ የደብረ መድኃኒት መድኃኔዓለም ቤተክርስቲያን ድህረገጽ ነው። ላላወቁት በማሳወቅ የድርሻችንን እንወጣ።
            </p>
            <div className="flex gap-4 items-center mt-6">
            <a href="https://www.facebook.com/profile.php?id=61557846800961"><svg fill="#000000" className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg></a>
            <a href="https://youtu.be/yZBwFuiGyBc?si=9130Dx29Gxa1yflv"><svg fill="#000000" className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg></a>
            <a href="https://t.me/bahiretibeb"><svg viewBox="0 0 192 192" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"></path></g></svg></a>
            <a href="https://www.instagram.com/yeabsirashibeshi?igsh=eDY5Y3RhZDdna3du"><svg fill="#000000" className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg></a>
            </div>
          </div>
          <div className="lg:w-3/4 md:w-3/4 sm:w-full lg:grid md:grid grid-cols-3 gap-4">
            <div className="flex flex-col lg:mt-0 md:mt-0 sm:mt-6">
              <h4 className="font-bold text-lg ">እኛን ለማግኘት</h4>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p className="font-bold text-sm text-gray-500 ml-2">
                  +251-9001-12233
                </p>
              </div>
              <div className="flex">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                <p className="font-bold text-sm text-gray-500 ml-2">
                  debremedhanit27@gmail.com
                </p>
              </div>
              <div className="flex">
              <svg fill="#000000" className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.992,9.98A8.991,8.991,0,0,0,3.01,9.932a13.95,13.95,0,0,0,8.574,12.979A1,1,0,0,0,12,23a1.012,1.012,0,0,0,.419-.09A13.948,13.948,0,0,0,20.992,9.98ZM12,20.9A11.713,11.713,0,0,1,5.008,10a6.992,6.992,0,1,1,13.984,0c0,.021,0,.045,0,.065A11.7,11.7,0,0,1,12,20.9ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path></g></svg>
                <p className="font-bold text-sm text-gray-500 ml-2">
                  ቦሌ ቡልቡላ፣ አዲስ አበባ ኢትዮጵያ
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:mt-0 md:mt-0 sm:mt-6">
              <h4 className="font-bold text-lg ">ሌሎች ገጾች</h4>
              <div className="mt-4">
                <ul className="font-bold text-sm text-gray-500">
                  <li className="">
                    <a href="#">ዋና ገጽ</a>
                  </li>
                  <li>
                    <a href="#">ዋና ገጽ</a>
                  </li>
                  <li>
                    <a href="#">ዋና ገጽ</a>
                  </li>
                  <li>
                    <a href="#">ዋና ገጽ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:mt-0 md:mt-0 sm:mt-6">
              <h4 className="font-bold text-lg ">ስለ ደብራችን</h4>
              <div className="mt-4">
                <ul className="font-bold text-sm text-gray-500">
                  <li className="">
                    <a href="#">እርዳታ</a>
                  </li>
                  <li>
                    <a href="#">ሰንበት ትምህርት ቤት</a>
                  </li>
                  <li>
                    <a href="#">መርሃግብራት</a>
                  </li>
                  <li>
                    <a href="#">ዋና ገጽ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div className="border-t border-gray-300 mt-10 py-4">
    <p className="text-gray-500 text-xs">copyright &copy; 2024 debremedhanit. All rights reserved</p>
</div>
{/* <div className="mt-10"></div> */}
    </div>
  );
};

export default Footer;
