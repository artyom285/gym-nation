import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Sidebar.css";
import "../queries.css";
import 'boxicons';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const sidebarActive = () => setSidebar(!sidebar);

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
          <button onClick={sidebarActive}><box-icon name="menu" color="white" size="24px"></box-icon></button>
        </div>
      </nav>
      <div className={sidebar ? 'sidebar active' : "sidebar"}>
        <div className="side-top">
          <Link to="/" className="logo" onClick={sidebarActive}>Gym Nation</Link>
          <i className='close-side' onClick={sidebarActive}><box-icon type='solid' name='x-circle' color="white" size="24px"></box-icon></i>
        </div>
        <ul>
          <li><Link to="/" onClick={sidebarActive}>Home</Link></li>
          <li><Link to="/team" onClick={sidebarActive}>Our Team</Link></li>
          <li><Link to="/schedule" onClick={sidebarActive}>Schedule</Link></li>
          <li><Link to="/pricing" onClick={sidebarActive}>Pricing</Link></li>
          <li><Link to="/classes" onClick={sidebarActive}>Classes</Link></li>
          <li><Link to="/contact" onClick={sidebarActive}>Contact Us</Link></li>
        </ul>
        <div className="side-top bottom">
          <span>© 2023 Gym Nation</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar