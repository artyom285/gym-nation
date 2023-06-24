import React from 'react';
import "./Gallery.css";

function Gallery() {
  return (
    <div className='Gallery'>
        <div className="gallery-item i-1">
            <img src="https://images.pexels.com/photos/7674497/pexels-photo-7674497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Power Lifting Area</p>
                <p className="time-gallery">Large capacity area</p>
            </div>
        </div>
        <div className="gallery-item">
            <img src="https://images.pexels.com/photos/4754138/pexels-photo-4754138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Kickboxing Ring</p>
                <p className="time-gallery">Sparing area</p>
            </div>
        </div>
        <div className="gallery-item">
            <img src="https://images.pexels.com/photos/4752856/pexels-photo-4752856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Boxing Ring</p>
                <p className="time-gallery">Sparing area</p>
            </div>
        </div>
        <div className="gallery-item i-4">
            <img src="https://images.pexels.com/photos/7672106/pexels-photo-7672106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Crossfit Area</p>
                <p className="time-gallery">For extensive cardio</p>
            </div>
        </div>
        <div className="gallery-item i-6">
            <img src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Gym Area</p>
                <p className="time-gallery">For basic workout</p>
            </div>
        </div>
        <div className="gallery-item">
            <img src="https://images.pexels.com/photos/5616786/pexels-photo-5616786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gallery" />
            <div className="item-text-gallery">
                <p className="class">Octagon Area</p>
                <p className="time-gallery">For mma practices</p>
            </div>
        </div>
    </div>
  )
}

export default Gallery