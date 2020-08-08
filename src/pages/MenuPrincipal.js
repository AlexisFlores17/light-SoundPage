import React, {useState, useEffect} from 'react';
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
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: ""
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);


  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Volver"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: ""
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Volver"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  const handleState = estado => {
    console.log(estado)
    setState(estado);
  }

  return (    
    <Router>
      <div className="App">
        <Header disabled={disabled} handleMenu={handleMenu} state={state} handleState={handleState}/>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>       
                <Route exact path="/" component={() => <Home handleMenu={handleMenu}/>} />         
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


