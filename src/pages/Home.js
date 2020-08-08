import React from 'react'
import arrow from '../images/arrow-right.svg'
import Explore from '../components/Explore'
import LSDbackground from '../videos/LSD1.1.mp4'
export default function Home({handleMenu}) {
  return (
    <>
    <video autoPlay muted loop className="myVideo" type="video/mp4">
        <source src={LSDbackground} />
      </video>
    <div className="container">
      
      <div className="wrapper">
        <h5 className="animate__animated animate__fadeInUp"> 
          Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
        </h5>
        <div className="btn-row">
          <button className="explore-button" onClick={handleMenu} >Explore
            <div className="arrow-icon" >
              <img src={arrow} alt="row"/>
            </div>
          </button>
        </div>        
      </div>      
    </div>    
    </>
  );
}