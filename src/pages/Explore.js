import React from 'react'
import {Link} from 'react-router-dom'


export default function Explore() {
    return (
      <>
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
