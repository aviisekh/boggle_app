import React from "react"
import PropTypes from "prop-types"
import Board from './Board.js'
import FlareGun from './FlareGun.js'
import HallOfFame from './HallOfFame.js'
import Timer from './Timer.js'
import ScoreBoard from './ScoreBoard.js'

class Game extends React.Component {
  state = {
    letters: [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']],
    isGameStarted: false,
    gameHasEnded: false
  };

  startGame = function() {
    console.log('game started');
  }

  render() {
    return (
      <div className="boggle">
          <div>
            <Timer/>
            <Board board={this.state.letters}/>
            {this.state.isGameStarted ? null : <FlareGun startGame={this.startGame}/>}
            <ScoreBoard/>
            <HallOfFame/>
          </div>
      </div>
    );
  }
}

export default Game
