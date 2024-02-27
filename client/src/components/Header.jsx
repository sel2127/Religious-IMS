import React from "react";
import Logo from "../Images/logo.png";
import '../styles/main.css';

const Header = () => {
  return (
    <div>
      <div>
        <div className="flex py-2 border-b border-gray-300">
          <div className="w-1/4">
            <img src={Logo} alt="Logo" className="w-20" />
          </div>
          <div className="w-2/4 flex items-center">
            <div className="w-2/3 mx-auto border border-gray-400 rounded-full h-10 px-5 flex items-center">
              <input type="text" placeholder="ፈልግ" className="" />
            </div>
          </div>
          <div className="w-1/4 flex items-center">
            <div className="w-1/5 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="w-1/5 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <div className="w-3/5 flex justify-end">
              <div className="w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button className="w-full mx-auto text-base font-bold text-white">
                  ለመለገስ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-3 font-bold border-b border-gray-300">
          <div className="w-5/6 flex items-center">
            <div className="w-1/6 flex"><a href="#" className="cursor-pointer">ዋና ገጽ</a></div>
            <div className="w-1/6 flex items-center">
              <div className="mr-1 cursor-pointer">ለሎች ገጾች</div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

              </div>
              </div>
            <div className="w-1/6"><a href="#" className="cursor-pointer">መርሃግብራት</a></div>
            <div className="w-1/6"><a href="#" className="cursor-pointer">ስለ ደብሩ</a></div>
            <div className="w-1/6"><a href="#" className="cursor-pointer">አግኙን</a></div>
            <div className="w-1/6 flex items-center">
              <div className="mr-1 cursor-pointer">ቋንቋ</div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

              </div>
              </div>
          </div>
          <div className="w-1/6 flex items-center">
            <div className="ml-auto mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

            </div>
            <div className="font-bold text-lg text-dark-blue mr-auto">+251-9001-12233</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
