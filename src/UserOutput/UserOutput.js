import React from 'react';

const  userOutput = (props) => {
    return (
      <div>
        <p>This little piggy named {props.username} went to market</p>
        <p>This little piggy went home</p>
      </div>
  )
};

export default userOutput;