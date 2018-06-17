import React from 'react';

import Square from './square.js';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    var cell = [];
    var rows = [];
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        cell.push(
          <div className="board-cell" key = {(3 * i) + j} >
            {this.renderSquare((3 * i) + j)}
          </div>
        )
      }
      rows.push(<div className="board-row" key={i}>{ cell }</div>)
      cell = [];
    }
    
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default Board;