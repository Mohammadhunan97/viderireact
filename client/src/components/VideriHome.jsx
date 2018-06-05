import React from 'react';

let VideriHome = ({ logOut }) => (
  <div>
    <p>here is the home route with all available images and videos</p>
    <button onClick={() => logOut()}>LogOut</button>
  </div>
)


export default VideriHome;
