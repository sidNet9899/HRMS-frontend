import React, { useState } from 'react';
import './ShiftCalendar.css'; // Link to the CSS file
import backButtonImage from '../../../Assets/backButtonImage.jpg';
import leftArrow from '../../../Assets/leftArrow.png'; // Replace with the actual path to your left arrow image
import rightArrow from '../../../Assets/rightArrow.png'; // Replace with the actual path to your right arrow image

const ShiftCalendar = () => {
  const [month, setMonth] = useState('August'); // Default month
  const [year, setYear] = useState('2024'); // Default year

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handlePrevMonth = () => {
    // Logic to shift to the previous month
  };

  const handleNextMonth = () => {
    // Logic to shift to the next month
  };

  return (
    <div className="shift-calendar-container">
      <div className="header">
        <img src={backButtonImage} alt="Back" className="back-button-image" />
        <h1>My Shift Calendar</h1>
      </div>

      <div className="calendar-header">
        <div className="dropdowns">
          <select value={month} onChange={handleMonthChange}>
            {/* Options for months */}
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <select value={year} onChange={handleYearChange}>
            {/* Options for years */}
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            {/* Add more years as needed */}
          </select>
        </div>

        <div className="month-year-display">
          <span>{month} {year}</span>
        </div>

        <div className="arrows">
          <img src={leftArrow} alt="Previous Month" onClick={handlePrevMonth} />
          <img src={rightArrow} alt="Next Month" onClick={handleNextMonth} />
        </div>
      </div>

      <div className="calendar">
        {/* Your calendar implementation goes here */}
        <table className="calendar-table">
          {/* Render the calendar cells with shift timings and holidays */}
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {/* Render rows of days with shift data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShiftCalendar;
