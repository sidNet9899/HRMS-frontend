import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeDirectory.css';
import DirectoryIcon from '../../../Assets/Directory-Icon.jpeg';
import SearchIcon from '../../../Assets/Search-Icon.jpg';

const EmployeeDirectoryWidget = () => {
  return (
    <div className="employee-widget-container">
      <div className="employee-widget">
        {/* Directory Icon */}
        <img src={DirectoryIcon} alt="Employee Directory" className="employee-widget-image" />

        {/* Employee Directory Title */}
        <h3>Employee Directory</h3>

        {/* Search Icon with Link */}
        <Link to="/directory" className="employee-search-icon">
          <img src={SearchIcon} alt="Search Icon" />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDirectoryWidget;
