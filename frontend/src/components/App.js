import React,{Component, useReducer, useState } from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  
import App2 from "./firstpage";
import Portfolio from "./secondpage";


export default class App extends Component {
    render(){
        return (
        <Router>
            <Switch>
                <Route exact path="/" component ={App2}></Route>
                <Route path= '/portfolio' component={Portfolio}></Route>
            </Switch>
        </Router>
          );
        };
    }
    
const appDiv = document.getElementById("app");
render(<App />, appDiv);
    



