import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../styles/header.scss"
const Header = () => {
   return (
       <nav className='navbar'>
       <Link to="/">
        <div className="navbar_logo">
          <img  alt='Logo de kasa' src={logo} />
        </div>
       </Link>

       <div id="navbar_page">
          <NavLink to="/" className='navbar_page-link'>
             Accueil
          </NavLink>

          <NavLink to="/about" className='navbar_page-link'>
             A Propos
          </NavLink>
       </div>
    </nav>
   );
};

export default Header;