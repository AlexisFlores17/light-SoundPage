import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
import {DescripcionInicial} from './DescripcionInicial'
import Light from './Light'
import Sound from './Sound'
import Disruptive from './Disruptive'
import Lab from './Lab'
import { header, Header } from './Header';
import { MenuTitulo } from './MenuTitulo';

export const MenuPrincipal = () => {
    return (
            <Router>
            <div>
                <Header/>
                <div>
                    <div className='menuPrincipal-titulo '>
                        <MenuTitulo/> 
                    </div>         
                    <div className='menuPrincipal-contenido'>
                        <Switch>
                                <Route exact path="/">
                                <DescripcionInicial />
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
                        </Switch>
                    </div>
                </div>
            </div>

        </Router>
    )
}
