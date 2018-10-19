import React, { Component } from 'react';
import InfoWindow from './InfoWindow';
import './Marker.css';

class Marker extends Component {

  onClick = () => {
    this.setState((previousState) => {
      return { infoWindowShowing: !previousState.infoWindowShowing }
    });
  }

  render() {
    return (
      <div>
        <svg onClick={() => this.props.onMarkerClick(this.props.location.name)} margin-top="-1000" margin-left="-1000" height="15" width="15">
          <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1" />
        </svg>

        {this.props.location.active ? (<InfoWindow location={this.props.location} />) : null}
      </div>
    );
  }
}

export default Marker;