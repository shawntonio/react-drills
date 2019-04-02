import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  state = {
    username: "",
    password: ""
  }

  nameHandler = e => {
    this.setState({username: e})
  }
  passHandler = e => {
    this.setState({password: e})
  }

  login = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={e => this.nameHandler(e.target.value)} type="text"/>
        <input onChange={e => this.passHandler(e.target.value)} type="text"/>
        <button onClick={this.login} >Login</button>
      </div>
    );
  }
}

export default App;
