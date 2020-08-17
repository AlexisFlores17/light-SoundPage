import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'
import Footer from '../components/Footer';


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
            <div className='col-5'>
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
        <footer style={{background:'#300B76'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm" id="hagamos">
                        <div className="contactanos">Hagamos algo juntos</div>
                        <div className="project">¿Tienes algún desafío creativo para nosotros? <br/>Nos encantaría escucharlo</div>
                       
                    </div>
                    <div className="col-sm">
                        <p className="contact">
                            <a href="tel:+52 1 55 2746 0988" rel="noopener noreferrer" target="_blank">+52 1 55 2746 0988</a>
                            <br/>
                            <a href="mailto:contacto@lsd.com.mx" rel="noopener noreferrer" target="_blank">contacto@lsdlab.com.mx</a>
                        </p>
                                                
                        <h5 className="siguenos">Síguenos</h5>
                        <div className="social-icons">   
                            <a href="https://www.instagram.com/lab_lsd/" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">IG</span>
                                </div>
                            </a>  

                            <a href="https://www.facebook.com/lab.lsd" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">FB</span>
                                </div>
                            </a>

                            <a href="https://twitter.com/lab_lsd" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">TW</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/company/light-sound-disruptive-lab" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">LKD</span>
                                </div>
                            </a>                
                        </div>
                    </div>                   
                </div>
                
                
                
                
            </div>            
            <div className="copyright">© LSD LAB 2020</div>
        </footer>

        </div>

        
        
        
      </>
    )
}
