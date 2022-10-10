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
    if (!this.state.tasks.length) {
      return (
        <div className="bg-red-400 flex justify-center rounded-md m-14 p-5 w-1/2">
          <UserInput handleTasks={this.handleTasks}></UserInput>
        </div>
      );
    } else
      return (
        <div className="h-1/2 w-1/2 p-5">
          <div className="bg-red-400 flex justify-center rounded-md m-10 p-5 ">
            <UserInput handleTasks={this.handleTasks}></UserInput>
          </div>
          <div className="w-full bg-transparent h-full overflow-scroll p-5 ">
            <DisplayTasks
              tasks={this.state.tasks}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      );
  }
}

export default Manager;
