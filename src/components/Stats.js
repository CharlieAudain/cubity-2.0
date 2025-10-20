import React, { Component } from "react";
import PropTypes from "prop-types";

class Stats extends Component {
  static propTypes = {
    best: PropTypes.string.isRequired,
    tbest: PropTypes.string.isRequired,
    worst: PropTypes.string.isRequired,
    tworst: PropTypes.string.isRequired,
    ao12: PropTypes.string.isRequired,
    ao50: PropTypes.string.isRequired,
    a0100: PropTypes.string.isRequired,
    ao200: PropTypes.string.isRequired,
    ao500: PropTypes.string.isRequired,
    ao1000: PropTypes.string.isRequired,
  };
  static defaultProps = {
    best: "Do more solves!",
    tbest: "Do more solves!",
    worst: "Do more solves!",
    tworst: "Do more solves!",
    ao12: "Do more solves!",
    ao50: "Do more solves!",
    ao100: "Do more solves!",
    ao200: "Do more solves!",
    ao500: "Do more solves!",
    ao1000: "Do more solves!",
  };

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
