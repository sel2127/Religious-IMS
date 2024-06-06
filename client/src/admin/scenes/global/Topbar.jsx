import React, {useContext, useState} from 'react'
import { Link } from "react-router-dom";
import { Box, IconButton, useTheme, Menu, MenuItem } from "@mui/material";
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response=await axios.get('http://localhost:5000/admin/logout');
      if (response.data.message === 'Logout successful') {
        toast.success('Logout successful');
      } else {
        throw new Error("Unexpected response from server");
      }
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Error logging out:', error)
    toast.error('Error logging out:')
    }
  };

  return (
    <div>
      <ToastContainer
      autoClose={3000}
      closeOnClick/>
   <Box display="flex" justifyContent="space-between" p={2}>
    {/* SEARCH BAR */}
    <Box display= "flex" backgroundColor={colors.primary[400]} borderRadius="3px">
      <InputBase sx={{ml: 2, flex: 1 }} placehlder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>

    {/* Icons */}
    <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
        <LightModeOutlinedIcon />
      )}        
      </IconButton>
      <IconButton>
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton onClick={handleMenuOpen}>
        <PersonOutlinedIcon />
      </IconButton>  
      <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>
            Logout
          </MenuItem>
          <MenuItem component={Link} to="/hello" onClick={handleMenuClose}>
            Hello
          </MenuItem>
        </Menu>    
    </Box>
   </Box>
   </div>
  );
};

export default TopBar
