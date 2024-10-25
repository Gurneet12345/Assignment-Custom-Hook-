import React, { useState, useCallback } from 'react';

const App = () => {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logLevel, setLogLevel] = useState('LOG');
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(false);

  // Handle log submission with validation
  const handleSubmit = useCallback(() => {
    if (!scope || !message) {
      setError(true);
      return;
    }

    const timestamp = new Date().toLocaleString();
    const logEntry = `${scope} (${timestamp}): ${message} `;

    // Log in developer tools based on log level
    switch (logLevel) {
      case 'ERROR':
        console.error(logEntry);
        break;
      case 'WARN':
        console.warn(logEntry);
        break;
      case 'LOG':
        console.log(logEntry);
        break;
      case 'DEBUG':
        console.debug(logEntry);
        break;
      default:
        break;
    }

    // Set log for the UI
    setLogs((prevLogs) => [...prevLogs, logEntry]);
    setError(false); // Clear error state on success
  }, [scope, message, logLevel]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Custom Hook</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Scope:</label>
        <input
          type="text"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder="Enter Scope"
          style={{ ...styles.input, borderColor: error && !scope ? 'red' : '#ccc' }}
        />

        <label style={styles.label}>Log Level:</label>
        <select value={logLevel} onChange={(e) => setLogLevel(e.target.value)} style={styles.select}>
          <option value="ERROR">ERROR</option>
          <option value="WARN">WARN</option>
          <option value="LOG">LOG</option>
          <option value="DEBUG">DEBUG</option>
        </select>
      </div>

      {/* Message Input */}
      <div style={styles.inputGroup}>
        <label style={styles.label}>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          style={{ ...styles.textArea, borderColor: error && !message ? 'red' : '#ccc' }}
        />
      </div>

      <button onClick={handleSubmit} style={styles.button}>Submit</button>

      {/* Console Output in the App */}
      <div style={styles.console}>
        <h3>Console</h3>
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <p key={index} style={styles.logEntry}>{log}</p>
          ))
        ) : (
          <p style={styles.emptyState}>No logs yet. Submit to see logs here!</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for better presentation
const styles = {
  container: {
    width: '60%',
    margin: 'auto',
    fontFamily: "'Helvetica Neue', sans-serif",
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    transition: '0.3s ease-in-out',
    paddingBottom: '40px',
    boxSizing: 'border-box',  // Added box-sizing
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%', // Ensure inputs take full width
    boxSizing: 'border-box',  // Ensure padding is included
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',  // Full width
    boxSizing: 'border-box',  // Include padding in width
    fontSize: '16px',
    transition: 'border-color 0.3s',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '16px',
    width: '100%',  // Full width
    boxSizing: 'border-box',  // Include padding in width
  },
  textArea: {
    width: '100%',
    height: '80px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    transition: 'border-color 0.3s',
    fontSize: '16px',
    boxSizing: 'border-box',  // Include padding in width
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  console: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  logEntry: {
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    fontSize: '14px', // Adjusted font size for readability
    fontStyle: 'italic', // Italic style for logs
  },
  emptyState: {
    textAlign: 'center',
    color: '#999',
    fontSize: '16px',
  },
};

export default App;
