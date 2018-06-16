import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    <CardBtn
      // style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      value={props.value}
    />
  </div>
);

export default Card;
