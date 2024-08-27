import React from 'react';
import MyTDSHeader from './MyTDSHeader';
import PersonalInfo from './PersonalInfo';
import Deduction from './Deduction';
import TDS from './TDS';
import NetTDS from './NetTDS';
import './MyTDSDetails.css';

const MyTDSDetails = () => {
  return (
    
    <div className="tds-details-container">
      <div><MyTDSHeader /></div>
      <div><PersonalInfo /></div>
      <div><Deduction /></div>
      <div><TDS /></div>
      <div><NetTDS /></div>
     
    </div>
  );
};

export default MyTDSDetails;
