import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Explore from "./Explore";

const Header = ({ history, disabled, handleMenu, state, handleState }) => {
  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {      
      handleState({ clicked: false, menuName: "" })
      
    });
  }, [history]);  

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">LSD LAB</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Explore state={state} />
    </header>
  );
};

export default withRouter(Header);
