import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  state = {
    foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    userInput: ""
  }
  
  // filterFood = input => {
  //   const newFoods = this.state.foods.filter(food => food.startsWith(input))
  //   this.setState({foods: newFoods})
  // }

  inputHandler = (input) => {
    this.setState({userInput: input})
  }

  render() {

    const displayFood = this.state.foods.filter(food => food.includes(this.state.userInput)).map((food, i) => <h2 key={i} >{food}</h2>)

    return (
      <div className="App">
        <input onChange={(e) => this.inputHandler(e.target.value)} type="text"/>
        {displayFood}
      </div>
    );
  }
}

export default App;
