import React, { useState } from "react";
import Logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };
  return (
    <div>
      <div>
        <div className="flex py-2 border-b border-gray-300">
          <div className="w-1/4">
            <img src={Logo} alt="Logo" className="w-20" />
          </div>
          <div className="w-2/4 flex items-center">
            {/* <div className="w-2/3 mx-auto border border-gray-400 rounded-full h-10 px-5 flex items-center">
              <input type="text" placeholder="ፈልግ" className="" />
            </div> */}
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
                fill="#000000"
                className="w-6 h-6"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 46.168 46.168"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M23.641,7.836c0-3.263-2.655-5.918-5.918-5.918s-5.918,2.655-5.918,5.918c0,3.264,2.655,5.919,5.918,5.919 S23.641,11.1,23.641,7.836z"></path>{" "}
                      <path d="M26.97,26.346h9.581c0.553,0,1-0.447,1-1s-0.447-1-1-1H26.97c-0.553,0-1,0.447-1,1S26.418,26.346,26.97,26.346z"></path>{" "}
                      <path d="M26.97,31.068h9.581c0.553,0,1-0.447,1-1s-0.447-1-1-1H26.97c-0.553,0-1,0.447-1,1S26.418,31.068,26.97,31.068z"></path>{" "}
                      <path d="M10.505,11.996c-0.223-0.189-0.515-0.272-0.805-0.229l-8.854,1.377c-0.359,0.056-0.66,0.303-0.785,0.644 c-0.126,0.342-0.056,0.725,0.183,0.999l3.91,4.519l-2.59,3.607c-0.124,0.173-0.188,0.38-0.188,0.593L1.573,43.26 c0.007,0.549,0.451,0.99,1,0.99h8.264c0.553,0,1-0.447,1-1V31.771c0-0.141-0.029-0.277-0.086-0.404l-2.503-5.658l4.917-5.873 v2.363c0,0.313,0.146,0.606,0.394,0.796l4.239,3.229l-1.733,1.518c-0.034,0.029-0.056,0.066-0.085,0.101 c-0.015,0.017-0.035,0.024-0.049,0.042c-0.009,0.012-0.01,0.023-0.019,0.035c-0.068,0.1-0.125,0.204-0.154,0.316 c-0.003,0.01-0.002,0.021-0.004,0.029c-0.024,0.104-0.029,0.209-0.021,0.314c0.003,0.033,0.01,0.062,0.017,0.097 c0.007,0.037,0.006,0.075,0.018,0.112c-0.028,0.093-0.044,0.191-0.044,0.295v14.165c0,0.13,0.026,0.26,0.077,0.382 c0.102,0.245,0.296,0.439,0.541,0.541c0.122,0.051,0.252,0.077,0.382,0.077h27.445c0.13,0,0.26-0.026,0.382-0.077 c0.245-0.102,0.438-0.296,0.541-0.541c0.051-0.122,0.077-0.252,0.077-0.382V28.495c0-0.034-0.019-0.063-0.021-0.099 c-0.007-0.076-0.021-0.148-0.048-0.224c-0.021-0.06-0.045-0.112-0.076-0.167c-0.018-0.031-0.021-0.066-0.044-0.098 c-0.023-0.034-0.062-0.053-0.089-0.082c-0.023-0.025-0.035-0.061-0.062-0.083L32.131,15.717c-0.379-0.332-0.941-0.332-1.318-0.002 L20.336,24.88l-4.17-3.177v-4.616c0-0.015,0-0.028-0.001-0.043c0-0.001,0-0.001,0-0.002c-0.008-0.174-0.061-0.34-0.147-0.482 c0,0,0,0,0-0.001c0,0.001-0.001-0.002-0.001-0.002c-0.001,0-0.001,0-0.001-0.001c0,0,0-0.001-0.001-0.001 c-0.023-0.038-0.05-0.074-0.078-0.108c0-0.001,0-0.001,0-0.001l-0.001-0.001c-0.001-0.001-0.001-0.001-0.001-0.001 c0-0.001,0-0.001,0-0.001c-0.056-0.066-0.12-0.126-0.192-0.177l-4.888-3.524C10.85,12.455,10.723,12.183,10.505,11.996z M30.392,39.516c0.035,0.027,0.076,0.039,0.113,0.062c0.034,0.021,0.064,0.038,0.101,0.054c0.128,0.057,0.261,0.094,0.396,0.094 h0.001h0.001c0.131,0,0.259-0.035,0.383-0.086c0.034-0.016,0.062-0.031,0.097-0.05c0.034-0.021,0.072-0.028,0.105-0.054 l4.905-3.545l6.26,6.26H20.137l6.006-6.006L30.392,39.516z M44.168,40.835l-6.03-6.03l6.03-4.354V40.835z M18.723,40.835V30.527 l5.823,4.484L18.723,40.835z M31.469,17.798l12.096,10.62l-7.298,5.271c-0.154,0.045-0.302,0.115-0.423,0.236 c-0.038,0.038-0.057,0.088-0.086,0.131l-4.736,3.42l-11.724-9.031l1.124-0.982l2.398,1.828c0.442,0.335,1.067,0.248,1.402-0.189 c0.334-0.438,0.249-1.066-0.189-1.4l-2.075-1.582L31.469,17.798z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="w-1/5 flex justify-end">
              <a href="/notify">
                <svg
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.31317 12.463C6.20006 9.29213 8.60976 6.6252 11.701 6.5C14.7923 6.6252 17.202 9.29213 17.0889 12.463C17.0889 13.78 18.4841 15.063 18.525 16.383C18.525 16.4017 18.525 16.4203 18.525 16.439C18.5552 17.2847 17.9124 17.9959 17.0879 18.029H13.9757C13.9786 18.677 13.7404 19.3018 13.3098 19.776C12.8957 20.2372 12.3123 20.4996 11.701 20.4996C11.0897 20.4996 10.5064 20.2372 10.0923 19.776C9.66161 19.3018 9.42346 18.677 9.42635 18.029H6.31317C5.48869 17.9959 4.84583 17.2847 4.87602 16.439C4.87602 16.4203 4.87602 16.4017 4.87602 16.383C4.91795 15.067 6.31317 13.781 6.31317 12.463Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M9.42633 17.279C9.01212 17.279 8.67633 17.6148 8.67633 18.029C8.67633 18.4432 9.01212 18.779 9.42633 18.779V17.279ZM13.9757 18.779C14.3899 18.779 14.7257 18.4432 14.7257 18.029C14.7257 17.6148 14.3899 17.279 13.9757 17.279V18.779ZM12.676 5.25C13.0902 5.25 13.426 4.91421 13.426 4.5C13.426 4.08579 13.0902 3.75 12.676 3.75V5.25ZM10.726 3.75C10.3118 3.75 9.97601 4.08579 9.97601 4.5C9.97601 4.91421 10.3118 5.25 10.726 5.25V3.75ZM9.42633 18.779H13.9757V17.279H9.42633V18.779ZM12.676 3.75H10.726V5.25H12.676V3.75Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </div>
            <div className="w-2/5 flex justify-end">
              <div className="w-3/4 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <button className="w-full mx-auto text-base font-bold text-white">
                  ለመለገስ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-3 font-bold border-b border-gray-300">
          <div className="w-5/6 flex items-center">
            <div className="w-1/6 flex">
              <a href="/" className="cursor-pointer">
                ዋና ገጽ
              </a>
            </div>
            <div className="w-1/6 flex items-center">
              <div className="mr-1 cursor-pointer">ለሎች ገጾች</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="w-1/6">
              <a href="/event" className="cursor-pointer">
                መርሃግብራት
              </a>
            </div>
            <div className="w-1/6">
              <a href="/church" className="cursor-pointer">
                ስለ ደብሩ
              </a>
            </div>
            <div className="w-1/6">
              <a href="/notify" className="cursor-pointer">
                መርሃግብራት
              </a>
            </div>
            <div className="w-1/6">
              <a href="/contact" className="cursor-pointer">
                አግኙን
              </a>
            </div>
            <div className="w-1/6 flex items-center">
              <div className="mr-1 cursor-pointer">ቋንቋ</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-1/6 flex items-center">
            <div className="ml-auto mr-2">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div className="font-bold text-lg text-dark-blue mr-auto">
              +251-9001-12233
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
