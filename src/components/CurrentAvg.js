import React, { Component } from "react";

class CurrentAvg extends Component {
  render() {
    const { av1, av2, av3, av4, av5 } = this.props;
    return (
      <div>
        <p>Current Ao5: </p>
        <ul>
          <li>{this.props.av1}</li>
          <li>{this.props.av2}</li>
          <li>{this.props.av3}</li>
          <li>{this.props.av4}</li>
          <li>{this.props.av5}</li>
        </ul>
      </div>
    );
  }
}

export default CurrentAvg;
