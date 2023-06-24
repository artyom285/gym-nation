import React from 'react';
import ClassCenter from "../classes/ClassCenter"
import LandingFooter from '../LandingFooter';
import Classes from '../Classes';
import Price from "../Price";
import Footer from "../Footer";

function ClassesPage() {
  return (
    <div className='ClassesPage'>
      <div className="landing">
        <ClassCenter></ClassCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/classes.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <Classes></Classes>
        </div>
        <div className="block top">
          <Price></Price>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ClassesPage