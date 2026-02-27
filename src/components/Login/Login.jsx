import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook

const Login = () => {
  // State to hold the user's input and potential errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // New state for error messages
  
  const navigate = useNavigate(); // Initialize the navigation function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // --- HARDCODED CREDENTIALS ---
    const correctEmail = 'admin@example.com';
    const correctPassword = 'password123';

    // Check if the input matches the hardcoded credentials
    if (email === correctEmail && password === correctPassword) {
      console.log('Login successful!');
      setError(''); // Clear any previous errors
      
      // Redirect the user to the dashboard route
      navigate('/dashboard'); 
    } else {
      // If they don't match, show an error and keep them on the login page
      setError('Invalid email or password. Please try again.');
      setPassword(''); // Clear the password field for them to try again
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      
      {/* Conditionally render the error message if one exists */}
      {error && <p style={styles.errorText}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Sign In
        </button>
        
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '15px'
  }
};

export default Login;
