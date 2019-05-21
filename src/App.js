import React, { Component } from "react";
import Todo from "./todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestTodoName: "",
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTodos = this.getTodos.bind(this);
  }

  handleChange(event) {
    this.setState({ latestTodoName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.todos.push(this.state.latestTodoName);
    this.setState({
      latestTodoName: this.state.latestTodoName,
      todos: this.state.todos
    });
  }

  getTodos = () =>
    this.state.todos.map(() => (
      <Todo latestTodoName={this.state.latestTodoName} />
    ));

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <input type="text" placeholder="TODO" onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSubmit} value="add" />
        <div className="todos">{this.getTodos()}</div>
      </div>
    );
  }
}

export default App;
