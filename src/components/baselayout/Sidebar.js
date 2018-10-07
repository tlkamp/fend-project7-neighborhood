import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <InputGroup>
          <Input className="search-bar" placeholder="search" />
        </InputGroup>
        <div>
          <ul className="location-list">
            {this.props.locations.map(location => (
              <li className="location-list-item" key={location.name}>{location.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;