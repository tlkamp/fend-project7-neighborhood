import React, { Component } from 'react';
import './GoogleMap.css';

class GoogleMap extends Component {
  // TODO: Determine if necessary to bind 'this'
  constructor(props) {
    super(props);
    this.onMapsApiLoaded.bind(this);
  }

  renderMarkers(map, markerData) {
    markerData.forEach(element => {
      new window.google.maps.Marker({
        position: element.coordinates,
        map,
        title: element.name
      });
    });
  }

  onMapsApiLoaded() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options || { zoom: 7, center: { lat: 64.963051, lng: -19.020836 } });
    this.renderMarkers(map, this.props.locations)
  }

  componentDidMount() {
    // Lazy-load the maps API
    if (!window.google) {
      let googleMapsLoadScript = document.createElement('script');
      googleMapsLoadScript.src = 'https://maps.google.com/maps/api/js?key=AIzaSyBiaMaHdJ9wp8EkO77je-iN4e2bS2DZDaU';

      let scriptTags = document.getElementsByTagName('script')[0];
      scriptTags.parentNode.insertBefore(googleMapsLoadScript, scriptTags);

      googleMapsLoadScript.addEventListener('load', (event) => {
        this.onMapsApiLoaded();
      });
    } else {
      this.onMapsApiLoaded();
    }
  }

  render() {
    return (
      // Render a div that will contain the map after the maps API loads
      <div className="map-container" id={this.props.id} />
    )
  }
}

export default GoogleMap;