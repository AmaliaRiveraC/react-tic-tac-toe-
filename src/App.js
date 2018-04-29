import React, { Component } from 'react';
import './App.css';
import Announcement from './components/Announcement.jsx';
import ResetButton from './components/ResetButton.jsx';
import Tile from './components/Tile.jsx';
import uid from 'uid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: Array(9).fill(' '),
      /*gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],*/
      gameEnd: false,
      totalMoves: 1,
      turn: 'X',
      winner: null,
    }
    this.updateBoard = this.updateBoard.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  updateBoard(loc, turn) {

    this.setState(state => 
      (
        {
          turn: turn === 'X' ? 'O' : 'X',
          totalMoves: state.totalMoves += 1,
        }
      )
    );

    let winner = this.checkWinner(loc);
 
    if (winner === 'X') {
      this.setState({
        gameEnd: true,
        winnerLine: this.msgWinner('Ganaste X')
      })
    } else if(winner === 'O') {
      this.setState({
        gameEnd: true,
        winnerLine: this.msgWinner('Ganaste O')
      })
    } else if(winner === 'none'){
      this.setState({
        gameEnd: true,
        winnerLine: this.msgWinner('Ustedes perdieron')
      })
    }
  }
  
  

  msgWinner(str) {
    return (
      <div>
        <p>{str}</p>
      </div>
    )
  }

  reset() {
    this.setState({
      gameBoard: Array(9).fill(' '),
      gameEnd: false,
      totalMoves: 1,
      turn: 'X',
      winner: null,
      winnerLine: '',
    })
  }

  checkWinner(loc) {
    let winner = null;
    let currentGameBoard = this.state.gameBoard
    this.setState({gameBoard: currentGameBoard});
    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] +
    this.state.gameBoard[2];
    if (/XXX|OOO/.test(topRow)) {
      winner = this.state.turn;
      return winner;
    }
    let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] +
    this.state.gameBoard[5];
    if (/XXX|OOO/.test(middleRow)) {
      winner = this.state.turn;
      return winner;
    }
    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] +
    this.state.gameBoard[8];
    if (/XXX|OOO/.test(bottomRow)) {
      winner = this.state.turn;
      return winner;
    }
    let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] +
    this.state.gameBoard[6];
    if (/XXX|OOO/.test(leftCol)) {
      winner = this.state.turn;
      return winner;
    }
    let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] +
    this.state.gameBoard[7];
    if (/XXX|OOO/.test(middleCol)) {
      winner = this.state.turn;
      return winner;
    }
    let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] +
    this.state.gameBoard[8];
    if (/XXX|OOO/.test(rightCol)) {
      winner = this.state.turn;
      return winner;
    }
    let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] +
    this.state.gameBoard[8];
    if (/XXX|OOO/.test(leftDiag)) {
      winner = this.state.turn;
      return winner;
    }
    let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] +
    this.state.gameBoard[6];
    if (/XXX|OOO/.test(rightDiag)) {
      winner = this.state.turn;
      return winner;
    }
    let moves = this.state.gameBoard.join('').replace(/ /g, '');
    if (moves.length >= 9) {
      winner = 'none';
      return winner;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe React</h1>
          <Announcement gameEnd={this.state.gameEnd} winner={this.state.winnerLine} />
          <ResetButton reset={this.reset} />
            {this.state.gameBoard.map((value, i) => {
              return(
                <Tile
                style={"square"}
                key={uid()}
                loc={i}
                value={value}
                updateBoard={this.updateBoard}
                gameEnd={this.state.gameEnd}
                gameBoard={this.state.gameBoard}
                turn={this.state.turn} />
              )
            })}
         </div>
      </div>
    );
  }
}

export default App;
