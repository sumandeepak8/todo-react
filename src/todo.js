import React, { Component } from "react";
import "./App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      item: "",
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ item: event.target.value });
  }

  getItems() {
    let items = [];
    this.state.items.forEach(itemContent => {
      items.push(<li>{itemContent}</li>);
    });
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }

  addItem() {
    this.state.items.push(this.state.item);
    this.setState({ items: this.state.items });
  }

  getAddItemButton() {
    return (
      <div>
        <input placeholder="add your item" onChange={this.handleChange} />
        <button onClick={this.addItem}>add item</button>
      </div>
    );
  }

  render() {
    return (
      <div id={this.state.name} className="todo">
        <h3>{this.state.name}</h3>
        {this.getAddItemButton()}
        {this.getItems()}
      </div>
    );
  }
}

export default Todo;
