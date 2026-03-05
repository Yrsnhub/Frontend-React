import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Diri ni dapat, dili sa App.jsx

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper para makuha ang Title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path.includes('users')) return 'Users';
    if (path.includes('orders')) return 'Orders';
    if (path.includes('settings')) return 'Settings';
    return 'Dashboard';
  };

  const handleLogout = () => {
    // Logout Logic here
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-container">
          <h1 className="logo-text">Dustin Corp</h1>
        </div>
        
        <nav className="nav-menu">
          {/* Dashboard Link */}
          <NavLink 
            to="/dashboard" 
            end 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Dashboard
          </NavLink>

          {/* Users Link */}
          <NavLink 
            to="/dashboard/users" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Users
          </NavLink>

          {/* Orders Link */}
          <NavLink 
            to="/dashboard/orders" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Orders
          </NavLink>

          {/* Settings Link */}
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="header">
          <h2 className="page-title">{getPageTitle()}</h2>
          <span className="user-profile">Admin User</span>
        </header>

        <div className="content-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;