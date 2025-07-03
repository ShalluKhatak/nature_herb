import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="hidden md:flex space-x-8">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 " : "text-gray-700 hover:text-green-600 transition-colors"}>Home</NavLink>
      <NavLink to="/herbs" className={({ isActive }) => isActive ? "text-green-600 " : "text-gray-700 hover:text-green-600 transition-colors"}>Herbs</NavLink>
      <NavLink to="/health-conditions" className={({ isActive }) => isActive ? "text-green-600 " : "text-gray-700 hover:text-green-600 transition-colors"}>Health Conditions</NavLink>
      {/* <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-600 " : "text-gray-700 hover:text-green-600 transition-colors"}>About</NavLink> */}
    </nav>
  );
};

export default Navbar;
