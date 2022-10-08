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

  render() {
    return (
      <div className="bg-green-300 w-1/2">
        <UserInput handleTasks={this.handleTasks}></UserInput>
        <DisplayTasks
          tasks={this.state.tasks}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default Manager;