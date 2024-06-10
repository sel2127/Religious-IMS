
import React, { useState } from "react";
import axios from "axios";
import { FaBars, FaCommentAlt, FaEdit, FaPowerOff, FaReadme, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Sidebarr.css';
import { useTranslation } from "react-i18next";

function Sidebarr({ children }) {
  const [isOpen, setIsOpen] = useState(true); 

  const toogle = () => setIsOpen(!isOpen); 
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      name: t('pr'),
      icon: <FaUserAlt />,
    },
    // {
    //   path: "/viewmoreprofile",
    //   name: "View more",
    //   icon: <FaReadme />,
    // },
    {
      path: "/editprofile",
      name: t('up_date'),
      icon: <FaEdit />,
    },
    {
      path: "/changepassword",
      name: t('update_pass'),
      icon: <FaEdit />,
    },
    {
      path: "/feedbackform",
      name: t('fe'),
      icon: <FaCommentAlt />,
    },
    {
      path: "/logout",
      name: t('logout'),
      icon: <FaPowerOff />,
    },
  ];

  return (
    <div className="mx-10">
      <div className="conatiner">
        <div className="sidebar rounded-lg profileactive" style={{ width: isOpen ? "220px" : "50px" }}>
          <div className="top-section border-b border-gray-200">
            <h1 className="text-xl" style={{ display: isOpen ? "block" : "none" }}>የእርስዎ መረጃዎች</h1>
            <div className="bars" style={{ marginLeft: isOpen ? "auto" : "0px" }}>
              <FaBars onClick={toogle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link border-b"
              activeClassName=""
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