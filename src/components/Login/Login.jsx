import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // --- HARDCODED CREDENTIALS ---
    // Pwede ra nimo ni ilisan puhon kung naa nay database
    const correctEmail = 'admin@example.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      console.log('Login successful!');
      setError(''); 
      // Redirect padung sa dashboard
      navigate('/dashboard'); 
    } else {
      setError('Invalid email or password. Please try again.');
      setPassword(''); 
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Welcome To Dustin</h2>
        <p className="login-subtitle">Please sign in to continue</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="login-input"
            />
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;