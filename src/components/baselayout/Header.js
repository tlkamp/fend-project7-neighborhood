import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {

  render() {
    return (
      <Row>
        <Col>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Iceland Vacation</NavbarBrand>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default Header;