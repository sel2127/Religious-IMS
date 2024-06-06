
import React, { useState } from "react";
import axios from "axios";
import { FaBars, FaCommentAlt, FaEdit, FaPowerOff, FaReadme, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Sidebarr.css';

function Sidebarr({ children }) {
  const [isOpen, setIsOpen] = useState(true); 

  const toogle = () => setIsOpen(!isOpen); 

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
      path: "/login",
      name: "ለመዉጣት",
      icon: <FaPowerOff />,
    },
  ];

  return (
    <div className="mt-10 m-auto">
      <div className="conatiner ">
        <div className="sidebar rounded-lg " style={{ width: isOpen ? "390px" : "70px" }}>
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