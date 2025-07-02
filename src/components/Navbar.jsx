import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🌿 Nature Herb</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Login</Link>
        </li>
        <li className={location.pathname === '/signup' ? 'active' : ''}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
