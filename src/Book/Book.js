import React, { useState } from 'react';
import './Book.css';
import Welcom from '../DrZain/Welcom';

const Book = () => {
  const [day, setDay] = useState("today");

  const data = {
    yesterday: { oldPatients: 60, newPatients: 40, oldPercentage: 60, newPercentage: 40 },
    today: { oldPatients: 70, newPatients: 30, oldPercentage: 70, newPercentage: 30 },
    tomorrow: { oldPatients: 50, newPatients: 50, oldPercentage: 50, newPercentage: 50 }
  };

  const { oldPatients, newPatients, oldPercentage, newPercentage } = data[day];

  const handleNextDay = () => {
    if (day === "yesterday") {
      setDay("today");
    } else if (day === "today") {
      setDay("tomorrow");
    }
  };

  const handlePreviousDay = () => {
    if (day === "tomorrow") {
      setDay("today");
    } else if (day === "today") {
      setDay("yesterday");
    }
  };

  return (
    <div className="card">
      <div className="arrows left-arrow" onClick={handlePreviousDay}>&#9664;</div>
      <h2>
        {day === "today" ? "Today" : day === "yesterday" ? "Yesterday" : "Tomorrow"}
      </h2>
      <div 
        className="pie-chart"
        style={{
          background: `conic-gradient(
            #3b82f6 0% ${oldPercentage}%, 
            #ef4444 ${oldPercentage}% 100%
          )`
        }}
      >
        {/* دائرة النص الصغيرة */}
        <div className="inner-circle">
          <span>{oldPercentage}%</span>
        </div>
      </div>
      <div className="details">
        <div>
          <span className="old"></span>
          <p>Old Patient</p>
          <p>{oldPatients}</p>
        </div>
        <div>
          <span className="new"></span>
          <p>New Patient</p>
          <p>{newPatients}</p>
        </div>
      </div>
      <div className="arrows right-arrow" onClick={handleNextDay}>&#9654;</div>

    </div>
  );
};

export default Book;
