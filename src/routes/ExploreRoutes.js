import React from 'react';
import{  
  Switch,
  Route,
  Redirect,
}from 'react-router-dom';
import Light from '../pages/Light';
import Sound from '../pages/Sound';
import Disruptive from '../pages/Disruptive';
import Lab from '../pages/Lab';


export const ExploreRoutes = () => {
    return (
        <Switch>                   
            <Route exact path="/explore/Light" component={Light} />
            <Route exact path="/explore/Sound" component={Sound} />
            <Route exact path="/explore/Disruptive" component={Disruptive} />
            <Route exact path="/explore/Lab" component={Lab} />
            <Redirect to='/explore' />
        </Switch>
    )
}
