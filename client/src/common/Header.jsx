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
              <div class="dropdown">
              <div className="flex items-center">
                <button class="dropbtn mr-2">
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
                </button>
              </div>
              <div class="dropdown-content">
              <Link to={isLoggedIn ? "/profile" : "/login"}>
              {t("user")}
              </Link>
                <a href="/admin/login">{t("admin")}</a>
              </div>
            </div>
              {/* )} */}
            </div>

            <div className="w-1/5 flex justify-end">
              <a href="/contact">
                <svg
                  viewBox="0 0 48 48"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26 33H29.5C36.4036 33 42 27.4036 42 20.5C42 13.5964 36.4036 8 29.5 8H18.5C11.5964 8 6 13.5964 6 20.5C6 28.4145 11.2167 33.2537 16.9239 36.2262C19.7585 37.7025 22.6136 38.6566 24.7728 39.2414C25.2149 39.3611 25.626 39.4649 26 39.5542V33ZM28 42C28 42 27.2439 41.8897 26 41.6077C20.2362 40.3007 4 35.305 4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42Z"
                      fill="#333333"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.4068 12.05C24.085 12.0079 22.7009 12.2548 21.5479 12.8141C20.3942 13.3737 19.3772 14.2999 19.0314 15.6471C18.8941 16.182 19.2164 16.727 19.7514 16.8643C20.2863 17.0016 20.8313 16.6793 20.9686 16.1443C21.1205 15.5527 21.5946 15.0143 22.4208 14.6135C23.2363 14.218 24.2897 14.0155 25.3432 14.049C26.4024 14.0827 27.3619 14.3511 28.0241 14.7918C28.3077 14.9805 28.5696 15.2174 28.7523 15.5344C28.9415 15.8624 29 16.1964 29 16.5C29 16.9899 28.8581 17.3425 28.6476 17.6194C28.4264 17.9104 28.0947 18.1616 27.6643 18.3699C26.7873 18.7944 25.6897 18.9516 24.9332 19.0022C24.408 19.0374 24 19.4736 24 20V21.5C24 22.0523 24.4477 22.5 25 22.5C25.5114 22.5 25.9343 22.1153 25.993 21.62C26.0431 21.1967 26.356 20.8517 26.7724 20.7606C27.3579 20.6326 27.9692 20.4443 28.5357 20.1701C29.8012 19.5576 31 18.4226 31 16.5C31 14.9863 30.2219 13.8521 29.1322 13.1268C28.0762 12.424 26.7235 12.0919 25.4068 12.05ZM20.675 11.0146C22.1657 10.2915 23.8805 10.0004 25.4704 10.051C27.0442 10.101 28.7902 10.4968 30.2402 11.4618C31.7827 12.4884 33 14.2006 33 16.5C33 19.4627 31.0769 21.1621 29.407 21.9704C28.8736 22.2285 28.3273 22.4209 27.8052 22.5651C27.3754 23.6964 26.2821 24.5 25 24.5C23.3431 24.5 22 23.1568 22 21.5V20C22 18.4209 23.2241 17.1121 24.7996 17.0067C25.4723 16.9617 26.2637 16.8259 26.793 16.5697C26.861 16.5368 26.9133 16.5072 26.953 16.4824C26.9421 16.4745 26.9298 16.466 26.916 16.4568C26.6467 16.2775 26.0799 16.0734 25.2796 16.048C24.4948 16.023 23.772 16.181 23.2937 16.413C23.0267 16.5425 22.9256 16.6444 22.8949 16.683C22.4657 18.263 20.8451 19.2099 19.2541 18.8015C17.6493 18.3896 16.6822 16.7546 17.0942 15.1498C17.6336 13.0486 19.192 11.734 20.675 11.0146ZM22.8835 16.6997C22.8833 16.6997 22.8846 16.697 22.8881 16.6919C22.8855 16.6973 22.8837 16.6998 22.8835 16.6997ZM27.0553 16.4092L27.1747 16.5L27.0553 16.4092ZM25 27C24.4477 27 24 27.4477 24 28C24 28.5523 24.4477 29 25 29C25.5523 29 26 28.5523 26 28C26 27.4477 25.5523 27 25 27ZM22 28C22 26.3432 23.3431 25 25 25C26.6568 25 28 26.3432 28 28C28 29.6569 26.6568 31 25 31C23.3431 31 22 29.6569 22 28Z"
                      fill="#333333"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
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
              <a
                href="/"
                className={`cursor-pointer ${
                  window.location.pathname === "/" ? "header-active-links" : ""
                }`}
              >
               {t("ዋና ገጽ")}
              </a>
            </div>

            <div className="w-1/6">
              <a
                href="/church"
                className={`cursor-pointer ${
                  window.location.pathname === "/church"
                    ? "header-active-links"
                    : ""
                }`}
              >
               {t("ስለ ደብሩ")}
              </a>
            </div>
            <div className="w-1/6">
              <a
                href="/sunday"
                className={`cursor-pointer ${
                  window.location.pathname === "/sunday"
                    ? "header-active-links"
                    : ""
                }`}
              >
                {t("sun_sch")}
              </a>
            </div>
            <div className="w-1/6">
              <a
                href="/abnet"
                className={`cursor-pointer ${
                  window.location.pathname === "/abnet"
                    ? "header-active-links"
                    : ""
                }`}
              >
                {t("ab")}
              </a>
            </div>
            <div className="w-1/6 flex items-center">
              <div className="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">{t("other")}</button>
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
                  <a
                    href="/member"
                    className={`cursor-pointer ${
                      window.location.pathname === "/member"
                        ? "header-active-links"
                        : ""
                    }`}
                  >
                    {t("mem")}
                  </a>
                  <a
                    href="/feedback"
                    className={`cursor-pointer ${
                      window.location.pathname === "/feedback"
                        ? "header-active-links"
                        : ""
                    }`}
                  >
                    {t("feed")}
                  </a>
                  <a
                    href="/contact"
                    className={`cursor-pointer ${
                      window.location.pathname === "/contact"
                        ? "header-active-links"
                        : ""
                    }`}
                  >
                  {t("አግኙን")}
                  </a>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-1/6 flex items-center">
              <div class="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">{t("ቋንቋ")}</button>
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
                  {languages.map(({code , name}) => (
                    <div key={code}>
                    <button onClick={() => i18next.changeLanguage(code)}
                    disabled = {code === currentLanguageCode}>{name}</button>
                  </div>
                  )
                  )}
                  
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

      <div className="lg:hidden md:hidden sm:block border-b border-gray-200">
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
          <a
            href="/"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/" ? "header-active-links" : ""
            }`}
          >
           {t("ዋና ገጽ")}
          </a>
          <a
            href="/church"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/church"
                ? "header-active-links"
                : ""
            }`}
          >
           {t("ስለ ደብሩ")}
          </a>
          <a
            href="/senbet"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/senbet"
                ? "header-active-links"
                : ""
            }`}
          >
            {t("sun_sch")}
          </a>
          <a
            href="/abnet"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/abnet" ? "header-active-links" : ""
            }`}
          >
            {t("ab")}
          </a>
          <a
            href="/member"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/member"
                ? "header-active-links"
                : ""
            }`}
          >
            {t("mem")}
          </a>
          <a
            href="/feedback"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/feedback"
                ? "header-active-links"
                : ""
            }`}
          >
           {t("feed")}
          </a>
          <a
            href="/donate/c"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/donate/c"
                ? "header-active-links"
                : ""
            }`}
          >
            {t('ለመለገስ')}
          </a>
          <a
            href="/contact"
            className={`cursor-pointer border-b border-t border-gray-200 ${
              window.location.pathname === "/contact"
                ? "header-active-links"
                : ""
            }`}
          >
            {t("አግኙን")}
          </a>
          <div className="padding">
            <div class="dropdown">
              <div className="flex items-center">
                <button class="dropbtn mr-2">{t("ቋንቋ")}</button>
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
                  {languages.map(({code , name}) => (
                    <div key={code}>
                    <button onClick={() => i18next.changeLanguage(code)}
                    disabled = {code === currentLanguageCode}>{name}</button>
                  </div>
                  )
                  )}
                  
                </div>
            </div>
          </div>
        </div>

        <div className="flex items-center py-2">
          <div className="w-1/3">
            <button class="openbtn" onclick="openNav()">
              &#9776;
            </button>
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={Logo} alt="Logo" className="w-12" />
          </div>
          <div className="w-1/3 flex justify-end gap-2">
            <div class="dropdown">
              <div className="flex items-center">
                <button class="dropbtn mr-2">
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
                </button>
              </div>
              <div class="dropdown-content">
              <Link to={isLoggedIn ? "/profile" : "/login"}>
              {t("user")}
              </Link>
                <a href="/admin/login"> {t("admin")}</a>
              </div>
            </div>

            <a href="/contact">
              <svg
                viewBox="0 0 48 48"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26 33H29.5C36.4036 33 42 27.4036 42 20.5C42 13.5964 36.4036 8 29.5 8H18.5C11.5964 8 6 13.5964 6 20.5C6 28.4145 11.2167 33.2537 16.9239 36.2262C19.7585 37.7025 22.6136 38.6566 24.7728 39.2414C25.2149 39.3611 25.626 39.4649 26 39.5542V33ZM28 42C28 42 27.2439 41.8897 26 41.6077C20.2362 40.3007 4 35.305 4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42Z"
                    fill="#333333"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.4068 12.05C24.085 12.0079 22.7009 12.2548 21.5479 12.8141C20.3942 13.3737 19.3772 14.2999 19.0314 15.6471C18.8941 16.182 19.2164 16.727 19.7514 16.8643C20.2863 17.0016 20.8313 16.6793 20.9686 16.1443C21.1205 15.5527 21.5946 15.0143 22.4208 14.6135C23.2363 14.218 24.2897 14.0155 25.3432 14.049C26.4024 14.0827 27.3619 14.3511 28.0241 14.7918C28.3077 14.9805 28.5696 15.2174 28.7523 15.5344C28.9415 15.8624 29 16.1964 29 16.5C29 16.9899 28.8581 17.3425 28.6476 17.6194C28.4264 17.9104 28.0947 18.1616 27.6643 18.3699C26.7873 18.7944 25.6897 18.9516 24.9332 19.0022C24.408 19.0374 24 19.4736 24 20V21.5C24 22.0523 24.4477 22.5 25 22.5C25.5114 22.5 25.9343 22.1153 25.993 21.62C26.0431 21.1967 26.356 20.8517 26.7724 20.7606C27.3579 20.6326 27.9692 20.4443 28.5357 20.1701C29.8012 19.5576 31 18.4226 31 16.5C31 14.9863 30.2219 13.8521 29.1322 13.1268C28.0762 12.424 26.7235 12.0919 25.4068 12.05ZM20.675 11.0146C22.1657 10.2915 23.8805 10.0004 25.4704 10.051C27.0442 10.101 28.7902 10.4968 30.2402 11.4618C31.7827 12.4884 33 14.2006 33 16.5C33 19.4627 31.0769 21.1621 29.407 21.9704C28.8736 22.2285 28.3273 22.4209 27.8052 22.5651C27.3754 23.6964 26.2821 24.5 25 24.5C23.3431 24.5 22 23.1568 22 21.5V20C22 18.4209 23.2241 17.1121 24.7996 17.0067C25.4723 16.9617 26.2637 16.8259 26.793 16.5697C26.861 16.5368 26.9133 16.5072 26.953 16.4824C26.9421 16.4745 26.9298 16.466 26.916 16.4568C26.6467 16.2775 26.0799 16.0734 25.2796 16.048C24.4948 16.023 23.772 16.181 23.2937 16.413C23.0267 16.5425 22.9256 16.6444 22.8949 16.683C22.4657 18.263 20.8451 19.2099 19.2541 18.8015C17.6493 18.3896 16.6822 16.7546 17.0942 15.1498C17.6336 13.0486 19.192 11.734 20.675 11.0146ZM22.8835 16.6997C22.8833 16.6997 22.8846 16.697 22.8881 16.6919C22.8855 16.6973 22.8837 16.6998 22.8835 16.6997ZM27.0553 16.4092L27.1747 16.5L27.0553 16.4092ZM25 27C24.4477 27 24 27.4477 24 28C24 28.5523 24.4477 29 25 29C25.5523 29 26 28.5523 26 28C26 27.4477 25.5523 27 25 27ZM22 28C22 26.3432 23.3431 25 25 25C26.6568 25 28 26.3432 28 28C28 29.6569 26.6568 31 25 31C23.3431 31 22 29.6569 22 28Z"
                    fill="#333333"
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