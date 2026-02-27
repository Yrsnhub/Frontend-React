import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login.jsx'; 
import Dashboard from './components/Dashboard/Dashboard.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="login-theme"><Login /></div>} />
        <Route path="/dashboard" element={<div className="dashboard-theme"><Dashboard /></div>} />
        {/* Wildcard route to catch any unknown URLs and send them back to login */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;