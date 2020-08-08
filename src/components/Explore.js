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
import gsap from 'gsap'
import light from '../images/light.png'
import sound from '../images/sound.png'
import disruptive from '../images/disruptive.png'
import lab from '../images/lab.png'
import austin from '../images/austin.webp'

const divisions = [
  light,
  sound,
  disruptive,
  lab,
  austin
];


export default function Explore({state}) {

  let explore = useRef(null)
  let revealExplore = useRef(null)
  let revealExploreBackground = useRef(null)
  let LSDbackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)
  let info = useRef(null)
  


  useEffect(() => {
    if(state.clicked === false){
      //close menu
      gsap.to([revealExplore, revealExploreBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger:{
          amount: 0.07
        }
      })
      gsap.to(explore, {
        duration: 1,
        css: {display: "none"}
      })
    }else if (
      state.clicked === true || 
      (state.clicked === true && state.initial === null)
      ){
      gsap.to(explore, {
        duration: 0,
        css: {display: "block"}
      })
      gsap.to([revealExploreBackground, revealExplore], {
        duration: 0,
        opacity: 1,
        height: "100%"

      })
      staggerReveal(revealExploreBackground, revealExplore)
      fadeInUp(info)
      staggerText(line1, line2, line3, line4)
      
    }
  },[state])


  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8, 
      height: 0, 
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger:{
        amount: 0.1
      }

    })
  }
  const fadeInUp = node => {
    gsap.from(node, {
      y: 60,
      duration: 1, 
      delay: 0.2,
      opacity: 1,
      ease: 'power3.inOut'
    })
  }
  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8, 
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut', 
      stagger: {
        amount: 0.3
      }
    })
  }
  
  const handleLSD = (division, target ) => {
    gsap.to(target, {
      duration: 0,
      background: `url(${division}) center center`
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut"
    });
    gsap.from(target, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top"
    });
  };
  const handleLSDReturn = () => {
    gsap.to(LSDbackground, {
      duration: 0.4,
      opacity: 0
    })
  }
  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut' 
    })
  }
  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut' 
    })

  }



  return (
    
    <div ref={el => explore = el} className="explore-menu">
      <div ref={el => revealExploreBackground = el} className="menu-secondary-background-color"></div>
       <div ref={el => revealExplore = el} className="menu-layer">
        <div ref={el => LSDbackground = el} className="menu-service-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line1 = el} to="/Light">Light</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  ref={el => line2 = el} to="/Sound">& Sound</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line3 = el} to="/Disruptive">Disruptive</Link>
                  </li>
                  <li>
                    <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  ref={el => line4 = el} to="/Lab">Lab</Link>
                  </li>

                </ul>
              </nav>
              <div className="info" ref={el => info = el}>                 
                <Switch>                                    
                  <Route exact path="/Light" component={Light} />
                  <Route exact path="/Sound" component={Sound} />
                  <Route exact path="/Disruptive" component={Disruptive} />
                  <Route exact path="/Lab" component={Lab} />
                </Switch>
              </div>
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
          </div>
        </div>
       </div>
    </div>
   
  );
};
