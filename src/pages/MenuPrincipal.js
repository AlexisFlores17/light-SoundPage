import React, {useState, useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
import Conocenos from './Conocenos'
import ShowReel from './ShowReel'
import Contacto from './Contacto'
import {Home} from './Home'
import Header from '../components/Header';
import Explore from './Explore'
import Footer from '../components/Footer'

export const MenuPrincipal = () => {
  // State of our Menu
  return (    
    <Router>
      <div className="App">
        <Header/>
          <Switch>  
            <Route exact path='/'>
              <Home />
            </Route>      
            <Route path='/explore'>
              <Explore />
            </Route>
            <Route path='/Conocenos'>
              <Conocenos />
            </Route>
            <Route path='/Showreel'>
              <ShowReel />
            </Route>
            <Route path='/Contacto'>
              <Contacto />
            </Route>
          </Switch>  
          <Footer/>      
      </div>
    </Router>
  );
}


