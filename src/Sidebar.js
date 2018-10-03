import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class Sidebar extends Component {
  render() {
    return (
      <sidebar>
        <InputGroup>
          <Input placeholder="search" />
        </InputGroup>
      </sidebar>
    );
  }
}

export default Sidebar;