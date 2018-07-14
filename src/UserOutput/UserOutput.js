import React from 'react';

const  userOutput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div style={style}>
      <p>This little piggy named {props.username} went to market</p>
      <p>This little piggy went home</p>
    </div>
  )
};

export default userOutput;