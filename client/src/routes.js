import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home';
import Map from './components/map/App';

const Router = () => {
    return(  
        <BrowserRouter>
            <>
            <Map/>
            <Home/>
            </>
        </BrowserRouter>
    )

  }
  
  export default Router;