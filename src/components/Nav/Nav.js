import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="Nav">
    <div className="title">{props.children}</div>
    <div className="scores">
      <strong>Score:</strong> {props.score}  |  <strong>Top Score: </strong> {props.topScore}
    </div>
  </div>
);

export default Nav;
