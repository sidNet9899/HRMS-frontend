import React, { useState } from 'react';
import './AttendanceTable.css';

const sampleData = [
  { date: '07-01-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' }
];

const editedData = [

];

const AttendanceTable = () => {
  const [showEdited, setShowEdited] = useState(false);

  const data = showEdited ? editedData : sampleData;

  return (
    <div className="attendance-table">
      <div className="header">
        <h2 className={showEdited ? '' : 'active'} onClick={() => setShowEdited(false)}>My Attendance</h2>
        <h2 className={showEdited ? 'active' : ''} onClick={() => setShowEdited(true)}>Edited Attendance List</h2>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Date</th>
              <th>Day</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Spent Hours</th>
              <th>Is manual</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Missed Punch</th>
              <th>OverTime</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="action-cell">...</td>
                <td>{row.date}</td>
                <td>{row.day}</td>
                <td>{row.inTime}</td>
                <td>{row.outTime}</td>
                <td>{row.spentHours}</td>
                <td>{row.isManual}</td>
                <td>{row.status}</td>
                <td>{row.remarks}</td>
                <td>{row.missedPunch}</td>
                <td>{row.overTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
