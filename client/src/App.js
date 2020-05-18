import React from "react";
//import React, { useState } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <div className="App">
        
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubblepage" component={BubblePage} />
        </Switch>
      </div>
  );
}

export default App;
