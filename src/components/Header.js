import React from "react";
import { NavLink } from "react-router-dom";
import Explore from './Explore'
export function Header({disabled, handleExplore, state}) {
  

  return (
    <header>
      <div className= "container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <NavLink to='/'>
                LSD LAB.
              </NavLink>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleExplore}>Explore</button>
            </div>
          </div>
        </div>
      </div>
      <Explore state={state}/> 
    </header>  

  );
};
