import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './InfoWindow.css';

class InfoWindow extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardImg top src={this.props.location.imgUrl || 'https://via.placeholder.com/140x100'} />
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