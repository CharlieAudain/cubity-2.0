import React, { Component } from "react";

class Tips extends Component {
  render() {
    const {tip} = this.props
    return (
      <div>
        <h4>{tip}</h4>
      </div>
    );
  }
}

export default Tips;
