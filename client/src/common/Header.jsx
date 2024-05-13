import React, { useState } from "react";
import Logo from "../assets/Images/logo.png";
import "../assets/styles/header.css"
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";


const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const currentLanguageCode = cookies.get('i18next') || 'am'
  const languages = [
    {
      code:'am',
      name:'አማርኛ'
    },
    {
      code:'en',
      name:'English'
    }
  ];
  const {t} = useTranslation();


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
            <div className="w-2/3 mx-auto border border-gray-400 rounded-full h-10 px-5 flex items-center">
              <input type="text" placeholder={t("ፈልግ")} className="" />
            </div>
          </div>
          <div className="w-1/4 flex items-center">
            <div className="w-1/5 flex justify-end">
             <a href="/login">
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
             </a>
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
            <div className="w-1/5 flex justify-end">
              <a href="/notify">
                <svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31317 12.463C6.20006 9.29213 8.60976 6.6252 11.701 6.5C14.7923 6.6252 17.202 9.29213 17.0889 12.463C17.0889 13.78 18.4841 15.063 18.525 16.383C18.525 16.4017 18.525 16.4203 18.525 16.439C18.5552 17.2847 17.9124 17.9959 17.0879 18.029H13.9757C13.9786 18.677 13.7404 19.3018 13.3098 19.776C12.8957 20.2372 12.3123 20.4996 11.701 20.4996C11.0897 20.4996 10.5064 20.2372 10.0923 19.776C9.66161 19.3018 9.42346 18.677 9.42635 18.029H6.31317C5.48869 17.9959 4.84583 17.2847 4.87602 16.439C4.87602 16.4203 4.87602 16.4017 4.87602 16.383C4.91795 15.067 6.31317 13.781 6.31317 12.463Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.42633 17.279C9.01212 17.279 8.67633 17.6148 8.67633 18.029C8.67633 18.4432 9.01212 18.779 9.42633 18.779V17.279ZM13.9757 18.779C14.3899 18.779 14.7257 18.4432 14.7257 18.029C14.7257 17.6148 14.3899 17.279 13.9757 17.279V18.779ZM12.676 5.25C13.0902 5.25 13.426 4.91421 13.426 4.5C13.426 4.08579 13.0902 3.75 12.676 3.75V5.25ZM10.726 3.75C10.3118 3.75 9.97601 4.08579 9.97601 4.5C9.97601 4.91421 10.3118 5.25 10.726 5.25V3.75ZM9.42633 18.779H13.9757V17.279H9.42633V18.779ZM12.676 3.75H10.726V5.25H12.676V3.75Z" fill="#000000"></path> </g></svg>
              </a>
            </div>
            <div className="w-2/5 flex justify-end">
              <div className="w-3/4 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                <a href="/donate/c" className="w-full mx-auto text-base font-bold text-white text-center"
                >
                  {t('ለመለገስ')}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-3 font-bold border-b border-gray-300">
          <div className="w-5/6 flex items-center">
            <div className="w-1/6 flex"><a href="/" className="cursor-pointer">{t("ዋና ገጽ")}</a></div>
            <div className="w-1/6"><a href="/event" className="cursor-pointer">{t("መርሃግብራት")}</a></div>
            <div className="w-1/6"><a href="/church" className="cursor-pointer">{t("ስለ ደብሩ")}</a></div>
            <div className="w-1/6"><a href="/contact" className="cursor-pointer">{t("አግኙን")}</a></div>
            <div className="w-1/6 flex items-center">

              <div className="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">{t("ሌሎች ገጾች")}</button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div>


              </div>
            </div>
            <div className="w-1/6 flex items-center">
              <div class="dropdown">
                <div className="flex items-center">
                  <button class="dropbtn mr-2">{t("ቋንቋ")}</button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
          <div className="w-1/6 flex items-center">
            <div className="ml-auto mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

            </div>
            <div className="font-bold text-md text-dark-blue mr-auto">+251-9001-12233</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
