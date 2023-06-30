import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import "../queries.css";

function Sidebar({ sidebarClass, sidebarFunc }) {
  return (
    <div className={sidebarClass ? 'sidebar active' : "sidebar"}>
        <div className="side-top">
            <Link to="/" className="logo" onClick={sidebarFunc}>Gym Nation</Link>
            <i className='close-side' onClick={sidebarFunc}><box-icon type='solid' name='x-circle' color="white" size="24px"></box-icon></i>
        </div>
        <ul>
            <li><Link to="/" onClick={sidebarFunc}>Home</Link></li>
            <li><Link to="/team" onClick={sidebarFunc}>Our Team</Link></li>
            <li><Link to="/schedule" onClick={sidebarFunc}>Schedule</Link></li>
            <li><Link to="/pricing" onClick={sidebarFunc}>Pricing</Link></li>
            <li><Link to="/classes" onClick={sidebarFunc}>Classes</Link></li>
            <li><Link to="/contact" onClick={sidebarFunc}>Contact Us</Link></li>
        </ul>
        <div className="side-top bottom">
            <span>© 2023 Gym Nation</span>
        </div>
    </div>
  )
}

export default Sidebar