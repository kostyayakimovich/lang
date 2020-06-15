import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";
const Header = () => {
  let history = useHistory();
  let location = useLocation();
  const onClick = () => {
    //  history.push("/game", { token: location.state.token });
  };


  return (
    <>
      <header className="header">
        <h1 className="logo">RS Lang</h1>
        <nav className="navigation">
          <li className="styled-select-games">
            <select className="level">
              <option>Select Game</option>
              <option>SpeakIt</option>
              <option>English puzzle</option>
              <option>Savanna</option>
              <option>Audio challenge</option>
              <option>Sprint</option>
              <option>My game</option>
            </select>
          </li>
          <li className="menu-link">vocabulary</li>
          <li className="menu-link" >statistic</li>
        </nav>
      </header>

    </>
  );

};
export default Header;