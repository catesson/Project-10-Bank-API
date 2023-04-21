import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Header } from './component/layout/Header';
import { Footer } from './component/layout/Footer';
import {MyRoute}  from './router/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Header/> 
    <Router>
    <MyRoute/>
    </Router>
    <Footer/>
  </React.StrictMode>
);


