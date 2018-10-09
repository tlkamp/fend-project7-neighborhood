import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './GoogleMap.css';
import InfoWindow from './InfoWindow';

class GoogleMap extends Component {
  // TODO: Determine if necessary to bind 'this'
  constructor(props) {
    super(props);
    this.onMapsApiLoaded.bind(this);
    this.createInfoWindow.bind(this);
  }

  // From the very helpful guide: http://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/
  createInfoWindow(map, location) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="info-window">div?</div>',
      position: { lat: location.coordinates.lat, lng: location.coordinates.lng }
    });

    infoWindow.addListener('domready', event => {
      ReactDOM.render(<InfoWindow location={location} />, document.getElementById('info-window'));
    });

    infoWindow.open(map);
  }

  renderMarkers(map, markerData) {
    markerData.forEach(element => {
      let marker = new window.google.maps.Marker({
        position: element.coordinates,
        map,
        title: element.name
      });
      marker.addListener('click', event => {
        this.createInfoWindow(map, element);
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