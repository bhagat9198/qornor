import React from 'react';
import bannertLogo from './../assets/images/bannertLogo.jpeg';

export default function Header() {
  return (
    <div>
      <div>
        <div>
          <img src={bannertLogo} alt="youtube channel logo" /> 
        </div>
        <div>Youtube Stats</div>
      </div>
      <div>
        <div></div>
        <div>
          <p>Dude Perfect</p>
          <p>56.9M <span>.</span> 296 videos</p>
        </div>
      </div>
    </div>
  )
}
