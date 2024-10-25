import React, { useState } from 'react';
import { useLogger } from './useLogger';

const LoggerComponent = () => {
  const { logs, logMessage } = useLogger();
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logLevel, setLogLevel] = useState('LOG');

  const handleSubmit = () => {
    logMessage(scope, 'DeleteFriend', logLevel, message);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid black', width: '600px' }}>
      {/* Input Section */}
      <div>
        <label>
          Scope: 
          <input 
            value={scope} 
            onChange={(e) => setScope(e.target.value)} 
            style={{ marginLeft: '10px', marginRight: '20px' }} 
          />
        </label>

        <label>
          Log Level: 
          <select 
            value={logLevel} 
            onChange={(e) => setLogLevel(e.target.value)} 
            style={{ marginLeft: '10px', marginRight: '20px' }}
          >
            <option value="ERROR">ERROR</option>
            <option value="WARN">WARN</option>
            <option value="LOG">LOG</option>
            <option value="DEBUG">DEBUG</option>
          </select>
        </label>

        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Message Input */}
      <div style={{ marginTop: '20px' }}>
        <label>
          Message:
          <input 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            style={{ marginLeft: '10px', width: '300px', height: '50px' }} 
          />
        </label>
      </div>

      {/* Log Levels Section */}
      <div style={{ marginTop: '20px' }}>
        <strong>Log Levels:</strong>
        <div style={{ padding: '10px', border: '1px solid black', width: '100px' }}>
          <div>ERROR</div>
          <div>WARN</div>
          <div>LOG</div>
          <div>DEBUG</div>
        </div>
      </div>

      {/* Console Section */}
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black', height: '200px', overflow: 'auto' }}>
        <h3>Console</h3>
        {logs.length > 0 ? (
          logs.map((log, index) => <p key={index}>{log}</p>)
        ) : (
          <p>No logs yet</p>
        )}
      </div>
    </div>
  );
};

export default LoggerComponent;
