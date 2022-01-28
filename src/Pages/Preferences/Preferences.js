import React from 'react';

export default function Preferences() {
  return(
    <>
     <div class="b-example-divider" style={{paddingTop: 5}}></div>
    <nav class="nav nav-underline" >
        <a class="nav-link active text-black" href="./Dashboard">Dashboard</a>
        <a class="nav-link text-black" href="./Preferences"> Wallet</a>
          </nav>
      <div class="b-example-divider" style={{paddingTop: 80}}></div>
    <h2>Your Wallet</h2>
    </>
  );
}