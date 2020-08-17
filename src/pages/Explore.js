import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'


export default function Explore() {  
  let explore = useRef(null)
  let revealExplore = useRef(null)
  let revealExploreBackground = useRef(null)  
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)

  useEffect(() => {
    gsap.to(explore, {
      duration: 0,
      css: {display: "block"}
    })
    staggerReveal(revealExploreBackground, revealExplore)
    staggerText(line1, line2, line3, line4)

  },[])
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 1, 
      height: 0, 
      transformOrigin: 'left bottom',
      skewY: 2,
      ease: 'power3.inOut',
      

    })
  }
  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 1, 
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut', 
      stagger: {
        amount: 0.4
      }
    })
  }

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
        <div ref={el => explore = el} className="explore-container">
          <div ref={el => revealExploreBackground = el} className="menu-secondary-background-color"></div>
          <div ref={el => revealExplore = el} className="menu-layer">
          <div className='row mr-0'>
            <div className='col-12 col-sm-6 col-md-5'>
              <nav>
                <ul>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref = {el => line1 = el} to="/explore/Light">Light</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref = {el => line2 = el}  to="/explore/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref = {el => line3 = el} to="/explore/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref = {el => line4 = el}  to="/explore/Lab">Lab</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="division-services col-sm-6 col-md-7" >
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
        </div>
        
      </>
    )
}
