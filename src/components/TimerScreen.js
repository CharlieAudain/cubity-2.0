import React, { Component } from "react";
import Stats from "./Stats";
import Timer from "./Timer";
import CurrentAvg from "./CurrentAvg";

class TimerScreen extends Component {
  render() {
    return (
      <div className="timerScreen">
        <Stats />
        <Timer />
        <CurrentAvg />
      </div>
    );
  }
}

export default TimerScreen;
