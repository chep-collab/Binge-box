import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Binge-Box</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/coming-soon" className="nav-link">Coming Soon</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className="nav-link">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/logout" className="nav-link">Logout</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
