// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
import './Dashboard.css'; 
import EmployeeDirectory from './EmployeeDirectoryWidget/EmployeeDirectory';
import ShiftWidget from './ShiftWidget/ShiftWidget';
import HolidayWidget from './HolidayWidget/HolidayWidget';
import AttendanceWidget from './AttendanceWidget/AttendanceWidget';
import NewJoining from './NewJoining/NewJoining';  
import Celebration from './Celebration/Celebration'; 
import OpenVacancies from './OpenVacancy/OpenVacancy';
import AttendanceT from './AttendanceT/AttendanceT';
import PerformanceFeedback from './PerformanceFeedback/PerformanceFeedback';
import Training from './Training/Training';
import MyToDoList from './MyToDoList/MyToDoList';
import AccoladesRewards from './AccoladesRewards/AccoladesRewards';
import WordsOfWisdom from './WordsOfWisdom/WordsOfWisdom';
import BalanceLeaves from './BalanceLeaves/BalanceLeaves';
import Policies from './Policies/Policies';
import MyLeaveApplied from './MyLeaveApplied/MyLeaveApplied';
import ApplyLeave from './ApplyLeave/ApplyLeave';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';


const Dashboard = () => {
 // const [isEssOpen, setEssOpen] = useState(false);

 // const toggleEssMenu = () => {
 //   setEssOpen(!isEssOpen);
 // };

  return (
    <div className="dashboard-container">
      
      <div className="main-content">
        <div className="header">
          <h2>Ess Dashboard</h2>
        </div>
        <div className="widgets-container"> 
          <EmployeeDirectory />  
          <ShiftWidget />
          <HolidayWidget />
          <AttendanceWidget />
        </div>
        <div className="containers-row">
          <NewJoining />  
          <Celebration />  
        </div>
        <div className="vacancy-container">
          <OpenVacancies />  
        </div>
        <div className="containers-row">
          <AttendanceT />  
          <PerformanceFeedback />
        </div>
        <div className="containers-row">
          <Training />
          <MyToDoList />
        </div>
        <div className="containers-row">
          <AccoladesRewards />
          <WordsOfWisdom />
          <BalanceLeaves />
        </div>
        <div className="containers-row">
           <Policies />
           <MyLeaveApplied />
        </div>
        <div className="containers-row">
           <ApplyLeave />
           <Gallery />
        </div>
      </div>
          <Footer />
    </div>
  );
};

export default Dashboard;
