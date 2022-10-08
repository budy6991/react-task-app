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
    event.preventDefault();
    this.props.handleTasks(this.state.userInput);
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
