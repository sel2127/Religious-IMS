import React from "react";
import { Link } from "react-router-dom";

function SideBarr() {
  const [isOpen, setIsOpen] = React.useState(false); // State for menu open/closed

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container h-screen w-full ">
      {/* visible only on small devices */}
      <button
        className={`menu-btn md:hidden ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16v12H4zm-2 0h20v12H2zM4 12h16v12H4z"
          />
        </svg>
      </button>

      {/* Sidebar Content (initially hidden on small devices) */}
      <div
        className={`sidebar sm:w-full h-full transition duration-300 ease-in-out ${
          isOpen ? "w-full" : "w-0"
        } flex flex-col shadow rounded-lg max-w-md`}
      >
        <div className="flex flex-col border-r mt-5">
          {/* Sidebar Links (visible only when menu is open on small devices) */}
          <div
            className={`flex flex-col ml-2 mt-5 rounded-md px-2 py-2 mr-5 md:block transition duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-center items-center rounded-md px-4 py-8 mr-5">
              <div className="">
                <h2 className="text-md font-semibold">Menu</h2>
              </div>
            </div>
            <div className="w-full justify-center items-center py-3">
              
              <div className="flex mb-4">
                <Link to="/editprofile">
                  <button className=" text-white text-center  bg-dark-blue hover:bg-light-blue text-base px-6 py-1 rounded-xl">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className=" flex mb-4">
                <Link to="/feedbackform">
                  <button className="  text-white text-center bg-dark-blue hover:bg-light-blue text-lg px-6 py-1 rounded-xl">
                    give Feedback
                  </button>
                </Link>
              </div>
              <div className="flex mb-4">
                <Link to="/changepassword">
                <button className="text-white text-center bg-dark-blue hover:bg-light-blue   text-base px-6 py-1 rounded-xl flex-grow">
                    Change PIN
                  </button>
                </Link>
              </div>
              <div className="flex mb-4">
                <Link to="/logout">
                <button className=" text-white text-center  bg-dark-blue hover:bg-light-blue text-lg px-6 py-1 rounded-xl flex-grow">
                    Log out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarr;
