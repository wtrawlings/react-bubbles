import React from "react";
//import React, { useState } from "react";
//extra useState was throwing a warning error
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App /> 
    </Router>, rootElement);