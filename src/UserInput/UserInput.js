import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input type="text" value={props.username} onChange={props.changeUserName}/>
    </div>
  )
};

export default userInput;