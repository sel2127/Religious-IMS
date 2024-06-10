import React, { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import axios from 'axios';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { FaUser } from "react-icons/fa";
import profile from "../../../assets/Images/profile.png"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [admin, setAdmin] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/logout');
      console.log(response);
  
      if (response.data.success) {
        // Redirect the user to the login page
        window.location.href = '/admin/login';
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // useEffect(() => {
  //   const fetchAdminProfile = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/admin/profile', {
  //         withCredentials: true // Include cookies in the request
  //       });
  //       setAdmin(response.data);
  //     } catch (error) {
  //       console.error('Error fetching admin profile:', error);
  //     }
  //   };
  //   fetchAdminProfile();
  // }, []);

  // const fetchAdminProfile = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/admin/profile', {
  //       headers: {
  //         'Authorization': `Bearer ${document.cookie.split('=')[1]}` // Get the token from the cookie
  //       }
  //     });
  //     const adminData = response.data;
  //     setAdmin(adminData);
  //   } catch (error) {
  //     console.error('Error fetching admin profile:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAdminProfile();
  // }, []);

  const fetchAdminProfile = async () => {
    try {
      const token = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('admin_token='))
        .split('=')[1];
  
      if (!token) {
        // Handle case where token is not found
        console.error('Token not found');
        return;
      }
  
      // Include the token in the request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      const response = await axios.get('http://localhost:5000/admin/profile');
      console.log(response.data)
      setAdmin(response.data);

      console.log(admin)
    } catch (error) {
      console.error('Error fetching admin profile:', error);
    }
  };
  useEffect(() => {
    fetchAdminProfile();
  }, []);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#85add6 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6699cc !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && admin && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-picture"
                  width="100px"
                  height="100px"
                  src={`../../../assets/${(admin.image != null) ? admin.image : profile}`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {admin.firstname} {admin.lastname}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {admin.role}
                </Typography>
                

              </Box>
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
              title="Edit Profile"
              to="/admin/form"
              icon={<EditIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Box>
              
              
            </Box>
            
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Members"
              to="/admin/member"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="User Information"
              to="/admin/users"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
       
            <Item
              title="Donations"
              to="/admin/donation"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

<Item
              title="Calendar"
              to="/admin/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Profile Form"
              to="/admin/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Events Upload"
              to="/admin/event"
              icon={<EventOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
            <Item
              title="Chat"
              to="/admin/chat"
              icon={<SendOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
              to="/admin/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pie Chart"
              to="/admin/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              to="/admin/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

<Box display="flex" justifyContent="center" my="20px" mr="10%">
              <Button type="submit" color="secondary" variant="contained" sx={{ width: "100%" }} onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
