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
     

        <Route path="/yyuuttoonngg.github.io/colorball5o/rules" render={() => <Rules />} />
        <Route path="/" render={() => <Game />} />
      </div>
    );
  }
}

export default App;
