import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PropTypes from "prop-types"
import Board from './Board.js'
import FlareGun from './FlareGun.js'
import HallOfFame from './HallOfFame.js'
import Timer from './Timer.js'
import ScoreBoard from './ScoreBoard.js'
import WordSubmitter from "./WordSubmitter";

const BASE_URL = "http://localhost:3000";
const ERROR_CLASS = 'border-danger';
const initialState = {
  gameId: '',
  tiles: [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']],
  isGameStarted: false,
  isGameEnded: false,
  remainingTime: undefined,
  inputWord: '',
  submitterClass: '',
  score: {eachScore: [], allScore: undefined}
};

class Game extends React.Component {
  state = initialState;

  startTimer = () => {
    var intervalId = setInterval(() => {
      if (this.state.remainingTime > 0) {
        this.setState({remainingTime: this.state.remainingTime - 1});
      } else {
        this.endGame()
      }
    }, 1000);
    this.setState({intervalId: intervalId});
  };

  endTimer = () => {
    clearInterval(this.state.intervalId);
  };

  endGame = () => {
    this.endTimer();
    this.setState({isGameStarted: false, isGameEnded: true})
  };


  resetBoard = () => {
    this.setState(initialState);
  };

  restartGame = () => {
    this.endGame();
    this.resetBoard();
    this.startGame();
  };


  startGame = () => {
    this.resetBoard();
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
          remainingTime: json.remainingTime,
          isGameStarted: true,
          gameId: json.id
        }, () => {
          this.startTimer();
        });
      })
  };

  handleWordInput = (e) => {
    this.setState({
      inputWord: e.target.value,
      submitterClass: ''
    });
  };

  submitWord = (e) => {
    e.preventDefault();
    console.log('submitting');
    fetch(BASE_URL + "/games/" + this.state.gameId + '/submit_word', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({word: e.target[0].value})
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        console.log(json.score);
        this.setState({
          score: json.score,
          inputWord: ''
        });
      })
      .catch(error => {
        this.setState({submitterClass: ERROR_CLASS});
      })
  };

  render() {
    return (
      <div className="game container">
        <div className="row">
          <div className="col">
            {this.state.remainingTime ? <Timer remainingTime={this.state.remainingTime}/> : null}
            {this.state.score.allScore ? <ScoreBoard score={this.state.score}/> : null}
            {!this.state.isGameStarted && <FlareGun startGame={this.startGame} label="Start new game"/>}
          </div>
          <div className="col-6" align='center'>
            <div className="board-wrapper">
              <Board board={this.state.tiles}/>
              {this.state.isGameStarted &&
              <WordSubmitter inputWord={this.state.inputWord}
                             handleWordInput={this.handleWordInput}
                             submitWord={this.submitWord}
                             submitterClass={this.state.submitterClass}/>}
            </div>
          </div>
          <div className="col" align='center'>
            <HallOfFame/>
          </div>

        </div>
      </div>
    );
  }
}

export default Game
