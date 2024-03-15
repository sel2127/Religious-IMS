import React, { useEffect, useRef } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Logo from "../Images/logo.png";
import "../styles/notify.css";
import Breadcrumb from '../common/Breadcrumb';


const Notify = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;

    const openModal = () => {
      modal.style.display = "block";
    };

    const closeModal = () => {
      modal.style.display = "none";
    };

    const handleClickOutside = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };

    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = openModal;
    span.onclick = closeModal;
    window.onclick = handleClickOutside;

    return () => {
      window.onclick = null;
    };
  }, []);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function handleClickOutside(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
          <Breadcrumb/>

      <div className="w-full bg-gray-100 py-12">
        <div className="w-1/2 bg-white p-10 mx-auto">
          <div
            id="myBtn"
            className="flex items-center border-b border-gray-200 pb-6 cursor-pointer"
          >
            <div className="w-1/2 flex items-center gap-4">
              <div className="w-1/4">
                <img src={Logo} alt="Logo" className="w-20" />
              </div>
              <div className="w-3/4 flex flex-col gap-2">
                <div className="font-bold text-sm">የምሽት ጉባኤ</div>
                <div className="text-xs truncate">
                  የመድኃኔዓለምን ዓመታዊ በዓል ምክንያት በማድረግ ልዩ የምሽት ጉባኤ ተዘጋጅቷል
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <div className="dropdown">
                <button className="dropbtn">
                  <svg
                    fill="#000000"
                    className="w-6 h-6 cursor-pointer dropbtn"
                    onClick={myFunction}
                    height="200px"
                    width="200px"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        className="cls-1"
                        d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"
                      ></path>
                    </g>
                  </svg>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <button>
                    <div className="flex justify-canter">
                      <div className="w-1/4 mx-auto">ccc</div>
                      <div className="w-3/4 ml-2">ማስታወቂያ አጥፋ</div>
                    </div>
                  </button>
                  <button>
                    <div className="flex justify-canter">
                      <div className="w-1/4 mx-auto">ddd</div>
                      <div className="w-3/4 ml-2">ማስታወቂያ ደብቅ</div>
                    </div>
                  </button>
                  <button>Link 3</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close">&times;</span>
            <div className="w-full flex items-center gap-4 border-b border-gray-200">
            <div className="w-1/4">
                <img src={Logo} alt="Logo" className="w-20 mx-auto" />
              </div>
              <div className="w-3/4 flex flex-col gap-2">
                <div className="font-bold text-sm">የምሽት ጉባኤ</div>
                <div className="text-xs truncate">
                  የመድኃኔዓለምን ዓመታዊ በዓል ምክንያት በማድረግ ልዩ የምሽት ጉባኤ ተዘጋጅቷል
                </div>
              </div>
            </div>
            <div className="py-10 px-16">
              በዚህ ጉባኤ ታላላቅ መምህራን የሚገኙ ሲሆን ከዚያ በተጨማሪም ልዩ ልዩ ዘማሪያን ተጋብዘዋል። 
              <br />
              በዚህ ጉባኤ በመገኘት የበረከቱ ተካፋይ ይሁኑ
            </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;