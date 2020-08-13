import React, {useRef, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Light from './Light'
import Sound from './Sound'
import Disruptive from './Disruptive'
import Lab from './Lab'
import{  
  Switch,
  Route,
}from 'react-router-dom';
import gsap from 'gsap'
import Footer from '../components/Footer'

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

    return (
      <>
        <div className="explore-container">
          <nav>
            <ul>
              <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/Light">Light</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  to="/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  to="/Lab">Lab</Link>
                </li>

            </ul>
          </nav>
            <div className="division-services">                             
              <Switch>                       
                  <Route exact path="/Light" component={Light} />
                  <Route exact path="/Sound" component={Sound} />
                  <Route exact path="/Disruptive" component={Disruptive} />
                  <Route exact path="/Lab" component={Lab} />
              </Switch>
          </div>
          <div className="down-navBar">              
            <div className="col-sm-4 col-12">
              <Link to="/Conocenos" className="link btn-2">Conócenos</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Showreel" className="link btn-2">Showreel</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Contacto" className="link btn-2">Contacto</Link>
            </div>                
          </div>
        </div>
        
      </>
    )
}
