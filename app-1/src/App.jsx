import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userInput: ""
  }

  showInput = (e) => {
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.showInput(e)} type="text"/>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
