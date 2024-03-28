import React from 'react'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './adminCss/admin.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Donations from "./scenes/donation";
import Members from "./scenes/memberInfo";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import EventUpload from "./scenes/eventUpload"
import FAQ from "./scenes/faq";
import Login from "./login";


function Admin() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const isLoginPage = location.pathname === '/admin/login';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
    <div className='dashboard'> 
    {!isLoginPage && <Sidebar />}
    {/* <Sidebar /> */}
      <main className='content'>
      {!isLoginPage && <Topbar />}
        {/* <Topbar /> */}
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
<<<<<<< HEAD
=======
          <Route path="login" element={<Login />} />
>>>>>>> origin/tsimo2
          <Route path="team" element={<Team />} />
          <Route path="members" element={<Members />} />
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
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin
