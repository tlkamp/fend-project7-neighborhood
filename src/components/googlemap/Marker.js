import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <svg height="35" width="35">
        <circle cx="17.5" cy="17.5" r="7.5" stroke="white" stroke-width="2" fill="red" />
      </svg>
    );
  }
}

export default Marker;