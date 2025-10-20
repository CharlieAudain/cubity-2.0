import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrentAvg extends Component {
  static propTypes = {
    av1: PropTypes.string.isRequired,
    av2: PropTypes.string.isRequired,
    av3: PropTypes.string.isRequired,
    av4: PropTypes.string.isRequired,
    av5: PropTypes.string.isRequired,
  };

  static defaultProps = {
    av1: "-",
    av2: "-",
    av3: "-",
    av4: "-",
    av5: "-",
  };
  render() {
    const { av1, av2, av3, av4, av5 } = this.props;
    return (
      <div>
        <p>Current Ao5: </p>
        <ul>
          <li>{av1}</li>
          <li>{av2}</li>
          <li>{av3}</li>
          <li>{av4}</li>
          <li>{av5}</li>
        </ul>
      </div>
    );
  }
}

export default CurrentAvg;
