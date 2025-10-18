import React, { Component } from "react";
import Scramble from "./Scramble";
import Controls from "./Controls";

class Timer extends Component {
  render() {
    return (
      <div>
        <Scramble />
        <h1>0.00</h1>
        <Controls />
      </div>
    );
  }
}

export default Timer;
