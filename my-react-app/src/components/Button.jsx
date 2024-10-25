import React from 'react';

const Button = ({ onClick }) => {
  console.log('Button rendered');
  return (
    <button onClick={onClick}>
      Submit
    </button>
  );
};

export const MemoizedButton = React.memo(Button);
