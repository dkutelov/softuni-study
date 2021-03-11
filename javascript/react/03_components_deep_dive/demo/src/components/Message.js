import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "ABC Ltd",
    };
    console.log("Constructor of Message!");
  }

  componentDidMount() {
    console.log("Message componentDidMount");
    setTimeout(() => {
      //this.forceUpdate();
      this.setState({ company: "BCD Ltd" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Message componentDidUpdate");
  }

  render() {
    console.log("Message render!");
    return (
      <div>
        {this.props.text} {this.state.company}
      </div>
    );
  }
}
