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
import Chat from "./scenes/chat";
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
import Reset from './reset';
import PrivateRoute from './PrivateRoute';

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
  const isResetPage = location.pathname.startsWith('/admin/reset/');

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
    <div className='dashboard'> 
    {!isLoginPage && !isForgotPage && !isResetPage && <Sidebar />}
    {/* <Sidebar /> */}
      <main className='content'>
      {!isLoginPage && !isForgotPage && !isResetPage && <Topbar />}
        {/* <Topbar /> */}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<Forgot />}/>
          <Route path="/reset/:token" element={<Reset />} />
          {/* <Route path="dashboard" element={<PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>} /> */}
                     <Route path="dashboard" element={
                      <Dashboard />
                    } />
          <Route path="team"element={<PrivateRoute>
                      <Team />
                    </PrivateRoute>} />
          <Route path="users" element={<PrivateRoute>
                      <Users />
                    </PrivateRoute>} />
          <Route path="donation" element={<PrivateRoute>
                      <Donations />
                    </PrivateRoute>} />
          <Route path="form" element={<PrivateRoute>
                      <Form />
                    </PrivateRoute>} />
          <Route path="calendar" element={<PrivateRoute>
                      <Calendar />
                    </PrivateRoute>} />
          <Route path="bar" element={<PrivateRoute>
                      <Bar />
                    </PrivateRoute>} />
          <Route path="pie" element={<PrivateRoute>
                      <Pie />
                    </PrivateRoute>} />
          <Route path="line" element={<PrivateRoute>
                      <Line />
                    </PrivateRoute>} />
          {/* <Route path="event" element={<PrivateRoute>
                      <EventUpload />
                    </PrivateRoute>} /> */}
                     <Route path="event" element={
                      <EventUpload />
                    } />
          <Route path="faq" element={<PrivateRoute>
                      <FAQ />
                    </PrivateRoute>} />
        </Routes>
      </main>   
    </div>
    {/* {admin && <Form admin={admin} />} */}
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin
