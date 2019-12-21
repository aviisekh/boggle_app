import React from "react"
import PropTypes from "prop-types"
import Board from './Board.js'
import FlareGun from './FlareGun.js'
import HallOfFame from './HallOfFame.js'
import Timer from './Timer.js'
import ScoreBoard from './ScoreBoard.js'

const BASE_URL = "http://localhost:3000"


class Game extends React.Component {
  state = {
    gameId: '',
    tiles: [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']],
    isGameStarted: false,
    isGameEnded: false,
    remainingTime: undefined
  };

  startTimer = () => {
    console.log("startTimer");
    var intervalId = setInterval(()=>{
      console.log(this.state.remainingTime);
      if (this.state.remainingTime > 0) {
        this.setState({ remainingTime: this.state.remainingTime -1 });
      } else {
        this.endGame()
      }
    }, 1000);
    this.setState({intervalId: intervalId});
  };

  endGame =() => {
    clearInterval(this.state.intervalId);
    this.setState({ isGameStarted: false, isGameEnded: true })
  }

  startGame = () => {
    fetch(BASE_URL + "/games", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.tiles);
        this.setState({
          tiles: json.tiles,
          remainingTime: json.remaining_time,
          isGameStarted: true,
          gameId: json.id
        }, () => {
          this.startTimer();
        });
      })
  };

  render() {
    return (
      <div className="boggle">
        <div>
          <Timer remainingTime={this.state.remainingTime}/>
          <Board board={this.state.tiles}/>
          {this.state.isGameStarted ? null : <FlareGun startGame={this.startGame}/>}
          <ScoreBoard/>
          <HallOfFame/>
        </div>
      </div>
    );
  }
}

export default Game
