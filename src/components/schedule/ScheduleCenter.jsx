import React from 'react';
import "../LandingPageCenter.css";

function ScheduleCenter() {
  return (
    <div className='LandingPageCenter'>
      <p className="heading">OUR TIMETABLE <br /> TO START CLASSES</p>
      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut quas optio ab quia eos qui reiciendis, itaque quis blanditiis et nam cumque, sint, praesentium maiores sequi libero. Necessitatibus, et!</p>
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

export default ScheduleCenter