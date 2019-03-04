import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
        <Container className="d-flex h-100">
            <Row className="align-self-center w-100">
              <Col className="col-12 mx-auto">
                <h1 className="display-4">Project Hestia</h1>
                <p className="txt-light lead">
                    Project Hestia is a nation-wide initiative to help document and protect transient peoples in the United States. Our central, cloud-based service -- powered by MongoDB Atlas -- allows shelters around the nation to collectively maintain a comprehensive knowledge database of their patrons such that they may better help them. Additionally, we have developed a simple clip that can visually and audibly warn its wearer of approaching inclement weather such that they may reach a shelter or make other arrangements in time. Ultimately, our mission is simple: <i>no one should be forgotten</i>.
                </p>
                <Button className="btn-rounded"><FontAwesomeIcon icon="plus-circle" /> Register</Button>
                <p className="text-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']}/></a> <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a> <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']}/></a>
                </p>
              </Col>
            </Row>
        </Container>
    );
  }
}

export default Landing;
