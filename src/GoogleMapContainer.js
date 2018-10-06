import React, { Component } from 'react';
import { Container } from 'reactstrap';
import GoogleMapReact from 'google-map-react';

class GoogleMapContainer extends Component {
  render() {
    const mapContainerStyle = {
      width: '100%',
      height: '100%'
    }
    return (
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBiaMaHdJ9wp8EkO77je-iN4e2bS2DZDaU' }}
        defaultCenter={{ lat: 64.426811, lng: -14.623470 }}
        defaultZoom={10}
      >
      </GoogleMapReact>
    );
  }
}

export default GoogleMapContainer;