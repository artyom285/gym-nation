import React from 'react';
import "../LandingPageCenter.css";

function TeamCenter() {
  return (
    <div className='LandingPageCenter'>
      <p className="heading">MASTER YOUR <br /> WORKOUT SKILLS</p>
      <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quia odio sapiente fugiat reprehenderit recusandae adipisci deleniti aperiam molestiae totam, magni inventore. Explicabo fugiat possimus soluta dolores libero aliquid aut!</p>
      <div className="links">
        <a href="#">
          <i><box-icon name='book-add' color="white" size="24px"></box-icon></i>
          <span>Register now</span>
        </a>
        <a href="#">
          <i><box-icon name='help-circle' color="black" size="24px"></box-icon></i>
          <span>Learn more</span>
        </a>
      </div>
    </div>
  )
}

export default TeamCenter