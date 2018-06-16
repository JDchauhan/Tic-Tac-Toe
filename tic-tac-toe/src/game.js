import React from 'react';

import Board from './board.js';
import {calculateWinner} from './util.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      isNextX: true,
      stepCount: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepCount + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.isNextX ? 'x' : 'o';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      isNextX: !this.state.isNextX,
      stepCount: history.length,
    });
  }

  jumpTo(step){
    this.setState({
      stepCount: step,
      isNextX: (step % 2) === 0,
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepCount];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key = {move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.isNextX ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;
