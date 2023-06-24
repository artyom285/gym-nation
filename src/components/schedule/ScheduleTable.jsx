import React, { useState } from 'react';
import "./ScheduleTable.css";

function ScheduleTable() {
  const [table, setTable] = useState([
    { id: 1, class: "Crossfit", time: "10:00am - 12:00pm", coach: "Maycee Barber" },
    { id: 2, class: "Yoga", time: "12:00pm - 2:00pm", coach: "Maria Oliveira" },
    { id: 3, class: "Boxing", time: "2:00pm - 4:00pm", coach: "Dustin Porier"},
    { id: 4, class: "Core", time: "4:00pm - 6:00pm", coach: "Paulo Costa" },
    { id: 5, class: "Power Lifting", time: "6:00pm - 8:00pm", coach: "Mark Hunt" },
    { id: 6, class: "Kickboxing", time: "8:00pm - 10:00pm", coach: "Kai Kara-France" }
  ]);

  const tuesdayFunc = () => {
    setTable([
      { id: 1, class: "Kickboxing", time: "10:00am - 12:00pm", coach: "Kai Kara-France" },
      { id: 2, class: "Power Lifting", time: "12:00px - 2:00pm", coach: "Mark Hunt" },
      { id: 3, class: "Crossfit", time: "2:00pm - 4:00pm", coach: "Maycee Barber" },
      { id: 4, class: "Yoga", time: "4:00pm - 6:00pm", coach: "Maria Oliveira" },
      { id: 5, class: "Core", time: "6:00pm - 8:00pm", coach: "Paulo Costa" },
      { id: 6, class: "Boxing", time: "8:00pm - 10:00pm", coach: "Dustin Porier"},
    ]);
  }

  const wednesdayFunc = () => {
    setTable([
      { id: 1, class: "Kickboxing", time: "10:00am - 12:00pm", coach: "Kai Kara-France" },
      { id: 2, class: "Yoga", time: "12:00px - 2:00pm", coach: "Maria Oliveira" },
      { id: 3, class: "Power Lifting", time: "2:00pm - 4:00pm", coach: "Mark Hunt" },
      { id: 4, class: "Core", time: "4:00pm - 6:00pm", coach: "Paulo Costa" },
      { id: 5, class: "Crossfit", time: "6:00pm - 8:00pm", coach: "Maycee Barber" },
      { id: 6, class: "Boxing", time: "8:00pm - 10:00pm", coach: "Dustin Porier"},
    ]);
  }

  const thursdayFunc = () => {
    setTable([
      { id: 1, class: "Core", time: "10:00am - 12:00pm", coach: "Paulo Costa" },
      { id: 2, class: "Power Lifting", time: "12:00px - 2:00pm", coach: "Mark Hunt" },
      { id: 3, class: "Kickboxing", time: "2:00pm - 4:00pm", coach: "Kai Kara-France" },
      { id: 4, class: "Crossfit", time: "4:00pm - 6:00pm", coach: "Maycee Barber" },
      { id: 5, class: "Yoga", time: "6:00pm - 8:00pm", coach: "Maria Oliveira" },
      { id: 6, class: "Boxing", time: "8:00pm - 10:00pm", coach: "Dustin Porier"},
    ]);
  }

  const fridayFunc = () => {
    setTable([
      { id: 1, class: "Power Lifting", time: "10:00am - 12:00pm", coach: "Mark Hunt" },
      { id: 2, class: "Kickboxing", time: "12:00px - 2:00pm", coach: "Kai Kara-France" },
      { id: 3, class: "Crossfit", time: "2:00pm - 4:00pm", coach: "Maycee Barber" },
      { id: 4, class: "Boxing", time: "4:00pm - 6:00pm", coach: "Dustin Porier"},
      { id: 5, class: "Yoga", time: "6:00pm - 8:00pm", coach: "Maria Oliveira" },
      { id: 6, class: "Core", time: "8:00pm - 10:00pm", coach: "Paulo Costa" },
    ]);
  }

  const saturdayFunc = () => {
    setTable([
      { id: 1, class: "Kickboxing", time: "10:00am - 12:00pm", coach: "Kai Kara-France" },
      { id: 2, class: "Power Lifting", time: "12:00px - 2:00pm", coach: "Mark Hunt" },
      { id: 3, class: "Yoga", time: "2:00pm - 4:00pm", coach: "Maria Oliveira" },
      { id: 4, class: "Crossfit", time: "4:00pm - 6:00pm", coach: "Maycee Barber" },
      { id: 5, class: "Core", time: "6:00pm - 8:00pm", coach: "Paulo Costa" },
      { id: 6, class: "Boxing", time: "8:00pm - 10:00pm", coach: "Dustin Porier"},
    ]);
  }

  const sundayFunc = () => {
    setTable([
      { id: 1, class: "Power Lifting", time: "10:00am - 12:00pm", coach: "Mark Hunt" },
      { id: 2, class: "Boxing", time: "12:00px - 2:00pm", coach: "Dustin Porier"},
      { id: 3, class: "Core", time: "2:00pm - 4:00pm", coach: "Paulo Costa" },
      { id: 4, class: "Crossfit", time: "4:00pm - 6:00pm", coach: "Maycee Barber" },
      { id: 5, class: "Kickboxing", time: "6:00pm - 8:00pm", coach: "Kai Kara-France" },
      { id: 6, class: "Yoga", time: "8:00pm - 10:00pm", coach: "Maria Oliveira" },
    ]);
  }

  const mondayFunc = () => {
    setTable([
      { id: 1, class: "Crossfit", time: "10:00am - 12:00pm", coach: "Maycee Barber" },
      { id: 2, class: "Yoga", time: "12:00pm - 2:00pm", coach: "Maria Oliveira" },
      { id: 3, class: "Boxing", time: "2:00pm - 4:00pm", coach: "Dustin Porier"},
      { id: 4, class: "Core", time: "4:00pm - 6:00pm", coach: "Paulo Costa" },
      { id: 5, class: "Power Lifting", time: "6:00pm - 8:00pm", coach: "Mark Hunt" },
      { id: 6, class: "Kickboxing", time: "8:00pm - 10:00pm", coach: "Kai Kara-France" }
    ]);
  }

  return (
    <div className='ScheduleTable'>
      <div className="days">
        <p onClick={mondayFunc}>Monday</p>
        <p onClick={tuesdayFunc}>Tuesday</p>
        <p onClick={wednesdayFunc}>Wednesday</p>
        <p onClick={thursdayFunc}>Thursday</p>
        <p onClick={fridayFunc}>Friday</p>
        <p onClick={saturdayFunc}>Saturday</p>
        <p onClick={sundayFunc}>Sunday</p>
      </div>
      <div className="table-rows">
        {table.map((row) => (
          <div className="timetable-info" key={row.id}>
            <div className="info-block">
              <p className='info-type'>Class:</p>
              <p className='info-data'>{row.class}</p>
            </div>
            <div className="info-block">
              <p className='info-type'>Time:</p>
              <p className='info-data'>{row.time}</p>
            </div>
            <div className="info-block">
              <p className='info-type'>Coach:</p>
              <p className='info-data'>{row.coach}</p>
            </div>
            <button className='join'>
              <box-icon name='bookmark-plus' color="white"></box-icon>
              <span>Join now</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleTable