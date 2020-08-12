import React from 'react'
import {Link} from 'react-router-dom'


export default function Explore() {
    return (
        <div className="explore-container">
              <nav>
                <ul>
                  <li>
                    <Link to="/Light">Light</Link>
                  </li>
                  <li>
                    <Link  to="/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link to="/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link  to="/Lab">Lab</Link>
                  </li>

                </ul>
              </nav>
              <div className="down-navBar">              
                <span>
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
    )
}
