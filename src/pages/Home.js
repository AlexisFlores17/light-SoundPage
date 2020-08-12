import React from 'react'
import arrow from '../images/arrow-right.svg'
import { Link } from "react-router-dom";
import LSDbackground from '../videos/backgroundweb.mp4'

export const Home = ({history}) => {
  
  return (
    <>
      <div>
        <video autoPlay muted loop className="myVideo" type="video/mp4">
          <source src={LSDbackground} />
        </video>
      </div>
      <div className="home-container col-md-6">
          <h5 className="animate__animated animate__fadeInUp animate__slow">
            Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
          </h5>   
          <div className="btn-row animate__animated animate__fadeIn animate__delay-2s ">
            <Link to="/explore">
              <button className="explore-button" >Explore
                <div className="arrow-icon" >
                  <img src={arrow} alt="row"/>
                </div>
              </button>
            </Link>
            
          </div>             
      </div>  
    </>  
            
    
  );
}
