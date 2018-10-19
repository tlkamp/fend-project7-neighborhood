import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/baselayout/Header.js';
import Sidebar from './components/baselayout/Sidebar.js';
import IcelandMap from './components/map/IcelandMap';
import escapeRegExp from 'escape-string-regexp';
import './App.css';

class App extends Component {

  state = {
    query: '',
    // In lieu of hosting an express server, just hard code the locations.
    locations: [
      {
        name: 'Viking World Museum',
        coordinates: { lat: 63.9759731, lng: -22.5311803 },
        photoid: ''
      },
      {
        name: 'Hallgrímskirkja',
        coordinates: { lat: 64.1417172, lng: -21.9288257 },
        photoid: ''
      },
      {
        name: 'Brú Guesthouse',
        coordinates: { lat: 63.6658746, lng: -20.0476 },
        searchterm: 'brú',
        photoid: ''
      },
      {
        name: 'Skógafoss',
        coordinates: { lat: 63.5320147, lng: -19.513565 },
        photoid: ''
      },
      {
        name: 'Sólheimasandur Plane Wreck',
        coordinates: { lat: 63.4590942, lng: -19.3669009 },
        photoid: ''
      },
      {
        name: 'Vatnajökull Glacier',
        coordinates: { lat: 64.4094659, lng: -17.5283124 },
        searchterm: 'vatnajökull',
        photoid: ''
      },
      {
        name: 'Svartifoss',
        coordinates: { lat: 64.0275306, lng: -16.9774969 },
        searchterm: 'svartifoss',
        photoid: 'lvih8Xe8jFc',
      },
      {
        name: 'Þingvellir National Park',
        coordinates: { lat: 64.2558307, lng: -21.1320502 },
        searchterm: 'silfra',
        photoid: ''
      }
    ]
  }

  handleQueryChange = (query) => {
    this.setState({ query })
  }

  handleLocationSelect = (locationName) => {
    console.log('handling location select')
    const locationsCopy = JSON.parse(JSON.stringify(this.state.locations));
    locationsCopy.forEach(location => {
      location.active = location.name === locationName && !location.active;
    });
    this.setState({ locations: locationsCopy });
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
        }).then(response => response.json())
          .then(result => {
            location.photoUrl = result.urls.small;
          });
      }
    });

    this.setState({ locations: locationsCopy })
    // let updatedLocations = [];
    // this.state.locations.forEach(location => {
    //   let url = `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURI(location.searchterm || location.name)}`;
    //   console.log(url)
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data.query.pages)
    //     })
    // });
  }

  render() {
    const match = new RegExp(escapeRegExp(this.state.query), 'i');
    const locationsToRender = this.state.locations.filter(location => match.test(location.name));

    return (
      <Container fluid className="App">
        <Header />

        <Row>
          <Col sm="3">
            <Sidebar onQueryChange={this.handleQueryChange}
              onLocationClick={this.handleLocationSelect}
              locations={locationsToRender}
            />
          </Col>

          <Col>
            <IcelandMap
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
