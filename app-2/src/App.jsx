import React, { Component } from "react";
import "./App.css";
import List from "./components.jsx/List";

class App extends Component {
  state = {
    listArr: ["TX", "VA", "LA", "AZ", "CA", "NV", "ID", "WY", "GA", "NC"]
  }
  
  render() {

    const list = this.state.listArr.map((element, i) => {
      return <List element={element} key={i}/>
    }) 

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
