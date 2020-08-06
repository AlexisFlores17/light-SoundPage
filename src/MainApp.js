import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
 }from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './components/Home'
import Light from './components/Light'
import Sound from './components/Sound'
import Disruptive from './components/Disruptive'
import Lab from './components/Lab'
import Header from './components/Header'
import Showreel from './components/ShowReel'

export const MainApp = () => {
    return (
        <div>
            <Router>
                <div>
                    <NavBar/>
                    <div>
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
        </div>
    )
}
