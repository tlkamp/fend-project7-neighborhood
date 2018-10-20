import React, { Component } from 'react';
import InfoWindow from './InfoWindow';
import './Marker.css';

class Marker extends Component {

  onKeyDown = (keyCode, location) => {
    // if the key is enter or space
    if (keyCode === 13 || keyCode === 32) {
      if (this.props.onMarkerClick) {
        this.props.onMarkerClick(location);
      }
    }
  }

  render() {
    return (
      <div tabIndex="0" onKeyDown={(event) => this.onKeyDown(event.keyCode, this.props.location)}>
        <svg onClick={() => this.props.onMarkerClick(this.props.location)} margin-top="-1000" margin-left="-1000" height="15" width="15">
          <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" fill={this.props.location.active ? 'blue' : 'red'} />
        </svg>

        {this.props.location.active ? (<InfoWindow location={this.props.location} />) : null}
      </div>
    );
  }
}

export default Marker;