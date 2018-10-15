import React, { Component } from 'react';
import InfoWindow from './InfoWindow';
import './Marker.css';

class Marker extends Component {
  state = {
    infoWindowShowing: false
  }

  onClick = () => {
    this.setState((previousState) => {
      return { infoWindowShowing: !previousState.infoWindowShowing }
    });
  }

  render() {
    return (
      <div>
        <svg onClick={this.onClick} margin-top="-1000" margin-left="-1000" height="15" width="15">
          <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" />
        </svg>

        {this.state.infoWindowShowing ? (<InfoWindow location={this.props.location} />) : ''}
      </div>
    );
  }
}

export default Marker;