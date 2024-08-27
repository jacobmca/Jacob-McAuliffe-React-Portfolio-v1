import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';

import './index.css';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
        <div className="navbar navbar-expand-sm bg-secondary bg-transparent">
          <div className="container-fluid">
            <Header />
            <Navigation />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
