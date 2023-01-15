import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { render } from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routes/>
  </React.StrictMode>
);



