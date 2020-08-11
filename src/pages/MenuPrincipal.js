import React, {useState, useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
import Conocenos from './Conocenos'
import ShowReel from './ShowReel'
import Contacto from './Contacto'
import Home from './Home'
import Header from '../components/Header';


export const MenuPrincipal = () => {
  // State of our Menu

  return (    
    <Router>
      <div className="App">
        <Header/>
        <Home />
      </div>
    </Router>
  );
}


