import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
 }from 'react-router-dom';
import Home from './Home'
import Light from './Light'
import Sound from './Sound'
import Disruptive from './Disruptive'
import Lab from './Lab'
import Showreel from './ShowReel'
import { NavBar } from './NavBar';
import { MenuTitulo } from './MenuTitulo';

export const MenuPrincipal = () => {
    return (
            <Router>
            <div>
                <NavBar/>
                <div>
                    <MenuTitulo/>
                    <Switch>
                        <Route exact path="/">
                        <Home />
                        </Route>
                        <Route path="/Light">
                        <Light />
                        </Route>
                        <Route path="/Sound">
                        <Sound />
                        </Route>
                        <Route path="/Disruptive">
                        <Disruptive />
                        </Route>
                        <Route path="/Lab">
                        <Lab />
                        </Route>
                        <Route path="/Showreel">
                        <Showreel />
                        </Route>
                    </Switch>
                </div>
            </div>

        </Router>
    )
}
