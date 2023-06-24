import React from 'react';
import "./Price.css";

function Price() {
  return (
    <div className='Price'>
        <div className="flex-price">
            <div className="price card-1">
                <div className="price-block1">
                    <p className="price-type">Basic</p>
                    <p className="price-amout">$120</p>
                    <p className="month">/month</p>
                    <center>
                        <a href="#">
                            <i><box-icon name='credit-card' color="black" size="24px"></box-icon></i>
                            <span>Purchase now</span>
                        </a>
                    </center>
                </div>
                <div className="price-block2">
                    <ul>
                        <li>
                            <box-icon name='grid-alt'></box-icon>
                            <span>Variety of Training</span>
                        </li>
                        <li>
                            <box-icon name='dumbbell'></box-icon>
                            <span>Exercise Equipment</span>
                        </li>
                        <li>
                            <box-icon name='share-alt'></box-icon>
                            <span>Thriving Community</span>
                        </li>
                        <li>
                            <box-icon name='brush'></box-icon>
                            <span>Space and Facility</span>
                        </li>
                        <li>
                            <box-icon name='diamond'></box-icon>
                            <span>Amenity and Privilege</span>
                        </li>
                        <li>
                            <box-icon name='user-circle'></box-icon>
                            <span>Personal coach services</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="price card-2">
                <div className="price-block1">
                    <p className="price-type">Standart</p>
                    <p className="price-amout">$240</p>
                    <p className="month">/month</p>
                    <center>
                        <a href="#">
                            <i><box-icon name='credit-card' color="black" size="24px"></box-icon></i>
                            <span>Purchase now</span>
                        </a>
                    </center>
                </div>
                <div className="price-block2">
                    <ul>
                        <li>
                            <box-icon name='grid-alt'></box-icon>
                            <span>Variety of Training</span>
                        </li>
                        <li>
                            <box-icon name='dumbbell'></box-icon>
                            <span>Exercise Equipment</span>
                        </li>
                        <li>
                            <box-icon name='share-alt'></box-icon>
                            <span>Thriving Community</span>
                        </li>
                        <li>
                            <box-icon name='brush'></box-icon>
                            <span>Space and Facility</span>
                        </li>
                        <li>
                            <box-icon name='diamond'></box-icon>
                            <span>Amenity and Privilege</span>
                        </li>
                        <li>
                            <box-icon name='user-circle'></box-icon>
                            <span>Personal coach services</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="price card-3">
                <div className="price-block1">
                    <p className="price-type">Deluxe</p>
                    <p className="price-amout">$420</p>
                    <p className="month">/month</p>
                    <center>
                        <a href="#">
                            <i><box-icon name='credit-card' color="black" size="24px"></box-icon></i>
                            <span>Purchase now</span>
                        </a>
                    </center>
                </div>
                <div className="price-block2">
                    <ul>
                        <li>
                            <box-icon name='grid-alt'></box-icon>
                            <span>Variety of Training</span>
                        </li>
                        <li>
                            <box-icon name='dumbbell'></box-icon>
                            <span>Exercise Equipment</span>
                        </li>
                        <li>
                            <box-icon name='share-alt'></box-icon>
                            <span>Thriving Community</span>
                        </li>
                        <li>
                            <box-icon name='brush'></box-icon>
                            <span>Space and Facility</span>
                        </li>
                        <li>
                            <box-icon name='diamond'></box-icon>
                            <span>Amenity & Privilege</span>
                        </li>
                        <li>
                            <box-icon name='user-circle'></box-icon>
                            <span>Personal coach services</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price