import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const rootElement = document.getElementById('root');
const  root = createRoot(rootElement);
root.render( <HashRouter><App tab="home" /></HashRouter>);






serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
