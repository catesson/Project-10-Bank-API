import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Provider } from "react-redux";
import { Header } from './component/layout/Header';
import { Footer } from './component/layout/Footer';
import {MyRoute}  from './router/Router';
import { store } from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
    
   <div>
    <Header/> 
    <button onClick={logStore}> test</button>
    <Router>
    <MyRoute/>
    </Router>
    <Footer/></div>
  </React.StrictMode>
  </Provider>
);


function logStore () {
  store.dispatch({type : "connect"});
}