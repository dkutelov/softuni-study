import { Component } from "react";
import Message from "./Message";
import refreshComponent from "./hoc/refreshComponent";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.name = "Dari";
    console.log("Footer constructor");
  }

  componentDidMount() {
    console.log("Footer componentDidMount");
  }

  render() {
    console.log("Footer render!");
    return (
      <div>
        Footer
        <Message text="All rights reserved &copy;" />
      </div>
    );
  }
}

export default refreshComponent(Footer);
