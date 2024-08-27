import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Employee/Login/Login';
import Register from './components/Auth/Admin/AdminRegister/Register';
import Dashboard from './components/Dashboard/Dashboard';
import './components/Auth/Employee/Login/Login.css';
import './components/Auth/Admin/AdminRegister/Register.css'
import Profile from './components/Ess/Profile/Profile';
import Attendance from './components/Ess/Attendance/Attendance';
import AdminLogin from './components/Auth/Admin/AdminLogin/AdminLogin';
import EmployeeRegister from './components/Auth/Admin/EmployeeRegister/EmployeeRegister';
import AdminDashboard from './components/Auth/Admin/AdminDashboard/AdminDashboard';
import InvestmentDeclaration from './components/Ess/myInvestmentDeclaration/InvestmentDeclaration';
import MyTDSDetails from './components/Ess/TaxComputation/MyTDSDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/employee/login" />} />
        <Route path="/employee/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/employee/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employee/attendance" element={<Attendance />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/employee/register" element={<EmployeeRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard/:adminId" element={<AdminDashboard />} />
        <Route path="/employee/register/:adminId" element={<EmployeeRegister />} />
        <Route path="/employee/dashboard/:employeeCode" element={<Dashboard />} />
        <Route path="/investmentDeclaration" element={<InvestmentDeclaration />} />
        <Route path="/myTDSdetails" element={<MyTDSDetails />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
