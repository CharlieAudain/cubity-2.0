import React, { Component } from "react";
import PropTypes from "prop-types";

class Tips extends Component {
  static propTypes = {
    tip: PropTypes.string.isRequired,
  };

  static defaultProps = {
    tip: "Use Spacebar to control the timer!",
  };
  render() {
    const { tip } = this.props;
    return (
      <div className="tips">
        <h3>{tip}</h3>
      </div>
    );
  }
}

export default Tips;
