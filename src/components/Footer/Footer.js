import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";
const Footer = () => {
  let history = useHistory();
  const onClick = (path) => {
    history.push(`/${path}`);
  };


  return (
    <>
      <footer className="footer">
        <p className="footer-text">RS Scool 2020q1</p>
        <button className="footer-button" onClick={() =>
          onClick("aboutUs")}>About Us </button>
      </footer>
    </>
  );

};
export default Footer;