import { Copyright } from '../components/Copyright';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Conocenos from '../pages/Conocenos';
import Footer from '../components/Footer';
import Showreel from '../pages/ShowReel';
import Contacto from '../pages/Contacto';
import { PageError } from '../pages/PageError';
import { Home } from '../pages/Home';
import Header from '../components/Header';
import Explore from '../pages/Explore';


export const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>  
                    <Route exact path='/'>
                        <Home />
                    </Route>      
                    <Route path='/explore'>
                        <Explore />                        
                    </Route>
                    <Route path='/Conocenos'>
                        <Conocenos />
                        <Footer/>
                    </Route>
                    <Route path='/Showreel'>
                        <Showreel/>
                        <Footer/>
                    </Route>
                    <Route path='/Contacto'>
                        <Contacto />
                        <Copyright />
                    </Route>
                    <Route exact path='/404'>
                        <PageError />
                        <Footer />
                    </Route>
                    <Redirect to='/404' />

                </Switch>  
                        
            </div>
        </Router>
    )
}
