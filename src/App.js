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
import LoanRequest from './components/Ess/LoanRequest/LoanRequest';
import MyInterview from './components/Ess/MyInterview/MyInterview';
import PerformanceReview from './components/Ess/PerformanceReview/PerformanceReview';
import SalaryStructure from './components/Ess/MySalaryStructure/SalaryStructure';
import ShiftCalendar from './components/Ess/myShiftCalendar/ShiftCalendar';
import SalarySlip from './components/Ess/SalarySlip/SalarySlip';
import Resignation from './components/Ess/Resignation/Resignation';
import Accolades from './components/Ess/MyAccolades/Accolades';



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
        <Route path="/loanRequest" element={<LoanRequest />} />
        <Route path="/myInterview" element={<MyInterview />} />
        <Route path="/myPerformanceReview" element={<PerformanceReview />} />
        <Route path="/mySalaryStructure" element={<SalaryStructure />} />
        <Route path="/myShiftCalendar" element={<ShiftCalendar />} />
        <Route path="/mySalarySlip" element={<SalarySlip />} />
        <Route path="/myResignation" element={<Resignation />} />
        <Route path="/myAccolades" element={<Accolades />} />

        
        
        
      </Routes>
    </Router>
  );
}

export default App;
