// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Adjust the path as necessary
import Aboutme from './components/Aboutme/Aboutme'; // Adjust the path as necessary
import Navbar from './components/Navbar/Navbar'; // Adjust the path as necessary
import StarryBackground from './components/Home/StarryBackground';
import Mywork from './components/Projects/Mywork';
import Notes from './components/Notes/Notes';

const App = () => {
  return (
    <Router>
      <StarryBackground/>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/mywork" element={<Mywork />} />
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
