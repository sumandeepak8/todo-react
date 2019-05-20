import React, { Component } from "react";
import Todo from "./todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTodos = this.getTodos.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.todos.push(this.state.name);
    this.setState({
      name: this.state.name,
      todos: this.state.todos
    });
  }

  getTodos() {
    let allTodos = [];
    this.state.todos.forEach(e => {
      let todo = <Todo name={this.state.name} />;
      allTodos.push(todo);
    });
    return allTodos;
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <input
          type="text"
          placeholder="type the name of TODO"
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.handleSubmit} value="add" />
        {this.getTodos()}
      </div>
    );
  }
}

export default App;
