import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Buy from './views/Buy';
import Sell from './views/Sell';
import About from './views/About';
import Terms from './views/Terms';
import Home from './views/Home';
import Contact from './views/Contact';
import ProductsList from './views/ProductsList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Market from './images/Market.jpg';

function App() {
  return (
  <div>                
    <Router>
          <Navbar />
          <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/ProductsList" element={<ProductsList />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
