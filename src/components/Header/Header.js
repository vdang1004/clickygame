import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="caption">DO NOT click on the same card twice</div>
    <div className="scores">
      <strong>Score:</strong> {props.score}  |  <strong>Top Score: </strong> {props.topScore}
    </div>
  </div>
);

export default Header;
