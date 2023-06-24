import React from 'react';
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className='ContactForm'>
        <form>
            <div className="contact-info">
                <div>
                    <p className="contact-head">Contact info</p>
                    <ul>
                        <li>
                            <box-icon name='map' color="white" size="24px"></box-icon>
                            <span>Jalan Kajang - Puchong, 43000 Kajang, Selangor</span>
                        </li>
                        <li>
                            <box-icon name='envelope' color="white" size="24px"></box-icon>
                            <span>gymnation@gmail.com</span>
                        </li>
                        <li>
                            <box-icon name='phone' color="white" size="24px"></box-icon>
                            <span>03-8921 2020</span>
                        </li>
                    </ul>
                </div>
                <div className="form-sn">
                    <a href="#"><box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon></a>
                    <a href="#"><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></a>
                    <a href="#"><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
                    <a href="#"><box-icon name='tiktok' type='logo' color='#ffffff' ></box-icon></a>
                </div>
            </div>
            <div className="contact-form">
                <p className="contact-head">Send a message</p>
                <div className="form-flex">
                    <div className="input-flex">
                        <input type="text" placeholder='Enter your name' required />
                        <input type="text" placeholder='Enter your last name' required />
                    </div>
                    <div className="input-flex">
                        <input type='email' placeholder='Enter your email' required />
                        <input type="text" placeholder='Enter your mobile' required />
                    </div>
                    <textarea placeholder='Enter your message' required></textarea>
                    <button>
                        <i><box-icon name='mail-send' color="white"></box-icon></i>
                        <span>Send email</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm