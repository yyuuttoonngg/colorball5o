import React, { Component } from 'react';
import './App.css';
import Game from './Game'
import './Stars.css';
import Rules from './Rules';
import { Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Route exact path="/" render={() => <Game />} />
            <Route path="/rules" render={() => <Rules />} />
      </div>
    );
  }
}

export default App;
