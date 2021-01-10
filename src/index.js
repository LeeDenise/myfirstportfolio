import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import "xp.css/dist/XP.css";
import {BrowserRouter as Router} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
