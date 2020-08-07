import React, {useEffect, useRef} from "react";
import {Link} from 'react-router-dom'
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
 import Light from '../pages/Light'
import Sound from '../pages/Sound'
import Disruptive from '../pages/Disruptive'
import Lab from '../pages/Lab'

export default function Explore({state}) {

  let explore = useRef(null)
  let revealExplore = useRef(null)
  let revealExploreBackground = useRef(null)
  let LSDbackground = useRef(null)
  


  useEffect(() => {
    if(state.clicked === false){
      //close menu
      explore.style.display = 'none'
    }else if (
      state.clicked === true || 
      (state.clicked === true && state.initial === null)
      ){
      //open menu
      explore.style.display = 'block'
    }
  })

  return (
    <div ref={el => explore = el} className="explore-menu">
      <div className="menu-secondary-background-color"></div>
       <div className="menu-layer">
        <div className="menu-service-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/Light">Light</Link>
                  </li>
                  <li>
                    <Link to="/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link to="/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link to="/Lab">Lab</Link>
                  </li>

                </ul>
              </nav>
              <div className="info">                
                <Switch>                                    
                  <Route exact path="/Light" component={Light} />
                  <Route exact path="/Sound" component={Sound} />
                  <Route exact path="/Disruptive" component={Disruptive} />
                  <Route exact path="/Lab" component={Lab} />
                </Switch>
              </div>
              <div className="down-navBar">
              <span >
                <Link to="/Conocenos" className="link">Conócenos</Link>
              </span>
              <span>
                <Link to="/Showreel" className="link">Showreel</Link>
              </span>
              <span>
                <Link to="/Contacto" className="link">Contacto</Link>
              </span>
                
              </div>

            </div>
          </div>
        </div>
       </div>
    </div>
   
  );
};
