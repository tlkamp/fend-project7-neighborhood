import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import Header from './components/baselayout/Header.js';
import Sidebar from './components/baselayout/Sidebar.js';
import IcelandMap from './components/map/IcelandMap';
import escapeRegExp from 'escape-string-regexp';
import './App.css';

class App extends Component {

  state = {
    alert: false,
    visible: false,
    query: '',
    mapCenter: '',
    // In lieu of hosting an express server, just hard code the locations.
    locations: [
      {
        name: 'Viking World Museum',
        coordinates: { lat: 63.9759731, lng: -22.5311803 },
        description: 'A museum detailing the viking history of Iceland. The main attraction is a full-sized replica of a viking longship.',
        photoid: 's-Dr_GcH6I4'
      },
      {
        name: 'Hallgrímskirkja',
        coordinates: { lat: 64.1417172, lng: -21.9288257 },
        description: `The largest church in Iceland, Hallgrímskirkja was designed after Iceland's iconic nature and took 41 years to build.`,
        photoid: 'qblOg8xe7cg'
      },
      {
        name: 'Brú Guesthouse',
        coordinates: { lat: 63.6658746, lng: -20.0476 },
        description: 'A tiny-house themed set of quaint accommodations along the southern coast of Iceland. The location is excellent for viewing the Northern Lights.',
        photoid: 'e4crvHuTSI4'
      },
      {
        name: 'Skógafoss',
        coordinates: { lat: 63.5320147, lng: -19.513565 },
        description: 'A waterfall along the southern coast of Iceland that features incredible views from the top (accessible by staircase) and a 13-mile hiking trail.',
        photoid: 'ik4KSBlC-7s'
      },
      {
        name: 'Sólheimasandur Plane Wreck',
        coordinates: { lat: 63.4590942, lng: -19.3669009 },
        description: `The remnants of a DC-3 naval plane which ran out of fuel and crashed on one of Iceland's many black sand beaches.`,
        photoid: 'KbIXcSH0240'
      },
      {
        name: 'Vatnajökull Glacier',
        coordinates: { lat: 64.4094659, lng: -17.5283124 },
        description: 'The largest glacier in Iceland, which covers approx. 9% of the country.',
        photoid: 'u5z7gSSFlng'
      },
      {
        name: 'Svartifoss',
        coordinates: { lat: 64.0275306, lng: -16.9774969 },
        description: `Svartifoss ('Black Falls') is a waterfall located in Iceland's Vatnajökull National Park. It is surrounded by basalt columns formed by lava.`,
        photoid: 'lvih8Xe8jFc',
      },
      {
        name: 'Þingvellir National Park',
        coordinates: { lat: 64.2558307, lng: -21.1320502 },
        description: 'A park which lies on the Mid-Atlantic Ridge, marking the boundary between the North American and Eurasian tectonic plates.',
        photoid: 'qoHEr1mbZ3g'
      }
    ]
  }

  onDismiss = () => {
    /*
      The user doesn't want to see the alert anymore,
      so hide it. But the promises didn't resolve, so
      keep alert = true
    */
    this.setState({ visible: false });
  }

  handleQueryChange = (query) => {
    this.setState({ query })
  }

  handleLocationSelect = (locationObj) => {
    const locationsCopy = JSON.parse(JSON.stringify(this.state.locations));
    locationsCopy.forEach(location => {
      location.active = location.name === locationObj.name && !location.active;
    });
    this.setState({ locations: locationsCopy, mapCenter: locationObj.coordinates });
  }

  componentDidMount() {
    const unsplashClient = 'bd51d15e794da625807ddcb09eb619db5f26e44f4a23ece2415657b20899c7aa';

    const locationsCopy = JSON.parse(JSON.stringify(this.state.locations));
    locationsCopy.forEach(location => {
      if (location.photoid) {
        fetch(`https://api.unsplash.com/photos/${location.photoid}/?w=140&h=100`, {
          headers: {
            'Authorization': `Client-ID ${unsplashClient}`
          }
        }).catch(error => {
          /*
            The connection has been lost. Show a dismissable alert
            and stop executing promises.
          */
          this.setState({ alert: true, visible: true });
          return;
        })
          .then(response => response.json())
          .then(result => {
            location.photoUrl = result.urls.small;
          });
      }
    });
    /*
      If we get here, our promises resolved. Make sure no alert is showing
      if something happened to our connection before.
    */
    this.setState({ locations: locationsCopy, alert: false, visible: false });
  }

  render() {
    const match = new RegExp(escapeRegExp(this.state.query), 'i');
    const locationsToRender = this.state.locations.filter(location => match.test(location.name));

    return (
      <Container fluid className="App">
        <Header />
        <Alert color="warning" isOpen={this.state.alert && this.state.visible} toggle={this.onDismiss}>
          You are offline.
        </Alert>
        <Row className="row-flex">
          <Col md="3">
            <Sidebar onQueryChange={this.handleQueryChange}
              onLocationClick={this.handleLocationSelect}
              locations={locationsToRender}
            />
          </Col>

          <Col className="map-container">
            <IcelandMap
              id="map"
              aria-role="application"
              center={this.state.mapCenter || undefined}
              onMarkerClick={this.handleLocationSelect}
              locations={locationsToRender}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
