import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer-flex'>
        <div className="footer-part">
          <a href="#" className="footer-logo">Gym nation</a>
          <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates ratione quisquam sed.</p>
          <div className="subs-flex">
            <input type="text" placeholder='Enter your email' />
            <button>
              <box-icon name='news' color="white"></box-icon>
              <span>Subscribe</span>
            </button>
          </div>
        </div>
        <div className='lists'>
          <div className="footer-part">
            <p className="part-head">Navigation</p>
            <ul className='footer-links'>
              <li>
                <a href="#">
                  <box-icon name='buildings' color="grey"></box-icon>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='user-circle' color="grey"></box-icon>
                  <span>Our Team</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='calendar' color="grey"></box-icon>
                  <span>Schedule</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='dollar-circle' color="grey"></box-icon>
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='grid-alt' color="grey"></box-icon>
                  <span>Classes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='envelope' color="grey"></box-icon>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-part">
            <p className="part-head">Our Links</p>
            <ul className='footer-links'>
              <li>
                <a href="#">
                  <box-icon name='detail' color="grey"></box-icon>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='briefcase' color="grey"></box-icon>
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='user' color="grey"></box-icon>
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='share-alt' color="grey"></box-icon>
                  <span>Partners</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='copy-alt' color="grey"></box-icon>
                  <span>Terms</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='help-circle' color="grey"></box-icon>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-part">
            <p className="part-head">Membership</p>
            <ul className='footer-links'>
              <li>
                <a href="#">
                  <box-icon name='pie-chart-alt' color="grey"></box-icon>
                  <span>Basic</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='crown' color="grey"></box-icon>
                  <span>Standart</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='diamond' color="grey"></box-icon>
                  <span>Deluxe</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <box-icon name='user-circle' color="grey"></box-icon>
                  <span>Personal coach</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2023 Gym Nation</p>
        <div className="footer-sn">
          <a href="#"><box-icon type='logo' name='instagram-alt' color="white"></box-icon></a>
          <a href="#"><box-icon type='logo' name='facebook' color="white"></box-icon></a>
          <a href="#"><box-icon type='logo' name='twitter' color="white"></box-icon></a>
          <a href="#"><box-icon type='logo' name='tiktok' color="white"></box-icon></a>
          <a href="#"><box-icon type='logo' name='youtube' color="white"></box-icon></a>
          <a href="#"><box-icon type='logo' name='twitch' color="white"></box-icon></a>
        </div>
      </div>
    </div>
  )
}

export default Footer