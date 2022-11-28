
import './index.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

//import { App } from './App'




//import { createRoot } from 'react-dom/client';
import App from './App';
//import {Provider} from 'react-redux';
import {store} from "./store";


//import reportWebVitals from './reportWebVitals';


//action = {type: "", payload: "?" }





//const root = ReactDOM.createRoot(document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


//#reportWebVitals();
