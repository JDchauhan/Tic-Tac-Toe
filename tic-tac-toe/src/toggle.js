import React from 'react';

class Toggle extends React.Component {
      // }
  
    render() {
      return (
        <button onClick={this.props.onClick}>
            {this.props.isToggleOn ? "1 player" : "2 player" }
        </button>
      );
    }
  }

  export default Toggle;