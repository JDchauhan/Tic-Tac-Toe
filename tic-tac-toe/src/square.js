import React from 'react';

import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick = {() => this.props.onClick({value: 'x'})} >
        { this.props.value }
      </button>
    );
  }
}
  
export default Square;