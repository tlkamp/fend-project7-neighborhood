import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import './IcelandMap.css';

class IcelandMap extends Component {
  static defaultProps = {
    center: { lat: 64.963051, lng: -19.020836 },
    zoom: 7
  };

  render() {
    return (
      <GoogleMapReact className="map-container"
        center={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: 'AIzaSyBiaMaHdJ9wp8EkO77je-iN4e2bS2DZDaU', language: 'en' }}
      >
        {this.props.locations.map(location => (
          <Marker key={location.name} onMarkerClick={this.props.onMarkerClick} location={location} lat={location.coordinates.lat} lng={location.coordinates.lng} />
        ))}
      </GoogleMapReact>
    );
  }
}

export default IcelandMap;