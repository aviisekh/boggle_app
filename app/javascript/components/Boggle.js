import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Route} from 'react-router-dom';
import Board from './Board.js'
import FlareGun from './FlareGun.js'
import HallOfFame from './HallOfFame.js'
import Timer from './Timer.js'
import ScoreBoard from './ScoreBoard.js'

class Boogle extends React.Component {
  render() {
    return (
      <div className="Boggle">
        <BrowserRouter>
          <div>
            <FlareGun/>
            <Timer/>
            <Board/>
            <ScoreBoard/>
            <HallOfFame/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Boogle
