import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      {/* Navbar is placed outside Routes to make it persistent */}
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/mywork' element={<MyWork />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
