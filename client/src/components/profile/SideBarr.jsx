
import React, { useState } from "react";
import axios from "axios";
import { FaBars, FaCommentAlt, FaEdit, FaPowerOff, FaReadme, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Sidebarr.css';

function Sidebarr({ children }) {
  const [isOpen, setIsOpen] = useState(true); 

  const toogle = () => setIsOpen(!isOpen); 
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/user/logout");// Handle successful logout
      console.log("Redirecting to login page...");
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);// Handle error scenarios
    }
  };

  const menuItem = [
    {
      path: "/profile",
      name: "የኔ መረጃዎች",
      icon: <FaUserAlt />,
    },
    {
      path: "/viewmoreprofile",
      name: "View more",
      icon: <FaReadme />,
    },
    {
      path: "/editprofile",
      name: "መረጃዎን ለመቀየር",
      icon: <FaEdit />,
    },
    {
      path: "/changepassword",
      name: "የይለፍ ቃሎን ለመቀየር ",
      icon: <FaEdit />,
    },
    {
      path: "/feedbackform",
      name: "አስተያየት ለመስጠት",
      icon: <FaCommentAlt />,
    },
    {
      path: "/logout",
      name: "ለመዉጣት",
      icon: <FaPowerOff />,
    },
  ];

  return (
    <div className="mt-10 mr-10">
      <div className="conatiner">
        <div className="sidebar " style={{ width: isOpen ? "300px" : "70px" }}>
          <div className="top-section">
            <h1 style={{ display: isOpen ? "block" : "none" }}>የእርስዎ መረጃዎች</h1>
            <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
              <FaBars onClick={toogle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
              onClick={item.path === "/logout" ? (e) => { e.preventDefault(); handleLogout(); } : null} // Prevent default for logout
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link-text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Sidebarr;