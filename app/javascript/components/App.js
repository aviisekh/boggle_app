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
            <br/><br/>
            <Game/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
