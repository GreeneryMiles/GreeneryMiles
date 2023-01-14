import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home';

const Router = () => {
    return(  
        <BrowserRouter>
            <>
            <Home/>
            </>
        </BrowserRouter>
    )

  }
  
  export default App;