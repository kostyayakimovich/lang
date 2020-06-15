import React from "react";
import Start from "./components/Start";
import Registration from "./components/Registration";
//import Game from "./components/Game";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="wrap">

        <Switch>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
