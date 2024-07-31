import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import './components/Auth/Login.css'; // Import the login CSS file
import './components/Auth/Register.css'; // Import the register CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
