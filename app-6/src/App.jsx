import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
  
  state = {
    todoArr: [],
    userInput: ""
  }

  inputHandler = (e) => {
    this.setState({userInput: e})
  }

  addTodo = () => {
    const newTodo = [...this.state.todoArr, this.state.userInput]
    this.setState({todoArr: newTodo})
  }
  
  render() {

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e) => this.inputHandler(e.target.value)} type="text"/>
        <button onClick={() => this.addTodo()}>Add</button>
        <Todo list={this.state.todoArr}/>
      </div>
    );
  }
}

export default App;
