import "./TrafficLight.scss";

import React from "react";

export default class TrafficLight extends React.Component {
  state = {
    color: "red",
  };
  handleColorChange = (color) => {
    this.setState({ color: color });
  };

  render() {
    const { color } = this.state;
    return (
      <div className="traffic-light-container">
        <ul className="light-wrapper">
          <li className={color === "red" ? "light red-light" : "light"}></li>
          <li
            className={color === "yellow" ? "light yellow-light" : "light"}
          ></li>
          <li
            className={color === "green" ? "light green-light" : "light"}
          ></li>
        </ul>
        <div className="light-buttons-wrapper">
          <button
            className={color === "red" ? "disabled" : "red-btn"}
            onClick={() => this.handleColorChange("red")}
          >
            Switch to red
          </button>
          <button
            onClick={() => this.handleColorChange("yellow")}
            className={color === "yellow" ? " disabled" : "yellow-btn"}
          >
            Switch to yellow
          </button>
          <button
            className={color === "green" ? " disabled" : "green-btn"}
            onClick={() => this.handleColorChange("green")}
          >
            Switch to green
          </button>
        </div>
      </div>
    );
  }
}
