import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChurchPage from './pages/ChurchPage'; // Import your ChurchPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<ChurchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
