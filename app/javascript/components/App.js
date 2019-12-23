import React, {Component} from 'react';

import Game from './Game.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar.js'


class App extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Navbar/>
            {console.log(this.props.highScores)}
            <br/><br/>
            <Game highScores={this.props.highScores}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
