import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserProfile from './pages/UserProfile';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<UserDirectory />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
