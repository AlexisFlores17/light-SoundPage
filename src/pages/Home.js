import React from 'react'
import arrow from '../images/arrow-right.svg'
import { Link } from "react-router-dom";

export const Home = ({history}) => {
  
  return (
    <div className="home-container col-md-6">
        <h5 className="animate__animated animate__fadeInUp animate__slow">
          Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
        </h5>   
        <div className="btn-row animate__animated animate__fadeInLeft animate__delay-2s ">
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
