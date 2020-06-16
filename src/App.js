import React from "react";
import Registration from "./components/Registration";
import Start from "./components/Start";
import AboutUs from "./components/AboutUs";
import Vocabulary from "./components/Vocabulary";
import Statistic from "./components/Statistic";
import SpeakIt from "./components/SpeakIt";
import EnglishPuzzle from "./components/EnglishPuzzle";
import Savanna from "./components/Savanna";
import AudioChallenge from "./components/AudioChallenge";
import Sprint from "./components/Sprint";
import MyGame from "./components/MyGame";
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
          <Route path="/vocabulary">
            <Vocabulary />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/speakIt">
            <SpeakIt />
          </Route>
          <Route path="/englishPuzzle">
            <EnglishPuzzle />
          </Route>
          <Route path="/savanna">
            <Savanna />
          </Route>
          <Route path="/audioChallenge">
            <AudioChallenge />
          </Route>
          <Route path="/sprint">
            <Sprint />
          </Route>
          <Route path="/myGame">
            <MyGame />
          </Route>
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
