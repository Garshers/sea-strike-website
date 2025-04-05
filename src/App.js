import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.js';

import Footer from './components/HeaderAndFooter/footer.js';
import { Header } from './components/HeaderAndFooter/header.js';
import './components/HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        <Footer />
     </BrowserRouter>
  );
}

export default App;
