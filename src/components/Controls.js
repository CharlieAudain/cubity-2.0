import React, { Component } from "react";
import "../App.css";
class Controls extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="btn removeButton">X</button>
        <button className="btn penaltyButton">+2</button>
        <button className="btn dnfButton">DNF</button>
      </div>
    );
  }
}

export default Controls;
