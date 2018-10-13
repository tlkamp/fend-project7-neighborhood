import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/baselayout/Header.js';
import Sidebar from './components/baselayout/Sidebar.js';
import IcelandMap from './components/map/IcelandMap';
import escapeRegExp from 'escape-string-regexp';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  state = {
    // In lieu of hosting an express server, just hard code the locations.
    locations: [
      {
        name: 'Viking World Museum',
        coordinates: { lat: 63.9759731, lng: -22.5311803 }
      },
      {
        name: 'Grand Hótel Reykjavík',
        coordinates: { lat: 64.1423523, lng: -21.8937487 }
      },
      {
        name: 'Hallgrímskirkja',
        coordinates: { lat: 64.1417172, lng: -21.9288257 }
      },
      {
        name: 'Brú Guesthouse',
        coordinates: { lat: 63.6658746, lng: -20.0476 },
        searchterm: 'brú'
      },
      {
        name: 'Skógafoss',
        coordinates: { lat: 63.5320147, lng: -19.513565 }
      },
      {
        name: 'Sólheimasandur Plane Wreck',
        coordinates: { lat: 63.4590942, lng: -19.3669009 }
      },
      {
        name: 'Smi∂jan Brugghús',
        coordinates: { lat: 63.4172624, lng: -19.012781 }
      },
      {
        name: 'Vatnajökull Glacier',
        coordinates: { lat: 64.4094659, lng: -17.5283124 },
        searchterm: 'vatnajökull'
      },
      {
        name: 'Svartifoss',
        coordinates: { lat: 64.0275306, lng: -16.9774969 },
        searchterm: 'svartifoss'
      },
      {
        name: 'Hof 1 Hotel',
        coordinates: { lat: 63.9070156, lng: -16.708245 }
      },
      {
        name: 'Þingvellir National Park',
        coordinates: { lat: 64.2558307, lng: -21.1320502 },
        searchterm: 'silfra'
      }
    ]
  }

  handleQueryChange = (query) => {
    if (query !== '') {
      const match = new RegExp(escapeRegExp(query), 'i');
      this.setState({ showingLocations: this.state.locations.filter((location) => match.test(location.name)) });
    } else {
      this.setState({ showingLocations: this.state.locations })
    }
  }

  componentDidMount() {
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
    return (
      <Container fluid className="App">
        <Header />

        <Row>
          <Col sm="3">
            <Sidebar onQueryChange={this.handleQueryChange} locations={this.state.showingLocations || this.state.locations} />
          </Col>

          <Col>
            <IcelandMap locations={this.state.showingLocations || this.state.locations} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
