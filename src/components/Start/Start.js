import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./style.css";

const Start = () => {
  let history = useHistory();
  let location = useLocation();
  const onClick = () => {
    //  history.push("/game", { token: location.state.token });
  };


  return (
    <>
      <Header />
      <div className="game-container">
        <div className="game-card">
          <h2 className="game-name">SpeakIt</h2>
          <button className="game-start-button">Start game</button>
        </div>
        <div className="game-card">
          <h2 className="game-name">English puzzle</h2>
          <button className="game-start-button">Start game</button>
        </div>
        <div className="game-card">
          <h2 className="game-name">Savanna</h2>
          <button className="game-start-button">Start game</button>
        </div>
        <div className="game-card">
          <h2 className="game-name">Audio challenge</h2>
          <button className="game-start-button">Start game</button>
        </div>
        <div className="game-card">
          <h2 className="game-name">Sprint</h2>
          <button className="game-start-button">Start game</button>
        </div>
        <div className="game-card">
          <h2 className="game-name">My game</h2>
          <button className="game-start-button">Start game</button>
        </div>


      </div>
    </>
  );

};
export default Start;