import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Alert } from 'reactstrap';
import './InfoWindow.css';

class InfoWindow extends Component {

  state = {
    url: undefined,
    error: false
  }

  componentDidMount() {
    const unsplashClient = 'bd51d15e794da625807ddcb09eb619db5f26e44f4a23ece2415657b20899c7aa';
    fetch(`https://api.unsplash.com/photos/${this.props.location.photoid}/?w=140&h=100`, {
      headers: {
        'Authorization': `Client-ID ${unsplashClient}`
      }
    }
    )
      .then(response => response.json())
      .then(data => this.setState({ url: data.urls.small }))
      .catch(error => { this.setState({ error: true }) });
  }

  render() {
    return (
      <div className="info-window">
        <Card>
          {this.state.error ? <Alert color="warning">This resource could not be loaded.</Alert> : <CardImg top src={this.state.url} alt={this.props.location.name} />}
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