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
          <label>User Input</label>
          <input
            type="text"
            onChange={this.handleUserInput}
            value={userInput}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserInput;
