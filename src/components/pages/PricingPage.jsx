import React from 'react';
import PricingCenter from "../pricing/PricingCenter"
import LandingFooter from '../LandingFooter';
import Price from "../Price";
import Footer from "../Footer";

function PricingPage() {
  return (
    <div className='PricingPage'>
      <div className="landing">
        <PricingCenter></PricingCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/pricing.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <Price></Price>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PricingPage