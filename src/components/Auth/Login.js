import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import hrmsMain from '../../Assets/login-info.png';
// import background from '../../Assets/background.jpg';
import logo from '../../Assets/logo.jpeg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
