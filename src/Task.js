import React, { Component } from "react";
import "./App.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content
    };
  }

  render() {
    return (
      <div>
        <li>{this.state.content}</li>
      </div>
    );
  }
}

export default Item;
