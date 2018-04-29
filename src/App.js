import React, { Component } from 'react';
import './App.css';
import Announcement from './components/Announcement.jsx';
import ResetButton from './components/ResetButton.jsx';
import Tile from './components/Tile.jsx';

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
      totalMoves: 0,
      turn: 'X',
      winner: null,
    }
    this.updateBoard = this.updateBoard.bind(this);
    this.
  }
  
  updateBoard(loc, turn) {

    this.setState((state)=>
      (
        {
          turn: turn === 'X' ? 'O' : 'X',
          totalMoves: state.totalMoves += 1,
        }
      )
    );

    let winner = this.checkWinner();
 
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
      totalMoves: 0,
      turn: 'X',
      winner: null,
      winnerLine: '',
    })
  }

  checkWinner() {
    let winner = null;
    let moves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [3, 6, 0], [1, 4,7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let board = this.state.gameBoard;
    moves.forEach((item, i, array) => {
      if (board[array[i][0]] === board[array[i][1]] && board[array[i][1]] === board[array[i][2]]) {
        return winner = board[array[i][0]];
      }  else  if (this.state.totalMoves >= 9) {
        return winner = 'none';
      }
    });
    return winner;
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe React</h1>
          <Announcement gameEnd={this.state.gameEnd} winner={this.state.winnerLine} />
          <ResetButton reset={this.reset.bind(this)} />
       
        
        {this.state.gameBoard.map((value, i) => {
          return(
            <Tile
            style={"square"}
            key={i}
            loc={i}
            value={value}
            updateBoard={this.updateBoard.bind(this)}
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
