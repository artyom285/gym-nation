import React from 'react';
import "./HomepageAbout.css";

function HomepageAbout() {
  return (
    <div className='HomepageAbout'>
      <div>
        <p className="block-head">Take Your Workout <br />On The Next Level</p>
        <p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi atque corporis, sint ratione quos maxime commodi totam odit dolor doloremque numquam perferendis voluptatem nisi molestiae porro vero ex temporibus? Quidem quaerat corporis veritatis. Repudiandae architecto alias debitis provident ipsam saepe corporis numquam blanditiis voluptate aut fuga, doloribus nam maxime!</p>
        <ul className='block-list'>
          <li>
            <box-icon name='user-circle' size="28px"></box-icon>
            <span>Professional coaches with big experience</span>
          </li>
          <li>
            <box-icon name='bar-chart-alt-2' size="28px"></box-icon>
            <span>Modern equipment for intensive sessions</span>
          </li>
          <li>
            <box-icon name='line-chart' size="28px"></box-icon>
            <span>Crossfit area for explosive cardio</span>
          </li>
          <li>
            <box-icon name='cube' size="28px"></box-icon>
            <span>Octagon and ring for sparing practices</span>
          </li>
          <li>
            <box-icon name='dumbbell' size="28px"></box-icon>
            <span>Fancy gym machines for work out</span>
          </li>
          <li>
            <box-icon name='refresh' size="28px"></box-icon>
            <span>Cryochamber and sauna for recovery</span>
          </li>
        </ul>
        <div className="block-links">
          <a href="#" className="block-link">
            <i><box-icon name='compass' size="24px" color="white"></box-icon></i>
            <span>Take a tour</span>
          </a>
          <a href="#" className="block-link">
            <i><box-icon name='time' size="24px"></box-icon></i>
            <span>See scheldue</span>
          </a>
        </div>
      </div>
      <div className="block-image">
        <video className='about-v' src="/about.mp4" muted autoPlay loop></video>
        <div className="item-text-video">
          <p className="class">Nikita Krylov</p>
          <p className="time-video">Gym nation member</p>
          <div className="coach-sn">
            <a href="#"><box-icon type='logo' name='instagram-alt' color="white"></box-icon></a>
            <a href="#"><box-icon type='logo' name='facebook' color="white"></box-icon></a>
            <a href="#"><box-icon type='logo' name='twitter' color="white"></box-icon></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageAbout