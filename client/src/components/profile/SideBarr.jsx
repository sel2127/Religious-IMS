import React, { useState } from "react";
import { FaBars, FaCommentAlt, FaEdit, FaPowerOff, FaReadme, Fath, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Sidebarr.css';
function Sidebarr({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/profile",
      name: "የኔ መረጃዎች",
      icon: <FaUserAlt />,
    },
    {
      path: "/viewmoreprofile",
      name: "የበለጠ ለማየት",
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
    <div className=" mt-10  mr-10">
    <div className="conatiner   ">
      <div style={{ width: isOpen ? "400px" : " 100px" }} className="sidebar">
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
            activeclassName="active"
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
