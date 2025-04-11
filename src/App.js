import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.js';
import AboutUs from './components/AboutUs/AboutUsPage.js';

import Footer from './components/HeaderAndFooter/footer.js';
import { Header } from './components/HeaderAndFooter/header.js';
import './components/HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/O_nas" element={<AboutUs />} />
          </Routes>
        <Footer />
     </BrowserRouter>
  );
}

export default App;
