import { useState } from 'react';

export const useLogger = () => {
  const [logs, setLogs] = useState([]);

  const logMessage = (scope, action, level, message) => {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${scope}] [${level}] [${timestamp}] ${action}: ${message}`;
    setLogs((prevLogs) => [...prevLogs, logEntry]);
  };

  return { logs, logMessage };
};
