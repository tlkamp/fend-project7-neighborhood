import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    if (this.props.onQueryChange) {
      this.props.onQueryChange(query);
    }
  }

  clearQuery = () => {
    this.setState({ query: '' });
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(event) => this.updateQuery(event.target.value)} className="search-bar" placeholder="search" />
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