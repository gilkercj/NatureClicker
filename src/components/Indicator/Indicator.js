import React from "react";
import "./Indicator.css";

const Indicator = props => (
    <div>
        <h2 style={{color: props.style}}> {props.info} </h2>
    </div>
);

export default Indicator;
