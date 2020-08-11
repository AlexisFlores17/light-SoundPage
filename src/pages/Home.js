import React, {useEffect, useState} from 'react'
import arrow from '../images/arrow-right.svg'

import desktopVideo from '../videos/LSD1.1.mp4'
import mobileImage from '../images/lab.png'
import { useWindowWidth } from '../hooks/useWindowWidth';
import { Link } from "react-router-dom";

export const Home = ({history}) => {
  
  const backgroundUrl = useWindowWidth() >= 650 ? desktopVideo : mobileImage;
  
  return (
    <div className="home-container">
        <h5 className="animate__animated animate__fadeInUp  ">
          Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
        </h5>   
        <div className="btn-row">
          <Link to="/explore">
            <button className="explore-button" >Explore
              <div className="arrow-icon" >
                <img src={arrow} alt="row"/>
              </div>
            </button>
          </Link>
          
        </div>             
    </div>  
        
            
    
  );
}
