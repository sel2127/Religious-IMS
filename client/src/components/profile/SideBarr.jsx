
import React, { useState } from "react";
import axios from "axios";
import { FaBars, FaCommentAlt, FaEdit, FaPowerOff, FaReadme, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Sidebarr.css';

function Sidebarr({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
      name: "My profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/viewmoreprofile",
      name: "View more",
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
    <div className="mt-10 mr-10">
      <div className="container">
        <div style={{ width: isOpen ? "400px" : "50px" }} className="sidebar">
          <div className="top-section">
            <h1 style={{ display: isOpen ? "block" : "none" }}>User Profile</h1>
            <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
              <FaBars onClick={toggle} />
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
