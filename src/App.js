import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import logo from './logo.svg';
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

          {/* List Column */}
          <Col xs="3">
            <Sidebar locations={this.state.locations} />
          </Col>

          {/* Map Column */}
          <Col>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
