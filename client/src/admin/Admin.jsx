import React from 'react'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './adminCss/admin.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function Admin() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
    <div className='dashboard'> 
    <Sidebar />
      <main className='content'>
        <Topbar />
        <Routes>
          <Route path="" element={<Dashboard />} />
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
