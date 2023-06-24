import React from 'react';
import "../LandingPageCenter.css";

function ContactCenter() {
  return (
    <div className='LandingPageCenter'>
        <p className="heading">CONTACT US <br /> FOR ANY MATTERS</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium, ducimus exercitationem quos sit nihil consequuntur optio, hic modi, nesciunt tempora fuga quis eos obcaecati tenetur sint quisquam voluptatibus eaque?</p>
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

export default ContactCenter