import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<div className="page-wrapper">
  <div className="footer">
    <p>© 2023 Farmer's Market. All rights reserved.</p>
    <ul>
      <Link to="/about">About</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/contact">Contact Us</Link>
    </ul>
  </div>
</div>
)
}


export default Footer;
