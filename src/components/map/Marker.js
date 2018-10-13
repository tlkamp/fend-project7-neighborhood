import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <svg margin-top="-1000" margin-left="-1000" height="15" width="15">
        <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" fill={this.props.$hover ? "blue" : "red"} />
      </svg>
    );
  }
}

export default Marker;