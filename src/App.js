import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import GoogleMap from './GoogleMap';
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
          <Col xs="3">
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
