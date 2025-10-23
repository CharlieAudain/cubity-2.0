import React, { Component } from "react";
import PropTypes from "prop-types";

function scrambleGen(length) {
  let gen = "";
  let last;
  let rng;
  let rng2;
  for (let i = 0; i < length; i++) {
    while (last == rng) {
      // make sure you dont get the same moves twice

      rng = Math.floor(Math.random() * (7 - 1) + 1);
    }

    switch (rng) {
      case 1:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "F";
        } else {
          gen += "F2";
        }
        break;
      case 2:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "B";
        } else {
          gen += "B2";
        }
        break;
      case 3:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "L";
        } else {
          gen += "L2";
        }
        break;
      case 4:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "R";
        } else {
          gen += "R2";
        }
        break;
      case 5:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "D";
        } else {
          gen += "D2";
        }
        break;
      case 6:
        rng2 = Math.floor(Math.random() * (3 - 1) + 1);
        if (rng2 == 1) {
          gen += "U";
        } else {
          gen += "U2";
        }
        break;
    }
    last = rng;
    gen += " ";
  }

  return gen;
}

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
