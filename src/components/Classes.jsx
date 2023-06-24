import React from 'react';
import "./Classes.css";

function Classes() {
  return (
    <div className='Classes'>
        <div className="grid">
            <div className="c-item c-1">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Crossfit Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
            <div className="c-item">
                <img src="https://images.pexels.com/photos/4057839/pexels-photo-4057839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Yoga Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
            <div className="c-item c-3">
                <img src="https://images.pexels.com/photos/6296017/pexels-photo-6296017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Boxing Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
            <div className="c-item">
                <img src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Core Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
            <div className="c-item">
                <img src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Power Lifting Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
            <div className="c-item c-6">
                <img src="https://images.pexels.com/photos/4754143/pexels-photo-4754143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classes" />
                <div className="item-text-class">
                    <p className="class">Kickboxing Classes</p>
                    <p className="time-classes">Session: 9am - 12am</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classes