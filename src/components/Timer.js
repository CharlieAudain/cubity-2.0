import React, { Component } from "react";
import Scramble from "./Scramble";
import Controls from "./Controls";

class Timer extends Component {
  render() {
    return (
      <div className = "container">
        <Scramble />
        <h1 className="timer">0.00</h1>
        <Controls />
      </div>
    );
  }
}

export default Timer;
