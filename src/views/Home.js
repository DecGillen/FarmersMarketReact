import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome">Inishowen Farmer's Market</h1>
      <div className="button-container">
        <Link to="/buy" className="buy-button">
          Buy
        </Link>
        <Link to="/sell" className="sell-button">
          Sell
        </Link>
      </div>
    </div>
  );
}

export default Home;
