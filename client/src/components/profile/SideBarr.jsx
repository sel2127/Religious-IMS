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
      name: "My profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/viewmoreprofile",
      name: "view more",
      icon: <FaReadme />,
    },
    
    {
      path: "/editprofile",
      name: "Edit Profile",
      icon: <FaEdit />,
    },
    {
      path: "/changepassword",
      name: "Change Password",
      icon: <FaEdit />,
    },
    {
      path: "/feedbackform",
      name: "Give Feedback",
      icon: <FaCommentAlt />,
    },
    {
        path: "/logout",
        name: "Logout",
        icon: <FaPowerOff />,
      },
  ];
  return (
    <div className=" mt-10  mr-10">
    <div className="conatiner   ">
      <div style={{ width: isOpen ? "400px" : " 50px" }} className="sidebar">
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }}>user profile</h1>
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
