import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const isNulValue = 0;
    return (
      <div>
        <span>{this.state.count}</span>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          +
        </button>
        <p>{isNulValue ?? "Not null"}</p>
      </div>
    );
  }
}
