import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import "./App.css";
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <nav>
              <Link to="/"><button>Home</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
              <Link to="/details"><button>Details</button></Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/details" component={Details} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
