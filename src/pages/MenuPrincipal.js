import React, {useState} from 'react';
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
  

  return (    
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>       
                <Route exact path="/" component={() => <Home />} />         
                <Route exact path="/Conocenos" component={Conocenos} />
                <Route exact path="/Showreel" component={ShowReel} />
                <Route exact path="/Contacto" component={Contacto} />                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}


