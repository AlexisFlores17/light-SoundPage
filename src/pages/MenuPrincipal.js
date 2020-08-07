import React, {useState} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
import {DescripcionInicial} from './DescripcionInicial'
import Conocenos from './Conocenos'
import ShowReel from './ShowReel'
import Contacto from './Contacto'
import Home from './Home'
import {Header } from '../components/Header';
import { MenuTitulo } from './MenuTitulo';


export const MenuPrincipal = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Explore"

  })

  const [disabled, setDisabled] = useState(false)

  const handleExplore = () => {
    console.log(state)
    disableExplore()
    if(state.initial === false){
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      })
      
    }else if(state.clicked === true){
      setState({
        clicked: !state.clicked,
        menuName: "Explore"
      })
      
    }else if(state.clicked === false){
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      })
      
    }
  }
  const disableExplore = () => {    
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <Router>
      <div className="App">
        <Header disabled={disabled} handleExplore={handleExplore} state={state}/>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>       
                <Route exact path="/" component={() => <Home disabled={disabled} handleExplore={handleExplore} state={state} />} />         
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


