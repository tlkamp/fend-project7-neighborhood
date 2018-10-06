import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/baselayout/Header.js';
import Sidebar from './components/baselayout/Sidebar.js';
import GoogleMap from './components/googlemap/GoogleMap.js';
import './App.css';

class App extends Component {
  state = {
    locations: []
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container fluid className="App">
        <Header />

        <Row>
          <Col sm="3">
            <Sidebar locations={this.state.locations} />
          </Col>

          <Col>
            <GoogleMap id={'map'} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
