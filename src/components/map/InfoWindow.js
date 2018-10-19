import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './InfoWindow.css';

class InfoWindow extends Component {

  render() {
    return (
      <div className="info-window">
        <Card>
          <CardImg top src={this.props.location.photoUrl || 'https://via.placeholder.com/140x100'} alt={this.props.location.name} />
          <CardBody>
            <CardTitle>{this.props.location.name}</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>{this.props.location.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default InfoWindow;