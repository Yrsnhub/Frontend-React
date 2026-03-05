import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import Components
import Login from './components/Login/Login.jsx'; 
import Dashboard from './components/Dashboard/Dashboard.jsx'; 

// Import Pages (Siguradoa nga sakto ni nga path base sa imong folder structure)
import Home from './components/Dashboard/Home/Home.jsx';
import Users from './components/Dashboard/Users/Users.jsx';
import Orders from './components/Dashboard/Orders/Orders.jsx';
import Settings from './components/Dashboard/Settings/Settings.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. LOGIN ROUTE */}
        <Route path="/" element={<div className="login-theme"><Login /></div>} />

        {/* 2. DASHBOARD ROUTE */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 3. CATCH ALL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;