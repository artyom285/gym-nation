import React from 'react';
import "../LandingPageCenter.css";

function ClassCenter() {
  return (
    <div className='LandingPageCenter'>
      <p className="heading">PICK THE CLASS <br /> FOR YOUR NEEDS</p>
      <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus molestias at inventore iste deleniti maiores officiis enim odit debitis perferendis consequuntur voluptate quibusdam est facilis, laborum cumque quisquam modi assumenda.</p>
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

export default ClassCenter