import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import 'boxicons';

function Navbar({ sidebarFunc }) {
  const [navbar, setNavbar] = useState(false);

  const navbarActive = () => {
    if(window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", navbarActive);

  return (
    <div className='Navbar'>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <a href='#' className="logo">Gym Nation</a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="icons">
          <a href="#"><box-icon name="user-circle" color="white" size="24px"></box-icon></a>
          <button onClick={sidebarFunc}><box-icon name="menu" color="white" size="24px"></box-icon></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar