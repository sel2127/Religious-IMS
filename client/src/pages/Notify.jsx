import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Images/logo.png";
import "../assets/styles/notify.css";

const Notify = () => {
  // for event search

  const modalRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deletedEventId, setDeletedEventId] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    modalRef.current.style.display = "block";
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  // useEffect(() => {
  //   // Fetch events from the server
  //   fetch("http://localhost:5000/events")
  //     .then((response) => response.json())
  //     .then((data) => setEvents(data))
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
   // fetch events from server
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        // Sort events by date in descending order
        const sortedEvents = data.sort((a, b) => {
          return new Date(b.eventdate) - new Date(a.eventdate);
        });

        // Filter out events whose date has passed
        const filteredEvents = sortedEvents.filter((event) => {
          return new Date(event.eventdate) >= new Date();
        });

        // Set the state with only the four most recent events
        setEvents(filteredEvents.slice(0, 4));
      })
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

  const deleteEvent = (id) => {
    fetch(`http://localhost:5000/events/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          // Event deleted successfully
          setDeletedEventId(id);
        } else {
          throw new Error("Failed to delete event");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredEvents = events.filter((event) => event.id !== deletedEventId);

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
    <div className="">
      <div className="mt-5">
       {/* <SearchInput
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         placeholder="Search events"
       /> */}
      </div>
      <div className="w-full bg-gray-100 py-12 mt-5">
        <div className="w-1/2 bg-white p-10 mx-auto">
          <div id="myBtn" className="">
            {filteredEvents.map((event) => {
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
                    <div className="w-1/2 flex items-center justify-end" onClick={closeModal}>
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
                          <button onClick={() => deleteEvent(event.id)}>
                            <div>
                              <div className="w-1/4 mx-auto">
                              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              </div>
                              <div className="w-3/4 ml-2">ማስታወቂያ አጥፋ</div>
                            </div>
                          </button>
                          {/* <button onClick={muteEvent()}>
                            <div className="flex justify-canter">
                              <div className="w-1/4 mx-auto">
                              <svg fill="#000000" className="w-6 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M571.32 704a76.36 76.36 0 0 1-144.19 0zm-258.84-51.2L623.3 342c-8.46-25.2-31.52-39-73.21-44.49.06-1 .31-2 .31-3.06a51.2 51.2 0 1 0-102.4 0c0 1.05.25 2 .31 3.06-54.12 7.12-77.11 28.06-77.11 70.08v29.21c0 121.6-66.51 175.51-102.4 204.8.4.4 0 51.2 0 51.2zm315-248.63l119-119-16.6-16.6-461.32 461.31 16.58 16.6 93.68-93.68H729.6s-.4-50.8 0-51.2c-35.14-28.68-99.47-81.13-102.15-197.43z"></path></g></svg>
                     
                              </div>
                              <div className="w-3/4 ml-2" >ማስታወቂያ ደብቅ</div>
                            </div>
                          </button> */}
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