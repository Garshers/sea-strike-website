import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './HeaderAndFooter/footer.js';
import { Header } from './HeaderAndFooter/header.js';
import './HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Header />
          <Routes>
            
          </Routes>
        <Footer />
        </div>
     </BrowserRouter>
  );
}

export default App;
