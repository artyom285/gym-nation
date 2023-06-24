import React from 'react'

function HomepageAbout3() {
  return (
    <div className='HomepageAbout3'>
      <div>
        <p className="block-head">Personal Coach For <br />The Best Result</p>
        <p className="block-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat blanditiis aperiam quisquam officia quaerat ducimus illo ad suscipit natus nostrum, autem enim soluta facere. Sint, nulla corrupti dolorem cum dolore animi itaque repellendus nostrum iusto repellat exercitationem perspiciatis numquam, illo ducimus impedit, corporis aperiam!</p>
        <ul className='block-list'>
          <li>
            <box-icon name='target-lock' size="28px"></box-icon>
            <span>Personal training dedicated to you</span>
          </li>
          <li>
            <box-icon name='line-chart' size="28px"></box-icon>
            <span>Guaranteed result within 2 months</span>
          </li>
          <li>
            <box-icon type="solid" name='drink' size="28px"></box-icon>
            <span>Protein powder for more effective workout</span>
          </li>
          <li>
            <box-icon name='gift' size="28px"></box-icon>
            <span>Gym t-shirt and shaker as a gift</span>
          </li>
          <li>
            <box-icon name='bar-chart-alt-2' size="28px"></box-icon>
            <span>Prepeartion for athletic competitions</span>
          </li>
          <li>
            <box-icon name='list-check' size="28px"></box-icon>
            <span>Individual training program for you needs</span>
          </li>
          <li>
            <box-icon name='dollar-circle' size="28px"></box-icon>
            <span>Money back guarantee if case of no result</span>
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
        <video className='about-v' src="/about3.mp4" muted autoPlay loop></video>
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

export default HomepageAbout3