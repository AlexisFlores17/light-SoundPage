import React, {useState, useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
 }from 'react-router-dom';
import Conocenos from './Conocenos'
import ShowReel from './ShowReel'
import Contacto from './Contacto'
import {Home} from './Home'
import Header from '../components/Header';
import Explore from './Explore'
import Footer from '../components/Footer'
import { AppRoutes } from '../routes/AppRoutes';

export const MenuPrincipal = () => {
  // State of our Menu
  return (    
    <>
      <AppRoutes />
    </>
  );
}


