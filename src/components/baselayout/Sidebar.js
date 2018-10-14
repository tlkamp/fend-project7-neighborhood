import React, { Component } from 'react';
import { InputGroup, Input, Collapse, Button } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {

  state = {
    query: '',
    showHide: 'Hide',
    collapse: false
  }

  toggleList = () => {
    this.setState({
      collapse: !this.state.collapse,
      showHide: !this.state.collapse ? 'Show' : 'Hide'
    });
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
          <Button size="sm" outline color="secondary" onClick={this.toggleList}>{this.state.showHide}</Button>
        </InputGroup>
        <Collapse isOpen={!this.state.collapse}>
          <ul className="location-list">
            {this.props.locations.map(location => (
              <li className="location-list-item" key={location.name}>{location.name}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default Sidebar;