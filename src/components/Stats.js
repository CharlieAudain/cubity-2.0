import React, { Component } from "react";

class Stats extends Component {
  render() {
    const {
      best,
      tbest,
      worst,
      tworst,
      ao12,
      ao50,
      ao100,
      ao200,
      ao500,
      ao1000,
    } = this.props;
    return (
      <div>
        <ul>
          <li>Best: {best}</li>
          <li>Today's Best: {tbest}</li>
          <li>Worst: {worst}</li>
          <li>Today's Worst: {tworst}</li>
          <li>Ao12: {ao12}</li>
          <li>Ao50: {ao50}</li>
          <li>Ao100: {ao100}</li>
          <li>Ao200: {ao200}</li>
          <li>Ao500: {ao500}</li>
          <li>Ao1000: {ao1000}</li>
        </ul>
      </div>
    );
  }
}

export default Stats;
