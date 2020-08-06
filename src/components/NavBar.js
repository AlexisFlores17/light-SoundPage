import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand" >UseContext</NavLink>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink exact activeClassName= "active" to="/"      className="nav-item nav-link" >Home</NavLink>
            <NavLink exact activeClassName= "active" to="/about" className="nav-item nav-link" >About</NavLink>
            <NavLink exact activeClassName= "active" to="/login" className="nav-item nav-link" >Login</NavLink>
            </div>
        </div>
    </nav>
    )
}
