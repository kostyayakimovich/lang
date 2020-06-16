import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
const Header = () => {
  let history = useHistory();
  const onClick = (path) => {
    history.push(`/${path}`);
  };
  const isSelect = (event) => {
    let valueSelect = event.target.value;
    if (valueSelect === "Select Game") history.push("/start");
    if (valueSelect === "SpeakIt") history.push("/speakIt");
    if (valueSelect === "English puzzle") history.push("/englishPuzzle");
    if (valueSelect === "Savanna") history.push("/savanna");
    if (valueSelect === "Audio challenge") history.push("/audioChallenge");
    if (valueSelect === "Sprint") history.push("/sprint");
    if (valueSelect === "My game") history.push("/myGame");
  };


  return (
    <>
      <header className="header">
        <h1 className="logo" onClick={() => onClick("start")}>RS Lang</h1>
        <nav className="navigation">
          <li className="styled-select-games">
            <select className="select" onChange={isSelect}>
              <option>Select Game</option>
              <option>SpeakIt</option>
              <option>English puzzle</option>
              <option>Savanna</option>
              <option>Audio challenge</option>
              <option>Sprint</option>
              <option>My game</option>
            </select>
          </li>
          <li className="menu-link" onClick={() =>
            onClick("vocabulary")}>vocabulary</li>
          <li className="menu-link" onClick={() =>
            onClick("statistic")}>statistic</li>
        </nav>
      </header>

    </>
  );

};
export default Header;