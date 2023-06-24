import React from 'react';
import HomepageCenter from '../home/HomepageCenter';
import LandingFooter from '../LandingFooter';
import HomepageAbout from '../home/HomepageAbout';
import Classes from '../Classes';
import HomepageAbout2 from '../home/HomepageAbout2';
import Coaches from "../Coaches"
import HomepageAbout3 from '../home/HomepageAbout3';
import Gallery from '../home/Gallery';
import Price from '../Price';
import Footer from '../Footer';
import "boxicons";

function HomePage() {
  return (
    <div className='HomePage'>
      <div className="landing">
        <HomepageCenter></HomepageCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/home.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <HomepageAbout></HomepageAbout>
        </div>
        <div className="block top">
          <Classes></Classes>
        </div>
        <div className="block top">
          <HomepageAbout2></HomepageAbout2>
        </div>
        <div className="block top">
          <Coaches></Coaches>
        </div>
        <div className="block top">
          <HomepageAbout3></HomepageAbout3>
        </div>
        <div className="block top">
          <Gallery></Gallery>
        </div>
        <div className="block top">
          <Price></Price>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default HomePage