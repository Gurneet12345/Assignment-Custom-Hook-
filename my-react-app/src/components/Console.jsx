import React from 'react';

const Console = ({ logs }) => {
  console.log('Console rendered');
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black', height: '200px', overflow: 'auto' }}>
      <h3>Console</h3>
      {logs.length > 0 ? (
        logs.map((log, index) => <p key={index}>{log}</p>)
      ) : (
        <p>No logs yet</p>
      )}
    </div>
  );
};

export const MemoizedConsole = React.memo(Console);
