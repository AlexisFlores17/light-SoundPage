import React from 'react'
import {Link} from 'react-router-dom'
import Light from './Light'
import Sound from './Sound'
import Disruptive from './Disruptive'
import Lab from './Lab'
import{  
  Switch,
  Route,
}from 'react-router-dom';

export default function Explore() {
    return (
      <>
        <div className="explore-container">
          <nav>
            <ul>
              <li>
                <Link to="/explore/Light">Light</Link>
              </li>
              <li>
                <Link  to="/explore/Sound">& Sound</Link>
              </li>
              <li>
                <Link to="/explore/Disruptive">Disruptive</Link>
              </li>
              <li>
                <Link  to="/explore/Lab">Lab</Link>
              </li>

            </ul>
          </nav>
          <div className="division-services">                             
            <Switch>                                    
              <Route exact path="/explore/Light" component={Light} />
              <Route exact path="/explore/Sound" component={Sound} />
              <Route exact path="/explore/Disruptive" component={Disruptive} />
              <Route exact path="/explore/Lab" component={Lab} />
            </Switch>
          </div>
          <div className="down-navBar">              
            <div className="col-sm-4 col-12">
              <Link to="/Conocenos" className="link">Conócenos</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Showreel" className="link">Showreel</Link>
            </div>
            <div className="col-sm-4 col-12">
              <Link to="/Contacto" className="link">Contacto</Link>
            </div>                
          </div>
        </div>
        
      </>
    )
}
