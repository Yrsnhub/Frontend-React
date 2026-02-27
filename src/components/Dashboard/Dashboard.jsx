import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Simple Logic 1: State to track if a message should be shown or hidden
  const [showMessage, setShowMessage] = useState(false);

  // Simple Logic 2: Function to handle logging out
  const handleLogout = () => {
    navigate('/'); // Sends the user back to the login route
  };

  // Simple Logic 3: Function to toggle the message state
  const toggleMessage = () => {
    setShowMessage(!showMessage); // Flips true to false, and false to true
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to the Dashboard!</h2>

      {/* Interactive Button */}
      <button onClick={toggleMessage} style={styles.actionButton}>
        {showMessage ? 'Hide Message' : 'Show Secret Message'}
      </button>

      {/* Conditional Rendering: This paragraph only exists if showMessage is true */}
      {showMessage && (
        <p style={styles.secretText}>
          🎉 You found the secret dashboard logic!
        </p>
      )}

      <br /><br />

      {/* Logout Button */}
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

// Basic styles to keep things looking clean
const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  actionButton: {
    padding: '10px 15px',
    margin: '10px',
    backgroundColor: '#007BFF',
    color: 'Black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  logoutButton: {
    padding: '10px 15px',
    backgroundColor: '#dc3545', // Red for logout
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  secretText: {
    color: '#28a745', // Green text
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '20px',
  }
};

export default Dashboard;