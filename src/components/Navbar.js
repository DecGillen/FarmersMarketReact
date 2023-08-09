import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg'

function Navbar() {
  return (
    <div className="navbar navbar-sticky">
        <Link to="/"> <img src={Logo} alt="Logo" className="navbar-logo" /> </Link>
    <ul>
      <Link to="/buy">Buy</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/ProductsList">Update my Inventory</Link>
      </ul>
    </div>
  );
}

export default Navbar;
