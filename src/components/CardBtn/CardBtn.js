import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    value={props.value}
    {...props}
  >+</button>
);

export default CardBtn;
