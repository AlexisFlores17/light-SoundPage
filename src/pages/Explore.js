import React from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'


export default function Explore() {  
  const handleHover = e => {    
    gsap.to(e.target, {
      duration: 0.3,
      y: 6,
      skewX: 4,
      ease: 'power3.inOut' 
    })
  }
  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -6,
      skewX: 0,
      ease: 'power3.inOut' 
    })

  } 

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

    return (
      <>
        <div className="explore-container">
          <div className='row mr-0'>
            <div className='col-5'>
              <nav>
                <ul>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Light">Light</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  to="/explore/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  to="/explore/Lab">Lab</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="division-services col-7" >
                    <ExploreRoutes />
            </div>
          </div>
          <div className="down-navBar">              
            <div className="col-sm-4 col-12">
              <Link to="/Conocenos" className="link btn-2" onClick={scrollTop}>Conócenos</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Showreel" className="link btn-2" onClick={scrollTop}>Showreel</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Contacto" className="link btn-2" onClick={scrollTop}>Contacto</Link>
            </div>                
          </div>
        </div>
        
      </>
    )
}
