import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      people: []
    }
  }
  
  componentDidMount(){
    axios.get("https://swapi.co/api/people/").then(res => {
      this.setState({people: res.data.results})
      console.log(this.people)
    }).catch(err => console.log('err', err))
    
  }
  
  render() {
    let id = 1
    const {people} = this.state
    const person = people.map(person => (
      <h3 key={id++} >{person.name}</h3>
    ))
    return (
      <div className="App">
         {person}
      </div>
    );
  }
}

export default App;
