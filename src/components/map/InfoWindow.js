import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './InfoWindow.css';

class InfoWindow extends Component {

  render() {
    return (
      <div className="info-window">
        <Card>
          <CardImg top src={this.props.location.photoUrl} alt={this.props.location.name} />
          <CardBody>
            <CardTitle>{this.props.location.name}</CardTitle>
            <CardText>{this.props.location.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default InfoWindow;