import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Cubity</a>
            </li>
            <li>
              <a href="#">Timer</a>
            </li>
            <li>
              <a href="#">Solves</a>
            </li>
            <li>
              <a href="#">Statistics</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
                <a href="#">Log Out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
