import React, { Component } from "react";
import PropTypes from "prop-types";
class Scramble extends Component {
  static propTypes = {
    scramble: PropTypes.string.isRequired,
  };

  static defaultProps = {
    scramble: "R2 B R B2 R2 L D2 R2 L R L2 B U2 R2 U2 R2 B2 U F D",
  };
  render() {
    const { scramble } = this.props;

    return (
      <div>
        <h4 className="scramble">{scramble}</h4>
      </div>
    );
  }
}

export default Scramble;
