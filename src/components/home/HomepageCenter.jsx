import React from 'react';
import "../LandingPageCenter.css";

function HomepageCenter() {
  return (
    <div className='LandingPageCenter'>
      <p className="heading">BE STRONGER <br /> NEVER GIVE UP</p>
      <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae asperiores nihil possimus quaerat, rerum commodi accusantium provident ad, sed nobis quisquam vitae sequi modi fuga ducimus quae quos id.</p>
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

export default HomepageCenter