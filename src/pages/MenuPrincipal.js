import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
 }from 'react-router-dom';
import Home from '../components/Home'
import Light from '../components/Light'
import Sound from '../components/Sound'
import Disruptive from '../components/Disruptive'
import Lab from '../components/Lab'
import Showreel from '../components/ShowReel'
import { NavBar } from '../components/NavBar';
import { MenuTitulo } from '../components/MenuTitulo';

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
