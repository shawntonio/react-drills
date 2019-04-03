import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image"

class App extends Component {
  state = {
    image: "http://www.vitamin-ha.com/wp-content/uploads/2013/08/Random-Funny-Pictures-10.jpg"
  }
  
  render() {
    return (
      <div className="App">
        <Image source={this.state.image}/>
      </div>
    );
  }
}

export default App;
