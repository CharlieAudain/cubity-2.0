import React, { Component } from "react";
import "../App.css";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
              <a href="#">Cubity</a>
          <ul>
           
           
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
