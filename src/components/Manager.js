import React, { Component } from "react";
import UserInput from "./UserInput";
import DisplayTasks from "./DisplayTasks";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  handleTasks = (task) => {
    this.setState({
      tasks: this.state.tasks.concat(task),
    });
  };

  handleRemove = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.id !== id;
      }),
    });
  };

  handleEdit = (input, id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.name = input;
        }
        return task;
      }),
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="bg-green-300 w-1/2">
        <UserInput handleTasks={this.handleTasks}></UserInput>
        <DisplayTasks
          tasks={this.state.tasks}
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default Manager;
