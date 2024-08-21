import React, { useState } from 'react';
import AttendanceHeader from './AttendanceHeader/AttendanceHeader';
import AttendanceTable from './AttendanceTable/AttendanceTable';
import Pagination from './Pagination/Pagination';
import Footer from './Footer/Footer';
import './Attendance.css';

const Attendance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    // Sample data
    { date: '07-01-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
    { date: '07-02-2024', day: 'Tuesday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
    // Add more data as needed
  ];

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (entries) => setEntriesPerPage(parseInt(entries));

  const displayedData = data.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  return (
    <div className="attendance-container">
      <AttendanceHeader />
      <AttendanceTable data={displayedData} />
      <Pagination
        totalEntries={data.length}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      />
      <Footer />
    </div>
  );
};

export default Attendance;
