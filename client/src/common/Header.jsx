import React, { useState, useEffect } from "react";
import Logo from "../assets/Images/logo.png";
import "../assets/styles/header.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const currentLanguageCode = cookies.get("i18next") || "am";
  const languages = [
    {
      code: "am",
      name: "አማርኛ",
    },
    {
      code: "en",
      name: "English",
    },
  ];
  const { t } = useTranslation();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access state from Redux store
  // console.log(isAuthenticated);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  useEffect(() => {
    const openBtn = document.querySelector(".openbtn");
    const closeBtn = document.querySelector(".closebtn");

    openBtn.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);

    // Clean up the event listeners on component unmount
    return () => {
      openBtn.removeEventListener("click", openNav);
      closeBtn.removeEventListener("click", closeNav);
    };
  }, []);

  return (
    <div>
      <div className="lg:block md:block sm:hidden">
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
              {/* {isLoggedIn !== undefined && ( // Check if defined */}
              <Link to={isLoggedIn ? "/profile" : "/login"}>
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
              </Link>
              {/* )} */}
            </div>

            <div className="w-1/5 flex justify-end">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
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
                    d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M8 12H8.009M11.991 12H12M15.991 12H16"
                    stroke="#1C274C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
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
                <a
                  href="/donate/c"
                  className="w-full mx-auto text-base font-bold text-white text-center"
                >
                  {t("ለመለገስ")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-3 font-bold border-b border-gray-300">
          <div className="lg:w-4/6 md:w-4/6 flex items-center lg:text-base md:text-sm">
            <div className="w-1/6 flex">
              <a href="/" className="cursor-pointer">
                ዋና ገጽ
              </a>
            </div>

            <div className="w-1/6">
              <a href="/church" className="cursor-pointer">
                ስለ ደብሩ
              </a>
            </div>
            <div className="w-1/6">
              <a href="/sunday" className="cursor-pointer">
                ሰንበት ት/ቤት
              </a>
            </div>
            <div className="w-1/6">
              <a href="/abnet" className="cursor-pointer">
                አብነት
              </a>
            </div>
            <div className="w-1/6 flex items-center">
              <div className="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">ሌሎች ገጾች</button>
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
                <div class="dropdown-content">
                  <a href="/member">የአባልነት ምዝገባ</a>
                  <a href="/feedback">አስተያየቶች</a>
                  <a href="/donate/c">ለመለገስ</a>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-1/6 flex items-center">
              <div class="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">ቋንቋ</button>
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
                <div class="dropdown-content">
                  <a href="#">አማርኛ</a>
                  <a href="#">English</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-2/6 flex items-center justify-end">
            <div className="">
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
            <div className="font-bold lg:text-base md:text-sm text-dark-blue">
              +251-9001-12233
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden sm:block">
        <div id="mySidepanel" className="sidepanel font-xs">
          <div className="flex justify-end">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onclick="closeNav()"
            >
              &times;
            </a>
          </div>
          <a href="/" className="border-b border-t border-gray-200">
            ዋና ገጽ
          </a>
          <a href="/church" className="border-b border-gray-200">
            ስለ ደብሩ
          </a>
          <a href="/senbet" className="border-b border-gray-200">
            ሰንበት ት/ቤት
          </a>
          <a href="/abnet" className="border-b border-gray-200">
            አብነት
          </a>
          <a href="/member" className="border-b border-gray-200">
            የአባልነት ምዝገባ
          </a>
          <a href="/feedback" className="border-b border-gray-200">
            አስተያየቶች
          </a>
          <a href="/donate/c" className="border-b border-gray-200">
            ለመለገስ
          </a>
          <div className="padding">
            <div class="dropdown">
              <div className="flex items-center">
                <button class="dropbtn mr-2">ቋንቋ</button>
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
              <div class="dropdown-content">
                <a href="#">አማርኛ</a>
                <a href="#">English</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-2">
          <div className="w-1/3">
            <button class="openbtn" onclick="openNav()">
              &#9776;
            </button>
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={Logo} alt="Logo" className="w-12" />
          </div>
          <div className="w-1/3 flex justify-end gap-2">
            <a href="/login"></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <a href="/chat">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
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
                    d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M8 12H8.009M11.991 12H12M15.991 12H16"
                    stroke="#1C274C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </a>

            <a href="/notify">
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
