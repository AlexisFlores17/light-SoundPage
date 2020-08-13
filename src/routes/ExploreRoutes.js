import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Light from '../pages/Light'
import Sound from '../pages/Sound'
import Disruptive from '../pages/Disruptive'
import Lab from '../pages/Lab'
import Explore from '../pages/Explore'

export const ExploreRoutes = () => {
    return (
        <div className="division-services">                             
            <Switch>
                <Route exact path="/explore" component={Explore} />                                  
                <Route exact path="/explore/Light" component={Light} />
                <Route exact path="/explore/Sound" component={Sound} />
                <Route exact path="/explore/Disruptive" component={Disruptive} />
                <Route exact path="/explore/Lab" component={Lab} />
                <Redirect to='/404' />
            </Switch>
        </div>
    )
}
