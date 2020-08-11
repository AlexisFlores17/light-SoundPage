import React from 'react'
import LSDbackground from '../videos/LSD1.1.mp4'
import LSDbackgroundPhoto from '../images/lab.png'
export default function Home() {
  return (
    <>
    <div>
      <video autoPlay muted loop className="myVideo" type="video/mp4" poster={LSDbackgroundPhoto}>
        <source src={LSDbackground} />
      </video>
    </div>
 
    <div className="container">

    </div>    
    </>
  );
}