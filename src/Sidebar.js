import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class Sidebar extends Component {
  render() {
    return (
      <sidebar>
        <InputGroup>
          <Input placeholder="location" />
        </InputGroup>
      </sidebar>
    );
  }
}

export default Sidebar;