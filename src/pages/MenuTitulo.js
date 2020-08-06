import React from "react";

import { NavLink } from "react-router-dom";

export function MenuTitulo() {  

  return (    
  <h1 className="selected">

    <NavLink className="link" to="/Light" activeClassName="selected" >Light</NavLink>
    <br/>
    <NavLink className="link" to="/Sound" activeClassName="selected" >& Sound</NavLink>
    <br/>
    <NavLink className="link" to="/Disruptive" activeClassName="selected" >Disruptive</NavLink>
    <br/>
    <NavLink className="link" to="/Lab" activeClassName="selected" >Lab</NavLink>
  </h1>                          
  );
}