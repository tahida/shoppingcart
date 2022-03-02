import React from "react";
import "./Navbar.css";
import { Link }  from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
        {/* logo */}
        <div className="navbar_logo">
            <h2>2K2 Shopping Cart</h2>
        </div>
        {/* links */}
        <ul>
            <li>
                <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
                <span className="cartlogo_badege">0</span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
        {/* hamburger menu */}
        <div className="hamburger_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  );
};

export default Navbar

