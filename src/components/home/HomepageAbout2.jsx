import React from 'react';
import "./HomepageAbout.css";

function HomepageAbout2() {
  return (
    <div className='HomepageAbout2'>
        <div className="block-image">
            <video className='about-v' src="/about2.mp4" muted autoPlay loop></video>
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
        <div>
            <p className="block-head">Why You Should Start <br />Training With Us?</p>
            <p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque numquam deleniti, illum, dicta, sapiente aut eligendi quo placeat asperiores omnis laborum! Cupiditate eius laudantium dolores dolorem eveniet magnam alias voluptatibus quos. Delectus ducimus commodi corporis sit illo quibusdam amet quam cumque minus?</p>
            <ul className='block-list'>
                <li>
                    <box-icon name='book' size="28px"></box-icon>
                    <span>Management to start your fight carrer</span>
                </li>
                <li>
                    <box-icon name='target-lock' size="28px"></box-icon>
                    <span>Organization of camps for professional fights</span>
                </li>
                <li>
                    <box-icon name='building-house' size="28px"></box-icon>
                    <span>Apartments for living during training camp</span>
                </li>
                <li>
                    <box-icon name='user-plus' size="28px"></box-icon>
                    <span>10% discount for bringing your friends</span>
                </li>
                <li>
                    <box-icon name='trophy' size="28px"></box-icon>
                    <span>Gym events and prices for winners</span>
                </li>
                <li>
                    <box-icon name='dollar-circle' size="28px"></box-icon>
                    <span>Using services for free if join as stuff</span>
                </li>
                <li>
                    <box-icon name='smile' size="28px"></box-icon>
                    <span>Provide positive vibes in the gym</span>
                </li>
            </ul>
            <div className="block-links">
                <a href="#" className="block-link">
                    <i><box-icon name='credit-card' size="24px" color="white"></box-icon></i>
                    <span>Purchase now</span>
                </a>
                <a href="#" className="block-link">
                    <i><box-icon name='user-circle' size="24px"></box-icon></i>
                    <span>See coaches</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HomepageAbout2