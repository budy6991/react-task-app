import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
    };
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    this.props.handleTasks({
      name: this.state.userInput,
      id,
    });
  };

  render() {
    const { userInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label></label>
          <input
            placeholder="Input a task"
            type="text"
            onChange={this.handleUserInput}
            value={userInput}
            className="rounded-md p-2 text-center"
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="m-1 rounded-full bg-zinc-700  text-white hover:bg-white hover:text-black hover:shadow-lg p-2 m-4 items-center"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default UserInput;
