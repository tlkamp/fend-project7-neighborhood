import React, { Component } from 'react';
import { Container } from 'reactstrap';
import GoogleMapReact from 'google-map-react';

class GoogleMapContainer extends Component {
  render() {
    const mapContainerStyle = {
      width: '100%',
      height: '80vh'
    }
    return (
      <div style={mapContainerStyle}>
        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBiaMaHdJ9wp8EkO77je-iN4e2bS2DZDaU' }}
          defaultCenter={{ lat: 63.3382352, lng: -19.1209887 }}
          defaultZoom={7}>
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapContainer;