import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import hrmsMain from '../../../../Assets/login-info.png';
// import background from '../../Assets/background.jpg';
import logo from '../../../../Assets/logo.jpeg';

function Login() {
  const [employeeCode, setEmployeeCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/employee/login",
        {
          employeeCode,
          password,
        }
      );
      const EmployeeData = response.data;
      if (EmployeeData) {
        localStorage.setItem("employeeCode", employeeCode); // Store employeeCode in local storage
        setError(null); // Clear the error state
        alert("Login Successful!"); // Add an alert after successful login
        navigate(`/employee/dashboard/${employeeCode}`);
      } else {
        setError("Invalid Credentials!!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
        alert(error.response.data);
      } else {
        setError("Invalid Credentials!!");
      }
    }
  };

  return (
    <div className="container">
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        </div>
      <div className="left-side">
        <img src={hrmsMain} alt="HRMS Main" />
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Username"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot-password">
              <button type="button" className="forgot-password-button">Forgot Password?</button>
            </div>
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
