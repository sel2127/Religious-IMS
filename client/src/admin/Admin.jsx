import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './adminCss/admin.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Donations from "./scenes/donation";
import Users from "./scenes/users";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import EventUpload from "./scenes/eventUpload"
import FAQ from "./scenes/faq";
import Login from "./login";
import Forgot from "./forgot";

function Admin() {
  const [theme, colorMode] = useMode();
  const location = useLocation();
  // const [admin, setAdmin] = useState(null);

  // useEffect(() => {
  //   const fetchAdminData = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       };
  //       const response = await axios.get('http://localhost:5000/admin/profile', config);
  //       console.log('Response data:', response.data);
  //       setAdmin(response.data);
  //     } catch (error) {
  //       console.error('Error fetching admin data:', error);
  //     }
  //   };
  //   fetchAdminData();
  // }, []);

  const isLoginPage = location.pathname === '/admin/login';
  const isForgotPage = location.pathname === '/admin/forgot';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
    <div className='dashboard'> 
    {!isLoginPage && !isForgotPage && <Sidebar />}
    {/* <Sidebar /> */}
      <main className='content'>
      {!isLoginPage && !isForgotPage && <Topbar />}
        {/* <Topbar /> */}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<Forgot />}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="users" element={<Users />} />
          <Route path="donation" element={<Donations />} />
          <Route path="form" element={<Form />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="line" element={<Line />} />
          <Route path="event" element={<EventUpload />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </main>   
    </div>
    {/* {admin && <Form admin={admin} />} */}
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin
