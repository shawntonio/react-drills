import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";


class App extends Component {
  
  state = {
    taskArr: [],
  }

  adder = (task) => {
    const newArr = [...this.state.taskArr, task]
		this.setState({taskArr: newArr})
	}
  
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask adder={this.adder} />
        <List task={this.state.taskArr}/>
      </div>
    );
  }
}

export default App;
