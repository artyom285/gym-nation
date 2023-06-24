import React from 'react';
import TeamCenter from '../team/TeamCenter';
import LandingFooter from '../LandingFooter';
import Coaches from "../Coaches";
import Price from "../Price";
import Footer from "../Footer";

function TeamPage() {
  return (
    <div className='TeamPage'>
      <div className="landing">
        <TeamCenter></TeamCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/team.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <Coaches></Coaches>
        </div>
        <div className="block top">
          <Price></Price>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default TeamPage