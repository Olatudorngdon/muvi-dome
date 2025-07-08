import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles





const Navbar = () => (
  <nav className="nav-bars">
    <div className="container mx-auto flex justify-between">
      <image src="/logo.png" alt="Muvi Dome Logo" className="h-10 w-10" />
      <div className="title">Muvi Dome</div>
      <div className="nav-barsd">
        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
        <Link to="/register" className="text-white hover:text-gray-400">Sign Up</Link>
        <Link to="/profile" className="text-white hover:text-gray-400">Profile</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;