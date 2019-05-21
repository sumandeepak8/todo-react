import React, { Component } from "react";
import "./App.css";
import Task from "./Task";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.latestTodoName,
      task: "",
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  tasks = () => (
    <ul>
      {this.state.tasks.map(task => (
        <Task content={task} />
      ))}
    </ul>
  );

  addTask() {
    this.state.tasks.push(this.state.task);
    this.setState({ tasks: this.state.tasks });
  }

  addItemDiv() {
    return (
      <div>
        <input placeholder="add your task" onChange={this.handleChange} />
        <button onClick={this.addTask}>add task</button>
      </div>
    );
  }

  render() {
    return (
      <div id={this.state.name} className="todo">
        <h3>{this.state.name}</h3>
        {this.addItemDiv()}
        {this.tasks()}
      </div>
    );
  }
}

export default Todo;
