import React, {useEffect, useState} from 'react'
import arrow from '../images/arrow-right.svg'

import LSDbackground from '../videos/LSD1.1.mp4'
import { withRouter, Link } from "react-router-dom";
const Home = ({history}) => {
  
  
  
  
  return (
    <div className="home-container">
        <h5 className="animate__animated animate__fadeInUp  ">
          Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
        </h5>   
        <div className="btn-row">
          <button className="explore-button" >Explore
            <div className="arrow-icon" >
              <img src={arrow} alt="row"/>
            </div>
          </button>
        </div>             
    </div>  
        
            
    
  );
}

export default withRouter(Home)