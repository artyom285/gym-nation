import React from 'react';
import ScheduleCenter from "../schedule/ScheduleCenter";
import LandingFooter from '../LandingFooter';
import ScheduleTable from '../schedule/ScheduleTable';
import Price from "../Price";
import Footer from "../Footer";

function SchedulePage() {
  return (
    <div className='SchedulePage'>
      <div className="landing">
        <ScheduleCenter></ScheduleCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/schedule.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <ScheduleTable></ScheduleTable>
        </div>
        <div className="block top">
          <Price></Price>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SchedulePage