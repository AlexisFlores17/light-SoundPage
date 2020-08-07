import React from 'react'
import arrow from '../images/arrow-right.svg'

export default function Home({handleExplore}) {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
        </h5>
        <div className="btn-row">
          <button className="explore-button" onClick={handleExplore} >Explore
            <div className="arrow-icon" >
              <img src={arrow} alt="row"/>
            </div>
          </button>
        </div>        
      </div>      
    </div>    
  );
}