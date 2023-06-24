import React from 'react';
import "./LandingFooter.css";

function LandingFooter() {
  return (
    <div className='LandingFooter'> 
      <div className="sn">
        <a href="#"><box-icon type='logo' name='instagram-alt' color="white"></box-icon></a>
        <a href="#"><box-icon type='logo' name='facebook' color="white"></box-icon></a>
        <a href="#"><box-icon type='logo' name='twitter' color="white"></box-icon></a>
        <a href="#"><box-icon type='logo' name='tiktok' color="white"></box-icon></a>
        <a href="#"><box-icon type='logo' name='youtube' color="white"></box-icon></a>
        <a href="#"><box-icon type='logo' name='twitch' color="white"></box-icon></a>
      </div>
      <p>© 2023 Gym Nation</p>
    </div>
  )
}

export default LandingFooter