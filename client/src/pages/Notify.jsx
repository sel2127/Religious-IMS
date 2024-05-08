import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Images/logo.png";
import "../assets/styles/notify.css";

const Notify = () => {
  const modalRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    modalRef.current.style.display = "block";
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  useEffect(() => {
    // Fetch events from the server
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const modal = modalRef.current;

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
      <div className="w-full bg-gray-100 py-12">
        <div className="w-1/2 bg-white p-10 mx-auto">
          <div id="myBtn" className="">
            {events.map((event) => {
              // Extract the date portion from the eventdate string
              const date = new Date(event.eventdate);
              const formattedDate = date.toDateString();

              return (
                <div key={event.id}>
                  <div className="flex items-center border-b border-gray-200 py-6">

                    <div className="w-1/2 flex items-center gap-4 cursor-pointer" onClick={() => openModal(event)}>
                      {/* Display event details */}
                      <div className="w-1/4">
                        <img src={`../../assets/${event.eventImage}`} alt="image" className="w-20" />
                      </div>
                      <div className="w-3/4 flex flex-col gap-2">
                        <div className="font-bold text-sm">{event.eventname}</div>
                        <div className="text-xs truncate">{event.eventDesc}</div>
                        <div className="text-xs"><span className="font-bold">ቀን: </span>{formattedDate}</div>
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
                              <div className="w-1/4 mx-auto">

                              </div>
                              <div className="w-3/4 ml-2">ማስታወቂያ አጥፋ</div>
                            </div>
                          </button>
                          <button>
                            <div className="flex justify-canter">
                              <div className="w-1/4 mx-auto">
                              <svg fill="#000000" className="w-6 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M571.32 704a76.36 76.36 0 0 1-144.19 0zm-258.84-51.2L623.3 342c-8.46-25.2-31.52-39-73.21-44.49.06-1 .31-2 .31-3.06a51.2 51.2 0 1 0-102.4 0c0 1.05.25 2 .31 3.06-54.12 7.12-77.11 28.06-77.11 70.08v29.21c0 121.6-66.51 175.51-102.4 204.8.4.4 0 51.2 0 51.2zm315-248.63l119-119-16.6-16.6-461.32 461.31 16.58 16.6 93.68-93.68H729.6s-.4-50.8 0-51.2c-35.14-28.68-99.47-81.13-102.15-197.43z"></path></g></svg>
                     
                              </div>
                              <div className="w-3/4 ml-2">ማስታወቂያ ደብቅ</div>
                            </div>
                          </button>
                          <button>Link 3</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="myModal" className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}> &times;</span>
            {selectedEvent && (
              <div>
              <div className="w-full flex items-center gap-4 border-b border-gray-200">
                <div className="w-1/4">
                  <img src={`../../assets/${selectedEvent.eventImage}`} alt="Logo" className="w-20 mx-auto" />
                </div>
                <div className="w-3/4 flex flex-col gap-2">
                  <div className="font-bold text-sm">{selectedEvent.eventname}</div>
                  <div className="text-xs">
                    {new Date(selectedEvent.eventdate).toDateString()}
                  </div>
                </div>
                
              </div>
              <div className="py-10 px-16">
              {selectedEvent.eventDesc}
            </div>
            </div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;