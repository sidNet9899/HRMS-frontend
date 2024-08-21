import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-details">
        <div className="profile-item">
          <label>Name:</label>
          <span>John Doe</span>
        </div>
        <div className="profile-item">
          <label>Email:</label>
          <span>john.doe@example.com</span>
        </div>
        <div className="profile-item">
          <label>Phone:</label>
          <span>+1234567890</span>
        </div>
        <div className="profile-item">
          <label>Address:</label>
          <span>1234 Main St, Anytown, USA</span>
        </div>
        <div className="profile-item">
          <label>Position:</label>
          <span>Software Engineer</span>
        </div>
        <div className="profile-item">
          <label>Department:</label>
          <span>Engineering</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
