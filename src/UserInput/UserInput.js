import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="userInputContainer">
      <input className="userInput" type="text" value={props.username} onChange={props.changeUserName}/>
    </div>
  )
};

export default userInput;