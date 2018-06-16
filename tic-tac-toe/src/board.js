import React from 'react';

import Square from './square.js';

class Board extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(9).fill(null),
      isNextX: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if(squares[i]){
      return;
    }
    squares[i] = this.state.isNextX ? 'x': 'o';
    this.setState({
      squares: squares,
      isNextX: !this.state.isNextX
    });
  }

  renderSquare(i) {
    return <Square
      value = {this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: ' + (this.state.isNextX ? 'x' : 'o');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;