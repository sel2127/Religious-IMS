import React from 'react'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './adminCss/admin.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Calendar from "./scenes/calendar";


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
          <Route path="/admin" element={<Dashboard />} />
          {/* <Route path="/admin/team" element={<Team />} /> */}
          {/* <Route path="/admin/contacts" element={<Contacts />} /> */}
          {/* <Route path="/admin/invoices" element={<Invoices />} /> */}
          {/* <Route path="/admin/form" element={<Form />} /> */}
          {/* <Route path="/admin/bar" element={<Bar />} /> */}
          {/* <Route path="/admin/pie" element={<Pie />} /> */}
          {/* <Route path="/admin/line" element={<Line />} /> */}
          {/* <Route path="/admin/faq" element={<FAQ />} /> */}
          {/* <Route path="/admin/calendar" element={<Calendar />} /> */}
        </Routes>
      </main>   
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin