import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class Sidebar extends Component {
  render() {
    return (
      <sidebar>
        <InputGroup>
          <Input placeholder="search" />
        </InputGroup>
        <div>
          <ul>
            {this.props.locations.map(location => (
              <li>Location: {location.name}</li>
            ))}
          </ul>
        </div>
      </sidebar>
    );
  }
}

export default Sidebar;