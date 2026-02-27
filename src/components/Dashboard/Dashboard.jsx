import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // State to track if a message should be shown or hidden
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle logging out
  const handleLogout = () => {
    navigate('/'); // Sends the user back to the login route
  };

  // Function to toggle the message state
  const toggleMessage = () => {
    setShowMessage(!showMessage); // Flips true to false, and false to true
  };

  return (
    <div style={styles.appContainer}>
      {/* Top Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.navLogo}>Dustin</h1>
        <button onClick={handleLogout} style={styles.navLogoutBtn}>
          Logout
        </button>
      </nav>

      {/* Main Content / "Feed" Area */}
      <main style={styles.mainFeed}>
        
        {/* White Card representing a "Post" or "Dashboard Panel" */}
        <div style={styles.card}>
          
          {/* Card Header (Profile Pic & Name) */}
          <div style={styles.cardHeader}>
            <div style={styles.avatar}>U</div>
            <div>
              <h2 style={styles.userName}>Welcome to the Dashboard!</h2>
              <p style={styles.timestamp}>Just now · 🌎</p>
            </div>
          </div>

          {/* Card Body */}
          <div style={styles.cardBody}>
            <p style={styles.bodyText}>
              Click the button below to interact with this panel and reveal a hidden message.
            </p>

            {/* Interactive Button */}
            <button onClick={toggleMessage} style={styles.actionButton}>
              {showMessage ? 'Hide Message' : 'Show Secret Message'}
            </button>

            {/* Conditional Rendering: This box only exists if showMessage is true */}
            {showMessage && (
              <div style={styles.secretBox}>
                Baho Kag Lubot
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

// Styles inspired by Facebook's clean, simple UI
const styles = {
  appContainer: {
    backgroundColor: '#f0f2f5', // Facebook's signature light gray background
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '0 20px',
    height: '60px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
  },
  navLogo: {
    color: '#1877f2', // Facebook Blue
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLogoutBtn: {
    backgroundColor: '#e4e6eb', // Light gray button
    color: '#050505',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  mainFeed: {
    maxWidth: '680px', // Keeps the content centered and readable like a news feed
    margin: '20px auto',
    padding: '0 15px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    marginBottom: '20px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1877f2',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    marginRight: '10px',
  },
  userName: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#050505',
    margin: '0 0 2px 0',
  },
  timestamp: {
    fontSize: '13px',
    color: '#65676b',
    margin: 0,
  },
  cardBody: {
    paddingTop: '5px',
  },
  bodyText: {
    fontSize: '15px',
    color: '#050505',
    marginBottom: '15px',
  },
  actionButton: {
    width: '100%', // Makes the button span the full width of the card
    padding: '10px',
    backgroundColor: '#1877f2', // Facebook Blue
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
  },
  secretBox: {
    marginTop: '15px',
    backgroundColor: '#e7f3ff', // Very light blue background for the secret
    color: '#1877f2',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '16px',
  }
};

export default Dashboard;