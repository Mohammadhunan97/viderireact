import React from 'react';

let LoginPage = ({ logIn }) => {
  return(
    <div>
      <button onClick={() => logIn()}>Login</button>
    </div>
  )
}

export default LoginPage;
