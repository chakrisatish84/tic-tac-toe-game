import React, { Component } from 'react';
import logo from './logo.svg';
import './Game.css';
import Board from './Components/Board'

class Game extends Component {
  render() {
    return (
     <div className="game">
       <div className="game-board">
         <Board />
       </div>
     </div>
    );
  }
}

export default Game;
